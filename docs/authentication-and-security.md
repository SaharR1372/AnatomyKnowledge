# Authentication & Security

## Approach

Auth.js v5 (NextAuth) with a **Credentials** provider and a **JWT** session strategy. This needs no
external auth service or email provider for the MVP. Passwords are stored as **bcrypt** hashes; only a
signed JWT (no password) is ever sent to the client.

- Config: [`src/lib/auth.ts`](../src/lib/auth.ts)
- Route handler: `src/app/api/auth/[...nextauth]/route.ts`
- Session helpers: [`src/lib/session.ts`](../src/lib/session.ts) (`getCurrentUser`, `requireUser`,
  `requireEditor`)
- Password hashing: [`src/lib/password.ts`](../src/lib/password.ts) (bcrypt, cost 10)

## Session contents

The JWT carries `id` and `role`. `session.user` is typed in `src/types/next-auth.d.ts`. Pages/actions
read it via `getCurrentUser()`; protected pages call `requireUser()` (redirects to `/login` with a
`callbackUrl`) and admin/editor areas call `requireEditor()`.

## Authorization & user-data isolation

- Every mutation is a **server action** that calls `requireUser()` and scopes all queries by the
  session `userId` — never by a client-supplied id.
- Quiz correctness is computed **server-side** from stored options; the client never receives
  `isCorrect` before answering.
- Unique constraints (`(userId, …)`) prevent cross-user collisions.
- Tested in `tests/integration.test.ts` ("user-data isolation"): one user cannot read or modify
  another's progress, notes, bookmarks, or attempts.

## Roles

`learner` (default), `editor`, `admin`. `requireEditor()` gates future admin/content features;
learners are redirected away. Roles are set in the DB (the seeder creates one admin demo account).

## Secrets & environment variables

| Secret | Source | Local dev? | Rotate if exposed |
|---|---|---|---|
| `AUTH_SECRET` | `openssl rand -base64 32` | required | Generate a new value; all sessions invalidate. |
| `DATABASE_URL` | Your DB (SQLite file locally; managed Postgres in prod) | required | Rotate DB credentials with the provider; update env. |
| Storage/email keys | Provider dashboards (Phase 2) | optional | Rotate in the provider; update env. |

Rules: never put real secrets in source, docs, screenshots, git history, or seed files. `.env` and
`.env.local` are gitignored. `.env.example` documents every variable with safe placeholders. In
production, set secrets in the host's dashboard (e.g. Vercel Project → Settings → Environment
Variables), not in the repo.

## Transport & headers

`next.config.mjs` sets `X-Content-Type-Options`, `X-Frame-Options: DENY`, a strict `Referrer-Policy`,
and a restrictive `Permissions-Policy`. Deploy over HTTPS (Vercel provides this) so session cookies are
sent securely.

## Input validation

All action/route inputs are validated with Zod schemas in `src/lib/validation.ts` before any DB
access. The custom Markdown renderer (`src/lib/markdown.ts`) escapes HTML and only allows `http(s)` and
relative links (defense in depth for editor-authored content).

## What the deployed app must not expose

Database credentials, `AUTH_SECRET`, other users' private data, admin functionality to ordinary users,
debug output, dev-only endpoints, or private source materials. Keep `NODE_ENV=production` in prod
(Prisma logging is reduced and Next disables dev features).

## If a secret is accidentally committed

1. Rotate it immediately (generate a new `AUTH_SECRET`, or rotate DB credentials).
2. Remove it from the working tree and history (e.g. `git filter-repo`) and force-push if already
   pushed — coordinate with collaborators.
3. Treat existing sessions as compromised (rotating `AUTH_SECRET` invalidates them).
