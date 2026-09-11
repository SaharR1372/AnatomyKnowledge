# Deployment

There are two deployments, and they serve different purposes:

| | **Static demo** (GitHub Pages) | **Full app** (Vercel + Postgres) |
|---|---|---|
| URL | `https://<user>.github.io/AnatomyKnowledge/` | e.g. `https://<app>.vercel.app` |
| Browse all content | ✅ | ✅ |
| Flashcards | ✅ (client-side) | ✅ |
| Exercise search & filters | ✅ (client-side) | ✅ |
| Accounts, bookmarks, notes | ❌ | ✅ |
| Quizzes & spaced repetition | ❌ | ✅ |
| Cost / setup | free, zero config | free tier, needs a database |

The static demo is the right thing to link from a portfolio or CV. The full app
is the right thing to run locally or host when you actually want to *use* it.

---

## A. Static demo on GitHub Pages

`scripts/build-demo.mjs` exports the content half of the app as plain HTML.

### How it works

The app is server-rendered: it reads an Auth.js session on every request and
writes progress to a database. Neither can exist on a static host. But the
content — regions, muscles, exercises, lessons, vocabulary, sources — is seeded
data that **Prisma can read at build time**, so those pages export cleanly.

To avoid littering the app with `if (DEMO)` branches, the build script assembles
a throwaway copy of the project in `.demo-build/`, lays the files in
`demo/overlay/` over it, and builds *that*. The real source tree is never
touched. Specifically it:

1. copies `src/`, `content/`, `public/`, `prisma/` into `.demo-build/`;
2. overlays `demo/overlay/` — a `getCurrentUser()` that always returns `null`,
   inert no-op Server Action stubs, a nav without auth controls, a demo banner,
   a client-side exercise filter, and "not in this demo" pages for `/login`,
   `/register`, `/dashboard`, `/profile`, `/saved`, and `/quiz/*`;
3. deletes what cannot be static at all (`src/app/api/`, `src/app/quiz/[scope]/`);
4. patches raw `<img>` and manifest URLs for the sub-path deployment — these
   patches **fail the build loudly** if the source they anchor to has changed;
5. appends `generateStaticParams()` to the three `[slug]` routes;
6. seeds a throwaway SQLite database and runs `next build` with `output: "export"`.

### Build it

```bash
npm run demo:build      # -> .demo-build/out  (built for /AnatomyKnowledge/)
npm run demo:preview    # rebuild at the site root + serve on :3001
```

`BASE_PATH` controls the sub-path and defaults to `/AnatomyKnowledge`. It must
match the repository name, because Pages serves project sites from
`https://<user>.github.io/<repo>/`.

### Publish it

`.github/workflows/deploy-demo.yml` builds and deploys on every push to `main`.
Enable it once, in the repository settings:

> **Settings → Pages → Build and deployment → Source: GitHub Actions**

Then push to `main` (or run the workflow manually from the **Actions** tab). The
live URL appears in the workflow's `deploy` job and under Settings → Pages.

### If you rename the repository

The sub-path changes with it. The workflow already passes
`BASE_PATH: /${{ github.event.repository.name }}`, so it follows a rename
automatically — but update the default in `scripts/build-demo.mjs` and the
`REPO_URL` in `demo/overlay/src/components/DemoNotice.tsx`.

---

## B. Full app on Vercel

Recommended: **Vercel** (Next.js host) + a managed **PostgreSQL** (Neon or Supabase free tier). Both
have free tiers suitable for the MVP.

> Free-tier notes: Neon/Supabase free databases may pause on inactivity and have storage/row limits;
> Vercel's free "Hobby" tier is for non-commercial use and has usage limits. Fine for personal use and
> sharing with friends.

### 0. Switch Prisma to PostgreSQL

In `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"   // was "sqlite"
  url      = env("DATABASE_URL")
}
```

Adopt migrations before first deploy:

```bash
# with DATABASE_URL pointing at a Postgres dev/staging DB
npx prisma migrate dev --name init   # creates prisma/migrations/*
git add prisma/migrations && git commit -m "chore: add initial Postgres migration"
```

The schema uses only portable types (no SQLite-specific features), so it moves cleanly.

### Step-by-step

1. **Push to GitHub** — see [`github-guide.md`](github-guide.md).
2. **Create the production database** — create a Postgres project on Neon/Supabase; copy its
   connection string (include `?sslmode=require`).
3. **Connect the repo to Vercel** — "Add New… → Project", import the GitHub repo. Framework preset:
   Next.js (auto-detected).
4. **Configure environment variables** in Vercel → Settings → Environment Variables:
   - `DATABASE_URL` = your Postgres URL
   - `AUTH_SECRET` = `openssl rand -base64 32`
   - `NEXT_PUBLIC_APP_URL` = your deploy URL (e.g. `https://yourapp.vercel.app`)
   - `AUTH_TRUST_HOST` = `true`
5. **Run production migrations** — either add `prisma migrate deploy` to the build, or run once from
   your machine against the prod `DATABASE_URL`:
   ```bash
   DATABASE_URL="<prod url>" npx prisma migrate deploy
   ```
6. **Load safe seed content** — run the seeder against prod **once** (it resets seed/demo data):
   ```bash
   DATABASE_URL="<prod url>" npm run seed
   ```
   Consider removing/rotating the demo accounts for a public deployment.
7. **Deploy** — Vercel builds on push (`npm run build`). 
8. **Create the first admin** — either keep the seeded `admin@demo.local` (change its password) or set
   a real user's `role` to `admin` in the DB (`npx prisma studio` against prod, or a SQL update).
9. **Test registration & login** on the deploy URL.
10. **Test from a phone** — open the URL on your phone; optionally "Add to Home Screen" (PWA).
11. **Share the public URL** with friends — each creates their own account.
12. **View logs** — Vercel → Deployments → your deployment → Runtime/Build Logs.
13. **Redeploy after updates** — push to `main`; Vercel auto-builds. (Or use preview deployments from
    branches.)
14. **Custom domain (later)** — Vercel → Settings → Domains; add your domain and follow DNS steps;
    update `NEXT_PUBLIC_APP_URL`.
15. **Back up the database** — use the provider's backup/branching; or `pg_dump "$DATABASE_URL" >
    backup.sql`.
16. **Recover from a failed deploy** — Vercel → Deployments → pick the last good one → "Promote to
    Production" (instant rollback). Fix forward on a branch.

### Production-readiness checklist

- [ ] `provider = "postgresql"`; migrations committed and applied (`migrate deploy`).
- [ ] All required env vars set in the host (not in the repo); `AUTH_SECRET` is strong and unique.
- [ ] HTTPS enforced (default on Vercel).
- [ ] Demo accounts removed or their passwords changed for a public deploy.
- [ ] `npm run build`, `npm test`, `npm run typecheck`, and `npm run content:validate` all pass in CI.
- [ ] No secrets in git history; `.env*` gitignored.
- [ ] Security headers present (configured in `next.config.mjs`).
- [ ] Database backups configured; rollback procedure understood.
- [ ] Error monitoring (optional, Phase 2) configured if desired.

### What must never be exposed

DB credentials, `AUTH_SECRET`, other users' data, admin features to learners, debug info, dev-only
endpoints, or private source materials. Do not use local/ephemeral storage for data that must persist —
use the managed database (and object storage for uploads in Phase 2).
