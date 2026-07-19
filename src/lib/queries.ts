import { prisma } from "./db";

// Shared read helpers used by Server Components. Centralizing the polymorphic
// citation/asset lookups keeps pages clean and consistent.

export interface CitationView {
  claim: string;
  locator: string | null;
  source: {
    title: string;
    organization: string | null;
    url: string;
    license: string;
    lastCheckedDate: string;
    reliabilityTier: number;
  };
}

/** All citations attached to a given content entity, best sources first. */
export async function getCitations(entityType: string, entityId: string): Promise<CitationView[]> {
  const rows = await prisma.citation.findMany({
    where: { entityType, entityId },
    include: { source: true },
  });
  return rows
    .map((c) => ({
      claim: c.claim,
      locator: c.locator,
      source: {
        title: c.source.title,
        organization: c.source.organization,
        url: c.source.url,
        license: c.source.license,
        lastCheckedDate: c.source.lastCheckedDate,
        reliabilityTier: c.source.reliabilityTier,
      },
    }))
    .sort((a, b) => a.source.reliabilityTier - b.source.reliabilityTier);
}

export interface AssetView {
  slug: string;
  title: string;
  filePath: string;
  altText: string;
  description: string;
  creator: string;
  license: string;
  attributionText: string;
}

/** Visual assets used by a given content entity. */
export async function getAssets(entityType: string, entityId: string): Promise<AssetView[]> {
  const usages = await prisma.assetUsage.findMany({
    where: { entityType, entityId },
    include: { asset: true },
  });
  return usages.map((u) => ({
    slug: u.asset.slug,
    title: u.asset.title,
    filePath: u.asset.filePath,
    altText: u.asset.altText,
    description: u.asset.description,
    creator: u.asset.creator,
    license: u.asset.license,
    attributionText: u.asset.attributionText,
  }));
}
