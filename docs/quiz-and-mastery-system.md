# Quiz & Mastery System

## Question model

`QuizQuestion` supports `multiple_choice`, `true_false`, `fill_blank`, `matching`, `identify`, and
`scenario`. Each has a `prompt`, an `explanation` (why the correct answer is correct), a `difficulty`,
optional `questionData` (JSON, e.g. matching pairs), and `AnswerOption` rows with per-option
`rationale`. Each question links to one piece of content and optionally a certification domain.

## Answering flow (`submitAnswerAction`)

1. The client (`QuizRunner`) sends `{ questionId, selectedOptionId?, confidence?, selfCorrect? }`.
2. The server loads the question + options and **decides correctness itself**:
   - Option-based types → `selectedOption.isCorrect`.
   - Self-graded types (`matching`, `fill_blank`) → the user reveals the answer and reports
     `selfCorrect` (appropriate for a self-study tool).
3. If signed in: a `QuizAttempt` is saved (with `firstAttempt` detection and `confidence`), and the
   `ReviewState` is updated via spaced repetition.
4. If a guest: correctness + explanation are returned for **preview**, but nothing is saved.
5. The response includes `isCorrect`, the full `explanation`, per-option rationales, updated mastery,
   and the next review interval.

After answering, the UI shows whether it was correct, why, why the alternatives are wrong, and the
lesson/source behind it — matching the spec's "after every answer" requirements.

## Confidence

Before answering, the learner can optionally report confidence: **I don't know / I'm unsure / I know
this / Too easy**. This feeds the spaced-repetition grade (see below), so a lucky correct guess and a
confident correct answer are scheduled differently.

## Mastery

Mastery is a `0..1` estimate per question stored on `ReviewState.masteryLevel`, computed from
repetitions, ease factor, and lapses (`estimateMastery` in `src/lib/spaced-repetition.ts`). A topic is
**mastered** at `>= 0.8`, which is unreachable from a single correct answer — sustained success is
required (spec §10). The dashboard counts mastered questions and computes certification-domain
readiness as the average mastery of that domain's questions (explicitly labelled an educational
indicator, not a pass prediction).

## Progress tracked per user

First-attempt accuracy, overall accuracy, current/best streak, per-lesson completion, review due
counts, mastered counts, recently studied lessons, and recommended next lesson — all private and shown
on the dashboard.

## Quiz scopes

`buildQuizSet(scope, value)` produces sets for: `lesson`, `muscle`, `region`, `domain` (cert study),
`all` (mixed), and `review` (due items for the signed-in user). Options are shuffled and never carry
correctness to the client.

## Safety of answer choices

Distractors are written so they don't accidentally teach unsafe or medically incorrect ideas; each
option's `rationale` explains why it's right or wrong. Scenario/scope questions reinforce referral and
scope-of-practice boundaries.
