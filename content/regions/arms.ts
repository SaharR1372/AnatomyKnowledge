import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// ARMS region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 11.5 "Muscles of the Pectoral Girdle and Upper
// Limbs" (biceps brachii, triceps brachii, brachialis, coracobrachialis). The
// elbow joint is introduced here since curl/extension exercises need it; the
// Elbows region (next, a JOINT-type region) reuses this "elbow-joint" slug and
// adds the collateral ligaments and common overuse injuries.

const OPENSTAX = "openstax-anp-2e";

export const armsRegion: BodyRegionSeed = {
  slug: "arms",
  name: "Arms",
  order: 12,
  description:
    "The arm (upper arm, between shoulder and elbow) is built around the humerus and contains the classic opposing pair of the biceps brachii in front and the triceps brachii behind, along with two smaller assisting muscles. Together they flex and extend the elbow and contribute to shoulder movement.",
  relationships:
    "The arm sits between the **shoulder** (several of its muscles cross the shoulder joint) and the **elbow joint** (which its prime movers act on) and works closely with the **forearms & hands** during any pulling, pressing, or carrying task.",
  safetyNotes:
    "Sudden sharp pain, a popping sensation, or visible deformity in the upper arm (such as a 'Popeye' bulge from a ruptured biceps tendon) needs prompt medical evaluation. A trainer coaches curl and extension technique; they do not diagnose tendon injuries.",
  assetSlugs: ["arms-region"],
  pronunciations: [
    { term: "Biceps brachii", say: "BY-seps BRAY-kee-eye" },
    { term: "Triceps brachii", say: "TRY-seps BRAY-kee-eye" },
    { term: "Brachialis", say: "bray-kee-AL-iss" },
    { term: "Coracobrachialis", say: "kor-uh-koh-bray-kee-AL-iss" },
    { term: "Olecranon", say: "oh-LEK-ruh-non" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The biceps brachii and brachialis flex the elbow, the triceps brachii extends it, and the coracobrachialis assists shoulder flexion.",
      locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
    },
  ],
  bones: [
    {
      slug: "radius",
      name: "Radius",
      latinName: "Radius",
      description: "The forearm bone on the thumb side, which the biceps brachii inserts onto (at the radial tuberosity), allowing it to help turn the palm up (supination) as well as flex the elbow.",
      landmarks: "Radial tuberosity (biceps tendon attachment), radial head (near the elbow).",
    },
    {
      slug: "ulna",
      name: "Ulna",
      latinName: "Ulna",
      description: "The forearm bone on the pinky-finger side, which forms most of the elbow's hinge with the humerus and receives the triceps brachii's insertion at its uppermost point.",
      landmarks: "Olecranon (the bony point of the elbow, where the triceps inserts), trochlear notch.",
    },
  ],
  joints: [
    {
      slug: "elbow-joint",
      name: "Elbow joint (humeroulnar joint)",
      jointType: "synovial, hinge",
      description: "The primary hinge joint of the elbow, between the humerus above and the ulna below. It allows flexion and extension; a separate but related joint (humeroradial) and the proximal radioulnar joint share the same joint capsule.",
      articulatingBones: "Humerus and ulna (with the radius also involved at the nearby humeroradial and proximal radioulnar joints)",
      movementsAllowed: "Flexion and extension.",
    },
  ],
  muscles: [
    {
      slug: "biceps-brachii",
      commonName: "Biceps brachii",
      scientificName: "Biceps brachii",
      pronunciation: "BY-seps BRAY-kee-eye",
      locationSimple: "The well-known two-headed muscle on the front of the upper arm.",
      origin: "Two heads from the scapula (long head: above the shoulder socket; short head: the coracoid process).",
      insertion: "Radial tuberosity of the radius.",
      actions: "Flexes the elbow, supinates the forearm (turns the palm up — its strongest action), and assists shoulder flexion.",
      jointsCrossed: "Elbow joint, shoulder joint (and the proximal radioulnar joint, for supination)",
      movementPlane: "sagittal (flexion); transverse (supination)",
      innervation: "Musculocutaneous nerve (C5–C6)",
      functionDaily: "Bringing a cup to your mouth, carrying a bag with the palm facing up, and turning a doorknob or screwdriver.",
      functionExercise: "Prime mover of elbow flexion in curls, most effective when the forearm is supinated (palm up).",
      beginnerExplanation:
        "The 'biceps' most people picture when they think 'arm muscle' — it bends your elbow and is especially strong when your palm faces up, like in a classic dumbbell curl.",
      advancedExplanation:
        "Because it is also a strong supinator, grip/wrist orientation changes how much the biceps contributes to a curl: a palm-up (supinated) curl emphasizes it more than a neutral-grip hammer curl, which shifts more work to the brachialis.",
      commonlyConfused: "Its two heads are sometimes thought to be separately trainable; in practice both heads act together and cannot be meaningfully isolated from each other with exercise selection.",
      misconceptions: "'Curls alone build a complete arm' overlooks the triceps, which makes up more of the upper arm's mass than the biceps.",
      safetyInfo: "A sudden pop with a bulge lower in the arm ('Popeye deformity') can indicate a torn biceps tendon and needs prompt medical evaluation.",
      status: "source_checked",
      assetSlugs: ["arms-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The biceps brachii flexes the elbow and supinates the forearm, and assists shoulder flexion.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "triceps-brachii",
      commonName: "Triceps brachii",
      scientificName: "Triceps brachii",
      pronunciation: "TRY-seps BRAY-kee-eye",
      locationSimple: "The three-headed muscle covering the entire back of the upper arm.",
      origin: "Three heads: long head from the scapula, lateral and medial heads from the back of the humerus.",
      insertion: "Olecranon of the ulna.",
      actions: "Extends the elbow (the prime mover); the long head also assists shoulder extension since it crosses the shoulder joint.",
      jointsCrossed: "Elbow joint (all three heads); shoulder joint (long head only)",
      movementPlane: "sagittal",
      innervation: "Radial nerve (C6–C8)",
      functionDaily: "Straightening the arm to push a door open, push up out of a chair, or reach overhead.",
      functionExercise: "Prime mover of elbow extension in pushdowns, overhead extensions, and dips; also heavily involved in all pressing exercises (bench press, overhead press).",
      beginnerExplanation:
        "Making up most of the back of your upper arm, the triceps straightens your elbow — the muscle doing the work at the top of a push-up or the lockout of a bench press.",
      advancedExplanation:
        "Because the long head crosses the shoulder as well as the elbow, exercises that position the shoulder in flexion (like an overhead triceps extension) can stretch and load the long head more than exercises done with the arm at the side.",
      commonlyConfused: "Its size (roughly two-thirds of upper-arm mass) is often underestimated compared to the more visually iconic biceps.",
      misconceptions: "'Triceps kickbacks are the best triceps builder' is an oversimplification — compound pressing movements typically contribute more total triceps work for most lifters.",
      safetyInfo: "Sharp elbow or upper-arm pain during heavy pressing or extension work should be assessed rather than pushed through.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The triceps brachii extends the elbow, and its long head assists shoulder extension.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "brachialis",
      commonName: "Brachialis",
      scientificName: "Brachialis",
      pronunciation: "bray-kee-AL-iss",
      locationSimple: "A muscle lying deep beneath the biceps brachii, on the front of the lower half of the upper arm.",
      origin: "Lower half of the front of the humerus.",
      insertion: "Coronoid process of the ulna.",
      actions: "Flexes the elbow; unlike the biceps, it does not cross the shoulder or contribute to supination, making it a 'pure' elbow flexor.",
      jointsCrossed: "Elbow joint only",
      movementPlane: "sagittal",
      innervation: "Musculocutaneous nerve (C5–C6)",
      functionDaily: "Contributes to every elbow-bending task, working alongside the biceps regardless of forearm rotation.",
      functionExercise: "A major contributor to elbow flexion in all grip positions, and the primary target of neutral-grip (hammer) curls.",
      beginnerExplanation:
        "Hidden underneath the biceps, this muscle also bends your elbow — but unlike the biceps, it works just as hard no matter which way your palm is facing.",
      advancedExplanation:
        "Because it inserts on the ulna (not the radius) and does not cross the radioulnar joint, its force output does not change with forearm rotation, making it a consistent contributor across all curl grip variations.",
      commonlyConfused: "Frequently not distinguished from the biceps at all, despite being a separate muscle with a meaningfully different mechanical role.",
      misconceptions: "'Only the biceps grows from curls' ignores the brachialis, which sits beneath the biceps and can add to overall arm thickness.",
      safetyInfo: "Same general precautions as other elbow flexors — assess sudden sharp pain rather than training through it.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The brachialis flexes the elbow and, unlike the biceps brachii, does not act on the shoulder or radioulnar joints.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "coracobrachialis",
      commonName: "Coracobrachialis",
      scientificName: "Coracobrachialis",
      pronunciation: "kor-uh-koh-bray-kee-AL-iss",
      locationSimple: "A small muscle on the inner, upper part of the arm, near the armpit.",
      origin: "Coracoid process of the scapula.",
      insertion: "Middle of the humerus shaft.",
      actions: "Flexes and adducts the arm at the shoulder; it does not act on the elbow at all.",
      jointsCrossed: "Shoulder joint only",
      movementPlane: "sagittal (flexion); frontal (adduction)",
      innervation: "Musculocutaneous nerve (C5–C7)",
      functionDaily: "Assists in bringing the arm forward and across the body, such as reaching across your body.",
      functionExercise: "A synergist rather than a prime mover in most exercises; assists shoulder flexion in movements like front raises and light pressing.",
      beginnerExplanation:
        "Despite living in the 'arm' region by location, this small muscle actually only works the shoulder, not the elbow — it helps lift and bring the arm across the body.",
      advancedExplanation:
        "Its name reflects both its origin (coracoid process) and its neighbor tissue (brachii/arm), but functionally it belongs with the shoulder flexors rather than the elbow flexors/extensors.",
      commonlyConfused: "Its location often leads people to assume it helps bend the elbow, but it has no elbow-joint action at all.",
      misconceptions: "There is no dedicated 'coracobrachialis exercise' — it is trained incidentally through shoulder-flexion movements.",
      safetyInfo: "Rarely a source of isolated injury; general shoulder and arm-strain precautions apply.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The coracobrachialis flexes and adducts the arm at the shoulder joint and does not cross the elbow.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
  ],
};

export const armsMovements: MovementSeed[] = [
  {
    slug: "elbow-flexion",
    name: "Elbow flexion",
    description: "Bending the elbow, bringing the hand toward the shoulder. Driven by the biceps brachii and brachialis.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the elbow joint",
    oppositeSlug: "elbow-extension",
  },
  {
    slug: "elbow-extension",
    name: "Elbow extension",
    description: "Straightening the elbow. Driven by the triceps brachii.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Extension at the elbow joint",
    oppositeSlug: "elbow-flexion",
  },
  {
    slug: "forearm-supination",
    name: "Forearm supination",
    description: "Rotating the forearm so the palm faces up (or forward, in anatomical position). Driven by the biceps brachii (its strongest action) and the supinator.",
    plane: "transverse",
    axis: "longitudinal",
    jointAction: "Supination at the proximal and distal radioulnar joints",
  },
];

export const armsExercises: ExerciseSeed[] = [
  {
    slug: "barbell-bicep-curl",
    name: "Barbell Bicep Curl",
    altNames: "Standing barbell curl",
    simpleExplanation: "Standing and holding a barbell with palms facing up, bending the elbows to curl the bar toward the shoulders, then lowering with control.",
    purpose: "The classic exercise for building elbow-flexion strength, emphasizing the biceps brachii through a supinated grip.",
    startingPosition: "Stand tall holding a barbell with an underhand (supinated) grip, hands shoulder-width, arms extended, elbows close to the torso.",
    instructions: [
      "Keeping the upper arms and elbows still against the torso, curl the bar up by bending the elbows.",
      "Squeeze briefly at the top without swinging the torso.",
      "Lower the bar under control back to full arm extension.",
    ],
    breathing: "Exhale as you curl up; inhale as you lower.",
    cues: "\"Elbows pinned to your sides, curl with the arms only, no swinging.\"",
    commonMistakes: "Swinging the torso or using the hips to help lift the weight; letting the elbows drift forward; using a partial range of motion.",
    safety: "Choose a load that allows the elbows to stay still — swinging shifts stress to the low back and reduces the target muscle's work.",
    regression: "Use dumbbells with a lighter total load, or reduce range of motion if full extension is uncomfortable.",
    progression: "Increase load gradually once strict form is consistent, or add a pause at the top.",
    alternatives: "Dumbbell curl, cable curl, EZ-bar curl.",
    whyItWorks: "The supinated (palm-up) grip puts the biceps brachii in its strongest position for elbow flexion, directly and efficiently loading it through a full range of motion.",
    benefitsWho: "Anyone building elbow-flexor strength and arm size as an accessory to pulling movements.",
    cautionWho: "Those with elbow or wrist pain in a supinated grip should try a neutral-grip alternative (hammer curl).",
    equipment: ["barbell"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["arms-region"],
    primaryMuscles: ["biceps-brachii"],
    secondaryMuscles: ["brachialis"],
    joints: [{ jointSlug: "elbow-joint", jointAction: "flexion" }],
    movements: ["elbow-flexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The biceps brachii flexes the elbow and is most effective in a supinated (palm-up) position.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "hammer-curl",
    name: "Hammer Curl",
    altNames: "Neutral-grip curl",
    simpleExplanation: "Holding dumbbells with palms facing each other (neutral grip), curling them up toward the shoulders and lowering with control.",
    purpose: "Emphasizes the brachialis, which works consistently regardless of forearm rotation, by removing the supination component of a standard curl.",
    startingPosition: "Stand holding dumbbells at your sides with palms facing your body (neutral grip), elbows close to the torso.",
    instructions: [
      "Keeping the wrists neutral (palms facing in) throughout, curl the dumbbells up by bending the elbows.",
      "Squeeze briefly at the top.",
      "Lower under control back to full arm extension.",
    ],
    breathing: "Exhale as you curl up; inhale as you lower.",
    cues: "\"Palms facing in the whole time, elbows still, controlled tempo.\"",
    commonMistakes: "Rotating the wrists toward a palm-up position during the lift (turning it into a standard curl); swinging the torso; rushing the lowering phase.",
    safety: "Same general precautions as other curls — keep the elbows stable and avoid using momentum.",
    regression: "Use a lighter load, or perform one arm at a time for more control.",
    progression: "Increase load, or add a pause at the top of the range.",
    alternatives: "Barbell bicep curl (more biceps emphasis), cable hammer curl.",
    whyItWorks: "The neutral grip removes the supination action that the biceps specializes in, shifting relatively more of the elbow-flexion demand onto the brachialis, which works the same regardless of forearm rotation.",
    benefitsWho: "Anyone wanting complete elbow-flexor development alongside standard curls.",
    cautionWho: "Those with wrist discomfort in a neutral grip should check dumbbell size/shape or reduce load.",
    equipment: ["dumbbells"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["brachialis"],
    secondaryMuscles: ["biceps-brachii"],
    joints: [{ jointSlug: "elbow-joint", jointAction: "flexion" }],
    movements: ["elbow-flexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The brachialis flexes the elbow regardless of forearm rotation, unlike the biceps brachii which is most active when supinated.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "triceps-pushdown",
    name: "Triceps Pushdown",
    altNames: "Cable pushdown",
    simpleExplanation: "Standing at a high cable with a bar or rope attachment, pushing the handle down by straightening the elbows, then returning with control.",
    purpose: "Isolates the triceps brachii for elbow extension.",
    startingPosition: "Stand facing a high cable, gripping the attachment with elbows bent and tucked close to the torso.",
    instructions: [
      "Keeping the upper arms still against the torso, push the handle down by straightening the elbows fully.",
      "Pause briefly at full extension without locking out forcefully.",
      "Return under control to the starting bent-elbow position.",
    ],
    breathing: "Exhale as you push down; inhale as you return.",
    cues: "\"Elbows pinned to your sides, extend fully, control the return.\"",
    commonMistakes: "Letting the elbows drift away from the torso or flare outward; using the shoulders/body weight to help push; not controlling the return phase.",
    safety: "Keep the movement isolated to the elbow; avoid leaning the whole body into the movement to move more weight.",
    regression: "Use a lighter load or a band instead of a cable stack.",
    progression: "Increase load, or add a pause at full extension.",
    alternatives: "Overhead triceps extension, dips, close-grip bench press.",
    whyItWorks: "Keeping the shoulder and torso still isolates elbow extension, directly and efficiently loading the triceps brachii across all three of its heads.",
    benefitsWho: "Anyone building triceps strength and size as an accessory to pressing movements.",
    cautionWho: "Those with elbow pain during extension should reduce load or range and check technique.",
    equipment: ["cable-machine"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["triceps-brachii"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "elbow-joint", jointAction: "extension" }],
    movements: ["elbow-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The triceps brachii is the prime mover of elbow extension.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const armsLessons: LessonSeed[] = [
  {
    slug: "arms-region-overview",
    title: "The Arms: An Overview",
    summary: "The biceps and triceps opposing pair, plus their quieter helpers brachialis and coracobrachialis.",
    moduleSlug: "the-arms",
    bodyRegionSlug: "arms",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["arms-region"],
    safetyNotes:
      "Sudden sharp pain, a popping sensation, or visible deformity in the upper arm needs prompt medical evaluation. A trainer coaches curl and extension technique; they do not diagnose tendon injuries.",
    objectives: [
      "Name the four arm muscles and their primary actions.",
      "Explain the opposing relationship between the biceps brachii and triceps brachii at the elbow.",
      "Distinguish the brachialis's 'pure' elbow flexion from the biceps's dual flexion/supination role.",
    ],
    bodyMarkdown: `## An opposing pair, plus two helpers

The upper arm is built around a classic **opposing pair** at the elbow:

- **Biceps brachii** (front) — flexes the elbow and is also the body's strongest forearm supinator.
- **Triceps brachii** (back) — extends the elbow, and makes up more of the upper arm's bulk than the
  biceps.

Two smaller muscles round out the region: the **brachialis**, a deep, 'pure' elbow flexor unaffected by
forearm rotation, and the **coracobrachialis**, which — despite living in the arm — only acts at the
**shoulder**, not the elbow.

## Grip changes emphasis

Because the biceps is both a flexor and a supinator, forearm rotation changes how much it contributes to
a curl. A palm-up curl favors the biceps; a neutral-grip hammer curl shifts more work to the brachialis,
which doesn't care which way the palm faces.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The biceps brachii flexes the elbow and supinates the forearm; the triceps brachii extends the elbow; the brachialis flexes the elbow independent of forearm rotation.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "grip-and-arm-emphasis-lesson",
    title: "How Grip Changes Which Arm Muscle Works Hardest",
    summary: "Why a curl's grip position shifts emphasis between the biceps and brachialis.",
    moduleSlug: "the-arms",
    bodyRegionSlug: "arms",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 8,
    order: 2,
    prerequisiteSlugs: ["arms-region-overview"],
    objectives: [
      "Explain why a supinated grip emphasizes the biceps brachii.",
      "Explain why a neutral grip shifts emphasis toward the brachialis.",
      "Match the barbell curl, hammer curl, and triceps pushdown to the muscle each emphasizes.",
    ],
    bodyMarkdown: `## Two flexors, one grip-sensitive

Both the biceps brachii and brachialis flex the elbow, but only the biceps also supinates the forearm.
This means:

- A **supinated (palm-up) grip**, as in a standard barbell curl, lets the biceps contribute both its
  flexion and supination strength — emphasizing it.
- A **neutral grip** (palms facing each other), as in a hammer curl, removes the supination component,
  shifting relatively more demand onto the brachialis.

## Extension is simpler

Elbow extension doesn't have this grip-sensitivity issue — the triceps brachii is the prime mover
regardless of forearm rotation, which is why triceps exercises focus more on shoulder position (overhead
vs. at the side) than grip to change emphasis between its three heads.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The biceps brachii's supination action makes its elbow-flexion contribution grip-dependent, unlike the brachialis.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const armsQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle is the prime mover of elbow extension?",
    explanation: "The triceps brachii, covering the back of the upper arm, is the prime mover of elbow extension.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "arms-region-overview",
    muscleSlug: "triceps-brachii",
    exerciseSlug: "triceps-pushdown",
    bodyRegionSlug: "arms",
    domainCode: "D1",
    options: [
      { text: "Triceps brachii", isCorrect: true, rationale: "Correct — the prime mover of elbow extension." },
      { text: "Biceps brachii", rationale: "Flexes the elbow — the opposite action." },
      { text: "Brachialis", rationale: "Also a flexor, not an extensor, of the elbow." },
      { text: "Coracobrachialis", rationale: "Acts only at the shoulder, not the elbow." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The triceps brachii extends the elbow joint.", locator: "Ch. 11.5" }],
  },
  {
    type: "true_false",
    prompt: "The coracobrachialis acts only at the shoulder joint and has no direct action at the elbow.",
    explanation: "True. Despite being located in the arm, the coracobrachialis inserts on the humerus shaft and does not cross the elbow joint.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "arms-region-overview",
    muscleSlug: "coracobrachialis",
    bodyRegionSlug: "arms",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — it acts only at the shoulder joint." },
      { text: "False", rationale: "The coracobrachialis genuinely has no elbow-joint action." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The coracobrachialis flexes and adducts the arm at the shoulder joint and does not cross the elbow.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why does a hammer curl (neutral grip) shift more emphasis to the brachialis compared to a standard barbell curl?",
    explanation: "The neutral grip removes the forearm-supination action that the biceps specializes in, so relatively more of the flexion demand falls on the brachialis, which is unaffected by forearm rotation.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "grip-and-arm-emphasis-lesson",
    exerciseSlug: "hammer-curl",
    muscleSlug: "brachialis",
    bodyRegionSlug: "arms",
    domainCode: "D3",
    options: [
      { text: "The neutral grip removes the biceps's supination advantage, shifting relative demand to the brachialis", isCorrect: true, rationale: "Correct — the brachialis is unaffected by grip/forearm rotation." },
      { text: "The neutral grip makes the exercise easier so any muscle can be emphasized", rationale: "Grip changes which muscle contributes more, not simply the overall difficulty." },
      { text: "The brachialis only works with dumbbells, never barbells", rationale: "Equipment type is not the reason; grip/forearm position is." },
      { text: "The biceps brachii is inactive during a hammer curl", rationale: "The biceps still contributes; it is emphasized less, not eliminated." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The brachialis flexes the elbow independent of forearm rotation, unlike the biceps brachii.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which action is the biceps brachii's single STRONGEST function?",
    explanation: "While the biceps brachii flexes the elbow and assists shoulder flexion, its strongest, most distinctive action is supination of the forearm (turning the palm up).",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "arms-region-overview",
    muscleSlug: "biceps-brachii",
    bodyRegionSlug: "arms",
    domainCode: "D1",
    options: [
      { text: "Supination of the forearm", isCorrect: true, rationale: "Correct — the biceps brachii's strongest, most distinctive action." },
      { text: "Extension of the elbow", rationale: "The biceps flexes, rather than extends, the elbow." },
      { text: "Abduction of the shoulder", rationale: "Not a primary biceps action — that role belongs mainly to the deltoid." },
      { text: "Extension of the wrist", rationale: "The biceps brachii does not cross the wrist joint at all." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The biceps brachii is the body's strongest supinator of the forearm.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "A client reports a sudden pop in the front of the upper arm during a heavy curl, followed by a visible bulge lower in the arm. What should the trainer do?",
    explanation: "This is the classic presentation of a ruptured distal biceps tendon ('Popeye deformity') and requires prompt medical evaluation, not continued training.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "arms-region-overview",
    muscleSlug: "biceps-brachii",
    bodyRegionSlug: "arms",
    domainCode: "D4",
    options: [
      { text: "Stop the session and refer the client for prompt medical evaluation", isCorrect: true, rationale: "Correct — a classic sign of a significant tendon injury needing medical assessment." },
      { text: "Have them continue curling at a lighter weight", isCorrect: false, rationale: "Continuing to load a possibly torn tendon risks further injury." },
      { text: "Diagnose a biceps tendon rupture and recommend a treatment plan", rationale: "Diagnosis and treatment planning are outside a trainer's scope of practice." },
      { text: "Ice it and resume the workout after a short rest", rationale: "This warning sign needs professional evaluation, not a brief pause before continuing training." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "A pop with a distal bulge in the arm is consistent with a proximal biceps tendon rupture, a significant injury.", locator: "Ch. 11.5" }],
  },
];
