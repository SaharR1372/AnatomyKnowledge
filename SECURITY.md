# Security Policy

## Reporting a vulnerability
Please report security issues **privately** — do not open a public GitHub issue. Use GitHub's
"Report a vulnerability" (Security → Advisories) on the repository, or contact the maintainer directly.
Include steps to reproduce and the potential impact. We'll acknowledge and work on a fix as soon as
reasonably possible.

## Scope highlights
- Authentication & session handling (Auth.js JWT, bcrypt hashes).
- **User-data isolation** — one user must never read or modify another's data. This is enforced by
  scoping every query by the session `userId` and is covered by automated tests.
- Input validation (Zod) and the HTML-escaping Markdown renderer.

## Handling secrets
Never commit real secrets. `.env` / `.env.local` are gitignored; only `.env.example` (placeholders) is
tracked. If a secret is exposed, rotate it immediately (regenerate `AUTH_SECRET`, rotate DB
credentials) and scrub it from git history. See
[`docs/authentication-and-security.md`](docs/authentication-and-security.md).

## Supported versions
This is an early-stage project; the latest `main` receives fixes.
