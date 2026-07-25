import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// THIGHS region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 11.6 "Appendicular Muscles of the Pelvic Girdle
// and Lower Limbs" (quadriceps femoris, hamstrings, adductors, sartorius). The
// knee joint (tibiofemoral) is introduced here since these muscles cross it; the
// Knees region (next) covers the patella, ligaments, and common injuries in depth.

const OPENSTAX = "openstax-anp-2e";

export const thighsRegion: BodyRegionSeed = {
  slug: "thighs",
  name: "Thighs",
  order: 8,
  description:
    "The thigh is built around the femur and contains three major muscle groups: the quadriceps in front (knee extensors), the hamstrings behind (hip extensors and knee flexors), and the adductors on the inside (which pull the thigh toward the midline). Together they power almost every standing, walking, and lifting movement.",
  relationships:
    "The thighs work with the **glutes** (hip extension teamwork between the hamstrings and gluteus maximus), the **pelvis/hips** (several thigh muscles cross the hip joint), and the **knees** (the quadriceps and hamstrings are the primary movers and stabilizers of the knee joint, covered in depth in that region).",
  safetyNotes:
    "Sudden sharp pain, a popping sensation, or inability to bear weight after a thigh injury needs prompt medical evaluation — these can indicate a significant strain or tear. A trainer coaches squat, lunge, and hinge technique; they do not diagnose muscle or ligament injuries.",
  assetSlugs: ["thighs-region"],
  pronunciations: [
    { term: "Quadriceps femoris", say: "KWAD-rih-seps FEM-or-iss" },
    { term: "Rectus femoris", say: "REK-tus FEM-or-iss" },
    { term: "Vastus lateralis", say: "VAS-tus lat-er-AL-iss" },
    { term: "Hamstrings", say: "HAM-strings" },
    { term: "Biceps femoris", say: "BY-seps FEM-or-iss" },
    { term: "Adductor magnus", say: "ad-DUK-tor MAG-nus" },
    { term: "Sartorius", say: "sar-TOR-ee-us" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The quadriceps femoris extends the knee, the hamstrings extend the hip and flex the knee, and the adductors pull the thigh toward the midline.",
      locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs",
    },
  ],
  bones: [
    {
      slug: "tibia",
      name: "Tibia (shin bone)",
      latinName: "Tibia",
      description: "The larger, weight-bearing bone of the lower leg, forming the lower half of the knee joint with the femur and receiving the insertion of the quadriceps tendon (via the patellar tendon) and several hamstring muscles.",
      landmarks: "Tibial tuberosity (bump below the kneecap where the patellar tendon attaches), medial malleolus.",
    },
  ],
  joints: [
    {
      slug: "knee-joint",
      name: "Knee joint (tibiofemoral joint)",
      jointType: "synovial, hinge (with some rotation)",
      description: "The joint between the femur and tibia, the largest joint in the body. Primarily a hinge allowing flexion and extension, with a small amount of rotation available when the knee is bent.",
      articulatingBones: "Femur and tibia (the patella glides in a groove on the femur, covered in the Knees region)",
      movementsAllowed: "Flexion, extension, and slight internal/external rotation when flexed.",
    },
  ],
  muscles: [
    {
      slug: "quadriceps-femoris",
      commonName: "Quadriceps femoris",
      scientificName: "Quadriceps femoris (rectus femoris, vastus lateralis, vastus medialis, vastus intermedius)",
      pronunciation: "KWAD-rih-seps FEM-or-iss",
      locationSimple: "The large muscle group covering the front of the thigh, made of four heads that together form the 'quad'.",
      origin: "Rectus femoris: ilium (crosses the hip). The three vastus muscles: femur.",
      insertion: "Patella, then via the patellar tendon to the tibial tuberosity.",
      actions: "Extends the knee (all four heads); the rectus femoris also flexes the hip, since it crosses both joints.",
      jointsCrossed: "Knee joint (all four heads); hip joint (rectus femoris only)",
      movementPlane: "sagittal",
      innervation: "Femoral nerve (L2–L4)",
      functionDaily: "Standing up from a chair, climbing stairs, and straightening the knee with every step.",
      functionExercise: "Prime mover of knee extension in squats, lunges, and leg extensions.",
      beginnerExplanation:
        "The 'quads' are the big muscle on the front of your thigh that straightens your knee — the muscle doing most of the work as you stand up from a deep squat.",
      advancedExplanation:
        "Because the rectus femoris crosses both the hip and knee, its length and force output depend on the position of both joints — it is a less effective knee extensor when the hip is also flexed, which is one reason different squat depths and stances feel different.",
      commonlyConfused: "Beginners often say 'quad' as if it's one muscle; it's actually four heads that always act together at the knee, though only the rectus femoris also crosses the hip.",
      misconceptions: "'Leg extensions are bad for the knees' is an overgeneralization — for most healthy knees, controlled, appropriately loaded leg extensions are a safe and effective quad exercise.",
      safetyInfo: "A sharp, sudden anterior-thigh pain (versus normal training fatigue) during a heavy lift can indicate strain and should be evaluated.",
      status: "source_checked",
      assetSlugs: ["thighs-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The quadriceps femoris (rectus femoris and three vasti) extends the knee; the rectus femoris also flexes the hip.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "hamstrings",
      commonName: "Hamstrings",
      scientificName: "Biceps femoris, semitendinosus, semimembranosus",
      pronunciation: "HAM-strings",
      locationSimple: "The muscle group covering the back of the thigh, made of three muscles.",
      origin: "Ischial tuberosity (the 'sit bone') of the hip bone; the short head of biceps femoris arises from the femur.",
      insertion: "Fibula (biceps femoris) and tibia (semitendinosus, semimembranosus), below the knee.",
      actions: "Extends the hip and flexes the knee — a biarticular (two-joint) muscle group that works closely with the gluteus maximus in hip extension.",
      jointsCrossed: "Hip joint and knee joint",
      movementPlane: "sagittal",
      innervation: "Sciatic nerve (tibial and fibular divisions, L5–S2)",
      functionDaily: "Slowing the leg down as you walk, and helping propel you forward during the push-off phase.",
      functionExercise: "Assists the gluteus maximus in hip-hinge exercises (deadlifts) and is the prime mover of knee flexion in leg curls.",
      beginnerExplanation:
        "The hamstrings run down the back of your thigh and do two jobs: they help drive your hip backward (like in a deadlift) and they bend your knee (like in a leg curl).",
      advancedExplanation:
        "Because they cross both the hip and the knee, hamstrings can be lengthened at one joint while shortened at the other (e.g., hip flexed, knee extended, as in a Romanian deadlift) — this is why RDL-style hip-hinge exercises stretch and load the hamstrings so effectively.",
      commonlyConfused: "Their hip-extension role is sometimes overlooked in favor of the gluteus maximus; in reality both work together in most hip-extension lifts.",
      misconceptions: "Hamstring 'tightness' during a forward bend is not always about muscle length — it can also reflect nervous-system sensitivity or simply insufficient hip-hinge practice.",
      safetyInfo: "A sudden sharp pain or 'pop' in the back of the thigh, especially during sprinting, is a classic hamstring strain sign and needs assessment before returning to training.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The hamstring muscles extend the thigh at the hip and flex the leg at the knee.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "adductors",
      commonName: "Adductors (hip adductor group)",
      scientificName: "Adductor longus, adductor brevis, adductor magnus, gracilis",
      pronunciation: "ad-DUK-tor MAG-nus",
      locationSimple: "The group of muscles on the inside of the thigh, running from the pelvis down toward the femur and knee.",
      origin: "Pubic bone (and ischium for adductor magnus).",
      insertion: "Along the shaft of the femur (linea aspera); gracilis continues to the tibia.",
      actions: "Adducts the thigh at the hip (pulls it toward the midline); portions also assist hip flexion or extension depending on fiber orientation.",
      jointsCrossed: "Hip joint (gracilis also crosses the knee)",
      movementPlane: "frontal",
      innervation: "Obturator nerve (with some sciatic nerve contribution to adductor magnus)",
      functionDaily: "Bringing the leg back toward the midline, such as crossing one leg in front of the other, and stabilizing the thigh side-to-side while walking.",
      functionExercise: "Stabilizes the thigh during squats and lunges, and is the prime mover in dedicated adduction exercises (cable/machine hip adduction).",
      beginnerExplanation:
        "These inner-thigh muscles pull your leg in toward your body's midline — think of squeezing your knees together, or stopping your leg from sliding out to the side.",
      advancedExplanation:
        "Because the adductor group is large and crosses close to the hip's center of rotation, it also contributes meaningfully to hip extension and stabilization during wide-stance lifts like the sumo deadlift.",
      commonlyConfused: "Often thought of only as 'inner thigh' toning muscles, but they play a real stabilizing role in squats, lunges, and change-of-direction sports movements.",
      misconceptions: "Groin strains are not always about weak adductors alone — training load, movement variety, and recovery all play a role.",
      safetyInfo: "Groin pain with a sudden onset (especially during a cutting or sprinting motion) is a classic adductor strain sign and should be assessed before continuing to train through it.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The adductor muscles (longus, brevis, magnus) and gracilis adduct the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "sartorius",
      commonName: "Sartorius",
      scientificName: "Sartorius",
      pronunciation: "sar-TOR-ee-us",
      locationSimple: "The longest muscle in the body, a thin strap running diagonally across the front of the thigh from the outer hip to the inner knee.",
      origin: "Anterior superior iliac spine (ASIS) of the hip bone.",
      insertion: "Upper medial surface of the tibia.",
      actions: "Flexes, abducts, and externally rotates the thigh at the hip, and flexes the knee — the combination of actions used to sit cross-legged (historically the position of a tailor at work, giving the muscle its name).",
      jointsCrossed: "Hip joint and knee joint",
      movementPlane: "multiple",
      innervation: "Femoral nerve (L2–L3)",
      functionDaily: "Crossing one leg over the other while seated, or the outward-turning, knee-lifting motion of stepping over an obstacle.",
      functionExercise: "A synergist rather than a prime mover in most lower-body exercises; assists hip flexion/external rotation movements.",
      beginnerExplanation:
        "This long, thin muscle runs diagonally across your thigh and lets you sit 'cross-legged' — it flexes and rotates your hip outward while bending your knee, all at once.",
      advancedExplanation:
        "As the longest muscle in the body, it is a useful anatomical landmark, but functionally it acts mostly as an assistant to more powerful hip and knee movers rather than a prime mover in strength training.",
      commonlyConfused: "Its diagonal path is often confused with the tensor fasciae latae's, but the sartorius runs to the INSIDE of the knee while the TFL/IT band runs to the OUTSIDE.",
      misconceptions: "There is no dedicated 'sartorius exercise' in typical training — it is trained incidentally through hip-flexion and rotation movements.",
      safetyInfo: "Rarely injured in isolation; general thigh-strain precautions apply.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The sartorius flexes, abducts, and laterally rotates the thigh and flexes the knee.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
  ],
};

export const thighsMovements: MovementSeed[] = [
  {
    slug: "knee-extension",
    name: "Knee extension",
    description: "Straightening the knee. Driven by the quadriceps femoris.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Extension at the knee joint",
    oppositeSlug: "knee-flexion",
  },
  {
    slug: "knee-flexion",
    name: "Knee flexion",
    description: "Bending the knee, bringing the heel toward the buttock. Driven by the hamstrings.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the knee joint",
    oppositeSlug: "knee-extension",
  },
];

export const thighsExercises: ExerciseSeed[] = [
  {
    slug: "barbell-back-squat",
    name: "Barbell Back Squat",
    altNames: "Back squat",
    simpleExplanation: "With a barbell across the upper back, bending the hips and knees to lower the body and then standing back up.",
    purpose: "A foundational full-lower-body exercise that builds the quadriceps, glutes, and hamstrings together.",
    startingPosition: "Stand with the barbell resting across the upper back (not the neck), feet roughly shoulder-width, toes slightly turned out.",
    instructions: [
      "Brace the core, then bend the hips and knees together to lower the body, keeping the chest up and the heels down.",
      "Lower to a depth you can control with a neutral spine — for most beginners, thighs roughly parallel to the floor.",
      "Drive through the whole foot to stand back up, keeping the knees tracking in line with the toes.",
    ],
    breathing: "Inhale and brace before descending; exhale as you drive up to standing.",
    cues: "\"Chest up, sit down and back, knees track over your toes, drive the floor away.\"",
    commonMistakes: "Letting the knees cave inward; rounding the low back at the bottom; rising onto the toes; descending faster than can be controlled.",
    safety: "Squat only as deep as a neutral spine and controlled knee position can be maintained; use a spotter or safety pins when adding significant load.",
    regression: "Bodyweight squat, box squat (sitting to a box to control depth), or goblet squat with a lighter, front-loaded weight.",
    progression: "Add load gradually, or increase depth/tempo control once technique is consistent.",
    alternatives: "Goblet squat, leg press, front squat.",
    whyItWorks: "By moving through a large range at both the hip and knee simultaneously, the squat loads the quadriceps (knee extension), glutes and hamstrings (hip extension), and adductors (frontal-plane stability) together — one of the most complete lower-body exercises available.",
    benefitsWho: "Almost everyone building lower-body strength; foundational for sport, general fitness, and daily function (sitting/standing).",
    cautionWho: "Those with knee or hip pain that worsens with depth should regress depth or load and seek individualized coaching.",
    equipment: ["barbell"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "squat",
    setting: "gym",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["thighs-region"],
    primaryMuscles: ["quadriceps-femoris"],
    secondaryMuscles: ["gluteus-maximus", "hamstrings", "adductors"],
    joints: [
      { jointSlug: "knee-joint", jointAction: "extension" },
      { jointSlug: "hip-joint", jointAction: "extension" },
    ],
    movements: ["knee-extension", "hip-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris extends the knee and the gluteus maximus/hamstrings extend the hip, the two joint actions combined in a squat.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "walking-lunge",
    name: "Walking Lunge",
    altNames: "Alternating walking lunge",
    simpleExplanation: "Stepping forward into a lunge position, lowering the back knee toward the floor, then stepping through to repeat on the other leg.",
    purpose: "A unilateral (single-leg-dominant) exercise that builds quad and glute strength while challenging balance.",
    startingPosition: "Stand tall, feet together, core braced.",
    instructions: [
      "Step forward with one leg and lower the body until both knees are bent near 90°, back knee hovering just above the floor.",
      "Keep the front knee tracking over the foot and the torso upright.",
      "Drive through the front foot to stand up and step through into the next lunge on the other leg.",
    ],
    breathing: "Inhale as you lower; exhale as you drive up to step through.",
    cues: "\"Tall torso, front knee over the ankle, drive through the front heel.\"",
    commonMistakes: "Letting the front knee drift far past the toes with the heel rising; leaning the torso far forward; taking a step that's too short or too long.",
    safety: "Use a shorter, more controlled step length while learning; hold a wall or rail if balance is limited.",
    regression: "Stationary (reverse) lunge instead of walking, or hold onto a support for balance.",
    progression: "Add dumbbells, or increase step distance/depth once balance and control are solid.",
    alternatives: "Reverse lunge, step-up, split squat.",
    whyItWorks: "Working one leg at a time reveals and addresses side-to-side strength or balance differences, while still heavily loading the quadriceps and glutes through a full range of hip and knee motion.",
    benefitsWho: "Anyone building single-leg strength and balance, including athletes in sports with a lot of single-leg movement.",
    cautionWho: "Those with balance limitations or significant knee pain in a lunge position should regress to a supported or stationary variation.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "lunge",
    setting: "home",
    unilateral: true,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["quadriceps-femoris"],
    secondaryMuscles: ["gluteus-maximus", "adductors"],
    joints: [
      { jointSlug: "knee-joint", jointAction: "extension" },
      { jointSlug: "hip-joint", jointAction: "extension" },
    ],
    movements: ["knee-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris extends the knee, the primary joint action driving a lunge back to standing.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "leg-extension",
    name: "Leg Extension",
    altNames: "Machine leg extension",
    simpleExplanation: "Seated at a machine, straightening the knees against resistance to lift a padded lever.",
    purpose: "Isolates the quadriceps for knee extension without involving the hip joint.",
    startingPosition: "Sit in the machine with the back supported, shins behind the padded lever, knees bent to about 90°.",
    instructions: [
      "Extend the knees to straighten the legs, lifting the pad in a controlled arc.",
      "Pause briefly at the top without locking out forcefully.",
      "Lower back down under control to the starting position.",
    ],
    breathing: "Exhale as you extend the knees; inhale as you lower.",
    cues: "\"Smooth and controlled — squeeze the quads at the top, don't let the weight drop.\"",
    commonMistakes: "Using momentum (swinging the weight up); locking the knees out harshly; lowering too fast.",
    safety: "Use a resistance and range of motion that stays comfortable at the kneecap; sharp anterior knee pain is a signal to reduce load or range.",
    regression: "Reduce load or range of motion (partial reps in a pain-free arc).",
    progression: "Increase load or add a pause at the top of the range.",
    alternatives: "Sissy squat, wall sit (isometric quad work).",
    whyItWorks: "Because it is a single-joint (knee-only) movement, it isolates the quadriceps directly, which is useful both for building quad size/strength and for identifying/addressing side-to-side strength differences.",
    benefitsWho: "Anyone wanting to isolate quad strength, including as an accessory to squats or for rehabilitation-style strengthening.",
    cautionWho: "Those with anterior knee pain (e.g., patellofemoral discomfort) should reduce range/load or consult the Knees region's safety guidance.",
    equipment: ["cable-machine"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["quadriceps-femoris"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "knee-joint", jointAction: "extension" }],
    movements: ["knee-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris is the sole prime mover of knee extension.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "leg-curl",
    name: "Leg Curl",
    altNames: "Hamstring curl, lying/seated leg curl",
    simpleExplanation: "Lying face-down (or seated) at a machine, bending the knees against resistance to curl a padded lever toward the buttocks.",
    purpose: "Isolates the hamstrings for knee flexion without involving the hip joint.",
    startingPosition: "Lie face-down on the machine with the ankles behind the padded lever, legs straight.",
    instructions: [
      "Curl the lever up by bending the knees, bringing the heels toward the buttocks.",
      "Pause briefly at the top without lifting the hips off the pad.",
      "Lower back down under control to full leg extension.",
    ],
    breathing: "Exhale as you curl the legs up; inhale as you lower.",
    cues: "\"Curl with the hamstrings, keep the hips down, control the lowering.\"",
    commonMistakes: "Lifting the hips off the bench to cheat more weight up; using a fast, uncontrolled tempo; not completing the full range.",
    safety: "Move through a comfortable range without forcing extra flexion; avoid jerking the weight.",
    regression: "Reduce load, or use a single-leg version with a lighter setting for more control.",
    progression: "Increase load, or add a slow eccentric (lowering) phase for more time under tension.",
    alternatives: "Nordic hamstring curl (advanced, bodyweight), stability-ball leg curl.",
    whyItWorks: "As a single-joint (knee-only) movement, it isolates the hamstrings' knee-flexion action, complementing hip-hinge exercises (which train hamstrings mainly through hip extension) for balanced hamstring development.",
    benefitsWho: "Anyone building hamstring strength as an accessory to squats/deadlifts, or targeting hamstring balance for injury-risk reduction in sport.",
    cautionWho: "Those with a recent hamstring strain should get clearance and use light load/range before progressing.",
    equipment: ["cable-machine"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "knee-joint", jointAction: "flexion" }],
    movements: ["knee-flexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The hamstring muscles flex the leg at the knee joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
];

export const thighsLessons: LessonSeed[] = [
  {
    slug: "thighs-region-overview",
    title: "The Thighs: An Overview",
    summary: "The quadriceps, hamstrings, adductors, and sartorius — the powerhouse muscles between hip and knee.",
    moduleSlug: "the-thighs",
    bodyRegionSlug: "thighs",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["pelvis-hips-region-overview"],
    assetSlugs: ["thighs-region"],
    safetyNotes:
      "Sudden sharp pain, a popping sensation, or inability to bear weight after a thigh injury needs prompt medical evaluation. A trainer coaches squat/lunge/hinge technique; they do not diagnose muscle strains or ligament injuries.",
    objectives: [
      "Name the four major thigh muscle groups and their primary actions.",
      "Explain what a biarticular (two-joint) muscle is, using the hamstrings and rectus femoris as examples.",
      "Describe how the quadriceps and hamstrings work as an opposing pair at the knee.",
    ],
    bodyMarkdown: `## Four groups around one bone

The thigh surrounds the **femur** with three major groups plus one long specialist muscle:

- **Quadriceps femoris** (front) — four heads that straighten the knee.
- **Hamstrings** (back) — three muscles that extend the hip and bend the knee.
- **Adductors** (inside) — pull the thigh toward the midline and stabilize it side-to-side.
- **Sartorius** — the longest muscle in the body, crossing both the hip and knee diagonally.

## Two-joint muscles

The hamstrings and the rectus femoris (one of the four quad heads) are **biarticular** — they cross two
joints (hip and knee) instead of one. This means their length and force depend on the position of both
joints at once, which is part of why exercise selection (squat vs. Romanian deadlift vs. leg curl) changes
which part of a muscle group gets emphasized.

## An opposing pair at the knee

At the knee, the quadriceps (extension) and hamstrings (flexion) act as an opposing pair, much like biceps
and triceps at the elbow. Balanced strength between them is a common training and injury-prevention goal.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris extends the knee and the hamstrings extend the hip and flex the knee.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "compound-vs-isolation-lower-body-lesson",
    title: "Compound vs. Isolation: Squats, Lunges, and Leg Curls",
    summary: "Why multi-joint and single-joint lower-body exercises both have a place in a program.",
    moduleSlug: "the-thighs",
    bodyRegionSlug: "thighs",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 9,
    order: 2,
    prerequisiteSlugs: ["thighs-region-overview"],
    objectives: [
      "Distinguish compound (multi-joint) from isolation (single-joint) lower-body exercises.",
      "Match the squat, lunge, leg extension, and leg curl to the joints and muscles they primarily train.",
      "Explain a benefit of including isolation work alongside compound lifts.",
    ],
    bodyMarkdown: `## Compound: squat and lunge

The **squat** and **lunge** move at both the hip and knee joints at once, training the quadriceps,
glutes, hamstrings, and adductors together. These compound movements are efficient and closely mimic
real-world movement (sitting, standing, climbing).

## Isolation: leg extension and leg curl

The **leg extension** (knee only, quadriceps) and **leg curl** (knee only, hamstrings) isolate a single
muscle group at a single joint. They are useful for targeting a specific muscle, building it up as an
accessory to compound lifts, or addressing a side-to-side strength imbalance that's hard to feel in a
compound movement.

## Why use both

A well-rounded program often uses compound lifts as the foundation and isolation exercises to fill in
gaps — for example, adding leg curls if hamstring strength lags noticeably behind quad strength.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris and hamstrings can be trained through both multi-joint (squat, lunge) and single-joint (leg extension, leg curl) exercises.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
];

export const thighsQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle group is the prime mover of knee extension?",
    explanation: "The quadriceps femoris (all four heads) is the sole prime mover of knee extension.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "thighs-region-overview",
    muscleSlug: "quadriceps-femoris",
    exerciseSlug: "leg-extension",
    bodyRegionSlug: "thighs",
    domainCode: "D1",
    options: [
      { text: "Quadriceps femoris", isCorrect: true, rationale: "Correct — the sole prime mover of knee extension." },
      { text: "Hamstrings", rationale: "The hamstrings flex the knee — the opposite action." },
      { text: "Adductors", rationale: "Primarily adduct the hip, not a knee extensor group." },
      { text: "Gluteus maximus", rationale: "A hip extensor, not a knee mover." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The quadriceps femoris extends the knee.", locator: "Ch. 11.6" }],
  },
  {
    type: "true_false",
    prompt: "The hamstrings are biarticular, meaning they cross and act on two joints (the hip and the knee).",
    explanation: "True. The hamstrings extend the hip and flex the knee, crossing both joints.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "thighs-region-overview",
    muscleSlug: "hamstrings",
    bodyRegionSlug: "thighs",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — the hamstrings cross both the hip and knee joints." },
      { text: "False", rationale: "The hamstrings do cross two joints, making them biarticular." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The hamstrings extend the thigh at the hip and flex the leg at the knee, crossing both joints.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which of these is a single-joint (isolation) exercise for the quadriceps?",
    explanation: "The leg extension moves only at the knee, isolating the quadriceps, unlike the squat or lunge which move at both the hip and knee.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "compound-vs-isolation-lower-body-lesson",
    exerciseSlug: "leg-extension",
    muscleSlug: "quadriceps-femoris",
    bodyRegionSlug: "thighs",
    domainCode: "D3",
    options: [
      { text: "Leg extension", isCorrect: true, rationale: "Correct — a single-joint, knee-only quadriceps exercise." },
      { text: "Barbell back squat", rationale: "A compound, multi-joint exercise (hip and knee together)." },
      { text: "Walking lunge", rationale: "Also compound, moving at both the hip and knee." },
      { text: "Leg curl", rationale: "A single-joint exercise, but for the hamstrings, not the quadriceps." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The quadriceps femoris can be isolated through knee-only exercises such as the leg extension.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which muscle group runs down the inside of the thigh and pulls the leg toward the body's midline?",
    explanation: "The adductor group (adductor longus, brevis, magnus, and gracilis) adducts the thigh at the hip.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "thighs-region-overview",
    muscleSlug: "adductors",
    bodyRegionSlug: "thighs",
    domainCode: "D1",
    options: [
      { text: "Adductors", isCorrect: true, rationale: "Correct — the inner-thigh muscle group that adducts the hip." },
      { text: "Sartorius", rationale: "Crosses the thigh diagonally but is not the main adductor group." },
      { text: "Quadriceps femoris", rationale: "Located on the front of the thigh and extends the knee, not an adductor." },
      { text: "Gluteus medius", rationale: "An abductor on the outside of the hip — the opposite action and location." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The adductor muscles adduct the thigh at the hip joint.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "What makes the sartorius unusual compared to most other thigh muscles?",
    explanation: "The sartorius is the longest muscle in the body and performs a unique combination of actions (hip flexion, abduction, external rotation, plus knee flexion) rather than a single primary job.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "thighs-region-overview",
    muscleSlug: "sartorius",
    bodyRegionSlug: "thighs",
    domainCode: "D1",
    options: [
      { text: "It is the longest muscle in the body and crosses both the hip and knee diagonally", isCorrect: true, rationale: "Correct — its length and diagonal path across two joints are distinctive." },
      { text: "It is the strongest knee extensor in the body", rationale: "That describes the quadriceps femoris, not the sartorius." },
      { text: "It only crosses the knee joint", rationale: "The sartorius crosses both the hip and the knee." },
      { text: "It cannot be trained by any exercise", rationale: "It is trained incidentally by hip-flexion and rotation movements, just not in isolation." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The sartorius is the longest muscle in the body and crosses both the hip and knee joints.", locator: "Ch. 11.6" }],
  },
];
