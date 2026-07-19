# Troubleshooting

## `npm run dev` / build can't find `DATABASE_URL`
Copy the env file: `cp .env.example .env`. Both Next.js and the Prisma CLI auto-load `.env`.

## "Environment variable not found: AUTH_SECRET" / login fails silently
Set `AUTH_SECRET` in `.env` to a strong value: `openssl rand -base64 32`. Restart the dev server after
changing env files.

## Prisma Client is out of date / types missing after schema edits
Run `npm run db:generate` (or `npm run db:push` which also regenerates). Restart the TS server/editor.

## `prisma db push` refuses with a destructive-action warning
That guard triggers on `--force-reset`/data-loss flags. For a normal dev sync use `npm run db:push`.
For a full local reset, delete `prisma/dev.db` and re-run `npm run setup`.

## Seeding seems to wipe my data
`npm run seed` **resets** content tables and demo users by design (initial setup / demos). Don't run it
against a production DB with real users.

## Tests fail on first run
`tests/global-setup.ts` creates `prisma/test.db`. If it's stale/locked, delete `prisma/test.db` and
re-run `npm test`. Ensure no `npm run db:studio` process is holding the DB open.

## Content validation errors ("unknown source/muscle/…")
`npm run content:validate` reports the exact broken reference. Fix the slug in `/content` (a citation
pointing at a missing `Source`, or an exercise referencing a missing muscle) and re-run.

## "You must be signed in" when answering a quiz as a guest
Guests can preview and see explanations, but nothing is saved. Log in to record attempts and mastery.

## Theme flashes on load
The inline `themeInitScript` in the root layout sets the theme before paint. If you see a flash, ensure
that script is present in `<head>` and JS is enabled.

## Port 3000 in use
Run on another port: `PORT=3001 npm run dev`.

## Build fails on ESLint prose rules
`react/no-unescaped-entities` and `@next/next/no-img-element` are intentionally disabled in
`.eslintrc.json` (prose-heavy pages + our own SVGs). Re-enable if you prefer stricter rules.

## Production: Postgres connection errors
Ensure `provider = "postgresql"` in `schema.prisma`, `DATABASE_URL` includes `?sslmode=require`, and
you've run `npx prisma migrate deploy`. Check the host's logs (Vercel → Deployments → Logs).
