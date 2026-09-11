#!/usr/bin/env node
/**
 * Builds the read-only static demo published to GitHub Pages.
 *
 * The full app is server-rendered: it reads an Auth.js session per request and
 * writes progress, bookmarks, and quiz results to a database. None of that can
 * exist in a static export. But the *content* — regions, muscles, exercises,
 * lessons, vocabulary, sources — is seeded data that Prisma can read at BUILD
 * time, so the content half of the app exports cleanly.
 *
 * Rather than scattering `if (DEMO)` through the app, this script assembles a
 * throwaway copy of the project in .demo-build/, lays the files in demo/overlay
 * over it, removes the routes that cannot be static, and builds that. The real
 * source tree is never modified.
 *
 * Usage:  node scripts/build-demo.mjs        -> .demo-build/out
 * Env:    BASE_PATH  (default "/AnatomyKnowledge")  the GitHub Pages subpath
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUILD = path.join(ROOT, ".demo-build");
const OVERLAY = path.join(ROOT, "demo", "overlay");
const BASE_PATH = process.env.BASE_PATH ?? "/AnatomyKnowledge";

const step = (msg) => console.log(`\n\x1b[36m▸ ${msg}\x1b[0m`);
const run = (cmd, args, env = {}, cwd = BUILD) =>
  execFileSync(cmd, args, { cwd, stdio: "inherit", env: { ...process.env, ...env } });

/** Replace `find` with `replace` in a build-dir file, failing loudly if the
 *  anchor has drifted — a silent no-op patch would ship a broken demo. */
function patch(relPath, find, replace) {
  const file = path.join(BUILD, relPath);
  const before = fs.readFileSync(file, "utf8");
  if (!before.includes(find)) {
    throw new Error(
      `Patch anchor not found in ${relPath}:\n  ${find}\n` +
        `The source has changed — update scripts/build-demo.mjs to match.`,
    );
  }
  fs.writeFileSync(file, before.replace(find, replace));
}

const append = (relPath, text) => fs.appendFileSync(path.join(BUILD, relPath), text);

// ---------------------------------------------------------------------------
step("Assembling a clean copy in .demo-build/");
fs.rmSync(BUILD, { recursive: true, force: true });
fs.mkdirSync(BUILD, { recursive: true });

for (const entry of [
  "src", "content", "public", "prisma", "package.json",
  "tailwind.config.ts", "postcss.config.mjs", "tsconfig.json",
]) {
  fs.cpSync(path.join(ROOT, entry), path.join(BUILD, entry), { recursive: true });
}
// next-env.d.ts is gitignored, so it is absent on a fresh CI checkout; Next
// regenerates it during the build. Copy it only if this tree happens to have one.
if (fs.existsSync(path.join(ROOT, "next-env.d.ts"))) {
  fs.cpSync(path.join(ROOT, "next-env.d.ts"), path.join(BUILD, "next-env.d.ts"));
}
// Reuse the installed dependencies instead of copying ~400MB of node_modules.
fs.symlinkSync(path.join(ROOT, "node_modules"), path.join(BUILD, "node_modules"), "dir");
// A stale dev database would be copied along with prisma/; start from scratch.
for (const f of fs.readdirSync(path.join(BUILD, "prisma"))) {
  if (f.endsWith(".db") || f.endsWith(".db-journal")) fs.rmSync(path.join(BUILD, "prisma", f));
}

// ---------------------------------------------------------------------------
step("Applying the demo overlay");
fs.cpSync(OVERLAY, BUILD, { recursive: true });

// Routes that cannot be statically exported at all:
//   api/*        — route handlers need a server
//   quiz/[scope] — grading is server-side, and the answer key must not ship
for (const dead of ["src/app/api", "src/app/quiz/[scope]"]) {
  fs.rmSync(path.join(BUILD, dead), { recursive: true, force: true });
}

// ---------------------------------------------------------------------------
step("Patching for a sub-path deployment");

// Raw <img> tags are not rewritten by basePath the way next/link and
// next/image are, so the asset path has to be prefixed by hand.
patch(
  "src/components/Citations.tsx",
  "src={asset.filePath}",
  'src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${asset.filePath}`}',
);

// Same for the PWA manifest link and the manifest's own internal URLs.
patch(
  "src/app/layout.tsx",
  'manifest: "/manifest.webmanifest",',
  "manifest: `${process.env.NEXT_PUBLIC_BASE_PATH ?? \"\"}/manifest.webmanifest`,",
);
const manifestPath = path.join(BUILD, "public/manifest.webmanifest");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
manifest.start_url = `${BASE_PATH}/`;
manifest.icons = manifest.icons.map((i) => ({ ...i, src: `${BASE_PATH}${i.src}` }));
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

// The hero's primary call to action is "create an account", which dead-ends in
// a read-only demo. Point it at the content instead.
patch(
  "src/app/page.tsx",
  '<LinkButton href="/register">Create your free account</LinkButton>',
  '<LinkButton href="/anatomy">Explore the anatomy library</LinkButton>',
);
patch(
  "src/app/page.tsx",
  "Preview lessons without an account. Sign up to save progress, notes, and quiz history.",
  "Browse every lesson, muscle, and exercise. Accounts, saved progress, and quizzes " +
    "live in the full app — see the GitHub link above.",
);

// Tell every visitor what they are looking at.
patch(
  "src/app/layout.tsx",
  'import { SiteNav } from "@/components/SiteNav";',
  'import { SiteNav } from "@/components/SiteNav";\nimport { DemoBanner } from "@/components/DemoNotice";',
);
patch(
  "src/app/layout.tsx",
  '<body className="min-h-screen">',
  '<body className="min-h-screen">\n        <DemoBanner />',
);

// ---------------------------------------------------------------------------
step("Enumerating dynamic routes for prerendering");

// `output: "export"` has no request-time rendering, so each [slug] route must
// declare its full set of pages up front. Every one of these files already
// imports `prisma`, and the seeded database is the source of truth.
const staticParams = {
  "src/app/anatomy/[slug]/page.tsx": "muscle",
  "src/app/exercises/[slug]/page.tsx": "exercise",
  "src/app/learn/[slug]/page.tsx": "lesson",
};
for (const [file, model] of Object.entries(staticParams)) {
  append(
    file,
    `
// Added by scripts/build-demo.mjs for the static export.
export const dynamicParams = false;
export async function generateStaticParams() {
  const rows = await prisma.${model}.findMany({ select: { slug: true } });
  return rows.map((r) => ({ slug: r.slug }));
}
`,
  );
}

// ---------------------------------------------------------------------------
step("Writing the export config");
fs.writeFileSync(
  path.join(BUILD, "next.config.mjs"),
  `/** @type {import('next').NextConfig} */
// Generated by scripts/build-demo.mjs — do not edit.
// Note: headers() from the real next.config.mjs is intentionally absent; a
// static host sends its own headers, and Next rejects headers() with "export".
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "${BASE_PATH}",
  // Emit out/anatomy/index.html rather than out/anatomy.html so the URLs
  // resolve on any static host, not just ones that guess the .html extension.
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: "${BASE_PATH}" },
};

export default nextConfig;
`,
);

// ---------------------------------------------------------------------------
step("Seeding a throwaway database with the curriculum");

// node_modules is shared with the real project, so the generated Prisma client
// is shared too — and it resolves a relative `file:./x.db` against the schema
// directory that was current when it was generated. Generating from inside
// .demo-build would therefore silently repoint the real project's client here
// and break `npm test`. So: generate from ROOT (the schema is identical), and
// address the throwaway database by absolute path.
const DATABASE_URL = `file:${path.join(BUILD, "prisma", "demo.db")}`;
const env = {
  DATABASE_URL,
  NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  AUTH_SECRET: "static-demo-build-only-never-used-for-any-session",
  AUTH_TRUST_HOST: "true",
  NEXT_TELEMETRY_DISABLED: "1",
};
run("npx", ["prisma", "generate"], env, ROOT);
run("npx", ["prisma", "db", "push", "--skip-generate"], env);
run("npx", ["tsx", "prisma/seed.ts"], env);

step("Building the static export");
run("npx", ["next", "build"], env);

// ---------------------------------------------------------------------------
step("Finishing the output");
const out = path.join(BUILD, "out");
// Without this, GitHub Pages runs the output through Jekyll, which silently
// drops Next's _next/ directory because the name starts with an underscore.
fs.writeFileSync(path.join(out, ".nojekyll"), "");
// The demo database is a build artifact; never publish it. (It lives outside
// out/ anyway, but leaving it behind would confuse a later rebuild.)
fs.rmSync(path.join(BUILD, "prisma", "demo.db"), { force: true });

const pages = fs
  .readdirSync(out, { recursive: true })
  .filter((f) => String(f).endsWith("index.html")).length;
console.log(`\n\x1b[32m✓ Static demo ready: ${path.relative(ROOT, out)} (${pages} pages)\x1b[0m`);
if (BASE_PATH) {
  console.log(`  Built for ${BASE_PATH}/ — to preview locally run:  npm run demo:preview`);
  console.log(`  (which rebuilds with BASE_PATH= so the links resolve at the site root)\n`);
} else {
  console.log(`  Preview it with:  npx serve ${path.relative(ROOT, out)} -l 3001\n`);
}
