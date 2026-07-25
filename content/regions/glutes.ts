import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// GLUTES region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 11.6 "Appendicular Muscles of the Pelvic Girdle
// and Lower Limbs" (gluteus maximus, medius, minimus). The hip joint itself is
// covered in the Pelvis & Hips region; this region focuses on the muscles that
// move and stabilize it from behind and the side.

const OPENSTAX = "openstax-anp-2e";

export const glutesRegion: BodyRegionSeed = {
  slug: "glutes",
  name: "Glutes",
  order: 7,
  description:
    "The gluteal muscles form the buttocks and are among the most powerful muscles in the body. The gluteus maximus drives forceful hip extension (as in sprinting, jumping, and standing up from a squat), while the gluteus medius and minimus stabilize the pelvis from the side, especially during single-leg stance.",
  relationships:
    "The glutes are the prime extensors that power the **hip joint** (covered in Pelvis & Hips) and work closely with the **lower back** (sharing the hip-hinge pattern) and **thighs** (the hamstrings assist hip extension, and the quadriceps extend the knee in the same lifts).",
  safetyNotes:
    "Deep buttock pain with numbness or tingling radiating down the leg can indicate nerve involvement and needs medical evaluation, not exercise. A trainer coaches glute-strengthening exercise technique; they do not diagnose nerve-related pain.",
  assetSlugs: ["glutes-region"],
  pronunciations: [
    { term: "Gluteus maximus", say: "GLOO-tee-us MAK-sih-mus" },
    { term: "Gluteus medius", say: "GLOO-tee-us MEE-dee-us" },
    { term: "Gluteus minimus", say: "GLOO-tee-us MIN-ih-mus" },
    { term: "Gluteal tuberosity", say: "GLOO-tee-ul too-ber-OSS-ih-tee" },
    { term: "Trendelenburg", say: "tren-DEL-en-berg" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The gluteus maximus is the primary extensor of the hip, while the gluteus medius and minimus abduct the thigh and stabilize the pelvis during single-leg stance.",
      locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs",
    },
  ],
  bones: [
    {
      slug: "femur",
      name: "Femur (thigh bone)",
      latinName: "Femur",
      description: "The longest, strongest bone in the body, running from the hip joint to the knee. Its upper end (head, neck, greater and lesser trochanters) is where the gluteal muscles attach.",
      landmarks: "Head, neck, greater trochanter (large bump felt at the outer hip), gluteal tuberosity.",
    },
  ],
  joints: [],
  muscles: [
    {
      slug: "gluteus-maximus",
      commonName: "Gluteus maximus",
      scientificName: "Gluteus maximus",
      pronunciation: "GLOO-tee-us MAK-sih-mus",
      locationSimple: "The largest and most superficial muscle of the buttock, forming its rounded shape.",
      origin: "Ilium (posterior surface), sacrum, and coccyx.",
      insertion: "Gluteal tuberosity of the femur and the iliotibial (IT) band.",
      actions: "Powerfully extends and externally rotates the thigh at the hip; the upper fibers also assist abduction. Its greatest contribution is during forceful hip extension against resistance (rising from a squat, sprinting, climbing).",
      jointsCrossed: "Hip joint",
      movementPlane: "sagittal (extension); transverse (rotation)",
      innervation: "Inferior gluteal nerve (L5–S2)",
      functionDaily: "Climbing stairs, standing up from a low chair, and the drive phase of walking and running.",
      functionExercise: "Prime mover in hip thrusts, squats, deadlifts, and lunges — the strongest hip extensor in the body.",
      beginnerExplanation:
        "The biggest muscle in your buttock, it powerfully drives your hip forward — the muscle that gets you standing up out of a deep squat or drives a sprint stride.",
      advancedExplanation:
        "It contributes relatively little at small hip-extension angles (like standing tall) but dominates as the hip flexes further (as in a deep squat or sprint start), which is why hip thrusts and squats train it so effectively through a full range.",
      commonlyConfused: "Its role is sometimes given entirely to the hamstrings in hip extension; both contribute, but the gluteus maximus is the larger, more powerful mover, especially at greater hip flexion.",
      misconceptions: "'Glute exercises are only for appearance' undersells their role — strong glutes are central to hip extension power, sprinting, and reducing compensation at the low back during lifting.",
      safetyInfo: "Deep gluteal or radiating leg pain is different from normal training soreness and should be assessed.",
      status: "source_checked",
      assetSlugs: ["glutes-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The gluteus maximus is a powerful extensor and lateral rotator of the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "gluteus-medius",
      commonName: "Gluteus medius",
      scientificName: "Gluteus medius",
      pronunciation: "GLOO-tee-us MEE-dee-us",
      locationSimple: "A fan-shaped muscle on the outer surface of the pelvis, mostly hidden beneath the gluteus maximus.",
      origin: "Outer surface of the ilium.",
      insertion: "Greater trochanter of the femur.",
      actions: "Abducts the thigh at the hip; its anterior fibers assist internal rotation and its posterior fibers assist external rotation. Critically, it stabilizes the pelvis (keeps it level) during single-leg stance.",
      jointsCrossed: "Hip joint",
      movementPlane: "frontal (abduction)",
      innervation: "Superior gluteal nerve (L4–S1)",
      functionDaily: "Keeping the pelvis level every time you take a step and are momentarily balanced on one leg.",
      functionExercise: "Prime mover in side-lying leg raises and band-resisted hip abduction; a key stabilizer in single-leg exercises like lunges and step-ups.",
      beginnerExplanation:
        "This hip muscle lifts your leg out to the side, but its bigger everyday job is keeping your hips level and steady every time you take a step.",
      advancedExplanation:
        "Weakness here is classically associated with a 'Trendelenburg' pattern — the opposite hip drops during single-leg stance because the weight-bearing side's gluteus medius cannot hold the pelvis level.",
      commonlyConfused: "Often confused with the gluteus maximus by beginners since both are 'glute' muscles, but they have very different primary jobs (extension vs. pelvic stabilization/abduction).",
      misconceptions: "A visibly weak-looking glute is not always about size — pelvic control during single-leg movement is a functional marker that matters as much as visible muscle bulk.",
      safetyInfo: "A hip that visibly drops during single-leg standing or walking is worth professional assessment if it is new or worsening.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The gluteus medius abducts the thigh and stabilizes the pelvis during single-leg stance.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "gluteus-minimus",
      commonName: "Gluteus minimus",
      scientificName: "Gluteus minimus",
      pronunciation: "GLOO-tee-us MIN-ih-mus",
      locationSimple: "The smallest and deepest of the three gluteal muscles, lying directly beneath the gluteus medius.",
      origin: "Outer surface of the ilium (below the gluteus medius origin).",
      insertion: "Greater trochanter of the femur.",
      actions: "Abducts and internally rotates the thigh at the hip; works with the gluteus medius to stabilize the pelvis during single-leg stance.",
      jointsCrossed: "Hip joint",
      movementPlane: "frontal (abduction)",
      innervation: "Superior gluteal nerve (L4–S1)",
      functionDaily: "Assists the gluteus medius in keeping the pelvis level while walking.",
      functionExercise: "Co-activated with the gluteus medius in hip-abduction and single-leg stability exercises; not typically isolated on its own.",
      beginnerExplanation:
        "The smallest, deepest glute muscle — it works together with the gluteus medius just above it, so in practice you train them as a team, not separately.",
      advancedExplanation:
        "Because it lies deep to the gluteus medius and shares similar attachments and actions, it is functionally treated as part of the same 'abductor/stabilizer' unit rather than trained in isolation.",
      commonlyConfused: "Frequently not distinguished from the gluteus medius at all in casual conversation — they are separate muscles but act as a close team.",
      misconceptions: "There is no isolated exercise that trains only the gluteus minimus without also involving the gluteus medius.",
      safetyInfo: "Same precautions as the gluteus medius — assess new or worsening pelvic-drop patterns during walking.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The gluteus minimus abducts and medially rotates the thigh and assists pelvic stabilization.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
  ],
};

export const glutesMovements: MovementSeed[] = [
  {
    slug: "hip-abduction",
    name: "Hip abduction",
    description: "Moving the thigh out and away from the midline of the body. Driven by the gluteus medius and minimus.",
    plane: "frontal",
    axis: "sagittal",
    jointAction: "Abduction at the hip joint",
    oppositeSlug: "hip-adduction",
  },
  {
    slug: "hip-adduction",
    name: "Hip adduction",
    description: "Moving the thigh in toward and across the midline of the body. Driven by the adductor muscle group (covered in the Thighs region).",
    plane: "frontal",
    axis: "sagittal",
    jointAction: "Adduction at the hip joint",
    oppositeSlug: "hip-abduction",
  },
];

export const glutesExercises: ExerciseSeed[] = [
  {
    slug: "barbell-hip-thrust",
    name: "Barbell Hip Thrust",
    altNames: "Hip thrust",
    simpleExplanation: "With upper back braced against a bench and a barbell across the hips, driving the hips upward until the body forms a straight line, then lowering with control.",
    purpose: "One of the most direct ways to load the gluteus maximus through a full range of hip extension.",
    startingPosition: "Sit on the floor with upper back against a padded bench, a barbell (padded) across the hip crease, knees bent, feet flat.",
    instructions: [
      "Brace the core and drive through the heels, extending the hips upward.",
      "At the top, the body should form a straight line from shoulders to knees; squeeze the glutes firmly.",
      "Lower the hips under control back to just short of the floor and repeat.",
    ],
    breathing: "Exhale as you drive the hips up; inhale as you lower.",
    cues: "\"Drive through the heels, squeeze the glutes hard at the top, ribs down (don't overextend the low back).\"",
    commonMistakes: "Overextending the lower back at the top instead of squeezing the glutes; pushing through the toes instead of the heels; using too much bar weight before mastering the pattern.",
    safety: "Keep the ribs stacked over the pelvis at the top rather than arching the low back — the movement should finish in a straight line, not a back-bend. Pad the bar well.",
    regression: "Bodyweight glute bridge or single-leg glute bridge before adding a barbell.",
    progression: "Add load gradually once the top position is controlled and pain-free.",
    alternatives: "Glute bridge, single-leg hip thrust, cable pull-through.",
    whyItWorks: "By positioning the torso so resistance is directly opposed to hip extension through a large range, the hip thrust loads the gluteus maximus more directly than most squat or deadlift variations, which share the work with the quadriceps or spinal erectors.",
    benefitsWho: "Anyone building hip-extension strength and power, from general strength trainers to athletes needing sprint/jump power.",
    cautionWho: "Those with hip or low-back pain when loaded in this position should start with the bodyweight glute bridge regression.",
    equipment: ["barbell", "bench"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "hip-extension",
    setting: "gym",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["glutes-region"],
    primaryMuscles: ["gluteus-maximus"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "hip-joint", jointAction: "extension" }],
    movements: ["hip-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gluteus maximus is a powerful extensor of the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "glute-bridge",
    name: "Glute Bridge",
    altNames: "Bodyweight hip bridge",
    simpleExplanation: "Lying on the back with knees bent and feet flat, driving the hips upward into a straight line, then lowering under control.",
    purpose: "A beginner-friendly, equipment-free way to build hip-extension strength and glute activation before progressing to the hip thrust.",
    startingPosition: "Lie on your back, knees bent, feet flat on the floor about hip-width apart, arms at your sides.",
    instructions: [
      "Brace the core and drive through the heels, lifting the hips until the body forms a straight line from shoulders to knees.",
      "Squeeze the glutes firmly at the top; avoid overarching the low back.",
      "Lower the hips under control back to the floor and repeat.",
    ],
    breathing: "Exhale as the hips rise; inhale as they lower.",
    cues: "\"Drive through the heels, squeeze the glutes, keep the ribs down.\"",
    commonMistakes: "Overarching the low back rather than extending through the hips; pushing through the toes instead of the heels; rushing the tempo.",
    safety: "A comfortable, low-load exercise for most people; if the low back — not the glutes — is what feels like it's working, focus on the bracing cues before adding load.",
    regression: "Reduce range of motion, or perform with feet closer to the hips for an easier lever.",
    progression: "Single-leg glute bridge, or add a light weight across the hips, then progress to the barbell hip thrust.",
    alternatives: "Barbell hip thrust, single-leg glute bridge.",
    whyItWorks: "It trains the same hip-extension pattern as the hip thrust with body weight only, letting beginners groove the 'drive through the heels, squeeze the glutes' pattern before adding external load.",
    benefitsWho: "Beginners and anyone learning the hip-extension pattern, or rehabbing back into glute-focused training.",
    cautionWho: "Those with acute low back pain that worsens with hip extension should reduce range and check bracing technique.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "hip-extension",
    setting: "home",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["gluteus-maximus"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "hip-joint", jointAction: "extension" }],
    movements: ["hip-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gluteus maximus extends the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "side-lying-hip-abduction",
    name: "Side-Lying Hip Abduction",
    altNames: "Side-lying leg raise",
    simpleExplanation: "Lying on one side, lifting the top leg straight up toward the ceiling and lowering it with control.",
    purpose: "Isolates the gluteus medius and minimus for hip abduction and pelvic-stabilization strength.",
    startingPosition: "Lie on your side, legs stacked and roughly straight, head resting on the bottom arm or a support.",
    instructions: [
      "Keeping the top leg straight and the toes pointing forward (not rolled up toward the ceiling), lift it toward the ceiling.",
      "Pause briefly at the top, feeling the outer hip working.",
      "Lower with control back to the starting position and repeat before switching sides.",
    ],
    breathing: "Exhale as the leg lifts; inhale as it lowers.",
    cues: "\"Toes forward, lift from the hip, don't roll the hip back to cheat the height.\"",
    commonMistakes: "Rolling the hip/pelvis backward to swing the leg higher (using the hip flexors instead of the abductors); lifting too fast; letting the toes turn up toward the ceiling.",
    safety: "A low-load, generally safe exercise; keep the range and speed controlled to keep the target muscle working rather than momentum.",
    regression: "Reduce the range of motion, or bend the top knee slightly to shorten the lever.",
    progression: "Add an ankle weight or light resistance band above the knees.",
    alternatives: "Standing band hip abduction (Pelvis & Hips region), cable hip abduction.",
    whyItWorks: "Isolating the movement in a side-lying position removes the ability to use momentum or other muscle groups, directly targeting the gluteus medius/minimus responsible for keeping the pelvis level during walking and single-leg stance.",
    benefitsWho: "Anyone building hip stability, including those working on walking/running mechanics or recovering general hip strength.",
    cautionWho: "Those with hip joint pain during this motion should reduce range or seek individual guidance.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "frontal",
    status: "source_checked",
    primaryMuscles: ["gluteus-medius"],
    secondaryMuscles: ["gluteus-minimus"],
    joints: [{ jointSlug: "hip-joint", jointAction: "abduction" }],
    movements: ["hip-abduction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gluteus medius and minimus abduct the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
];

export const glutesLessons: LessonSeed[] = [
  {
    slug: "glutes-region-overview",
    title: "The Glutes: An Overview",
    summary: "The powerful hip extensors and stabilizers of the buttock — gluteus maximus, medius, and minimus.",
    moduleSlug: "the-glutes",
    bodyRegionSlug: "glutes",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["pelvis-hips-region-overview"],
    assetSlugs: ["glutes-region"],
    safetyNotes:
      "Deep gluteal pain with numbness or tingling radiating down the leg needs medical evaluation. A trainer coaches glute-strengthening technique; they do not diagnose nerve-related pain.",
    objectives: [
      "Name the three gluteal muscles and their primary actions.",
      "Explain the difference between the gluteus maximus's extension role and the medius/minimus's stabilization role.",
      "Describe why single-leg pelvic control matters for walking and running.",
    ],
    bodyMarkdown: `## Three muscles, two jobs

The buttock contains three gluteal muscles:

- **Gluteus maximus** — the largest, most powerful hip **extensor**, driving you up out of a squat or
  powering a sprint stride.
- **Gluteus medius** and **gluteus minimus** — smaller muscles on the side of the hip that **abduct**
  the thigh, but whose everyday job is keeping the pelvis level whenever you stand on one leg.

## Extension power vs. pelvic control

Think of it as power versus control: the gluteus maximus generates large forward-driving force, while
the medius/minimus quietly stabilize the pelvis with every single step you take. Both matter — a training
plan that only does hip-thrust-style extension work and skips single-leg stability work is missing half
the picture.

## A classic sign of weakness

When the gluteus medius on the standing leg is too weak to hold the pelvis level, the opposite hip drops
during walking — a pattern (Trendelenburg gait) that highlights just how much stabilization work these
muscles do without you noticing.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gluteus maximus extends the hip; the gluteus medius and minimus abduct the hip and stabilize the pelvis during single-leg stance.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "hip-extension-exercise-progression-lesson",
    title: "Building Hip-Extension Strength: Bridge to Thrust",
    summary: "How the glute bridge and hip thrust train the same pattern at different levels.",
    moduleSlug: "the-glutes",
    bodyRegionSlug: "glutes",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 8,
    order: 2,
    prerequisiteSlugs: ["glutes-region-overview"],
    objectives: [
      "Explain why the glute bridge is a natural regression for the barbell hip thrust.",
      "Identify the key coaching cue that distinguishes hip extension from low-back overextension.",
      "Describe the role of the gluteus medius/minimus in single-leg exercises.",
    ],
    bodyMarkdown: `## Same pattern, different load

The **glute bridge** and **barbell hip thrust** both train hip extension — driving the hips up by
squeezing the glutes. The bridge (floor, bodyweight) is the natural starting point; the thrust
(shoulders on a bench, loaded with a barbell) is the progression once the pattern is grooved.

## The key cue: glutes, not low back

A common technical error in both exercises is finishing the top position by **arching the low back**
rather than fully extending the **hip**. Coaches cue "squeeze the glutes, ribs down" to keep the work at
the hip joint rather than letting the lumbar spine take over.

## Stability work matters too

Because the gluteus medius/minimus stabilize the pelvis during single-leg tasks, exercises like the
side-lying hip abduction round out a glute program that would otherwise only train straight-ahead
extension power.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gluteus maximus extends the thigh at the hip joint; overextension of the lumbar spine is a distinct, separate motion from hip extension.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
];

export const glutesQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle is the primary, most powerful extensor of the thigh at the hip?",
    explanation: "The gluteus maximus is the largest and most powerful hip extensor, especially at greater degrees of hip flexion.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "glutes-region-overview",
    muscleSlug: "gluteus-maximus",
    exerciseSlug: "barbell-hip-thrust",
    bodyRegionSlug: "glutes",
    domainCode: "D1",
    options: [
      { text: "Gluteus maximus", isCorrect: true, rationale: "Correct — the primary, most powerful hip extensor." },
      { text: "Gluteus medius", rationale: "Primarily an abductor and pelvic stabilizer, not the main extensor." },
      { text: "Iliopsoas", rationale: "The primary hip flexor — the opposite action." },
      { text: "Piriformis", rationale: "A deep external rotator, not the primary extensor." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The gluteus maximus is a powerful extensor of the thigh at the hip joint.", locator: "Ch. 11.6" }],
  },
  {
    type: "true_false",
    prompt: "The gluteus medius helps keep the pelvis level when you stand on one leg.",
    explanation: "True. The gluteus medius (with the minimus) stabilizes the pelvis during single-leg stance, such as the stance phase of walking.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "glutes-region-overview",
    muscleSlug: "gluteus-medius",
    bodyRegionSlug: "glutes",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — a key pelvic-stabilization function." },
      { text: "False", rationale: "This is precisely the gluteus medius's stabilizing role." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The gluteus medius stabilizes the pelvis during single-leg stance.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "In a barbell hip thrust, what is the correct way to finish the top position?",
    explanation: "The top position should be a straight line achieved by extending the hip and squeezing the glutes — not by overarching the lumbar spine.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "hip-extension-exercise-progression-lesson",
    exerciseSlug: "barbell-hip-thrust",
    muscleSlug: "gluteus-maximus",
    bodyRegionSlug: "glutes",
    domainCode: "D3",
    options: [
      { text: "A straight line from shoulders to knees, glutes squeezed, ribs down", isCorrect: true, rationale: "Correct — hip extension with the glutes, not a lumbar arch." },
      { text: "An exaggerated low-back arch for extra height", rationale: "This substitutes lumbar extension for hip extension and is a technique fault." },
      { text: "Knees fully locked straight throughout", rationale: "Knees stay bent through a hip thrust; this describes a different exercise." },
      { text: "Head lifted as high as possible", rationale: "Head position is not the coaching focus of this exercise." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The gluteus maximus extends the thigh at the hip joint, distinct from lumbar spine extension.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which exercise most directly isolates the gluteus medius and minimus for hip abduction?",
    explanation: "The side-lying hip abduction removes momentum and other muscle contributions, directly targeting the hip abductors.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "hip-extension-exercise-progression-lesson",
    exerciseSlug: "side-lying-hip-abduction",
    muscleSlug: "gluteus-medius",
    bodyRegionSlug: "glutes",
    domainCode: "D3",
    options: [
      { text: "Side-lying hip abduction", isCorrect: true, rationale: "Correct — an isolated hip-abduction exercise." },
      { text: "Barbell hip thrust", rationale: "A hip-extension exercise targeting the gluteus maximus, not abduction." },
      { text: "Glute bridge", rationale: "Also a hip-extension exercise, not an abduction isolation move." },
      { text: "Seated hip external-rotation stretch", rationale: "A mobility drill for external rotation, not an abduction strengthening exercise." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The gluteus medius and minimus abduct the thigh at the hip joint.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "A client's opposite hip visibly drops every time they stand on one leg. Which muscle is most likely too weak?",
    explanation: "This 'Trendelenburg' pattern classically indicates the weight-bearing side's gluteus medius is not adequately stabilizing the pelvis.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "glutes-region-overview",
    muscleSlug: "gluteus-medius",
    bodyRegionSlug: "glutes",
    domainCode: "D2",
    options: [
      { text: "Gluteus medius (on the standing/weight-bearing leg)", isCorrect: true, rationale: "Correct — classic sign of gluteus medius weakness on the stance leg." },
      { text: "Gluteus maximus", rationale: "Primarily a hip extensor; this pattern is specifically linked to pelvic-stabilization weakness." },
      { text: "Rectus abdominis", rationale: "An abdominal flexor, not the muscle responsible for frontal-plane pelvic leveling." },
      { text: "Piriformis", rationale: "A deep rotator; not the primary muscle responsible for this stabilization pattern." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The gluteus medius stabilizes the pelvis in the frontal plane during single-leg stance; weakness produces a contralateral pelvic drop.", locator: "Ch. 11.6" }],
  },
];
