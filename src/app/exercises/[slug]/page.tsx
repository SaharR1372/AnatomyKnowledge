import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { getCitations, getAssets } from "@/lib/queries";
import { Card, PageHeader, Badge, LevelBadge, StatusBadge, SafetyNote, ReviewWarning } from "@/components/ui";
import { Citations, AssetFigure } from "@/components/Citations";
import { BookmarkNote } from "@/components/BookmarkNote";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ex = await prisma.exercise.findUnique({ where: { slug }, select: { name: true, simpleExplanation: true } });
  return { title: ex?.name ?? "Exercise", description: ex?.simpleExplanation };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  if (!children) return null;
  return (
    <section className="mb-5">
      <h2 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}

export default async function ExercisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = await getCurrentUser();

  const ex = await prisma.exercise.findUnique({
    where: { slug },
    include: {
      muscles: { include: { muscle: true } },
      joints: { include: { joint: true } },
      movements: { include: { movement: true } },
    },
  });
  if (!ex) notFound();

  const [citations, assets] = await Promise.all([
    getCitations("exercise", ex.id),
    getAssets("exercise", ex.id),
  ]);

  const steps: string[] = JSON.parse(ex.instructions || "[]");
  const equipment: string[] = JSON.parse(ex.equipment || "[]");
  const muscleByRole = (role: string) => ex.muscles.filter((m) => m.role === role);

  let bookmarked = false;
  let note = "";
  if (user) {
    const [bm, nt] = await Promise.all([
      prisma.bookmark.findUnique({ where: { userId_entityType_entityId: { userId: user.id, entityType: "exercise", entityId: ex.id } } }),
      prisma.note.findFirst({ where: { userId: user.id, entityType: "exercise", entityId: ex.id } }),
    ]);
    bookmarked = Boolean(bm);
    note = nt?.body ?? "";
  }

  const MuscleList = ({ role, label }: { role: string; label: string }) => {
    const list = muscleByRole(role);
    if (!list.length) return null;
    return (
      <p className="text-sm">
        <span className="font-semibold">{label}:</span>{" "}
        {list.map((m, i) => (
          <span key={m.id}>
            {i > 0 && ", "}
            <Link href={`/anatomy/${m.muscle.slug}`} className="text-primary hover:underline">{m.muscle.commonName}</Link>
          </span>
        ))}
      </p>
    );
  };

  return (
    <article className="mx-auto max-w-3xl">
      <nav className="mb-4 text-sm text-muted"><Link href="/exercises" className="hover:text-primary">Exercise Library</Link></nav>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <LevelBadge level={ex.difficulty} />
        {ex.movementPattern && <Badge tone="blue">{ex.movementPattern}</Badge>}
        {ex.chain && <Badge tone="gray">{ex.chain}-chain</Badge>}
        {ex.unilateral && <Badge tone="gray">unilateral</Badge>}
        <StatusBadge status={ex.status} />
      </div>
      <PageHeader title={ex.name} subtitle={ex.altNames ? `Also called: ${ex.altNames}` : undefined} />

      {ex.reviewWarning && <div className="mb-4"><ReviewWarning>{ex.reviewWarning}</ReviewWarning></div>}

      {assets.map((a) => <div key={a.slug} className="mb-6"><AssetFigure asset={a} /></div>)}

      <Card className="mb-6 space-y-2">
        <MuscleList role="primary" label="Primary muscles" />
        <MuscleList role="secondary" label="Secondary muscles" />
        <MuscleList role="stabilizer" label="Stabilizers" />
        {ex.joints.length > 0 && (
          <p className="text-sm"><span className="font-semibold">Joints / actions:</span> {ex.joints.map((j) => `${j.joint.name} (${j.jointAction})`).join("; ")}</p>
        )}
        {ex.movementPlane && <p className="text-sm"><span className="font-semibold">Plane:</span> {ex.movementPlane}</p>}
        {equipment.length > 0 && <p className="text-sm"><span className="font-semibold">Equipment:</span> {equipment.join(", ")}</p>}
      </Card>

      <Section title="What it is">{ex.simpleExplanation}</Section>
      <Section title="Purpose">{ex.purpose}</Section>
      <Section title="Starting position">{ex.startingPosition}</Section>

      {steps.length > 0 && (
        <Section title="Step by step">
          <ol className="list-decimal space-y-1 pl-5">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        </Section>
      )}

      <Section title="Breathing">{ex.breathing}</Section>
      <Section title="Coaching cues">{ex.cues}</Section>
      <Section title="Common mistakes">{ex.commonMistakes}</Section>
      <Section title="Easier regression">{ex.regression}</Section>
      <Section title="Harder progression">{ex.progression}</Section>
      <Section title="Alternatives">{ex.alternatives}</Section>
      <Section title="Who may benefit">{ex.benefitsWho}</Section>
      <Section title="Who should modify or avoid it">{ex.cautionWho}</Section>

      {ex.whyItWorks && (
        <Card className="mb-6 bg-surface-2">
          <h2 className="mb-1 font-semibold">Why this exercise works</h2>
          <p className="text-sm leading-relaxed">{ex.whyItWorks}</p>
        </Card>
      )}

      {ex.safety && <div className="mb-6"><SafetyNote><p>{ex.safety}</p></SafetyNote></div>}

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold">Sources</h2>
        <Citations citations={citations} />
      </section>

      <div className="mt-8 border-t border-border pt-6">
        {user ? (
          <BookmarkNote entityType="exercise" entityId={ex.id} path={`/exercises/${ex.slug}`} initialBookmarked={bookmarked} initialNote={note} />
        ) : (
          <p className="text-sm text-muted"><Link href="/register" className="text-primary hover:underline">Sign in</Link> to save this exercise and add notes.</p>
        )}
      </div>
    </article>
  );
}
