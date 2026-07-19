# Spaced Repetition

Implemented in [`src/lib/spaced-repetition.ts`](../src/lib/spaced-repetition.ts) as pure, deterministic
functions (easy to unit test — see `tests/spaced-repetition.test.ts`). Persisted per user per item in
the generic `ReviewState` table (`itemType` = `question` today; `flashcard` reserved for Phase 2).

## Algorithm (SM-2 variant)

1. **Grade (0–5)** from the answer + confidence (`gradeFromAnswer`):
   - Wrong + "I don't know" → 0; wrong + "unsure" → 1; other wrong → 2.
   - Correct → 4 by default; "know"/"too easy" → 5; "unsure"/"don't know but correct" → 3.
2. **Schedule** (`schedule`): grade ≥ 3 is a pass.
   - Pass: interval grows 1 day → 6 days → `round(interval × easeFactor)`; repetitions increment.
   - Fail (lapse): repetitions reset to 0, interval = 1 day, `lapses` increment.
   - Ease factor updated by the standard SM-2 formula, floored at 1.3.
3. **Due date** = now + interval days. The review queue (`/quiz/review`) selects items with
   `dueDate <= now`, soonest first.

Missed questions therefore reappear quickly (1 day) and reinforce until answered well repeatedly, while
well-known items spread out — satisfying "questions answered incorrectly should appear more frequently
until mastery."

## Mastery interaction

`estimateMastery(repetitions, easeFactor, lapses)` returns `0..1`; mastered `>= 0.8`. It needs ~4 clean
repetitions to saturate, adds a small ease bonus, and subtracts a per-lapse penalty — so a single
correct answer never marks a topic mastered.

## What is tracked (spec §10)

First-attempt correctness (`ReviewState.firstAttemptCorrect`, `QuizAttempt.firstAttempt`), current
mastery, time since last review (`lastReviewedAt` + `dueDate`), lapses, and self-reported confidence
(`QuizAttempt.confidence`). Weak areas surface via low mastery within a lesson/region/domain.

## Extending to flashcards (Phase 2)

`ReviewState` already keys on `(userId, itemType, itemId)`. A flashcard review UI would grade a card,
call `schedule()`, and upsert a `ReviewState` with `itemType: "flashcard"` — no schema change needed.
