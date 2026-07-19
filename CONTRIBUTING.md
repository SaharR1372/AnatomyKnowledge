# Contributing

Thanks for your interest! This project values **accuracy** and **safety** above feature velocity.

## Getting set up
See [`docs/development-guide.md`](docs/development-guide.md). TL;DR:
```bash
npm install && cp .env.example .env && npm run setup && npm run dev
```

## Ground rules for content
- Every educational claim needs a citation to an authoritative source. **Never invent** references,
  authors, or URLs. See [`docs/citations-and-sources.md`](docs/citations-and-sources.md).
- Start new content at `status: "draft"`; raise to `source_checked` only when cited.
- Don't copy proprietary certification questions or paid textbook content. Practice questions must be
  original.
- Don't use an image without recording its license. See
  [`docs/visual-assets-and-licenses.md`](docs/visual-assets-and-licenses.md).
- Keep safety/scope-of-practice language intact; this app is educational and not medical advice.

## Ground rules for code
- TypeScript, small modular components, shared utilities, clear names. Comment the *why*.
- All mutations are server actions validated with Zod and guarded by `requireUser()`; always scope
  user data by the session `userId`.
- Add/adjust tests, especially an isolation test for any new user-owned data.

## Before opening a PR
Run and pass:
```bash
npm run typecheck && npm run lint && npm run content:validate && npm test && npm run build
```
Use clear, scoped commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`). Update `CHANGELOG.md`,
relevant `docs/`, and `docs/roadmap.md` when behavior/schema changes. Open the PR against `main`; CI
must pass.

## Reporting security issues
See [`SECURITY.md`](SECURITY.md) — please do not open a public issue for vulnerabilities.
