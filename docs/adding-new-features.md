# Adding New Features

## Where things go

| You want to add… | Put it in… |
|---|---|
| A page/route | `src/app/<route>/page.tsx` (App Router). |
| A reusable UI piece | `src/components/…` (`"use client"` only if interactive). |
| Backend/mutation logic | A server action in `src/lib/actions/…` (`"use server"`). |
| Shared read logic | `src/lib/queries.ts` or a new `src/lib/*.ts` module. |
| A DB model | `prisma/schema.prisma`. |
| Enum-like values | `src/lib/enums.ts`. |
| Input validation | `src/lib/validation.ts` (Zod). |
| Tests | `tests/*.test.ts`. |

## Create a new page

Add `src/app/example/page.tsx` exporting a default async server component. Fetch data via `prisma`
directly; export `metadata` for the title. Add a nav/footer link in `src/components/SiteNav.tsx` or
`src/app/layout.tsx` if it should be discoverable.

## Add a protected route

Call `requireUser("/example")` at the top of the page/action — it redirects unauthenticated users to
`/login?callbackUrl=/example`. For admin/editor pages, call `requireEditor()`.

## Add a database model

1. Add the model to `prisma/schema.prisma` (follow existing conventions: `cuid` ids, timestamps,
   `String` for enums, indexes on FKs, cascade rules).
2. Regenerate + sync: `npm run db:generate && npm run db:push` (dev) or create a migration
   (`npm run db:migrate`) before production.
3. If it's user-owned, add a unique constraint including `userId` and always scope queries by the
   session user.

## Add a server action / API endpoint

Prefer **server actions** (`"use server"`) over API routes for form/mutation work:

```ts
"use server";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/db";
import { z } from "zod";

const schema = z.object({ /* … */ });

export async function myAction(input: unknown) {
  const user = await requireUser();
  const data = schema.parse(input);
  // …always scope by user.id…
  await prisma.something.create({ data: { userId: user.id, /* … */ } });
}
```

Use a route handler (`src/app/api/*/route.ts`) only for non-form HTTP needs (webhooks, third-party
callbacks) — the Auth.js handler is the existing example.

## Add tests

Put unit tests (pure logic) and integration tests (DB, with mocked `@/lib/session`) in `tests/`. See
[`testing.md`](testing.md). Always add an isolation test when introducing user-owned data.

## Update documentation

When you change behavior or schema: update the relevant `docs/*.md`, `CHANGELOG.md`, and
`docs/roadmap.md`. For notable decisions, add an ADR in `docs/decisions/`.

## Avoid breaking existing functionality

- Run `npm run typecheck && npm run lint && npm run content:validate && npm test && npm run build`
  before committing.
- Keep server/client boundaries clean: don't import server-only modules into client components.
- Don't leak `isCorrect` or other server-only data to the client before it's appropriate.
- Preserve user-data isolation: never trust a client-supplied `userId`.
