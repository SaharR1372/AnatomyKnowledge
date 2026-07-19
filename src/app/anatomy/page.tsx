import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getAssets } from "@/lib/queries";
import { Card, PageHeader, Badge, StatusBadge } from "@/components/ui";
import { AssetFigure } from "@/components/Citations";
import { PronunciationGuide, type PronunciationItem } from "@/components/PronunciationGuide";

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

  // Fetch each region's overview figure (linked via AssetUsage) in parallel.
  const regionAssets = await Promise.all(regions.map((r) => getAssets("body_region", r.id)));

  return (
    <div>
      <PageHeader
        title="Anatomy"
        subtitle="Explore body regions and their muscles, bones, and joints — each overview includes a 'How to say it' pronunciation guide with audio."
      />

      <div className="space-y-10">
        {regions.map((region, i) => {
          const figure = regionAssets[i][0];
          const pronunciations = JSON.parse(region.pronunciations ?? "[]") as PronunciationItem[];
          return (
          <section key={region.id}>
            <div className="mb-2 flex items-center gap-3">
              <h2 className="text-xl font-bold">{region.name}</h2>
              <Badge tone="teal">{region.muscles.length} muscles</Badge>
            </div>
            <p className="mb-4 max-w-prose text-sm text-muted">{region.description}</p>

            {(figure || pronunciations.length > 0) && (
              <div className="mb-4 grid gap-4 md:grid-cols-2">
                {figure && <AssetFigure asset={figure} />}
                {pronunciations.length > 0 && <PronunciationGuide items={pronunciations} />}
              </div>
            )}

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
          );
        })}
      </div>

      <p className="mt-8 rounded-lg border border-dashed border-border p-4 text-sm text-muted">
        🗺️ A fully interactive body map (click a structure on a figure to open its page) is planned for Phase 2.
        See the <Link href="/about" className="text-primary hover:underline">roadmap</Link>.
      </p>
    </div>
  );
}
