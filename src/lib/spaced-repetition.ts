// Spaced-repetition scheduling based on the well-known SM-2 algorithm
// (Piotr Woźniak, SuperMemo). Pure and deterministic so it is easy to unit test.
//
// We translate the app's simple answer signal (correct/incorrect + self-reported
// confidence) into an SM-2 "quality" grade from 0..5, then update the interval,
// ease factor, and repetition count. Incorrectly answered items get a short
// interval so they resurface sooner (spec section 10).

import type { Confidence } from "./enums";

export interface ReviewInput {
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  lapses: number;
}

export interface ReviewOutput {
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  lapses: number;
  masteryLevel: number;
  dueDate: Date;
}

/** Map an answer + confidence to an SM-2 quality grade (0..5). */
export function gradeFromAnswer(isCorrect: boolean, confidence?: Confidence | null): number {
  if (!isCorrect) {
    // "I don't know" is a cleaner failure (0) than a confident wrong answer (2).
    if (confidence === "dont_know") return 0;
    if (confidence === "unsure") return 1;
    return 2;
  }
  switch (confidence) {
    case "too_easy":
      return 5;
    case "know":
      return 5;
    case "unsure":
      return 3;
    case "dont_know":
      // Correct but reported "don't know" (likely a lucky guess) — treat as weak.
      return 3;
    default:
      return 4;
  }
}

/**
 * Compute the next review state from the current state and the answer grade.
 * `now` is injectable for deterministic tests.
 */
export function schedule(
  input: ReviewInput,
  grade: number,
  now: Date = new Date(),
): ReviewOutput {
  const passed = grade >= 3;
  let { repetitions, easeFactor, lapses } = input;
  let intervalDays: number;

  if (passed) {
    if (repetitions === 0) {
      intervalDays = 1;
    } else if (repetitions === 1) {
      intervalDays = 6;
    } else {
      intervalDays = Math.round(input.intervalDays * easeFactor);
    }
    repetitions += 1;
  } else {
    // Lapse: reset the repetition streak and review again very soon.
    repetitions = 0;
    intervalDays = 1;
    lapses += 1;
  }

  // Standard SM-2 ease-factor update, clamped to a sensible floor.
  easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const dueDate = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);

  return {
    repetitions,
    intervalDays,
    easeFactor,
    lapses,
    masteryLevel: estimateMastery(repetitions, easeFactor, lapses),
    dueDate,
  };
}

/**
 * A 0..1 mastery estimate. Deliberately requires sustained success: a single
 * correct answer never reaches "mastered" (>= 0.8), per spec section 10.
 */
export function estimateMastery(repetitions: number, easeFactor: number, lapses: number): number {
  if (repetitions === 0) return 0;
  const base = Math.min(repetitions / 4, 1); // needs ~4 clean reps to saturate
  const easeBonus = Math.min(Math.max((easeFactor - 1.3) / (2.5 - 1.3), 0), 1) * 0.15;
  const lapsePenalty = Math.min(lapses * 0.1, 0.4);
  return Math.max(0, Math.min(1, base * 0.85 + easeBonus - lapsePenalty));
}

export const MASTERED_THRESHOLD = 0.8;

export function isMastered(masteryLevel: number): boolean {
  return masteryLevel >= MASTERED_THRESHOLD;
}
