import type { CitationView, AssetView } from "@/lib/queries";

const tierLabel: Record<number, string> = {
  1: "Government / official guideline",
  2: "Peer-reviewed textbook",
  3: "Professional organization",
  4: "Certification outline",
  5: "University / hospital",
  6: "Peer-reviewed paper",
};

/** Renders the evidence behind a piece of content. Never hide the sources. */
export function Citations({ citations }: { citations: CitationView[] }) {
  if (citations.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-warning bg-warning/5 p-3 text-sm text-warning">
        ⚠ No source is attached to this content yet. It should not be treated as verified.
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {citations.map((c, i) => (
        <div key={i} className="rounded-lg border border-border bg-surface-2 p-3 text-sm">
          <p className="italic text-text/90">“{c.claim}”</p>
          <p className="mt-2 text-muted">
            <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              {c.source.title}
            </a>
            {c.source.organization && <> — {c.source.organization}</>}
            {c.locator && <> · {c.locator}</>}
          </p>
          <p className="mt-1 text-xs text-muted">
            {tierLabel[c.source.reliabilityTier] ?? "Source"} · License: {c.source.license} · Last checked {c.source.lastCheckedDate}
          </p>
        </div>
      ))}
    </div>
  );
}

/** An accessible figure with alt text, caption, and attribution. */
export function AssetFigure({ asset }: { asset: AssetView }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset.filePath} alt={asset.altText} className="mx-auto block w-full max-w-md bg-white p-2" loading="lazy" />
      <figcaption className="border-t border-border p-3 text-xs text-muted">
        <span className="font-medium text-text">{asset.title}.</span> {asset.description}
        <br />
        <span>Illustration: {asset.creator} · {asset.license}</span>
      </figcaption>
    </figure>
  );
}
