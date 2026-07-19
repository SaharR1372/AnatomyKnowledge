# Handoff & Final Deliverables

This document is the single index for everything delivered in v0.1.0 (spec §32).

## 1. What was implemented
A working (not prototype) MVP: authentication with separate private accounts, a beginner learning path,
a complete shoulder anatomy region (bones, joints, 7 muscles, 6 movements), an exercise library (4
exercises) with muscle/joint relationships, muscle detail pages, a server-graded quiz engine with
explanations and citations, SM-2 spaced repetition + mastery, per-user progress tracking, a dashboard,
vocabulary + flashcards, saved items, profile/settings, an evidence layer (source registry + polymorphic
citations shown everywhere), original CC0 SVG diagrams with an Image Credits page, PWA manifest,
light/dark theme, accessibility basics, 18 automated tests, CI, and full documentation. Details in
[`../CHANGELOG.md`](../CHANGELOG.md).

## 2. Incomplete / deferred features
Interactive body map, more body regions, flashcard spaced-repetition UI, timed practice exams, admin
editing UI, richer analytics, offline PWA, multilingual, study groups. See [`roadmap.md`](roadmap.md).

## 3. Content requiring verification / expert review
All seed content is at most `source_checked`, **not** expert-reviewed. Certification domain weightings
are intentionally omitted pending verification. A qualified anatomist/CPT should review muscle actions,
cueing, and safety before public reliance. Re-confirm each source `lastCheckedDate`. See
[`citations-and-sources.md`](citations-and-sources.md) and the roadmap's "Requires Expert Review".

## 4–10. Setup, env, DB, seed, test, build, deploy
- Local install & commands: [`development-guide.md`](development-guide.md) and the [README](../README.md).
- Environment variables: [README](../README.md) + [`authentication-and-security.md`](authentication-and-security.md) + `.env.example`.
- Database & migrations, seed: [`database-schema.md`](database-schema.md).
- Tests: [`testing.md`](testing.md) (`npm test`).
- Build: `npm run build`. Deploy: [`deployment.md`](deployment.md).

## 11–12. GitHub publishing & future updates
[`github-guide.md`](github-guide.md) (Methods A & B, troubleshooting, feature branches).

## 13. Repository structure
See the README "Project structure" and [`architecture.md`](architecture.md).

## 14–18. Architecture / DB / content / adding content & features
[`architecture.md`](architecture.md), [`database-schema.md`](database-schema.md),
[`content-system.md`](content-system.md), [`adding-new-content.md`](adding-new-content.md),
[`adding-new-features.md`](adding-new-features.md).

## 19. Source & citation inventory
9 seed sources (OpenStax A&P 2e; MedlinePlus Anatomy; MedlinePlus Bones/Joints/Muscles; NIAMS; Physical
Activity Guidelines for Americans; CDC Physical Activity Basics; ACSM official statements; ACE exam
content outline; NASM CPT exam info). Full table + policy in
[`citations-and-sources.md`](citations-and-sources.md); live at `/sources`.

## 20. Visual-asset & license inventory
3 original CC0 SVGs (`body-planes`, `directional-terms`, `shoulder-region`). Full metadata in
[`visual-assets-and-licenses.md`](visual-assets-and-licenses.md); live at `/credits`.

## 21. Security checklist
See [`authentication-and-security.md`](authentication-and-security.md): hashed passwords, JWT sessions,
Zod validation, per-user isolation (tested), security headers, secrets never in source, `.env*`
ignored.

## 22. Production-readiness checklist
See [`deployment.md`](deployment.md).

## 23. Known limitations
One seeded region; content not expert-reviewed; `db push` (not migrations) in dev; body map/admin
UI/timed exams deferred. See [`roadmap.md`](roadmap.md).

## 24. Roadmap
[`roadmap.md`](roadmap.md).

## 25. Portfolio project description (~120 words)
> **AnatomyPath** is a full-stack, evidence-based learning platform for human anatomy, movement, and
> personal-training fundamentals. Built with Next.js 15, TypeScript, Prisma, and Auth.js, it gives every
> user a private account with a personalized learning path, quizzes, and progress history. Its
> standout feature is an evidence layer: a source registry and polymorphic citation system that ties
> every lesson, muscle, exercise, and quiz answer to authoritative references (OpenStax, MedlinePlus,
> CDC), each shown with its license and last-checked date. A spaced-repetition engine (SM-2) resurfaces
> missed questions until mastery, and strict per-user data isolation is verified by automated tests.
> The project ships a complete shoulder-region curriculum, original licensed diagrams, a progress
> dashboard, and thorough documentation — designed to grow into a certification-prep tool.

## 26. Résumé bullet points
- Designed and built a full-stack, evidence-based learning platform (Next.js 15, TypeScript, Prisma,
  Auth.js) with a 25+ model relational schema, a personalized learning path, and a quiz engine featuring
  SM-2 spaced repetition and mastery tracking.
- Engineered an evidence/citation architecture (source registry + polymorphic citations) so every
  educational claim is traceable to an authoritative source, plus a validated, version-controlled
  content pipeline with a review-status workflow.
- Implemented secure authentication with strict per-user data isolation verified by an automated unit +
  integration test suite, and shipped CI plus comprehensive documentation (architecture, schema, ADRs,
  deployment, and content guides).

## 27. Recommended next development steps
1. Add Prisma migrations and deploy to Vercel + managed Postgres (share the URL).
2. Get one qualified expert to review the shoulder content; raise items to `expert_reviewed`.
3. Build the interactive body map and add 1–2 more regions using the existing content pipeline.
4. Add the flashcard spaced-repetition UI (schema already supports it) and timed practice exams.
5. Build the admin/editor UI on top of `ContentReview` + review statuses.
6. Add Playwright E2E + axe accessibility checks to CI.
