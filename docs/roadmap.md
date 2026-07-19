# Roadmap

Status legend: **Completed** · **In Progress** · **Planned** · **Requires Research** · **Requires Expert Review**

## Completed (Phase 1 — v0.1.0)
- Auth (register/login/logout), per-user accounts, strict data isolation
- Beginner learning path + shoulder region (bones, joints, 7 muscles, movements)
- Exercise library (filters) + 4 exercises; muscle detail pages
- Evidence layer: source registry + polymorphic citations displayed everywhere
- Quiz engine (server-graded, explanations, confidence) + SM-2 spaced repetition + mastery
- Dashboard (completion, accuracy, mastery, streak, cert-domain readiness)
- Vocabulary, flashcards, saved items, profile/settings, sources, image credits, about/safety
- Original CC0 SVG diagrams; PWA manifest; light/dark theme; a11y basics
- 18 automated tests; CI workflow; full docs

## In Progress
- (Handoff point) — none actively; next up is Phase 2.

## Planned — Phase 2
- Full **interactive body map** (click a structure on a figure → its page)
- Additional body regions (chest, back, hips/glutes, thighs, knees, …)
- **Flashcard spaced-repetition** review UI (schema already supports it)
- Advanced exercise search (more filters: equipment, goal, unilateral, chain, plane facets)
- Personal notes/bookmarks hubs, richer progress analytics
- **Certification practice mode**: timed exams, exam history, per-domain performance
- More visual quiz formats (identify-on-diagram with non-visual alternatives)
- Installable PWA polish (offline shell, service worker)
- **Admin/editor UI** to create/edit content, attach citations, register assets, and move review status
  (schema + `ContentReview` already in place)

## Planned — Phase 3
- Intermediate & advanced learning paths (biomechanics: force, torque, moment arms, kinetic chains)
- Biomechanics visualizations; client case studies
- Personalized lesson recommendations
- Optional multilingual support; optional study groups / progress sharing (opt-in)
- Additional certification paths
- Expert content-review workflow (reviewer roles, sign-off)

## Requires Research
- Confirm current official certification exam **domain weightings** before displaying percentages
- Re-verify each source `lastCheckedDate` and that cited chapters/sections are current
- Object-storage provider choice for user-uploaded images (S3-compatible)

## Requires Expert Review
- All seed anatomy/exercise content is at most `source_checked`, **not** expert-reviewed. A qualified
  anatomist/CPT should review muscle actions, exercise cueing, and safety notes before public reliance.
- Safety/scope-of-practice statements should be reviewed by a qualified professional.

## Technical debt
- Adopt Prisma **migrations** (currently `db push` for dev) before first production deploy
- Migrate `package.json#prisma` seed config to a `prisma.config.ts` (deprecation warning)
- Add Playwright E2E + axe accessibility automation (mobile nav, diagram a11y)
- Consider splitting Auth.js edge/node config if middleware-based route protection is added

## Accessibility improvements
- Formal WCAG audit; automated axe checks in CI
- Keyboard/AT testing for the (future) interactive body map
- Ensure every image-based quiz item ships a non-visual alternative
