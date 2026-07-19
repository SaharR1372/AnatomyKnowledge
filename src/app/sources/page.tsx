import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { Card, PageHeader, Badge } from "@/components/ui";

export const metadata: Metadata = { title: "Sources & References" };

const tierName: Record<number, string> = {
  1: "Government / official guideline",
  2: "Peer-reviewed textbook",
  3: "Professional organization",
  4: "Certification outline",
  5: "University / hospital",
  6: "Peer-reviewed paper",
};

export default async function SourcesPage() {
  const sources = await prisma.source.findMany({
    orderBy: [{ reliabilityTier: "asc" }, { title: "asc" }],
    include: { _count: { select: { citations: true } } },
  });

  return (
    <div>
      <PageHeader
        title="Sources & References"
        subtitle="Every educational claim in this app should trace back to one of these. We use authoritative sources first and never invent citations."
      />
      <div className="space-y-4">
        {sources.map((s) => (
          <Card key={s.id}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="teal">Tier {s.reliabilityTier}</Badge>
              <span className="text-xs text-muted">{tierName[s.reliabilityTier]}</span>
              <Badge tone="gray">{s._count.citations} citation{s._count.citations === 1 ? "" : "s"}</Badge>
            </div>
            <h2 className="mt-2 font-semibold">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{s.title}</a>
            </h2>
            {s.organization && <p className="text-sm text-muted">{s.organization}{s.author ? ` · ${s.author}` : ""}</p>}
            <dl className="mt-2 grid gap-x-6 gap-y-1 text-xs text-muted sm:grid-cols-2">
              <div><span className="font-medium">License:</span> {s.license}</div>
              <div><span className="font-medium">Last checked:</span> {s.lastCheckedDate}</div>
              {s.publicationDate && <div><span className="font-medium">Published:</span> {s.publicationDate}</div>}
              <div className="break-all"><span className="font-medium">URL:</span> {s.url}</div>
            </dl>
            {s.notes && <p className="mt-2 rounded-lg bg-surface-2 p-2 text-xs">{s.notes}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
}
