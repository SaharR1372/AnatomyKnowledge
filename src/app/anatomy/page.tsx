import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Card, PageHeader, Badge, StatusBadge } from "@/components/ui";

export const metadata: Metadata = { title: "Anatomy" };

export default async function AnatomyPage() {
  const regions = await prisma.bodyRegion.findMany({
    orderBy: { order: "asc" },
    include: {
      muscles: { orderBy: { commonName: "asc" } },
      bones: { orderBy: { name: "asc" } },
      joints: { orderBy: { name: "asc" } },
    },
  });

  return (
    <div>
      <PageHeader
        title="Anatomy"
        subtitle="Explore body regions and their muscles, bones, and joints. The MVP ships one complete region — the shoulder — with more planned."
      />

      <div className="space-y-8">
        {regions.map((region) => (
          <section key={region.id}>
            <div className="mb-2 flex items-center gap-3">
              <h2 className="text-xl font-bold">{region.name}</h2>
              <Badge tone="teal">{region.muscles.length} muscles</Badge>
            </div>
            <p className="mb-4 max-w-prose text-sm text-muted">{region.description}</p>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Bones</h3>
                <ul className="space-y-1 text-sm">
                  {region.bones.map((b) => (
                    <li key={b.id}><span className="font-medium">{b.name}</span>{b.latinName && <span className="text-muted"> · {b.latinName}</span>}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Joints</h3>
                <ul className="space-y-1 text-sm">
                  {region.joints.map((j) => (
                    <li key={j.id}><span className="font-medium">{j.name}</span><span className="text-muted"> · {j.jointType}</span></li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Muscles</h3>
                <ul className="space-y-1.5 text-sm">
                  {region.muscles.map((m) => (
                    <li key={m.id} className="flex items-center justify-between gap-2">
                      <Link href={`/anatomy/${m.slug}`} className="font-medium text-primary hover:underline">{m.commonName}</Link>
                      <StatusBadge status={m.status} />
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 rounded-lg border border-dashed border-border p-4 text-sm text-muted">
        🗺️ A fully interactive body map (click a structure on a figure to open its page) is planned for Phase 2.
        See the <Link href="/about" className="text-primary hover:underline">roadmap</Link>.
      </p>
    </div>
  );
}
