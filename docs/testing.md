# Testing

Framework: **Vitest** (Node environment). Run:

```bash
npm test            # run once
npm run test:watch  # watch mode
```

## How the test DB works

- `vitest.config.ts` sets `DATABASE_URL=file:./test.db` and a test `AUTH_SECRET`.
- `tests/global-setup.ts` deletes `prisma/test.db` and runs `prisma db push` once to create a fresh
  schema before the suite.
- `tests/helpers.ts` provides `resetDb()` (called in `beforeEach`) plus fixture builders
  (`createUser`, `createLessonWithQuestion`).
- Tests run serially (`fileParallelism: false`) since they share the file DB.

## Mocking Next.js in integration tests

Server actions use request-scoped helpers, so integration tests mock:

- `@/lib/session` → controllable `getCurrentUser`/`requireUser` (set `state.user`).
- `next/cache` → `revalidatePath` no-op.
- `next/navigation` → `redirect` throws a `REDIRECT:<url>` sentinel we assert on.
- `@/lib/auth` and `next-auth` → stubbed (they pull in Next server internals).

## What is covered (18 tests)

| Area (spec §21) | Test |
|---|---|
| Registration & password hashing | `integration.test.ts` — hashed, never plaintext; verifiable |
| Duplicate email / weak password | `integration.test.ts` — field errors returned |
| **User-data isolation** | `integration.test.ts` — B can't see A's progress/notes/bookmarks/attempts |
| Quiz scoring | `integration.test.ts` — server-graded correctness, attempt saved |
| Progress updates | `integration.test.ts` — lesson completion + streak |
| Spaced-repetition scheduling | `spaced-repetition.test.ts` + integration lapse/repetition checks |
| Mastery threshold | `spaced-repetition.test.ts` — never mastered from one answer |
| Citation integrity / no invented citations | `content.test.ts` |
| Missing-source warnings | `content.test.ts` — source-checked items require a citation |
| Visual attribution present | `content.test.ts` — alt/license/attribution required |

## Not yet automated (manual for now)

Mobile navigation and interactive-diagram accessibility are verified manually (keyboard focus, alt
text, contrast). Adding Playwright E2E + axe checks is on the roadmap.

## Writing a new test

- Pure logic → a `*.test.ts` with no DB.
- DB/action logic → use the mocks above, `resetDb()` in `beforeEach`, and fixtures from `helpers.ts`.
- Any new user-owned data → add an isolation test proving one user can't read/modify another's rows.
