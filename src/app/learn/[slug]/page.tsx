import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { renderMarkdown } from "@/lib/markdown";
import { getCitations, getAssets } from "@/lib/queries";
import { Card, PageHeader, LevelBadge, StatusBadge, SafetyNote, ReviewWarning, LinkButton } from "@/components/ui";
import { Citations, AssetFigure } from "@/components/Citations";
import { LessonToolbar } from "@/components/LessonToolbar";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await prisma.lesson.findUnique({ where: { slug }, select: { title: true, summary: true } });
  return { title: lesson?.title ?? "Lesson", description: lesson?.summary };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await getCurrentUser();

  const lesson = await prisma.lesson.findUnique({
    where: { slug },
    include: {
      objectives: { orderBy: { order: "asc" } },
      module: true,
      bodyRegion: true,
      prerequisites: { include: { prerequisite: true } },
      _count: { select: { questions: true } },
    },
  });
  if (!lesson) notFound();

  const [citations, assets] = await Promise.all([
    getCitations("lesson", lesson.id),
    getAssets("lesson", lesson.id),
  ]);

  let completed = false;
  let bookmarked = false;
  let note = "";
  if (user) {
    const [prog, bm, nt] = await Promise.all([
      prisma.lessonProgress.findUnique({ where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } } }),
      prisma.bookmark.findUnique({ where: { userId_entityType_entityId: { userId: user.id, entityType: "lesson", entityId: lesson.id } } }),
      prisma.note.findFirst({ where: { userId: user.id, entityType: "lesson", entityId: lesson.id } }),
    ]);
    completed = prog?.status === "completed";
    bookmarked = Boolean(bm);
    note = nt?.body ?? "";
  }

  return (
    <article className="mx-auto max-w-3xl">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/learn" className="hover:text-primary">Learning Path</Link>
        {lesson.module && <> · {lesson.module.title}</>}
      </nav>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <LevelBadge level={lesson.level} />
        <StatusBadge status={lesson.status} />
        <span className="text-xs text-muted">{lesson.estimatedMinutes} min read</span>
      </div>
      <PageHeader title={lesson.title} subtitle={lesson.summary} />

      {lesson.reviewWarning && <div className="mb-4"><ReviewWarning>{lesson.reviewWarning}</ReviewWarning></div>}

      {lesson.prerequisites.length > 0 && (
        <p className="mb-4 text-sm text-muted">
          Before this: {lesson.prerequisites.map((p, i) => (
            <span key={p.id}>
              {i > 0 && ", "}
              <Link href={`/learn/${p.prerequisite.slug}`} className="text-primary hover:underline">{p.prerequisite.title}</Link>
            </span>
          ))}
        </p>
      )}

      {lesson.objectives.length > 0 && (
        <Card className="mb-6 bg-surface-2">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">You will be able to</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {lesson.objectives.map((o) => <li key={o.id}>{o.text}</li>)}
          </ul>
        </Card>
      )}

      {assets.map((a) => (
        <div key={a.slug} className="mb-6">
          <AssetFigure asset={a} />
        </div>
      ))}

      {lesson.safetyNotes && (
        <div className="mb-6"><SafetyNote><p>{lesson.safetyNotes}</p></SafetyNote></div>
      )}

      <div
        className="lesson-content"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson.bodyMarkdown) }}
      />

      <section className="mt-10">
        <h2 className="mb-3 text-lg font-bold">Sources for this lesson</h2>
        <Citations citations={citations} />
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        {lesson._count.questions > 0 && (
          <LinkButton href={`/quiz/lesson/${lesson.slug}`}>Take the quiz ({lesson._count.questions} questions)</LinkButton>
        )}
        {lesson.bodyRegion && (
          <LinkButton href={`/anatomy`} variant="ghost">Explore the {lesson.bodyRegion.name}</LinkButton>
        )}
      </div>

      <div className="mt-8 border-t border-border pt-6">
        {user ? (
          <LessonToolbar
            lessonId={lesson.id}
            slug={lesson.slug}
            initialCompleted={completed}
            initialBookmarked={bookmarked}
            initialNote={note}
          />
        ) : (
          <p className="text-sm text-muted">
            <Link href="/register" className="text-primary hover:underline">Sign in</Link> to mark this complete, bookmark it, and save private notes.
          </p>
        )}
      </div>
    </article>
  );
}
