// DEMO OVERLAY — replaces src/app/exercises/page.tsx in the static build.
// Loads the whole catalogue at build time and hands it to a client component
// that reproduces the real page's filters without a server round-trip.

import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/ui";
import { ExerciseFilter, type DemoExercise } from "@/components/ExerciseFilter";

export const metadata: Metadata = { title: "Exercise Library" };

export default async function ExercisesPage() {
  const [rows, muscles] = await Promise.all([
    prisma.exercise.findMany({
      orderBy: { name: "asc" },
      include: { muscles: { include: { muscle: true } } },
    }),
    prisma.muscle.findMany({ orderBy: { commonName: "asc" }, select: { slug: true, commonName: true } }),
  ]);

  const exercises: DemoExercise[] = rows.map((ex) => ({
    id: ex.id,
    slug: ex.slug,
    name: ex.name,
    simpleExplanation: ex.simpleExplanation,
    difficulty: ex.difficulty,
    movementPattern: ex.movementPattern,
    setting: ex.setting,
    chain: ex.chain,
    unilateral: ex.unilateral,
    primaryMuscles: ex.muscles
      .filter((m) => m.role === "primary")
      .map((m) => ({ slug: m.muscle.slug, commonName: m.muscle.commonName })),
    allMuscleSlugs: ex.muscles.map((m) => m.muscle.slug),
  }));

  const patterns = [...new Set(rows.map((e) => e.movementPattern).filter(Boolean) as string[])].sort();

  return (
    <div>
      <PageHeader
        title="Exercise Library"
        subtitle="Filter and search exercises. Each page shows primary, secondary, and stabilizing muscles — exercises are never reduced to a single muscle."
      />
      <ExerciseFilter exercises={exercises} muscles={muscles} patterns={patterns} />
    </div>
  );
}
