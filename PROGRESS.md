# Build Progress Tracker

> This file tracks the multi-session build of the Anatomy & Personal-Training Learning Platform
> described in `request.md`. If a session is resumed (manually or by a scheduled job), **read this
> file first**, then continue from the first unchecked item. Update the checkboxes and the
> "Session log" as you go. Keep entries terse.

**Project root:** `/home/exx/Vscode-Sahar/AnatomyKnowledge`
**Stack decided:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v3 · Prisma · SQLite (dev) → Postgres (prod) · Auth.js v5 (credentials) · Vitest
**Package manager:** npm

## ▶ START HERE TOMORROW (resume in one glance)
**State as of 2026-07-25 (end of session):** Full MVP is built, tested, documented, and committed.
The app runs (`npm run dev`), `npm run build` is green, and **18 tests pass**. Nothing is half-finished
— every commit is clean.

**Current content:** 11 of 16 body regions complete at full depth →
`sources=9 vocab=14 assets=13 regions=11 muscles=38 movements=30 exercises=35 lessons=28 questions=64`.
Regions done: **Shoulder, Chest, Upper Back, Lower Back, Core & Abdominal, Pelvis & Hips, Glutes, Thighs, Knees, Lower Legs, Ankles & Feet** (each with a "How to say it" pronunciation guide + audio).

**THE NEXT TASK:** build the **Arms** region (then Elbows, then the rest — order below). The user has
asked to proceed through ALL remaining regions automatically, back-to-back, without pausing to ask for
confirmation between them — just keep going region by region using the recipe below until all 16 are done
(or the session ends, in which case a fresh session should read this file and resume automatically).
Follow the exact per-region pattern (see next section). Each region = ~1 file + 3 small wirings + a commit.

**Quick sanity check before starting:**
```bash
cd /home/exx/Vscode-Sahar/AnatomyKnowledge
git log --oneline | head      # confirm clean history
npm run content:validate && npm test   # should pass
```

## How to resume
1. Read `request.md` (the full spec) and this file.
2. `cd` into the project root. Run `git log --oneline | head` and `ls` to see current state.
3. Continue from the first unchecked region below. Commit after each region.
4. Keep content **evidence-based**: every educational claim needs a Source + Citation row. Never invent citations.

## Per-region build recipe (proven 3× — copy Chest/Upper-Back as templates)
1. `content/regions/<region>.ts` — export `<region>Region`, `<region>Movements`, `<region>Exercises`,
   `<region>Lessons`, `<region>Questions`. On the region object include `assetSlugs: ["<region>-region"]`
   and a `pronunciations: [{term, say}]` array for the hard words (the pronunciation guide + audio then
   appear automatically on the Anatomy overview).
2. Create `public/anatomy/<region>-region.svg` (original, simple, labelled) and add a `VisualAssetSeed`
   for it in `content/visual-assets.ts` (CC0, with altText).
3. Add a module `the-<region>` to the beginner path in `content/curriculum.ts` (bump `training-safely`
   order to stay last). Lessons reference this `moduleSlug`.
4. Wire the 5 exports into `content/index.ts` (append to bodyRegions/movements/exercises/lessons/questions).
5. `npm run content:validate` → `npm run seed` → `npm run typecheck` → `npm run build` → `npm test` → commit.
   (If you changed `schema.prisma`, run `npm run db:push` before seed.)
Reminder: some muscles are canonical to a later region (e.g. pec major→Chest, trapezius→Upper Back were
moved out of Shoulder). Move by changing which region file defines them; the muscle **slug stays stable**
so existing exercise/quiz links keep working.

---

## Phase 0 — Scaffold & foundations
- [x] Root config: package.json, tsconfig, next.config, tailwind, postcss, .gitignore, .env.example
- [x] Prisma schema (full data model) + SQLite datasource
- [x] lib: db client, auth config, validation, spaced-repetition, mastery
- [x] Global styles + layout + theme (light/dark)
- [x] git init + first commit

## Phase 1 — Working MVP (vertical slice: shoulder region)
- [x] Auth: register + login + logout + session (separate accounts, hashed passwords)
- [x] Seed data: sources, body region (shoulder), muscles, bones, joints, movements, exercises, lessons, quizzes, visual assets, vocabulary
- [x] Seed script that validates + imports content
- [x] Landing page
- [x] Dashboard (progress overview)
- [x] Learning Path + Lesson pages (with citations + safety + vocabulary)
- [x] Anatomy: muscle detail pages
- [x] Exercise library + exercise detail pages
- [x] Quiz engine: attempt, score, explanations, save history
- [x] Progress tracking (per-user, isolated)
- [x] Sources & References page
- [x] Image Credits page
- [x] Profile & Settings
- [x] Mobile-responsive nav + PWA manifest

## Phase 1 — Quality
- [ ] Tests: auth, user-data isolation, quiz scoring, progress, citation display, spaced-repetition
- [x] Loading / error / empty states
- [x] Accessibility pass (alt text, keyboard, contrast) — basics in place; formal audit later
- [x] Typecheck + lint + build all green (23 routes)

## Phase 1 — Docs & handoff
- [ ] README.md (full)
- [ ] docs/ (architecture, database-schema, content-system, citations-and-sources, visual-assets-and-licenses, authentication-and-security, quiz-and-mastery-system, spaced-repetition, deployment, development-guide, adding-new-content, adding-new-features, testing, troubleshooting, roadmap)
- [ ] docs/decisions/001-004 ADRs
- [ ] CHANGELOG.md, docs/roadmap.md
- [ ] .github/workflows/ci.yml + templates + SECURITY.md + CONTRIBUTING.md
- [ ] Final deliverables summary (section 32) written to docs/HANDOFF.md
- [ ] Git/GitHub publishing guide (docs/github-guide.md)

## Content expansion — ALL body regions at FULL depth (user request 2026-07-19)
Goal: author every body region from request.md §5 to the same depth/quality as the shoulder
(bones + joints + 6-8 cited muscles + movements + 3-6 exercises + 4-7 lessons + 10+ quizzes).
Quality bar is NON-NEGOTIABLE: every anatomical claim needs a real citation (OpenStax A&P 2e
chapters 8-11 cover the musculoskeletal system; MedlinePlus for plain-language). NEVER fabricate.

**Pattern for each new region (documented in docs/adding-new-content.md):**
1. Create `content/regions/<region>.ts` exporting `{ region, movements, exercises, lessons, questions }`.
2. Add a module for the region to the beginner path in `content/curriculum.ts` (slug `the-<region>`).
3. Wire the exports into `content/index.ts` (bodyRegions, movements, exercises, lessons, questions).
4. `npm run content:validate` → `npm run seed` → `npm run build` → commit.

Region checklist (request.md §5):
- [x] Shoulders (seed vertical slice — in content/anatomy.ts)
- [x] Chest (content/regions/chest.ts — pec major moved here from shoulder; pec minor, serratus, diaphragm, intercostals; 3 exercises, 3 lessons, 6 quizzes)
- [x] Upper back (content/regions/upper-back.ts — trapezius moved here from shoulder; latissimus dorsi, rhomboids, levator scapulae, teres major; 3 exercises, 2 lessons, 4 quizzes)
- [x] Lower back (content/regions/lower-back.ts — erector spinae, quadratus lumborum, multifidus; lumbar vertebrae + sacrum; Romanian deadlift, back extension, bird-dog; 2 lessons, 5 quizzes; heavy safety/hip-hinge emphasis)
- [x] Core & abdominal (content/regions/core.ts — rectus abdominis, external/internal oblique, transversus abdominis; plank, dead bug, pallof press; anti-rotation/anti-extension framing; 2 lessons, 5 quizzes)
- [x] Pelvis & hips (content/regions/pelvis-hips.ts — iliopsoas, tensor fasciae latae, piriformis; hip bone, hip joint, sacroiliac joint; hip flexor march, band hip abduction, hip external-rotation mobility; 2 lessons, 5 quizzes)
- [x] Glutes (content/regions/glutes.ts — gluteus maximus/medius/minimus; femur bone introduced here; barbell hip thrust, glute bridge, side-lying hip abduction; 2 lessons, 5 quizzes)
- [x] Thighs (content/regions/thighs.ts — quadriceps femoris, hamstrings, adductors, sartorius; tibia bone + knee-joint introduced here; back squat, walking lunge, leg extension, leg curl; 2 lessons, 5 quizzes)
- [x] Knees — JOINT region (content/regions/knees.ts — patella bone + patellofemoral-joint, ACL/PCL/MCL/LCL + menisci covered in text/safety [no Ligament model in schema]; popliteus muscle; wall sit, banded terminal knee extension, lateral step-down; 2 lessons, 5 quizzes)
- [x] Lower legs (content/regions/lower-legs.ts — gastrocnemius, soleus, tibialis anterior, fibularis longus; fibula bone + ankle-joint introduced here; standing calf raise, seated calf raise, tibialis toe raise; 2 lessons, 5 quizzes)
- [x] Ankles & feet — JOINT region (content/regions/ankles-feet.ts — talus + calcaneus bones, subtalar joint [reuses "ankle-joint" from lower-legs.ts]; intrinsic foot muscles grouped entry; single-leg balance hold, short foot exercise, banded ankle eversion; 2 lessons, 5 quizzes)
Remaining (build in this order — 5 left):
- [ ] Arms  ← **NEXT**: biceps brachii, triceps brachii, brachialis, coracobrachialis; curls, extensions
- [ ] Pelvis & hips (iliopsoas/hip flexors, hip joint; hip-flexor & mobility work)
- [ ] Glutes (gluteus maximus/medius/minimus; hip thrust, glute bridge, abduction)
- [ ] Thighs (quadriceps, hamstrings, adductors, sartorius; squat, lunge, RDL, leg curl/extension)
- [ ] Knees (JOINT region: patella, ACL/MCL/meniscus, common injuries, safety; muscles live in Thighs)
- [ ] Lower legs (gastrocnemius, soleus, tibialis anterior, fibularis/peroneals; calf raise, toe raise)
- [ ] Ankles & feet (JOINT region: ankle/foot joints, ligaments, intrinsic foot muscles; balance/mobility)
- [ ] Arms (biceps brachii, triceps brachii, brachialis, coracobrachialis; curls, extensions)
- [ ] Elbows (JOINT region: elbow joint, ligaments, common issues; muscles live in Arms/Forearms)
- [ ] Forearms & hands (wrist flexors/extensors, grip; wrist curls, carries, grip work)
- [ ] Head & neck (sternocleidomastoid, scalenes, splenius, upper trapezius link; neck posture/safety)
- [ ] Spine (STRUCTURE region: vertebral column, curves, discs, neutral spine; ties Lower back + Core)

NOTE for JOINT/STRUCTURE regions (knees, ankles, elbows, spine): fewer UNIQUE muscles — cover the joint
structure, ligaments, common injuries, and safety, and reference muscles that live in adjacent regions.
Every region MUST include: `assetSlugs` (an original SVG) + a `pronunciations` list (guide + audio auto-render).
Bone/joint/muscle slugs are GLOBALLY UNIQUE (Prisma `@unique`) — don't redefine a slug that already exists
in another region. Two established patterns: (1) an exercise can reference a jointSlug/muscleSlug owned by
a DIFFERENT region (e.g. upper-back.ts's row exercise reuses shoulder.ts's "glenohumeral-joint"; thighs.ts's
squat reuses pelvis-hips.ts's "hip-joint") — just don't redefine the joint/bone itself; (2) if a region needs
its OWN region-specific display entry for a shared structure, give it a new, distinctly-named slug (e.g.
upper-back.ts's own "scapulothoracic-upper-back" joint, separate from shoulder.ts's "scapulothoracic-articulation").
The knee joint ("knee-joint", tibiofemoral) was already introduced in thighs.ts because squat/lunge/leg
extension/leg curl needed it — the Knees region should reuse that slug and add its own NEW joint entry
(e.g. "patellofemoral-joint") plus a NEW "patella" bone for the kneecap-specific detail, not redefine knee-joint.
Note: some muscles act across regions (e.g. pectoralis major = chest, was seeded under shoulder;
move to its canonical region when building that region). Muscle slug stays stable so exercise/quiz
links keep working; only `bodyRegionId` changes.

## Later phases (deferred — architecture must support them)
- [ ] Phase 2: interactive body map, more regions, flashcards UI, full spaced-repetition review UI, advanced exercise search, notes, bookmarks, certification practice mode, PWA install
- [ ] Phase 3: intermediate/advanced paths, biomechanics visualizations, case studies, recommendations, multilingual, study groups, expert review workflow

---

## Session log
- 2026-07-19: Session 1 started. Inspected empty dir. Set stack. Created this tracker + resume cron. Beginning Phase 0.
- 2026-07-25: Resumed. Committed pending PROGRESS.md tracker update. Built the **Lower Back** region
  (content/regions/lower-back.ts): lumbar vertebrae + sacrum, lumbar intervertebral/lumbosacral joints,
  erector spinae/quadratus lumborum/multifidus, spinal flexion/extension/lateral-flexion movements,
  Romanian deadlift/back extension/bird-dog exercises (heavy hip-hinge safety emphasis), 2 lessons, 5 quiz
  questions, pronunciation guide, original SVG asset. Wired into curriculum + index. Validate/seed/typecheck/
  build/test all green (18 tests). User then asked to proceed fully autonomously through all remaining
  regions, back-to-back, without pausing for confirmation between them. Built **Core & Abdominal** next
  (content/regions/core.ts): rectus abdominis, external/internal oblique, transversus abdominis; anti-
  rotation/anti-extension exercise framing (plank, dead bug, Pallof press); 2 lessons, 5 quiz questions,
  pronunciation guide, original SVG. Validate/seed/typecheck/build/test all green. Then built **Pelvis &
  Hips** (content/regions/pelvis-hips.ts): hip bone, hip joint, sacroiliac joint; iliopsoas, tensor
  fasciae latae, piriformis; hip-flexor march, band hip abduction, hip external-rotation mobility drill;
  2 lessons, 5 quiz questions, pronunciation guide, original SVG. All checks green. Then built **Glutes**
  (content/regions/glutes.ts): gluteus maximus/medius/minimus (femur bone introduced here); barbell hip
  thrust, glute bridge, side-lying hip abduction; 2 lessons, 5 quiz questions, pronunciation guide,
  original SVG. All checks green. Then built **Thighs** (content/regions/thighs.ts): quadriceps femoris,
  hamstrings, adductors, sartorius (tibia bone + "knee-joint" tibiofemoral joint introduced here since
  the exercises needed it); back squat, walking lunge, leg extension, leg curl; 2 lessons, 5 quiz
  questions, pronunciation guide, original SVG. All checks green. Documented the global-slug-uniqueness
  pattern (joint/bone/muscle slugs are Prisma-unique; reuse across regions via jointSlug/muscleSlug refs,
  or add a new distinctly-named slug for a region's own display entry) in the NOTE below so future
  JOINT-type regions (Knees, Ankles, Elbows, Spine) get it right. Then built **Knees** (content/regions/
  knees.ts), the first JOINT-type region: patella bone, patellofemoral-joint (reusing "knee-joint" from
  thighs.ts rather than redefining it); ACL/PCL/MCL/LCL and menisci covered in descriptive text/safety
  notes (the schema has no separate Ligament model); popliteus (a small knee-specific muscle with no
  natural home in Thighs); wall sit, banded terminal knee extension, lateral step-down; 2 lessons, 5 quiz
  questions, pronunciation guide, original SVG. All checks green. Then built **Lower Legs**
  (content/regions/lower-legs.ts): fibula bone + "ankle-joint" (talocrural, introduced here since calf-
  raise/toe-raise exercises needed it); gastrocnemius, soleus, tibialis anterior, fibularis longus;
  standing calf raise, seated calf raise, tibialis toe raise (straight-knee-vs-bent-knee teaching angle);
  2 lessons, 5 quiz questions, pronunciation guide, original SVG. All checks green. Then built **Ankles &
  Feet** (content/regions/ankles-feet.ts), the second JOINT-type region: talus + calcaneus bones,
  subtalar joint (reuses "ankle-joint" from lower-legs.ts rather than redefining); intrinsic foot muscles
  (grouped entry, arch/balance role); single-leg balance hold, short foot exercise, banded ankle eversion
  (ties back to fibularis longus from Lower Legs); 2 lessons, 5 quiz questions, pronunciation guide,
  original SVG. All checks green. All lower-body regions are now done (Lower Back through Ankles & Feet).
  Continuing sequentially into the upper-limb regions, fully autonomously — no per-region confirmation
  needed. Next: Arms.
