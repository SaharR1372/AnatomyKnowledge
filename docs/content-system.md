# Content System

## How content is stored

Content has two synchronized representations:

1. **Seed source of truth** — typed TypeScript in [`/content`](../content), version-controlled and
   reviewable in pull requests. Shapes are defined in `content/types.ts`.
2. **Database** — the app reads from here. `prisma/seed.ts` imports the seed after
   `scripts/validate-content.ts` checks it.

Update flow: **edit `/content` → `npm run content:validate` → `npm run seed`**. No application code
changes are needed to add or edit lessons, muscles, exercises, or quizzes.

```
content/
├── types.ts          # typed shapes for all seed content
├── sources.ts        # the source registry (authoritative references)
├── vocabulary.ts     # technical terms + plain-English support
├── visual-assets.ts  # image/SVG metadata + licenses
├── anatomy.ts        # body region(s): bones, joints, muscles, + movements
├── exercises.ts      # exercise library
├── lessons.ts        # lessons (markdown body, objectives, prerequisites, citations)
├── curriculum.ts     # learning path/modules + certification domains
├── quizzes.ts        # original quiz questions
└── index.ts          # single import surface used by the seeder + validator
```

## How lessons are structured

A `LessonSeed` has: `slug`, `title`, `summary`, `bodyMarkdown`, `level`, `status`, `estimatedMinutes`,
optional `safetyNotes`/`reviewWarning`, a `moduleSlug` and/or `bodyRegionSlug`, an `objectives[]`
list, `prerequisiteSlugs[]`, `assetSlugs[]`, and `citations[]`. The body is Markdown rendered safely by
`src/lib/markdown.ts`.

## How learning objectives are stored

Objectives are a string array on the lesson seed; the seeder writes them to `LearningObjective` rows
(ordered). They render as the "You will be able to…" box on the lesson page.

## How anatomy, exercises, and quizzes connect

- Muscles belong to a `BodyRegion`. Exercises link to muscles through `ExerciseMuscle` with a `role`
  (`primary` / `secondary` / `stabilizer`), so muscle pages list "exercises where I'm a primary mover"
  and exercise pages never claim a single-muscle movement.
- Quiz questions link to **one** piece of content (`lessonSlug` / `muscleSlug` / `exerciseSlug` /
  `bodyRegionSlug`) and optionally a certification `domainCode`, which drives review and domain
  readiness.

## Beginner / intermediate / advanced content

`level` on paths, lessons, exercises, and questions marks difficulty. Muscles carry both a
`beginnerExplanation` (always shown) and an optional `advancedExplanation` (revealed on demand). The
user's `preferredDifficulty` profile setting is available for future default-expansion behavior.

## How prerequisites work

`prerequisiteSlugs` on a lesson become `LessonPrerequisite` rows (self-relation on `Lesson`). The
learning-path and lesson pages display prerequisites so concepts are learned in a logical order.

## How references connect to claims

Each seed item can include `citations[]`; each citation names a `sourceSlug` (must exist in the source
registry), the exact `claim` it supports, and an optional `locator` (chapter/section). The seeder
writes polymorphic `Citation` rows. Pages render them via the `Citations` component. See
[`citations-and-sources.md`](citations-and-sources.md).

## Reviewed vs. unreviewed content

Every lesson/muscle/exercise/question carries a `status`:

| Status | Meaning |
|---|---|
| `draft` | Written but not yet checked against a source. Shown with a "Draft" badge. |
| `source_checked` | Verified against a cited authoritative source. |
| `expert_reviewed` | Additionally reviewed by a qualified subject-matter expert. |
| `published` | Cleared for general display. |

`reviewWarning` adds a visible banner when something is incomplete or uncertain. The content validator
warns if a `source_checked`/`expert_reviewed` item lacks a citation. `ContentReview` provides an audit
trail for status changes (used by the future admin workflow).

## Validation

`scripts/validate-content.ts` (run via `npm run content:validate`, and in CI) checks: unique source
slugs; every citation → existing source; every exercise → existing muscles/joints/movements/assets;
every lesson → existing module/region/prerequisites/assets; every question → existing linked content &
domain and exactly one correct option (except matching); and presence of alt text on assets. It exits
non-zero on hard errors so bad content never reaches the database.
