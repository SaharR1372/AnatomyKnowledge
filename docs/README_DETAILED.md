# AnatomyPath — Evidence-Based Anatomy & Personal-Training Learning Platform

A mobile-friendly web application for learning human anatomy, muscles, human movement, exercise
science, and personal-training fundamentals — built for careful, self-directed learners who want to
understand **why**, not just memorize facts.

Every educational claim is tied to an authoritative source. Every user gets a private account,
a personalized learning path, quizzes with spaced-repetition review, and progress tracking.

> **Educational use only.** This app does not provide medical diagnosis or treatment. For pain,
> injury, or health concerns, consult a qualified healthcare professional.

---

## Why this project exists

I'm working toward becoming a knowledgeable personal trainer and, eventually, a recognized
certification. I wanted a tool that teaches from the absolute basics through beginner → intermediate
→ advanced levels, with scientific accuracy, clear simple English, and traceable references — instead
of the unsourced, oversimplified content common online. This app is that tool, and a demonstration of
building a serious, full-stack, evidence-based educational product.

## Main features (Phase 1 — implemented)

- **Accounts & privacy** — email/password auth, hashed passwords, separate per-user progress that no
  other user can read or modify.
- **Structured learning path** — a beginner curriculum from anatomical language and movement to a
  complete first body region (the **shoulder**) and core safety principles, with lesson prerequisites.
- **Evidence layer** — a source registry + polymorphic citation system. Lessons, muscles, exercises,
  and quiz answers display their sources, licenses, and last-checked dates. Content carries a review
  status (`draft` → `source_checked` → `expert_reviewed`).
- **Anatomy** — muscle detail pages (location, origin/insertion, actions, innervation, function,
  misconceptions, safety) linked to the exercises that use each muscle as primary/secondary/stabilizer.
- **Exercise library** — searchable and filterable; each exercise shows primary, secondary, and
  stabilizing muscles, cues, mistakes, regressions/progressions, and "why it works" — never reduced to
  a single muscle.
- **Quizzes** — original multiple-choice, true/false, matching, and scenario questions; server-graded
  with explanations, per-option rationales, and citations.
- **Spaced repetition & mastery** — an SM-2 scheduler resurfaces missed questions sooner; a topic is
  never "mastered" from a single correct answer.
- **Dashboard** — completion, quiz accuracy (incl. first-attempt), mastery, streak, and a
  certification-domain readiness indicator (explicitly *not* a pass guarantee).
- **Vocabulary & flashcards** — technical terms with plain-English definitions, pronunciation, and a
  personal saved list; a flashcard deck.
- **Original licensed visuals** — CC0 SVG anatomy diagrams with full metadata and an in-app Image
  Credits page.
- **Accessibility & UX** — responsive, light/dark themes, keyboard focus states, skip link, alt text,
  reduced-motion support, PWA manifest, loading/error/empty states.

See [`docs/roadmap.md`](docs/roadmap.md) for Phase 2/3 plans (interactive body map, more regions,
flashcard spaced repetition, timed practice exams, admin UI, etc.).

## Technology stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router) + **TypeScript** | One codebase for UI + server actions; typed end to end. |
| Styling | **Tailwind CSS v3** + CSS variables | Fast, consistent, themeable (light/dark). |
| Database | **SQLite** (dev) → **PostgreSQL** (prod) via **Prisma** | Zero-setup local dev; portable schema for production. |
| Auth | **Auth.js v5** (Credentials + JWT) + **bcrypt** | Secure sessions with no external auth service for the MVP. |
| Validation | **Zod** | Every input validated before hitting the DB. |
| Tests | **Vitest** | Unit + integration tests, incl. user-data isolation. |

Full reasoning is recorded as Architecture Decision Records in [`docs/decisions/`](docs/decisions).

## Architecture at a glance

```
Browser (React Server + Client Components, PWA)
   │  server actions (typed, validated, auth-guarded)
   ▼
Next.js App Router  ──►  Prisma ORM  ──►  SQLite (dev) / PostgreSQL (prod)
   │
   ├─ Auth.js (JWT sessions, bcrypt password hashes)
   ├─ Content: version-controlled seed in /content → imported via prisma/seed.ts
   └─ Evidence: Source registry + polymorphic Citation/AssetUsage tables
```

More detail (with Mermaid diagrams) in [`docs/architecture.md`](docs/architecture.md).

## Getting started (local)

**Requirements:** Node.js ≥ 20 and npm. No database server needed for local dev (SQLite).

```bash
# 1. Install dependencies
npm install

# 2. Create your env file (safe placeholders; SQLite by default)
cp .env.example .env
#    then set AUTH_SECRET — generate one with:  openssl rand -base64 32

# 3. Create the database schema and load seed content + demo accounts
npm run setup            # = prisma generate && prisma db push && npm run seed

# 4. Start the dev server
npm run dev              # http://localhost:3000
```

**Demo accounts** (created by the seeder):

| Role | Email | Password |
|---|---|---|
| Learner | `learner@demo.local` | `password123` |
| Admin | `admin@demo.local` | `password123` |

You can also register a fresh account at `/register`.

### Useful commands

```bash
npm run dev               # start dev server
npm run build             # production build (prisma generate + next build)
npm run start             # run the production build
npm run typecheck         # tsc --noEmit
npm run lint              # next lint
npm test                  # run the Vitest suite
npm run seed              # (re)load seed content + demo accounts (resets seed data)
npm run content:validate  # validate seed content integrity before importing
npm run db:studio         # open Prisma Studio to inspect the database
```

## Environment variables

Copy `.env.example` to `.env` and fill in values. Required for local dev:

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | DB connection. Default `file:./dev.db` (SQLite). Use a Postgres URL in prod. |
| `AUTH_SECRET` | ✅ | Secret that signs session JWTs. Generate with `openssl rand -base64 32`. |
| `NEXT_PUBLIC_APP_URL` | ✅ | Public base URL (e.g. `http://localhost:3000`). |
| `AUTH_TRUST_HOST` | prod | Set `true` behind a proxy (Vercel etc.). |

Optional (Phase 2, documented in `.env.example`): object storage, email, and error monitoring.
Secrets never belong in source, git history, or screenshots — `.env*` files are gitignored.
See [`docs/authentication-and-security.md`](docs/authentication-and-security.md).

## Project structure

```
content/            Version-controlled, typed seed content (sources, anatomy, exercises, lessons, quizzes)
prisma/             schema.prisma, seed.ts
public/anatomy/     Original CC0 SVG diagrams
scripts/            content validator
src/
  app/              App Router pages (learn, anatomy, exercises, quiz, dashboard, sources, credits, …)
  components/       Reusable UI + client components (nav, quiz runner, forms, theme)
  lib/              db, auth, session, validation, spaced-repetition, mastery, queries, markdown
  lib/actions/      Server actions (auth, learning, personalization)
  types/            Type augmentation (next-auth)
tests/              Vitest unit + integration tests
docs/               Architecture, schema, content, deployment, decisions, roadmap, …
```

## Source & citation policy

Sources are prioritized (government guidelines & textbooks first; blogs/social media are never the
source of truth). Every lesson/muscle/exercise/quiz claim should link to a `Source`. Citations,
authors, and URLs are **never fabricated**; unverifiable facts are omitted or marked for review.
Details: [`docs/citations-and-sources.md`](docs/citations-and-sources.md).

## Image-licensing policy

Every visual asset stores its creator, source URL, license, attribution, allowed uses, and
license-check date. MVP diagrams are original (CC0). No image is used without a recorded license.
Details: [`docs/visual-assets-and-licenses.md`](docs/visual-assets-and-licenses.md). In-app:
`/credits`.

## What This Project Demonstrates

- Full-stack application development (Next.js App Router, server actions, TypeScript end to end)
- Relational data modeling (25+ models incl. a polymorphic evidence/citation layer)
- Authentication & authorization with strict per-user data isolation (verified by tests)
- Evidence-based content management with a review workflow and content validation
- Personalized learning: progress, mastery, and a spaced-repetition algorithm (SM-2)
- Responsive, accessible UI with light/dark theming and PWA support
- Automated testing (unit + integration) and CI
- Thorough technical documentation and decision records

## Current limitations

- One complete body region (shoulder) is seeded as the example vertical slice.
- Interactive body map, flashcard spaced-repetition UI, timed exams, and an admin editing UI are
  planned (Phase 2). Editorial changes currently go through the seed content + review status fields.
- Content is `source_checked` at most, **not** expert-reviewed. See
  [`docs/roadmap.md`](docs/roadmap.md) and the "Requires Expert Review" list.

## Roadmap

See [`docs/roadmap.md`](docs/roadmap.md) and [`CHANGELOG.md`](CHANGELOG.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/development-guide.md`](docs/development-guide.md).

## License

Application code: MIT (see [`LICENSE`](LICENSE)). Educational content and third-party assets retain
their own licenses as recorded in the source registry and Image Credits page — notably OpenStax
Anatomy & Physiology 2e is **CC BY-NC-SA 4.0** (non-commercial), which constrains commercial reuse of
any OpenStax-derived text/images.

## Acknowledgments & educational references

OpenStax (Rice University) *Anatomy and Physiology 2e*; MedlinePlus & NIH/NIAMS; the *Physical
Activity Guidelines for Americans* (ODPHP) and CDC; ACSM public statements; and public certification
exam outlines from ACE and NASM. Full list: [`docs/citations-and-sources.md`](docs/citations-and-sources.md)
and `/sources` in the app.
