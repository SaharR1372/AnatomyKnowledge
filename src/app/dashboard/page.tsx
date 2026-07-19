import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { MASTERED_THRESHOLD } from "@/lib/spaced-repetition";
import { Card, PageHeader, Badge, LinkButton, EmptyState } from "@/components/ui";

export const metadata: Metadata = { title: "Dashboard" };

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <Card>
      <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </Card>
  );
}

export default async function DashboardPage() {
  const user = await requireUser("/dashboard");

  const [profile, totalLessons, completed, attempts, firstAttempts, reviewStates, recent, allLessons, domains] =
    await Promise.all([
      prisma.profile.findUnique({ where: { userId: user.id } }),
      prisma.lesson.count(),
      prisma.lessonProgress.findMany({ where: { userId: user.id, status: "completed" }, select: { lessonId: true } }),
      prisma.quizAttempt.findMany({ where: { userId: user.id }, select: { isCorrect: true } }),
      prisma.quizAttempt.findMany({ where: { userId: user.id, firstAttempt: true }, select: { isCorrect: true } }),
      prisma.reviewState.findMany({ where: { userId: user.id, itemType: "question" }, select: { masteryLevel: true, dueDate: true } }),
      prisma.lessonProgress.findMany({
        where: { userId: user.id },
        orderBy: { lastViewedAt: "desc" },
        take: 5,
        include: { lesson: true },
      }),
      prisma.lesson.findMany({ orderBy: [{ module: { order: "asc" } }, { order: "asc" }], select: { id: true, slug: true, title: true } }),
      prisma.certificationDomain.findMany({
        orderBy: { order: "asc" },
        include: { questions: { select: { id: true } } },
      }),
    ]);

  const completedIds = new Set(completed.map((c) => c.lessonId));
  const completionPct = totalLessons ? Math.round((completedIds.size / totalLessons) * 100) : 0;
  const accuracy = attempts.length ? Math.round((attempts.filter((a) => a.isCorrect).length / attempts.length) * 100) : 0;
  const firstAcc = firstAttempts.length ? Math.round((firstAttempts.filter((a) => a.isCorrect).length / firstAttempts.length) * 100) : 0;
  const mastered = reviewStates.filter((r) => r.masteryLevel >= MASTERED_THRESHOLD).length;
  const dueCount = reviewStates.filter((r) => r.dueDate <= new Date()).length;
  const nextLesson = allLessons.find((l) => !completedIds.has(l.id));

  // Certification-domain readiness = average question mastery within each domain.
  const masteryByQuestion = new Map<string, number>();
  const rs = await prisma.reviewState.findMany({ where: { userId: user.id, itemType: "question" }, select: { itemId: true, masteryLevel: true } });
  rs.forEach((r) => masteryByQuestion.set(r.itemId, r.masteryLevel));
  const domainProgress = domains.map((d) => {
    const ids = d.questions.map((q) => q.id);
    const avg = ids.length ? ids.reduce((sum, id) => sum + (masteryByQuestion.get(id) ?? 0), 0) / ids.length : 0;
    return { code: d.code, name: d.name, pct: Math.round(avg * 100), count: ids.length };
  });

  return (
    <div>
      <PageHeader title={`Welcome back${user.name ? `, ${user.name.split(" ")[0]}` : ""}`} subtitle="Your private learning progress. Only you can see this." />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Course completion" value={`${completionPct}%`} hint={`${completedIds.size}/${totalLessons} lessons`} />
        <Stat label="Quiz accuracy" value={`${accuracy}%`} hint={`${attempts.length} answers · ${firstAcc}% first-try`} />
        <Stat label="Mastered questions" value={String(mastered)} hint="Requires repeated success" />
        <Stat label="Study streak" value={`${profile?.currentStreak ?? 0} 🔥`} hint={`Best: ${profile?.longestStreak ?? 0}`} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-semibold">Keep going</h2>
              {dueCount > 0 && <Badge tone="amber">{dueCount} due for review</Badge>}
            </div>
            {nextLesson ? (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted">Recommended next lesson</p>
                  <p className="font-medium">{nextLesson.title}</p>
                </div>
                <LinkButton href={`/learn/${nextLesson.slug}`}>Continue</LinkButton>
              </div>
            ) : (
              <p className="text-sm text-muted">You've completed every lesson available. 🎉 Try the <Link href="/quiz/all" className="text-primary hover:underline">mixed quiz</Link>.</p>
            )}
            {dueCount > 0 && (
              <div className="mt-4 border-t border-border pt-4">
                <LinkButton href="/quiz/review" variant="ghost">Review {dueCount} question{dueCount === 1 ? "" : "s"} →</LinkButton>
              </div>
            )}
          </Card>

          <Card>
            <h2 className="mb-3 font-semibold">Recently studied</h2>
            {recent.length === 0 ? (
              <EmptyState title="Nothing yet." hint="Open a lesson to get started." />
            ) : (
              <ul className="divide-y divide-border">
                {recent.map((r) => (
                  <li key={r.id} className="flex items-center justify-between py-2 text-sm">
                    <Link href={`/learn/${r.lesson.slug}`} className="hover:text-primary">{r.lesson.title}</Link>
                    <Badge tone={r.status === "completed" ? "green" : "gray"}>{r.status === "completed" ? "done" : "in progress"}</Badge>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="mb-3 font-semibold">Certification readiness</h2>
            <p className="mb-3 text-xs text-muted">An educational progress indicator — not a prediction of passing any exam.</p>
            <ul className="space-y-3">
              {domainProgress.map((d) => (
                <li key={d.code}>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">{d.code}: {d.name}</span>
                    <span>{d.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full bg-accent" style={{ width: `${d.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="mb-2 font-semibold">Your stuff</h2>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/saved" className="text-primary hover:underline">Saved &amp; bookmarks</Link></li>
              <li><Link href="/vocabulary" className="text-primary hover:underline">Vocabulary list</Link></li>
              <li><Link href="/profile" className="text-primary hover:underline">Profile &amp; settings</Link></li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
