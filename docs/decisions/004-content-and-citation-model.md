# ADR 004: Content & Citation Model

**Date:** 2026-07-19 · **Status:** Accepted

## Problem
Content must be (a) evidence-based with traceable citations, (b) reviewable and updatable without
editing application code, (c) preserved inside the repository, and (d) able to attach sources/images to
many different content types.

## Considered options
- **Version-controlled typed seed files (`/content`) imported into a DB**, with a **polymorphic**
  citation/asset model.
- Pure database-only content (admin UI first, no seed files).
- Markdown/MDX files rendered directly (no DB).
- Explicit per-type citation tables (e.g. `LessonCitation`, `MuscleCitation`, …).

## Selected option
Typed seed files in `/content` (validated by `scripts/validate-content.ts`, imported by
`prisma/seed.ts`) + a **polymorphic** `Citation` and `AssetUsage` keyed by `(entityType, entityId)`.

## Reason
- Seed files are human-readable, diff-able, and preserved in git (satisfies "keep everything in the
  repo" and "portable content"); the compiler + validator catch broken references before import.
- Polymorphic citations let any content type cite sources without a table explosion, matching the
  brief's "citation connects a claim to a source" model.
- The DB remains the runtime store, so a future admin UI can edit the same tables.

## Advantages
- Strong integrity guarantees (typecheck + validator + tests); easy content review in PRs.
- One citation mechanism everywhere; sources centralized in a registry with reliability tiers.

## Disadvantages
- Polymorphic relations lack DB-level foreign keys on `entityId` (integrity enforced in app code +
  validator + seeder, not by the database).
- The seeder resets content tables, so it's for setup/demo, not live production edits (admin UI is
  Phase 2).

## Future consequences
- Admin UI writes to the same models. If polymorphic integrity becomes a concern, add per-type foreign
  keys or DB checks. Content can be exported back to seed files for portability.
