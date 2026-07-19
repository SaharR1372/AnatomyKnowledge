import { describe, it, expect } from "vitest";
import {
  sources, visualAssets, bodyRegions, exercises, lessons, questions,
} from "../content";

const sourceSlugs = new Set(sources.map((s) => s.slug));
const muscleSlugs = new Set(bodyRegions.flatMap((r) => r.muscles.map((m) => m.slug)));

describe("content integrity", () => {
  it("every citation references a source that exists (no invented citations)", () => {
    const all = [
      ...bodyRegions.flatMap((r) => r.citations ?? []),
      ...bodyRegions.flatMap((r) => r.muscles.flatMap((m) => m.citations ?? [])),
      ...exercises.flatMap((e) => e.citations ?? []),
      ...lessons.flatMap((l) => l.citations ?? []),
      ...questions.flatMap((q) => q.citations ?? []),
    ];
    for (const c of all) expect(sourceSlugs.has(c.sourceSlug), `missing source ${c.sourceSlug}`).toBe(true);
    expect(all.length).toBeGreaterThan(0);
  });

  it("every exercise references muscles that exist", () => {
    for (const e of exercises) {
      for (const slug of [...e.primaryMuscles, ...(e.secondaryMuscles ?? []), ...(e.stabilizerMuscles ?? [])]) {
        expect(muscleSlugs.has(slug), `${e.slug} -> ${slug}`).toBe(true);
      }
      expect(e.primaryMuscles.length).toBeGreaterThan(0);
    }
  });

  it("every non-matching question has exactly one correct option and an explanation", () => {
    for (const q of questions) {
      expect(q.explanation.length).toBeGreaterThan(0);
      if (q.type !== "matching") {
        expect(q.options.filter((o) => o.isCorrect).length).toBe(1);
      }
    }
  });

  it("source-checked lessons and muscles carry at least one citation", () => {
    for (const l of lessons) {
      if (l.status === "source_checked" || l.status === "expert_reviewed") {
        expect((l.citations ?? []).length, `lesson ${l.slug}`).toBeGreaterThan(0);
      }
    }
    for (const m of bodyRegions.flatMap((r) => r.muscles)) {
      if (m.status === "source_checked" || m.status === "expert_reviewed") {
        expect((m.citations ?? []).length, `muscle ${m.slug}`).toBeGreaterThan(0);
      }
    }
  });

  it("every visual asset records alt text, license, and attribution", () => {
    for (const a of visualAssets) {
      expect(a.altText.length, `${a.slug} alt`).toBeGreaterThan(0);
      expect(a.license.length, `${a.slug} license`).toBeGreaterThan(0);
      expect(a.attributionText.length, `${a.slug} attribution`).toBeGreaterThan(0);
    }
  });
});
