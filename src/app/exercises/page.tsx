import type { Metadata } from "next";
import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { Card, PageHeader, Badge, LevelBadge, EmptyState } from "@/components/ui";

export const metadata: Metadata = { title: "Exercise Library" };

type SP = Record<string, string | undefined>;

const selectClass = "rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm";

export default async function ExercisesPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;

  const where: Prisma.ExerciseWhereInput = {};
  if (sp.q) where.name = { contains: sp.q };
  if (sp.difficulty) where.difficulty = sp.difficulty;
  if (sp.pattern) where.movementPattern = sp.pattern;
  if (sp.setting) where.setting = sp.setting;
  if (sp.chain) where.chain = sp.chain;
  if (sp.unilateral) where.unilateral = sp.unilateral === "yes";
  if (sp.muscle) where.muscles = { some: { muscle: { slug: sp.muscle } } };

  const [exercises, muscles, patterns] = await Promise.all([
    prisma.exercise.findMany({
      where,
      orderBy: { name: "asc" },
      include: { muscles: { where: { role: "primary" }, include: { muscle: true } } },
    }),
    prisma.muscle.findMany({ orderBy: { commonName: "asc" }, select: { slug: true, commonName: true } }),
    prisma.exercise.findMany({ distinct: ["movementPattern"], select: { movementPattern: true } }),
  ]);

  const patternOptions = patterns.map((p) => p.movementPattern).filter(Boolean) as string[];

  return (
    <div>
      <PageHeader title="Exercise Library" subtitle="Filter and search exercises. Each page shows primary, secondary, and stabilizing muscles — exercises are never reduced to a single muscle." />

      <form method="get" className="mb-6 flex flex-wrap items-end gap-3 rounded-xl border border-border bg-surface p-4">
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Search
          <input name="q" defaultValue={sp.q} placeholder="e.g. press" className={selectClass} />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Primary muscle
          <select name="muscle" defaultValue={sp.muscle ?? ""} className={selectClass}>
            <option value="">Any</option>
            {muscles.map((m) => <option key={m.slug} value={m.slug}>{m.commonName}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Difficulty
          <select name="difficulty" defaultValue={sp.difficulty ?? ""} className={selectClass}>
            <option value="">Any</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Pattern
          <select name="pattern" defaultValue={sp.pattern ?? ""} className={selectClass}>
            <option value="">Any</option>
            {patternOptions.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Setting
          <select name="setting" defaultValue={sp.setting ?? ""} className={selectClass}>
            <option value="">Any</option>
            <option value="home">Home</option>
            <option value="gym">Gym</option>
            <option value="both">Both</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium text-muted">
          Chain
          <select name="chain" defaultValue={sp.chain ?? ""} className={selectClass}>
            <option value="">Any</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </label>
        <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90">Filter</button>
        <Link href="/exercises" className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-2">Reset</Link>
      </form>

      <p className="mb-3 text-sm text-muted">{exercises.length} exercise{exercises.length === 1 ? "" : "s"}</p>

      {exercises.length === 0 ? (
        <EmptyState title="No exercises match these filters." hint="Try resetting or widening your search." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((ex) => (
            <Link key={ex.id} href={`/exercises/${ex.slug}`} className="block">
              <Card className="h-full transition hover:border-primary">
                <div className="mb-2 flex items-center gap-2">
                  <LevelBadge level={ex.difficulty} />
                  {ex.movementPattern && <Badge tone="blue">{ex.movementPattern}</Badge>}
                </div>
                <h2 className="font-semibold">{ex.name}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{ex.simpleExplanation}</p>
                <p className="mt-2 text-xs text-muted">
                  Primary: {ex.muscles.map((m) => m.muscle.commonName).join(", ") || "—"}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
