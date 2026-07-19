# Adding New Content

All content is authored in [`/content`](../content) as typed TypeScript, validated, then seeded. General
loop for any change:

```bash
# edit files under content/
npm run content:validate     # catch broken references
npm run seed                 # reload into the DB (resets seed + demo data)
npm run dev
```

> The seeder **resets** content tables and demo users. It is for initial setup / demos. In production,
> a future admin UI (Phase 2) will edit the same tables in place.

Below, concrete examples based on the seeded shoulder content.

## A new source

`content/sources.ts` — add a `SourceSeed`. Use the lowest `reliabilityTier` number that fits (1 =
government/official). Never invent URLs/authors.

```ts
{ slug: "niams-shoulder", title: "Shoulder Problems", organization: "NIH/NIAMS",
  url: "https://www.niams.nih.gov/…", lastCheckedDate: "2026-07-19",
  sourceType: "gov_guideline", reliabilityTier: 1, license: "US Gov (public domain)" }
```

## A new body region

`content/anatomy.ts` — export a new `BodyRegionSeed` (with `bones`, `joints`, `muscles`) and add it to
`bodyRegions` in `content/index.ts`. Give it an `order` and region-level `citations`.

## A new muscle

Add a `MuscleSeed` to the region's `muscles[]`. Required: `slug`, `commonName`, `scientificName`,
`locationSimple`, `actions`, `beginnerExplanation`. Strongly recommended: `origin`, `insertion`,
`innervation`, `commonlyConfused`, `misconceptions`, `safetyInfo`, an `advancedExplanation`,
`assetSlugs`, and `citations`. Start at `status: "draft"`; raise to `source_checked` once cited.

## A new bone / joint

Add a `BoneSeed` / `JointSeed` to the region. Joints need a `jointType` (e.g. "hinge",
"ball-and-socket").

## A new movement

Add a `MovementSeed` to `movements` in `content/anatomy.ts`. Set `plane`, `axis`, and `oppositeSlug`
(create both directions of a pair).

## A new exercise

`content/exercises.ts` — add an `ExerciseSeed`. Reference muscles by slug in `primaryMuscles` /
`secondaryMuscles` / `stabilizerMuscles`, joints in `joints[]`, movements in `movements[]`. Include
`instructions` (string array), `cues`, `commonMistakes`, `regression`, `progression`, `whyItWorks`,
`benefitsWho`/`cautionWho`, `equipment`, and `citations`. Avoid universal "good/bad" claims.

## A new lesson

`content/lessons.ts` — add a `LessonSeed`. Set `moduleSlug` (must exist in `content/curriculum.ts`),
`prerequisiteSlugs`, `objectives`, `bodyMarkdown` (safe Markdown subset), optional `safetyNotes`, and
`citations`. Set `status: "source_checked"` only when every key claim is cited.

## A new quiz question

`content/quizzes.ts` — add a `QuestionSeed`. Link it to exactly one content item (`lessonSlug` /
`muscleSlug` / `exerciseSlug` / `bodyRegionSlug`) and optionally a `domainCode`. Provide an
`explanation`, `options` with one `isCorrect` (except `matching`), and per-option `rationale`. Keep
questions original and safe.

## A new certification domain

`content/curriculum.ts` — add a `CertificationDomainSeed` to a certification's `domains[]` (unique
`code`). Tag questions with the matching `domainCode`.

## A new visual asset

1. Create the SVG in `public/anatomy/` (or register a properly-licensed third-party image).
2. Add a `VisualAssetSeed` in `content/visual-assets.ts` with full license metadata + `altText`.
3. Reference it from content via `assetSlugs`. Confirm it shows on `/credits`.

## After adding content

Run `npm run content:validate` (must pass) and `npm run seed`, then verify the pages render and
citations display. Update `CHANGELOG.md` if it's a notable addition.
