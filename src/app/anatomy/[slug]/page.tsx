import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { getCitations, getAssets } from "@/lib/queries";
import { Card, PageHeader, Badge, StatusBadge, SafetyNote, ReviewWarning, LinkButton } from "@/components/ui";
import { Citations, AssetFigure } from "@/components/Citations";
import { BookmarkNote } from "@/components/BookmarkNote";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = await prisma.muscle.findUnique({ where: { slug }, select: { commonName: true, locationSimple: true } });
  return { title: m?.commonName ?? "Muscle", description: m?.locationSimple };
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  if (!children) return null;
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-border py-2.5 sm:grid-cols-3">
      <dt className="text-sm font-semibold text-muted">{label}</dt>
      <dd className="text-sm sm:col-span-2">{children}</dd>
    </div>
  );
}

export default async function MusclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await getCurrentUser();

  const muscle = await prisma.muscle.findUnique({
    where: { slug },
    include: {
      bodyRegion: true,
      exerciseMuscles: { include: { exercise: true } },
      _count: { select: { questions: true } },
    },
  });
  if (!muscle) notFound();

  const [citations, assets] = await Promise.all([
    getCitations("muscle", muscle.id),
    getAssets("muscle", muscle.id),
  ]);

  const byRole = (role: string) => muscle.exerciseMuscles.filter((em) => em.role === role);
  const primary = byRole("primary");
  const secondary = [...byRole("secondary"), ...byRole("stabilizer")];

  let bookmarked = false;
  let note = "";
  if (user) {
    const [bm, nt] = await Promise.all([
      prisma.bookmark.findUnique({ where: { userId_entityType_entityId: { userId: user.id, entityType: "muscle", entityId: muscle.id } } }),
      prisma.note.findFirst({ where: { userId: user.id, entityType: "muscle", entityId: muscle.id } }),
    ]);
    bookmarked = Boolean(bm);
    note = nt?.body ?? "";
  }

  return (
    <article className="mx-auto max-w-3xl">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/anatomy" className="hover:text-primary">Anatomy</Link> · {muscle.bodyRegion.name}
      </nav>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge tone="teal">{muscle.bodyRegion.name}</Badge>
        <StatusBadge status={muscle.status} />
      </div>
      <PageHeader title={muscle.commonName} subtitle={muscle.scientificName} />
      {muscle.pronunciation && <p className="-mt-4 mb-4 text-sm text-muted">Pronunciation: <em>{muscle.pronunciation}</em></p>}

      {muscle.reviewWarning && <div className="mb-4"><ReviewWarning>{muscle.reviewWarning}</ReviewWarning></div>}

      {assets.map((a) => <div key={a.slug} className="mb-6"><AssetFigure asset={a} /></div>)}

      <Card className="mb-6">
        <h2 className="mb-2 font-semibold">For beginners</h2>
        <p className="text-sm leading-relaxed">{muscle.beginnerExplanation}</p>
        {muscle.advancedExplanation && (
          <details className="mt-3">
            <summary className="cursor-pointer text-sm font-medium text-primary">Show the advanced explanation</summary>
            <p className="mt-2 text-sm leading-relaxed text-text/90">{muscle.advancedExplanation}</p>
          </details>
        )}
      </Card>

      <h2 className="mb-2 text-lg font-bold">Structure &amp; function</h2>
      <dl className="mb-6">
        <Row label="Location">{muscle.locationSimple}</Row>
        <Row label="Origin">{muscle.origin}</Row>
        <Row label="Insertion">{muscle.insertion}</Row>
        <Row label="Main action(s)">{muscle.actions}</Row>
        <Row label="Joint(s) crossed">{muscle.jointsCrossed}</Row>
        <Row label="Movement plane">{muscle.movementPlane}</Row>
        <Row label="Innervation">{muscle.innervation}</Row>
        <Row label="In daily movement">{muscle.functionDaily}</Row>
        <Row label="In exercise">{muscle.functionExercise}</Row>
        <Row label="Commonly confused with">{muscle.commonlyConfused}</Row>
        <Row label="Common misconceptions">{muscle.misconceptions}</Row>
      </dl>

      {(primary.length > 0 || secondary.length > 0) && (
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-bold">Exercises that use this muscle</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {primary.length > 0 && (
              <Card>
                <h3 className="mb-2 text-sm font-semibold">As a primary mover</h3>
                <ul className="space-y-1 text-sm">
                  {primary.map((em) => <li key={em.id}><Link href={`/exercises/${em.exercise.slug}`} className="text-primary hover:underline">{em.exercise.name}</Link></li>)}
                </ul>
              </Card>
            )}
            {secondary.length > 0 && (
              <Card>
                <h3 className="mb-2 text-sm font-semibold">As a secondary / stabilizer</h3>
                <ul className="space-y-1 text-sm">
                  {secondary.map((em) => <li key={em.id}><Link href={`/exercises/${em.exercise.slug}`} className="text-primary hover:underline">{em.exercise.name}</Link> <span className="text-xs text-muted">({em.role})</span></li>)}
                </ul>
              </Card>
            )}
          </div>
        </section>
      )}

      {muscle.safetyInfo && <div className="mb-6"><SafetyNote><p>{muscle.safetyInfo}</p></SafetyNote></div>}

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold">Sources</h2>
        <Citations citations={citations} />
      </section>

      <div className="flex flex-wrap gap-3">
        {muscle._count.questions > 0 && <LinkButton href={`/quiz/muscle/${muscle.slug}`}>Quiz me on the {muscle.commonName}</LinkButton>}
      </div>

      <div className="mt-8 border-t border-border pt-6">
        {user ? (
          <BookmarkNote entityType="muscle" entityId={muscle.id} path={`/anatomy/${muscle.slug}`} initialBookmarked={bookmarked} initialNote={note} />
        ) : (
          <p className="text-sm text-muted"><Link href="/register" className="text-primary hover:underline">Sign in</Link> to bookmark this and save notes.</p>
        )}
      </div>
    </article>
  );
}
