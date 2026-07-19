# ADR 001: Technology Stack

**Date:** 2026-07-19 · **Status:** Accepted

## Problem
Choose a practical, maintainable stack for a mobile-friendly, evidence-based learning app with
accounts, quizzes, and per-user progress — buildable by a small team and deployable cheaply.

## Considered options
- **Next.js (App Router) + TypeScript + Prisma** (full-stack, one codebase).
- Separate SPA (React/Vite) + standalone API (Express/Nest) + ORM.
- A backend framework with server-rendered templates (Django/Rails).

## Selected option
Next.js 15 (App Router) + TypeScript + Tailwind CSS + Prisma, with Auth.js for auth and Vitest for
tests. Matches the brief's suggested direction.

## Reason
- One codebase for UI and server logic (server components + server actions) — less glue, fewer moving
  parts for an MVP.
- Type safety end to end (TypeScript + Prisma + Zod) reduces bugs and documents intent.
- First-class Vercel deployment and PWA support; large ecosystem and hiring familiarity (portfolio
  value).

## Advantages
- Fast iteration; strong DX; SSR for performance and SEO on public pages.
- Server actions keep mutations colocated, validated, and auth-guarded.

## Disadvantages
- App Router + Auth.js v5 are relatively new; some APIs are still stabilizing.
- Server/client boundary requires discipline.

## Future consequences
- Easy to add pages/actions; a future admin UI fits naturally. If the API needs to serve other clients
  (mobile app), some server actions may need REST/GraphQL equivalents.
