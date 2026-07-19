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

## Later phases (deferred — architecture must support them)
- [ ] Phase 2: interactive body map, more regions, flashcards UI, full spaced-repetition review UI, advanced exercise search, notes, bookmarks, certification practice mode, PWA install
- [ ] Phase 3: intermediate/advanced paths, biomechanics visualizations, case studies, recommendations, multilingual, study groups, expert review workflow

---

## Session log
- 2026-07-19: Session 1 started. Inspected empty dir. Set stack. Created this tracker + resume cron. Beginning Phase 0.
