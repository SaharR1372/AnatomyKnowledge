# ADR 003: Authentication — Auth.js Credentials + JWT

**Date:** 2026-07-19 · **Status:** Accepted

## Problem
Users need private, separate accounts with secure login. The MVP should avoid external dependencies
(email provider, third-party auth) while remaining secure and extensible.

## Considered options
1. **Auth.js v5 (NextAuth), Credentials provider, JWT sessions**, bcrypt password hashes.
2. Auth.js with a database session + email magic links (needs an email service).
3. A third-party auth provider (Clerk/Auth0/Supabase Auth).
4. Fully hand-rolled sessions (custom JWT/cookies).

## Selected option
Option 1.

## Reason
- No email provider or paid service required for the MVP; works entirely locally.
- Auth.js handles CSRF, cookie handling, and the session lifecycle securely.
- JWT sessions need no server session store, simplifying deployment.
- bcrypt hashing keeps passwords safe; only a signed token (no password) reaches the client.

## Advantages
- Simple, cheap, secure enough for the MVP; easy to add OAuth/email later (Auth.js providers).

## Disadvantages
- No email verification or password reset yet (Phase 2).
- Auth.js v5 is newish; some APIs still stabilizing. bcrypt is Node-runtime only, so route protection
  is done via server-side `requireUser()` rather than edge middleware.

## Future consequences
- Adding email verification/reset or OAuth is incremental. If edge middleware protection is desired,
  split the config into edge-safe and node parts (see roadmap technical debt).
