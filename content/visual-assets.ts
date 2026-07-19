import type { VisualAssetSeed } from "./types";

// Visual asset registry. Every asset used in the app MUST have a record here
// (spec sections 6 & 24). These MVP assets are ORIGINAL simplified educational
// SVG diagrams created for this project, so licensing is unambiguous and safe
// for commercial use. They are teaching illustrations, not medical images.
//
// To add a reused third-party image later, add a record with the real creator,
// sourceUrl, license, and attribution, and set isOriginal:false. See
// docs/visual-assets-and-licenses.md.

export const visualAssets: VisualAssetSeed[] = [
  {
    slug: "body-planes",
    title: "The three anatomical planes",
    filePath: "/anatomy/body-planes.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-19",
    altText:
      "A stylized standing human figure with three intersecting planes: a vertical sagittal plane splitting left and right, a vertical frontal plane splitting front and back, and a horizontal transverse plane splitting top and bottom.",
    description:
      "Shows how the sagittal, frontal (coronal), and transverse planes divide the body, used to describe the plane a movement happens in.",
    isOriginal: true,
  },
  {
    slug: "directional-terms",
    title: "Directional terms in anatomical position",
    filePath: "/anatomy/directional-terms.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-19",
    altText:
      "A figure standing in anatomical position with labelled arrows for superior/inferior, anterior/posterior, medial/lateral, and proximal/distal.",
    description:
      "Illustrates the standard directional terms relative to the anatomical position (standing, facing forward, palms forward).",
    isOriginal: true,
  },
  {
    slug: "shoulder-region",
    title: "Shoulder region — bones and the deltoid (simplified)",
    filePath: "/anatomy/shoulder-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-19",
    altText:
      "Simplified front view of the right shoulder showing the clavicle, scapula, and humerus, with the deltoid muscle shaded as a cap over the shoulder joint.",
    description:
      "A beginner-level schematic of the shoulder's three bones and the location of the deltoid over the glenohumeral joint.",
    isOriginal: true,
  },
  {
    slug: "chest-region",
    title: "Chest region — rib cage, sternum, and pectoralis major (simplified)",
    filePath: "/anatomy/chest-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-19",
    altText:
      "Simplified front view of the chest showing the sternum in the middle, ribs curving to each side, and the fan-shaped pectoralis major over the upper chest.",
    description:
      "A beginner-level schematic of the chest's bony frame (sternum and ribs) and the location of the pectoralis major.",
    isOriginal: true,
  },
];
