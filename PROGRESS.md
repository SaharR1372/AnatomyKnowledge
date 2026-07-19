# Build Progress Tracker

> This file tracks the multi-session build of the Anatomy & Personal-Training Learning Platform
> described in `request.md`. If a session is resumed (manually or by a scheduled job), **read this
> file first**, then continue from the first unchecked item. Update the checkboxes and the
> "Session log" as you go. Keep entries terse.

**Project root:** `/home/exx/Vscode-Sahar/GymKnowledge`
**Stack decided:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v3 · Prisma · SQLite (dev) → Postgres (prod) · Auth.js v5 (credentials) · Vitest
**Package manager:** npm

## How to resume
1. Read `request.md` (the full spec) and this file.
2. `cd` into the project root. Run `git log --oneline | head` and `ls` to see current state.
3. Continue from the first unchecked item below. Commit after each logical unit.
4. Keep content **evidence-based**: every educational claim needs a Source + Citation row. Never invent citations.

---

## Phase 0 — Scaffold & foundations
- [x] Root config: package.json, tsconfig, next.config, tailwind, postcss, .gitignore, .env.example
- [x] Prisma schema (full data model) + SQLite datasource
- [x] lib: db client, auth config, validation, spaced-repetition, mastery
- [x] Global styles + layout + theme (light/dark)
- [x] git init + first commit

## Phase 1 — Working MVP (vertical slice: shoulder region)
- [x] Auth: register + login + logout + session (separate accounts, hashed passwords)
- [x] Seed data: sources, body region (shoulder), muscles, bones, joints, movements, exercises, lessons, quizzes, visual assets, vocabulary
- [x] Seed script that validates + imports content
- [x] Landing page
- [x] Dashboard (progress overview)
- [x] Learning Path + Lesson pages (with citations + safety + vocabulary)
- [x] Anatomy: muscle detail pages
- [x] Exercise library + exercise detail pages
- [x] Quiz engine: attempt, score, explanations, save history
- [x] Progress tracking (per-user, isolated)
- [x] Sources & References page
- [x] Image Credits page
- [x] Profile & Settings
- [x] Mobile-responsive nav + PWA manifest

## Phase 1 — Quality
- [ ] Tests: auth, user-data isolation, quiz scoring, progress, citation display, spaced-repetition
- [x] Loading / error / empty states
- [x] Accessibility pass (alt text, keyboard, contrast) — basics in place; formal audit later
- [x] Typecheck + lint + build all green (23 routes)

## Phase 1 — Docs & handoff
- [ ] README.md (full)
- [ ] docs/ (architecture, database-schema, content-system, citations-and-sources, visual-assets-and-licenses, authentication-and-security, quiz-and-mastery-system, spaced-repetition, deployment, development-guide, adding-new-content, adding-new-features, testing, troubleshooting, roadmap)
- [ ] docs/decisions/001-004 ADRs
- [ ] CHANGELOG.md, docs/roadmap.md
- [ ] .github/workflows/ci.yml + templates + SECURITY.md + CONTRIBUTING.md
- [ ] Final deliverables summary (section 32) written to docs/HANDOFF.md
- [ ] Git/GitHub publishing guide (docs/github-guide.md)

## Content expansion — ALL body regions at FULL depth (user request 2026-07-19)
Goal: author every body region from request.md §5 to the same depth/quality as the shoulder
(bones + joints + 6-8 cited muscles + movements + 3-6 exercises + 4-7 lessons + 10+ quizzes).
Quality bar is NON-NEGOTIABLE: every anatomical claim needs a real citation (OpenStax A&P 2e
chapters 8-11 cover the musculoskeletal system; MedlinePlus for plain-language). NEVER fabricate.

**Pattern for each new region (documented in docs/adding-new-content.md):**
1. Create `content/regions/<region>.ts` exporting `{ region, movements, exercises, lessons, questions }`.
2. Add a module for the region to the beginner path in `content/curriculum.ts` (slug `the-<region>`).
3. Wire the exports into `content/index.ts` (bodyRegions, movements, exercises, lessons, questions).
4. `npm run content:validate` → `npm run seed` → `npm run build` → commit.

Region checklist (request.md §5):
- [x] Shoulders (seed vertical slice — in content/anatomy.ts)
- [x] Chest (content/regions/chest.ts — pec major moved here from shoulder; pec minor, serratus, diaphragm, intercostals; 3 exercises, 3 lessons, 6 quizzes)
- [ ] Upper back  <-- NEXT: trapezius (move from shoulder?), latissimus dorsi, rhomboids, levator scapulae, erector spinae (upper); rows, pull-ups, face pulls
- [ ] Upper back
- [ ] Lower back
- [ ] Head and neck
- [ ] Arms (upper arm: biceps/triceps)
- [ ] Elbows
- [ ] Forearms and hands
- [ ] Core and abdominal region
- [ ] Spine
- [ ] Pelvis and hips
- [ ] Glutes
- [ ] Thighs
- [ ] Knees
- [ ] Lower legs
- [ ] Ankles and feet
Note: some muscles act across regions (e.g. pectoralis major = chest, was seeded under shoulder;
move to its canonical region when building that region). Muscle slug stays stable so exercise/quiz
links keep working; only `bodyRegionId` changes.

## Later phases (deferred — architecture must support them)
- [ ] Phase 2: interactive body map, more regions, flashcards UI, full spaced-repetition review UI, advanced exercise search, notes, bookmarks, certification practice mode, PWA install
- [ ] Phase 3: intermediate/advanced paths, biomechanics visualizations, case studies, recommendations, multilingual, study groups, expert review workflow

---

## Session log
- 2026-07-19: Session 1 started. Inspected empty dir. Set stack. Created this tracker + resume cron. Beginning Phase 0.
