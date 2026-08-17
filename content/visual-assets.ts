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
  {
    slug: "upper-back-region",
    title: "Upper back — trapezius, rhomboids, and latissimus dorsi (simplified)",
    filePath: "/anatomy/upper-back-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-19",
    altText:
      "Simplified back view showing the diamond-shaped trapezius over the upper back and neck, the rhomboids between the shoulder blades, and the broad latissimus dorsi fanning up from the lower back.",
    description:
      "A beginner-level schematic of the major upper-back muscles: trapezius, rhomboids, and latissimus dorsi.",
    isOriginal: true,
  },
  {
    slug: "lower-back-region",
    title: "Lower back region — lumbar spine, erector spinae, and quadratus lumborum (simplified)",
    filePath: "/anatomy/lower-back-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified back view showing the lumbar vertebrae stacked above the sacrum in the midline, the long erector spinae columns running alongside the spine, and the deeper quadratus lumborum between the lowest rib and the pelvis.",
    description:
      "A beginner-level schematic of the lower back's bony spine and its two main muscle groups: the erector spinae and quadratus lumborum.",
    isOriginal: true,
  },
  {
    slug: "core-region",
    title: "Core region — rectus abdominis, obliques, and transversus abdominis (simplified)",
    filePath: "/anatomy/core-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified front view of the abdomen showing the segmented rectus abdominis running down the midline, the diagonal external oblique on each side, and the transversus abdominis wrapping around the waist beneath.",
    description:
      "A beginner-level schematic of the core's abdominal muscles: rectus abdominis, external oblique, and transversus abdominis.",
    isOriginal: true,
  },
  {
    slug: "pelvis-hips-region",
    title: "Pelvis & hips — hip bone, hip joint, and iliopsoas (simplified)",
    filePath: "/anatomy/pelvis-hips-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified front view of the pelvis showing the wing-shaped hip bones meeting at the pubic symphysis, the ball-and-socket hip joint where each femur meets the acetabulum, and the iliopsoas running from the lower spine across the front of the hip to the femur.",
    description:
      "A beginner-level schematic of the pelvis's bony ring, the hip joint, and the iliopsoas hip-flexor muscle.",
    isOriginal: true,
  },
  {
    slug: "glutes-region",
    title: "Glutes — gluteus maximus and gluteus medius (simplified)",
    filePath: "/anatomy/glutes-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified back view of the pelvis and upper thighs showing the large rounded gluteus maximus covering each buttock, with the fan-shaped gluteus medius peeking out above and to the side of it near the hip.",
    description:
      "A beginner-level schematic of the buttock's two most prominent muscles: gluteus maximus and gluteus medius.",
    isOriginal: true,
  },
  {
    slug: "thighs-region",
    title: "Thighs — quadriceps femoris and adductors (simplified)",
    filePath: "/anatomy/thighs-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified front view of the right thigh showing the four-part quadriceps femoris covering the front of the femur down to the knee, and the adductor muscle group along the inner thigh.",
    description:
      "A beginner-level schematic of the thigh's front (quadriceps) and inner (adductor) muscle groups.",
    isOriginal: true,
  },
  {
    slug: "knees-region",
    title: "Knee — patella, femur, and tibia (simplified)",
    filePath: "/anatomy/knees-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified front view of a slightly bent knee showing the femur above, the patella (kneecap) sitting in its groove at the front, and the tibia below, with the patellar tendon connecting the patella to the tibia.",
    description:
      "A beginner-level schematic of the knee's bony structure: femur, patella, and tibia.",
    isOriginal: true,
  },
  {
    slug: "lower-legs-region",
    title: "Lower leg — gastrocnemius, soleus, and tibialis anterior (simplified)",
    filePath: "/anatomy/lower-legs-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified side view of the lower leg showing the rounded gastrocnemius and deeper soleus forming the calf at the back, and the tibialis anterior running along the front of the shin down to the foot.",
    description:
      "A beginner-level schematic of the lower leg's calf (gastrocnemius, soleus) and shin (tibialis anterior) muscles.",
    isOriginal: true,
  },
  {
    slug: "ankles-feet-region",
    title: "Ankle & foot — talus, calcaneus, and subtalar joint (simplified)",
    filePath: "/anatomy/ankles-feet-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified side view of the ankle and foot showing the talus sitting beneath the tibia and fibula, the calcaneus (heel bone) below it forming the subtalar joint, and the arch of the foot extending forward to the toes.",
    description:
      "A beginner-level schematic of the ankle and foot's key bones: talus and calcaneus, forming the subtalar joint.",
    isOriginal: true,
  },
  {
    slug: "arms-region",
    title: "Arms — biceps brachii and triceps brachii (simplified)",
    filePath: "/anatomy/arms-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified side view of the upper arm showing the two-headed biceps brachii on the front of the humerus and the three-headed triceps brachii covering the back of the humerus, down to the elbow.",
    description:
      "A beginner-level schematic of the upper arm's opposing muscle pair: biceps brachii and triceps brachii.",
    isOriginal: true,
  },
  {
    slug: "elbows-region",
    title: "Elbow — humerus, radius, and ulna (simplified)",
    filePath: "/anatomy/elbows-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified front view of a bent elbow showing the humerus above, and the radius and ulna forming the forearm below, meeting at the elbow joint with the lateral and medial epicondyles marked on the humerus.",
    description:
      "A beginner-level schematic of the elbow's bony structure, including the medial and lateral epicondyles.",
    isOriginal: true,
  },
  {
    slug: "forearms-hands-region",
    title: "Forearm & hand — wrist flexors and finger flexors (simplified)",
    filePath: "/anatomy/forearms-hands-region.svg",
    creator: "Anatomy Learning Platform (original)",
    license: "CC0-1.0 (public domain dedication)",
    attributionText: "Original diagram created for this project.",
    modificationAllowed: true,
    commercialUseAllowed: true,
    licenseCheckedDate: "2026-07-25",
    altText:
      "Simplified front (palm-side) view of the forearm showing the wrist flexor group running from the elbow down to the wrist, and the deeper finger flexor tendons continuing across the palm into each finger.",
    description:
      "A beginner-level schematic of the forearm's wrist-flexor muscle group and finger-flexor tendons.",
    isOriginal: true,
  },
];
