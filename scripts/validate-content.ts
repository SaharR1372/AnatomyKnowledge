/**
 * Validates seed content BEFORE it touches the database (spec §24). Checks
 * referential integrity (no citation points at a missing source, no exercise
 * references a missing muscle, etc.) and flags content-quality issues such as a
 * published item without any citation.
 *
 * Exits non-zero if there are hard errors, so it can gate CI. Run: npm run content:validate
 */
import {
  sources, vocabulary, visualAssets, bodyRegions, movements,
  exercises, lessons, learningPaths, certifications, questions,
} from "../content";

const errors: string[] = [];
const warnings: string[] = [];

const sourceSlugs = new Set(sources.map((s) => s.slug));
const assetSlugs = new Set(visualAssets.map((a) => a.slug));
const muscleSlugs = new Set(bodyRegions.flatMap((r) => r.muscles.map((m) => m.slug)));
const jointSlugs = new Set(bodyRegions.flatMap((r) => r.joints.map((j) => j.slug)));
const regionSlugs = new Set(bodyRegions.map((r) => r.slug));
const movementSlugs = new Set(movements.map((m) => m.slug));
const lessonSlugs = new Set(lessons.map((l) => l.slug));
const exerciseSlugs = new Set(exercises.map((e) => e.slug));
const moduleSlugs = new Set(learningPaths.flatMap((p) => p.modules.map((m) => m.slug)));
const domainCodes = new Set(certifications.flatMap((c) => c.domains.map((d) => d.code)));

function checkCitations(label: string, cites?: { sourceSlug: string }[]) {
  for (const c of cites ?? []) {
    if (!sourceSlugs.has(c.sourceSlug)) errors.push(`${label}: citation references unknown source "${c.sourceSlug}"`);
  }
}

// Sources: unique slugs + sane reliability tier.
const seenSource = new Set<string>();
for (const s of sources) {
  if (seenSource.has(s.slug)) errors.push(`Duplicate source slug "${s.slug}"`);
  seenSource.add(s.slug);
  if (s.reliabilityTier < 1 || s.reliabilityTier > 6) warnings.push(`Source "${s.slug}" has unusual reliabilityTier ${s.reliabilityTier}`);
  if (!/^https?:\/\//.test(s.url)) errors.push(`Source "${s.slug}" has an invalid URL`);
}

// Assets: file path present.
for (const a of visualAssets) {
  if (!a.filePath) errors.push(`Asset "${a.slug}" has no filePath`);
  if (!a.altText) warnings.push(`Asset "${a.slug}" is missing alt text (accessibility)`);
}

// Regions / muscles.
for (const r of bodyRegions) {
  checkCitations(`region ${r.slug}`, r.citations);
  for (const m of r.muscles) {
    checkCitations(`muscle ${m.slug}`, m.citations);
    for (const s of m.assetSlugs ?? []) if (!assetSlugs.has(s)) errors.push(`muscle ${m.slug}: unknown asset "${s}"`);
    if ((m.status === "source_checked" || m.status === "expert_reviewed") && !(m.citations?.length))
      warnings.push(`muscle ${m.slug} is "${m.status}" but has no citation`);
  }
}

// Movements: opposite exists.
for (const mv of movements) if (mv.oppositeSlug && !movementSlugs.has(mv.oppositeSlug)) errors.push(`movement ${mv.slug}: unknown opposite "${mv.oppositeSlug}"`);

// Exercises.
for (const e of exercises) {
  checkCitations(`exercise ${e.slug}`, e.citations);
  for (const s of [...e.primaryMuscles, ...(e.secondaryMuscles ?? []), ...(e.stabilizerMuscles ?? [])])
    if (!muscleSlugs.has(s)) errors.push(`exercise ${e.slug}: unknown muscle "${s}"`);
  for (const j of e.joints ?? []) if (!jointSlugs.has(j.jointSlug)) errors.push(`exercise ${e.slug}: unknown joint "${j.jointSlug}"`);
  for (const m of e.movements ?? []) if (!movementSlugs.has(m)) errors.push(`exercise ${e.slug}: unknown movement "${m}"`);
  for (const s of e.assetSlugs ?? []) if (!assetSlugs.has(s)) errors.push(`exercise ${e.slug}: unknown asset "${s}"`);
  if (!e.primaryMuscles.length) errors.push(`exercise ${e.slug}: no primary muscles`);
}

// Lessons.
for (const l of lessons) {
  checkCitations(`lesson ${l.slug}`, l.citations);
  if (l.moduleSlug && !moduleSlugs.has(l.moduleSlug)) errors.push(`lesson ${l.slug}: unknown module "${l.moduleSlug}"`);
  if (l.bodyRegionSlug && !regionSlugs.has(l.bodyRegionSlug)) errors.push(`lesson ${l.slug}: unknown region "${l.bodyRegionSlug}"`);
  for (const p of l.prerequisiteSlugs ?? []) if (!lessonSlugs.has(p)) errors.push(`lesson ${l.slug}: unknown prerequisite "${p}"`);
  for (const s of l.assetSlugs ?? []) if (!assetSlugs.has(s)) errors.push(`lesson ${l.slug}: unknown asset "${s}"`);
  if (!l.objectives.length) warnings.push(`lesson ${l.slug}: no learning objectives`);
  if ((l.status === "source_checked" || l.status === "expert_reviewed") && !(l.citations?.length))
    warnings.push(`lesson ${l.slug} is "${l.status}" but has no citation`);
}

// Questions.
for (const [i, q] of questions.entries()) {
  const label = `question #${i + 1}`;
  checkCitations(label, q.citations);
  if (q.lessonSlug && !lessonSlugs.has(q.lessonSlug)) errors.push(`${label}: unknown lesson "${q.lessonSlug}"`);
  if (q.muscleSlug && !muscleSlugs.has(q.muscleSlug)) errors.push(`${label}: unknown muscle "${q.muscleSlug}"`);
  if (q.exerciseSlug && !exerciseSlugs.has(q.exerciseSlug)) errors.push(`${label}: unknown exercise "${q.exerciseSlug}"`);
  if (q.bodyRegionSlug && !regionSlugs.has(q.bodyRegionSlug)) errors.push(`${label}: unknown region "${q.bodyRegionSlug}"`);
  if (q.domainCode && !domainCodes.has(q.domainCode)) errors.push(`${label}: unknown domain "${q.domainCode}"`);
  const correct = q.options.filter((o) => o.isCorrect).length;
  if (q.type !== "matching" && correct !== 1) errors.push(`${label} (${q.type}): expected exactly 1 correct option, found ${correct}`);
  if (!q.explanation) errors.push(`${label}: missing explanation`);
}

console.log(`\nContent validation:`);
console.log(`  sources=${sources.length} vocab=${vocabulary.length} assets=${visualAssets.length} regions=${bodyRegions.length}`);
console.log(`  muscles=${muscleSlugs.size} movements=${movements.length} exercises=${exercises.length} lessons=${lessons.length} questions=${questions.length}`);

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log("  - " + w));
}
if (errors.length) {
  console.error(`\n✖ ${errors.length} error(s):`);
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}
console.log("\n✓ Content is valid.");
