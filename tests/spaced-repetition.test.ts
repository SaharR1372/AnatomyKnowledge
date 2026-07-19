import { describe, it, expect } from "vitest";
import { gradeFromAnswer, schedule, estimateMastery, isMastered } from "@/lib/spaced-repetition";

describe("spaced repetition — grading", () => {
  it("grades a confident correct answer highest and a blank wrong answer lowest", () => {
    expect(gradeFromAnswer(true, "know")).toBe(5);
    expect(gradeFromAnswer(true, "too_easy")).toBe(5);
    expect(gradeFromAnswer(true)).toBe(4);
    expect(gradeFromAnswer(false, "unsure")).toBe(1);
    expect(gradeFromAnswer(false, "dont_know")).toBe(0);
  });
});

describe("spaced repetition — scheduling", () => {
  const now = new Date("2026-01-01T00:00:00Z");

  it("advances the interval on repeated success (1 -> 6 -> longer)", () => {
    const first = schedule({ repetitions: 0, intervalDays: 0, easeFactor: 2.5, lapses: 0 }, 5, now);
    expect(first.repetitions).toBe(1);
    expect(first.intervalDays).toBe(1);

    const second = schedule({ ...first }, 5, now);
    expect(second.repetitions).toBe(2);
    expect(second.intervalDays).toBe(6);

    const third = schedule({ ...second }, 5, now);
    expect(third.intervalDays).toBeGreaterThan(6);
  });

  it("resets and reschedules soon after a wrong answer (a lapse)", () => {
    const good = schedule({ repetitions: 3, intervalDays: 20, easeFactor: 2.5, lapses: 0 }, 5, now);
    const lapsed = schedule({ ...good }, 0, now);
    expect(lapsed.repetitions).toBe(0);
    expect(lapsed.intervalDays).toBe(1);
    expect(lapsed.lapses).toBe(1);
  });

  it("never lets the ease factor drop below 1.3", () => {
    let state = { repetitions: 0, intervalDays: 0, easeFactor: 1.3, lapses: 0 };
    for (let i = 0; i < 10; i++) state = schedule(state, 0, now);
    expect(state.easeFactor).toBeGreaterThanOrEqual(1.3);
  });
});

describe("mastery", () => {
  it("does NOT mark a topic mastered from a single correct answer", () => {
    const one = schedule({ repetitions: 0, intervalDays: 0, easeFactor: 2.5, lapses: 0 }, 5, new Date());
    expect(isMastered(one.masteryLevel)).toBe(false);
  });

  it("reaches mastery only after sustained success", () => {
    expect(estimateMastery(1, 2.5, 0)).toBeLessThan(0.8);
    expect(estimateMastery(4, 2.5, 0)).toBeGreaterThanOrEqual(0.8);
  });

  it("penalizes lapses", () => {
    expect(estimateMastery(4, 2.5, 2)).toBeLessThan(estimateMastery(4, 2.5, 0));
  });
});
