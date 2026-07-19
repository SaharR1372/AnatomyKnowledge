# Changelog

All notable changes to this project are documented here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/); versions use [SemVer](https://semver.org/).

## [0.1.0] — 2026-07-19

First functional MVP (Phase 1). A polished, working vertical slice — not a prototype:
authentication, quizzes, progress saving, per-user accounts, source tracking, and references all work.

### Added
- **Project scaffold**: Next.js 15 (App Router) + TypeScript + Tailwind CSS v3, Prisma ORM with a
  SQLite dev datasource, ESLint, Vitest.
- **Data model** (`prisma/schema.prisma`): 25+ models covering users/profiles, learning
  paths/modules/lessons/objectives/prerequisites, anatomy (regions, bones, joints, muscles,
  movements), exercises and their muscle/joint/movement relations, quizzes/options/attempts, progress,
  a generic spaced-repetition `ReviewState`, bookmarks/notes/vocabulary/flashcards, certifications and
  domains/exams, a source registry, polymorphic citations, visual assets + usages, and content-review
  records.
- **Evidence layer**: source registry with the brief's authoritative references; polymorphic citation
  system displayed on lessons, muscles, exercises, and quiz answers; content-review status labels.
- **Content**: version-controlled, typed seed content in `/content` (sources, vocabulary, shoulder
  anatomy, exercises, lessons, quizzes, curriculum, certification domains) + a pre-import content
  validator and an idempotent seeder.
- **Auth**: Auth.js v5 (Credentials + JWT), bcrypt password hashing, register/login/logout, protected
  routes via `requireUser`.
- **Pages**: landing, login/register, dashboard, learning path + lessons, anatomy + muscle detail,
  exercise library (filters) + detail, quiz hub + runner (lesson/muscle/region/domain/all/review),
  certification prep, sources, image credits, vocabulary, flashcards, saved items, profile/settings,
  about/safety; global loading/error/not-found states.
- **Learning systems**: SM-2 spaced repetition, mastery estimation (never mastered from one answer),
  streaks, per-user progress and quiz history.
- **Original visuals**: CC0 SVG diagrams (body planes, directional terms, shoulder) with full metadata.
- **UX**: responsive design, light/dark theme, keyboard focus states, skip link, PWA manifest + icons.
- **Tests**: 18 passing unit + integration tests (SM-2 scheduling, mastery, content integrity,
  registration/hashing, quiz grading, lesson completion, and cross-user data isolation).
- **Docs**: README, architecture, database schema, content system, citations & sources, visual assets
  & licensing, auth & security, quiz & mastery, spaced repetition, deployment, development guide,
  adding content/features, testing, troubleshooting, roadmap, ADRs 001–004, GitHub guide, and handoff.
- **CI**: GitHub Actions workflow (install → typecheck → lint → content validate → test → build).

### Known limitations
- One complete seeded region (shoulder). Interactive body map, admin UI, timed exams, and flashcard
  spaced-repetition UI are deferred to Phase 2 (see `docs/roadmap.md`).
- Content is at most `source_checked`, not expert-reviewed.
