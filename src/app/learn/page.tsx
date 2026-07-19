import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Card, PageHeader, Badge, LevelBadge, StatusBadge } from "@/components/ui";

export const metadata: Metadata = { title: "Learning Path" };

export default async function LearnPage() {
  const user = await getCurrentUser();

  const paths = await prisma.learningPath.findMany({
    orderBy: { order: "asc" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            orderBy: { order: "asc" },
            include: { prerequisites: { include: { prerequisite: true } } },
          },
        },
      },
    },
  });

  const completed = new Set<string>();
  if (user) {
    const progress = await prisma.lessonProgress.findMany({
      where: { userId: user.id, status: "completed" },
      select: { lessonId: true },
    });
    progress.forEach((p) => completed.add(p.lessonId));
  }

  return (
    <div>
      <PageHeader
        title="Learning Path"
        subtitle="A structured route from the language of the body to a complete first region — the shoulder — and safe training principles."
      />
      {!user && (
        <div className="mb-6 rounded-lg border border-border bg-surface-2 p-3 text-sm">
          You can preview every lesson. <Link href="/register" className="text-primary hover:underline">Create an account</Link> to track completion and quiz history.
        </div>
      )}

      <div className="space-y-8">
        {paths.map((path) => (
          <section key={path.id}>
            <div className="mb-3 flex items-center gap-3">
              <h2 className="text-xl font-bold">{path.title}</h2>
              <LevelBadge level={path.level} />
            </div>
            <p className="mb-4 max-w-prose text-sm text-muted">{path.description}</p>

            <div className="space-y-5">
              {path.modules.map((mod) => {
                const done = mod.lessons.filter((l) => completed.has(l.id)).length;
                return (
                  <Card key={mod.id}>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{mod.title}</h3>
                        <p className="text-sm text-muted">{mod.description}</p>
                      </div>
                      {user && (
                        <Badge tone={done === mod.lessons.length ? "green" : "gray"}>
                          {done}/{mod.lessons.length}
                        </Badge>
                      )}
                    </div>
                    <ol className="divide-y divide-border">
                      {mod.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <Link
                            href={`/learn/${lesson.slug}`}
                            className="flex items-center justify-between gap-3 py-2.5 hover:text-primary"
                          >
                            <span className="flex items-center gap-2">
                              <span aria-hidden>{completed.has(lesson.id) ? "✅" : "○"}</span>
                              <span className="font-medium">{lesson.title}</span>
                            </span>
                            <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
                              <span>{lesson.estimatedMinutes} min</span>
                              <StatusBadge status={lesson.status} />
                            </span>
                          </Link>
                          {lesson.prerequisites.length > 0 && (
                            <p className="pb-2 pl-6 text-xs text-muted">
                              Prerequisite: {lesson.prerequisites.map((p) => p.prerequisite.title).join(", ")}
                            </p>
                          )}
                        </li>
                      ))}
                    </ol>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
