import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { Card, PageHeader, Badge } from "@/components/ui";

export const metadata: Metadata = { title: "Image Credits" };

export default async function CreditsPage() {
  const assets = await prisma.visualAsset.findMany({ orderBy: { title: "asc" } });

  return (
    <div>
      <PageHeader
        title="Image Credits"
        subtitle="Every visual asset used in the app, with its creator, license, and terms. We never use an image without recording its license."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {assets.map((a) => (
          <Card key={a.id}>
            <div className="mb-3 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.filePath} alt={a.altText} className="h-16 w-16 rounded bg-white object-contain p-1" />
              <div>
                <h2 className="text-sm font-semibold">{a.title}</h2>
                <div className="mt-1 flex flex-wrap gap-1">
                  {a.isOriginal && <Badge tone="green">Original</Badge>}
                  <Badge tone="blue">{a.license}</Badge>
                  {a.commercialUseAllowed ? <Badge tone="teal">Commercial OK</Badge> : <Badge tone="amber">Non-commercial</Badge>}
                </div>
              </div>
            </div>
            <dl className="space-y-1 text-xs text-muted">
              <div><span className="font-medium">Creator:</span> {a.creator}</div>
              <div><span className="font-medium">Attribution:</span> {a.attributionText}</div>
              {a.sourceUrl && <div className="break-all"><span className="font-medium">Source:</span> {a.sourceUrl}</div>}
              <div><span className="font-medium">Modification allowed:</span> {a.modificationAllowed ? "Yes" : "No"}</div>
              <div><span className="font-medium">License checked:</span> {a.licenseCheckedDate}</div>
            </dl>
          </Card>
        ))}
      </div>
    </div>
  );
}
