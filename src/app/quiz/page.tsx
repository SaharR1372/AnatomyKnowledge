import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Card, PageHeader, Badge, LinkButton } from "@/components/ui";

export const metadata: Metadata = { title: "Quizzes" };

export default async function QuizHubPage() {
  const user = await getCurrentUser();

  const [lessons, muscles, dueCount] = await Promise.all([
    prisma.lesson.findMany({
      where: { questions: { some: {} } },
      orderBy: { order: "asc" },
      select: { slug: true, title: true, _count: { select: { questions: true } } },
    }),
    prisma.muscle.findMany({
      where: { questions: { some: {} } },
      orderBy: { commonName: "asc" },
      select: { slug: true, commonName: true, _count: { select: { questions: true } } },
    }),
    user
      ? prisma.reviewState.count({ where: { userId: user.id, itemType: "question", dueDate: { lte: new Date() } } })
      : Promise.resolve(0),
  ]);

  return (
    <div>
      <PageHeader title="Quizzes" subtitle="Every answer comes with an explanation and a source. Missed questions return sooner through spaced repetition." />

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Card className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Mixed quiz</h2>
            <p className="text-sm text-muted">A shuffle of questions from the whole curriculum.</p>
          </div>
          <LinkButton href="/quiz/all">Start</LinkButton>
        </Card>
        <Card className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Due for review {user && dueCount > 0 && <Badge tone="amber">{dueCount}</Badge>}</h2>
            <p className="text-sm text-muted">{user ? "Reinforce what you're about to forget." : "Sign in to use spaced-repetition review."}</p>
          </div>
          {user ? <LinkButton href="/quiz/review">Review</LinkButton> : <LinkButton href="/login" variant="ghost">Sign in</LinkButton>}
        </Card>
      </div>

      <h2 className="mb-3 text-lg font-bold">By lesson</h2>
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l) => (
          <Link key={l.slug} href={`/quiz/lesson/${l.slug}`} className="block">
            <Card className="h-full transition hover:border-primary">
              <h3 className="text-sm font-semibold">{l.title}</h3>
              <p className="mt-1 text-xs text-muted">{l._count.questions} questions</p>
            </Card>
          </Link>
        ))}
      </div>

      <h2 className="mb-3 text-lg font-bold">By muscle</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {muscles.map((m) => (
          <Link key={m.slug} href={`/quiz/muscle/${m.slug}`} className="block">
            <Card className="h-full transition hover:border-primary">
              <h3 className="text-sm font-semibold">{m.commonName}</h3>
              <p className="mt-1 text-xs text-muted">{m._count.questions} questions</p>
            </Card>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        Preparing for a certification? Try <Link href="/certification" className="text-primary hover:underline">domain-based practice →</Link>
      </p>
    </div>
  );
}
