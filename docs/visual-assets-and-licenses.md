# Visual Assets & Licensing

Visual learning is central, not decoration. **No image is used without a recorded license.**

## Where assets live

- **Original SVGs**: [`public/anatomy/`](../public/anatomy) (served statically).
- **Metadata**: [`content/visual-assets.ts`](../content/visual-assets.ts) → `VisualAsset` rows.
- **Usage links**: `AssetUsage` connects an asset to the content that uses it (`assetSlugs` in seed).
- **In-app page**: `/credits` (Image Credits) lists every asset with its license and attribution.

## Required metadata (per asset)

`title`, `kind` (`svg`/`image`/`sequence`), `filePath`, `creator`, `sourceUrl`, `license`,
`attributionText`, `modificationAllowed`, `commercialUseAllowed`, `licenseCheckedDate`, `altText`,
`description`, `isOriginal`. The validator warns if `altText` is missing (accessibility).

## MVP assets (all original, CC0)

| Slug | File | License | Commercial |
|---|---|---|---|
| `body-planes` | `/anatomy/body-planes.svg` | CC0-1.0 | ✅ |
| `directional-terms` | `/anatomy/directional-terms.svg` | CC0-1.0 | ✅ |
| `shoulder-region` | `/anatomy/shoulder-region.svg` | CC0-1.0 | ✅ |

These are original, simplified **educational illustrations** created for this project — clearly not
medical images — so licensing is unambiguous and safe for any reuse.

## Adding a reused third-party image

1. Confirm the license on the individual file page (Wikimedia Commons files vary; some government
   images are third-party). Do **not** reuse an image just because it appears in a search.
2. Add a `VisualAsset` record with the real `creator`, `sourceUrl`, exact `license`,
   `attributionText`, whether modification/commercial use is allowed, `licenseCheckedDate`, and
   `altText`. Set `isOriginal: false`.
3. Reference it from content via `assetSlugs`.
4. Verify it appears correctly on `/credits`.

## Licensing cautions

- **OpenStax A&P 2e** text/images are **CC BY-NC-SA 4.0** — non-commercial + share-alike. Do not
  assume compatibility with commercial deployment. Keep attribution visible.
- Government (NIH/MedlinePlus/CDC) pages are generally public domain, **but some embedded images are
  third-party** — confirm each one.
- **Do not** use AI-generated anatomy images as a factual source unless manually verified against
  authoritative references (generative models can produce anatomically incorrect structures).

## Accessibility for visuals

Every asset stores descriptive `altText` and a `description`; the `AssetFigure` component renders alt
text + a caption + attribution. Diagrams use high-contrast tokens and labels legible on mobile.
Image-based quiz questions must provide a non-visual alternative (a text prompt).

## Replacing an image whose license changes

Update or replace the `VisualAsset` record and the file, re-check the license date, and confirm
`/credits` reflects the change. If a license becomes incompatible, remove the asset and its
`AssetUsage` links and substitute an original SVG.
