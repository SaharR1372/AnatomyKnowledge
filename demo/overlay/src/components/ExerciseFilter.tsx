"use client";

// DEMO OVERLAY — the client-side half of the static exercise library.
//
// The real /exercises page filters in the database from `searchParams`, which
// needs a server on every request. The catalogue is small (tens of exercises),
// so the static demo ships the whole list once and filters it in the browser.
// Same controls, same results — and no page reload between filters.

import Link from "next/link";
import { useMemo, useState } from "react";
import { Card, Badge, LevelBadge, EmptyState } from "@/components/ui";

export interface DemoExercise {
  id: string;
  slug: string;
  name: string;
  simpleExplanation: string;
  difficulty: string;
  movementPattern: string | null;
  setting: string | null;
  chain: string | null;
  unilateral: boolean;
  primaryMuscles: { slug: string; commonName: string }[];
  allMuscleSlugs: string[];
}

interface Props {
  exercises: DemoExercise[];
  muscles: { slug: string; commonName: string }[];
  patterns: string[];
}

const selectClass = "rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm";
const emptyFilters = { q: "", muscle: "", difficulty: "", pattern: "", setting: "", chain: "" };

export function ExerciseFilter({ exercises, muscles, patterns }: Props) {
  const [f, setF] = useState(emptyFilters);
  const set = (key: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((prev) => ({ ...prev, [key]: e.target.value }));

  const results = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return exercises.filter(
      (ex) =>
        (!q || ex.name.toLowerCase().includes(q)) &&
        (!f.muscle || ex.allMuscleSlugs.includes(f.muscle)) &&
        (!f.difficulty || ex.difficulty === f.difficulty) &&
        (!f.pattern || ex.movementPattern === f.pattern) &&
        (!f.setting || ex.setting === f.setting) &&
        (!f.chain || ex.chain === f.chain),
    );
  }, [exercises, f]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border border-border bg-surface p-4">
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Search
          <input value={f.q} onChange={set("q")} placeholder="e.g. press" className={selectClass} />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Primary muscle
          <select value={f.muscle} onChange={set("muscle")} className={selectClass}>
            <option value="">Any</option>
            {muscles.map((m) => <option key={m.slug} value={m.slug}>{m.commonName}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Difficulty
          <select value={f.difficulty} onChange={set("difficulty")} className={selectClass}>
            <option value="">Any</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Pattern
          <select value={f.pattern} onChange={set("pattern")} className={selectClass}>
            <option value="">Any</option>
            {patterns.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Setting
          <select value={f.setting} onChange={set("setting")} className={selectClass}>
            <option value="">Any</option>
            <option value="home">Home</option>
            <option value="gym">Gym</option>
            <option value="both">Both</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Chain
          <select value={f.chain} onChange={set("chain")} className={selectClass}>
            <option value="">Any</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() => setF(emptyFilters)}
          className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-2"
        >
          Reset
        </button>
      </div>

      <p className="mb-3 text-sm text-muted">
        {results.length} exercise{results.length === 1 ? "" : "s"}
      </p>

      {results.length === 0 ? (
        <EmptyState title="No exercises match these filters." hint="Try resetting or widening your search." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((ex) => (
            <Link key={ex.id} href={`/exercises/${ex.slug}`} className="block">
              <Card className="h-full transition hover:border-primary">
                <div className="mb-2 flex items-center gap-2">
                  <LevelBadge level={ex.difficulty} />
                  {ex.movementPattern && <Badge tone="blue">{ex.movementPattern}</Badge>}
                </div>
                <h2 className="font-semibold">{ex.name}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{ex.simpleExplanation}</p>
                <p className="mt-2 text-xs text-muted">
                  Primary: {ex.primaryMuscles.map((m) => m.commonName).join(", ") || "—"}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
