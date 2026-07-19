# Development Guide

## Prerequisites

- Node.js ≥ 20, npm. (No DB server needed locally — SQLite.)

## First-time setup

```bash
npm install
cp .env.example .env         # set AUTH_SECRET (openssl rand -base64 32)
npm run setup                # prisma generate + db push + seed
npm run dev                  # http://localhost:3000
```

## Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server (hot reload). |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run lint` | ESLint (`next lint`). |
| `npm test` / `npm run test:watch` | Vitest. |
| `npm run content:validate` | Validate `/content` before seeding. |
| `npm run seed` | Reset + reload seed content and demo accounts. |
| `npm run db:studio` | Prisma Studio (browse/edit the DB). |
| `npm run db:push` | Sync schema to the DB (dev). |
| `npm run build` | Production build. |

## Project layout

See the "Project structure" section of the [README](../README.md). In short: `content/` = seed data,
`prisma/` = schema + seed, `src/app/` = pages, `src/components/` = UI, `src/lib/` = logic + actions,
`tests/` = Vitest, `docs/` = documentation.

## Conventions

- **Server components by default**; add `"use client"` only for interactivity.
- **All mutations are server actions** in `src/lib/actions/*`, validated with Zod and guarded by
  `requireUser()`; scope every query by the session `userId`.
- **Enum-like values** come from `src/lib/enums.ts` (single source of truth).
- **Path alias** `@/` → `src/`.
- **Styling** via Tailwind + the `Card`, `Badge`, `PageHeader`, etc. components in
  `src/components/ui.tsx`; use design-token colors (`bg`, `surface`, `primary`, …) so theming works.
- **Comments** explain *why* (constraints, safety, non-obvious logic), not *what*.
- Keep components small and reuse shared utilities.

## Adding things

- New content (lesson, muscle, exercise, quiz, source, image): see
  [`adding-new-content.md`](adding-new-content.md).
- New feature/page/model/endpoint: see [`adding-new-features.md`](adding-new-features.md).

## Before you commit

```bash
npm run typecheck && npm run lint && npm run content:validate && npm test && npm run build
```

Use meaningful, scoped commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`). Don't lump unrelated
changes together. Update `CHANGELOG.md` and relevant docs when behavior or schema changes.
