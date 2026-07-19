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
- [ ] Root config: package.json, tsconfig, next.config, tailwind, postcss, .gitignore, .env.example
- [ ] Prisma schema (full data model) + SQLite datasource
- [ ] lib: db client, auth config, validation, spaced-repetition, mastery
- [ ] Global styles + layout + theme (light/dark)
- [ ] git init + first commit

## Phase 1 — Working MVP (vertical slice: shoulder region)
- [ ] Auth: register + login + logout + session (separate accounts, hashed passwords)
- [ ] Seed data: sources, body region (shoulder), muscles, bones, joints, movements, exercises, lessons, quizzes, visual assets, vocabulary
- [ ] Seed script that validates + imports content
- [ ] Landing page
- [ ] Dashboard (progress overview)
- [ ] Learning Path + Lesson pages (with citations + safety + vocabulary)
- [ ] Anatomy: muscle detail pages
- [ ] Exercise library + exercise detail pages
- [ ] Quiz engine: attempt, score, explanations, save history
- [ ] Progress tracking (per-user, isolated)
- [ ] Sources & References page
- [ ] Image Credits page
- [ ] Profile & Settings
- [ ] Mobile-responsive nav + PWA manifest

## Phase 1 — Quality
- [ ] Tests: auth, user-data isolation, quiz scoring, progress, citation display, spaced-repetition
- [ ] Loading / error / empty states
- [ ] Accessibility pass (alt text, keyboard, contrast)
- [ ] Typecheck + lint + build all green

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
