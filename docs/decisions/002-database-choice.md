# ADR 002: Database — SQLite in dev, PostgreSQL in prod

**Date:** 2026-07-19 · **Status:** Accepted

## Problem
The brief suggests PostgreSQL, but requiring a running Postgres server for local development adds
friction and slows onboarding ("clone → run" should just work).

## Considered options
1. PostgreSQL everywhere (dev + prod).
2. SQLite everywhere.
3. **SQLite for dev, PostgreSQL for prod**, via Prisma, keeping the schema portable.

## Selected option
Option 3. `provider = "sqlite"` locally (`file:./dev.db`); switch to `postgresql` for production.

## Reason
- Zero-setup local dev and tests (a file DB) — a new developer runs `npm run setup` with no services.
- Prisma abstracts most differences; keeping the schema free of SQLite-only or Postgres-only features
  makes the switch a one-line `provider` change plus a migration.

## Advantages
- Frictionless onboarding and fast, isolated tests (temp `test.db`).
- Production gets a robust, concurrent, managed database (Neon/Supabase free tier).

## Disadvantages
- Two providers means the dev DB isn't byte-for-byte identical to prod; provider-specific edge cases
  are possible.
- SQLite lacks native enums and scalar lists, so those are modeled as `String`/JSON/join tables.

## Mitigations
- No enums/scalar lists in the schema; enum-like values validated in `src/lib/enums.ts`.
- Adopt Prisma migrations before first prod deploy; run `migrate deploy` against Postgres.

## Future consequences
- If provider drift becomes a problem, run Postgres locally via Docker and drop SQLite. The schema
  already supports it.
