import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// LOWER BACK region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 11.3 "Axial Muscles of the Abdominal Wall, and
// Thorax" / Ch. 11.4 (deep back muscles) for the erector spinae, quadratus
// lumborum, and multifidus, and Ch. 7.3/7.4 for the lumbar vertebrae and sacrum.
// Safety framing draws on NIAMS back-pain guidance. Heavy safety emphasis
// throughout, as this region carries the highest injury-risk exercises so far.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const lowerBackRegion: BodyRegionSeed = {
  slug: "lower-back",
  name: "Lower Back",
  order: 4,
  description:
    "The lower back (lumbar region) is the base of the spine below the ribs. Its deep muscles run along the spine to hold you upright, control bending and straightening at the trunk, and transmit force between the upper body and the hips/legs. Because it bears load in almost every standing and lifting movement, it is one of the most important regions to train and coach carefully.",
  relationships:
    "The lower back works as a team with the **core** (which braces the trunk from the front and sides) and the **glutes/hips** (which should share the work of bending and lifting via the hip hinge, rather than the low back doing it alone). It sits below the **upper back** and above the **pelvis**, and is closely tied to the **spine** as a whole structure.",
  safetyNotes:
    "Low back pain is extremely common, and most cases improve with time, movement, and appropriate exercise. However, back pain with numbness, tingling, weakness, loss of bladder/bowel control, or pain radiating down a leg are warning signs that need prompt medical evaluation. A trainer coaches safe lifting mechanics (bracing, neutral spine, the hip hinge) — they do not diagnose or treat back injuries or pain.",
  assetSlugs: ["lower-back-region"],
  pronunciations: [
    { term: "Lumbar vertebrae", say: "LUM-bar VER-teh-bray" },
    { term: "Sacrum", say: "SAY-krum" },
    { term: "Erector spinae", say: "ee-REK-tor SPY-nee" },
    { term: "Quadratus lumborum", say: "kwah-DRAY-tus lum-BOR-um" },
    { term: "Multifidus", say: "mul-TIFF-ih-dus" },
    { term: "Thoracolumbar fascia", say: "thor-ah-ko-LUM-bar FASH-uh" },
    { term: "Neutral spine", say: "NOO-truhl spyn" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "Deep back muscles including the erector spinae, multifidus, and quadratus lumborum extend, laterally flex, and stabilize the vertebral column.",
      locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back",
    },
    {
      sourceSlug: NIAMS,
      claim: "Low back pain is common; most cases are mechanical and improve with appropriate activity, but certain warning signs require prompt medical evaluation.",
      locator: "Back Pain",
    },
  ],
  bones: [
    {
      slug: "lumbar-vertebrae",
      name: "Lumbar vertebrae",
      latinName: "Vertebrae lumbales",
      description: "The five largest, most robust vertebrae of the spine, located between the thoracic vertebrae and the sacrum. Their size lets them bear the greatest compressive load of the movable spine.",
      landmarks: "Large vertebral body, short thick spinous process, facet joints that mainly allow flexion/extension.",
    },
    {
      slug: "sacrum",
      name: "Sacrum",
      latinName: "Os sacrum",
      description: "A triangular bone formed by five fused vertebrae, connecting the spine to the pelvis at the sacroiliac joints and forming the back wall of the pelvis.",
      landmarks: "Sacral promontory, median sacral crest, sacral foramina.",
    },
  ],
  joints: [
    {
      slug: "lumbar-intervertebral-joints",
      name: "Lumbar intervertebral joints",
      jointType: "cartilaginous (intervertebral discs) combined with synovial facet (zygapophyseal) joints",
      description: "The stacked joints between adjacent lumbar vertebrae: a shock-absorbing intervertebral disc in front and a pair of small synovial facet joints behind, which together allow and limit spinal motion.",
      articulatingBones: "Adjacent lumbar vertebral bodies (via discs) and their facets",
      movementsAllowed: "Flexion, extension, lateral flexion, and limited rotation, summed across all lumbar levels.",
    },
    {
      slug: "lumbosacral-joint",
      name: "Lumbosacral joint",
      jointType: "cartilaginous + synovial (facet)",
      description: "The junction between the last lumbar vertebra (L5) and the sacrum, a common site of mechanical load and, when injured, of low back pain.",
      articulatingBones: "L5 vertebra and the sacrum",
      movementsAllowed: "Flexion, extension, and some lateral flexion.",
    },
  ],
  muscles: [
    {
      slug: "erector-spinae",
      commonName: "Erector spinae",
      scientificName: "Erector spinae (iliocostalis, longissimus, spinalis)",
      pronunciation: "ee-REK-tor SPY-nee",
      locationSimple: "A group of three long muscle columns running up either side of the spine, from the pelvis toward the skull.",
      origin: "Sacrum, iliac crest, and spinous/transverse processes of the lower vertebrae.",
      insertion: "Ribs and transverse/spinous processes of vertebrae higher up the spine, and the skull (longissimus capitis).",
      actions: "Extends the vertebral column (straightens the back from a bend); acting on one side, laterally flexes the spine; controls the lowering phase of a forward bend.",
      jointsCrossed: "Lumbar and thoracic intervertebral joints",
      movementPlane: "sagittal (extension); frontal (unilateral lateral flexion)",
      innervation: "Dorsal rami of spinal nerves at each level",
      functionDaily: "Standing upright, straightening up from bending over, and controlling how you lower into a bend.",
      functionExercise: "The prime mover in extension-based back exercises (back extensions, deadlifts, good mornings) and a key isometric stabilizer in almost every standing lift.",
      beginnerExplanation:
        "This is the long muscle group you can feel running up either side of your spine. It straightens your back and keeps it from collapsing forward when you bend or lift.",
      advancedExplanation:
        "It is really three parallel columns (iliocostalis, longissimus, spinalis) that together extend and stabilize the spine; during a hip-hinge lift it often works isometrically (holding length) while the hips and knees do most of the moving.",
      commonlyConfused: "Often blamed as 'the' muscle doing all deadlift work — in a well-coached hip hinge, the glutes and hamstrings drive the movement while the erector spinae mainly stabilizes.",
      misconceptions: "'A strong lower back means a rounded back is safe under load' is false — the erector spinae stabilizes best in a neutral spine, not a flexed one.",
      safetyInfo: "Sharp pain, spasm, or pain radiating into a leg during back extension exercise is a stop signal, not something to push through.",
      status: "source_checked",
      assetSlugs: ["lower-back-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The erector spinae group extends and laterally flexes the vertebral column and is a key postural stabilizer.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
      ],
    },
    {
      slug: "quadratus-lumborum",
      commonName: "Quadratus lumborum",
      scientificName: "Quadratus lumborum",
      pronunciation: "kwah-DRAY-tus lum-BOR-um",
      locationSimple: "A deep, quadrangular muscle on either side of the lumbar spine, between the lowest rib and the top of the pelvis.",
      origin: "Iliac crest.",
      insertion: "Twelfth rib and transverse processes of the lumbar vertebrae.",
      actions: "Laterally flexes the trunk to the same side; helps extend the lumbar spine; stabilizes the twelfth rib during breathing; on both sides together, helps stabilize the pelvis and low back.",
      jointsCrossed: "Lumbar intervertebral joints",
      movementPlane: "frontal",
      innervation: "Subcostal nerve and lumbar plexus branches (T12–L4)",
      functionDaily: "Side-bending, hiking a hip while walking, and steadying the pelvis when standing on one leg.",
      functionExercise: "A key stabilizer in single-leg and carrying exercises (e.g., a suitcase carry), resisting unwanted side-bending.",
      beginnerExplanation:
        "A deep side-of-the-low-back muscle that bends you sideways and helps keep your pelvis level, for example when you carry a heavy bag in one hand.",
      advancedExplanation:
        "Because it links the pelvis, spine, and lowest rib, it is active both as a mover (lateral flexion) and, especially bilaterally, as a spinal and pelvic stabilizer during loaded standing tasks.",
      commonlyConfused: "Deep and hard to feel directly, so its stabilizing role is often overlooked compared to the more visible erector spinae.",
      misconceptions: "It is not a 'core ab' muscle — it lies in the back, not the front abdominal wall.",
      safetyInfo: "A common site of low back tightness/spasm with prolonged sitting or asymmetric loading; persistent or radiating pain needs assessment.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The quadratus lumborum laterally flexes the vertebral column and stabilizes the lumbar spine and twelfth rib.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
      ],
    },
    {
      slug: "multifidus",
      commonName: "Multifidus",
      scientificName: "Multifidus",
      pronunciation: "mul-TIFF-ih-dus",
      locationSimple: "A series of small, deep muscles running close along the spine, thickest in the lumbar region.",
      origin: "Sacrum and transverse processes of vertebrae below each segment.",
      insertion: "Spinous process of a vertebra two-to-four levels above.",
      actions: "Extends and rotates the vertebral column segment by segment; a key deep stabilizer that fine-tunes control between individual vertebrae.",
      jointsCrossed: "Lumbar and thoracic intervertebral joints",
      movementPlane: "multiple (segmental)",
      innervation: "Dorsal rami of spinal nerves at each level",
      functionDaily: "Fine, moment-to-moment control of spinal position during everyday bending, twisting, and standing.",
      functionExercise: "Trained indirectly by controlled, well-braced trunk work (e.g., bird-dog) rather than by any single 'isolation' exercise.",
      beginnerExplanation:
        "A row of small muscles hugging the spine that act like fine-tuning cables, keeping each vertebra controlled as you move — different from the long erector spinae, which works over a bigger range.",
      advancedExplanation:
        "Because it spans only a few segments at a time, the multifidus provides intersegmental control that longer, more superficial muscles cannot; reduced multifidus control is commonly discussed in low-back-pain research.",
      commonlyConfused: "Frequently lumped in with 'the erector spinae' by beginners, but it is a distinct, deeper, shorter-segment muscle group.",
      misconceptions: "You cannot directly 'feel' or isolate the multifidus the way you can a limb muscle — it is trained through controlled, quality movement, not by targeted flexing.",
      safetyInfo: "Not typically injured in isolation; general low-back safety principles (neutral spine, gradual loading) apply.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The multifidus is a deep back muscle that extends and rotates the vertebral column and provides segmental spinal stability.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
      ],
    },
  ],
};

export const lowerBackMovements: MovementSeed[] = [
  {
    slug: "spinal-extension",
    name: "Spinal extension",
    description: "Straightening or arching the trunk backward from a flexed or neutral position. Driven mainly by the erector spinae and multifidus.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Extension at the lumbar intervertebral joints",
    oppositeSlug: "spinal-flexion",
  },
  {
    slug: "spinal-flexion",
    name: "Spinal flexion",
    description: "Bending the trunk forward. Controlled eccentrically (lengthening under tension) by the erector spinae as you bend.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the lumbar intervertebral joints",
    oppositeSlug: "spinal-extension",
  },
  {
    slug: "spinal-lateral-flexion",
    name: "Spinal lateral flexion",
    description: "Bending the trunk sideways, toward one shoulder. Driven by the quadratus lumborum and obliques on the side you bend toward.",
    plane: "frontal",
    axis: "sagittal",
    jointAction: "Lateral flexion at the lumbar intervertebral joints",
  },
];

export const lowerBackExercises: ExerciseSeed[] = [
  {
    slug: "romanian-deadlift",
    name: "Romanian Deadlift",
    altNames: "RDL",
    simpleExplanation: "Hinging at the hips with a flat back to lower a barbell along the legs, then standing back up by driving the hips forward.",
    purpose: "The foundational hip-hinge pattern: builds the glutes, hamstrings, and low-back stabilizers together, and teaches lifting mechanics that transfer to everyday lifting.",
    startingPosition: "Stand holding a barbell at hip height, feet hip-width apart, knees soft (slightly bent).",
    instructions: [
      "Brace the core, keep the back flat (neutral), and push the hips straight back as the bar slides down the front of the thighs.",
      "Lower only as far as you can while keeping the back flat — for most beginners this is around mid-shin to just below the knee.",
      "Reverse the motion by driving the hips forward to stand tall; squeeze the glutes at the top.",
    ],
    breathing: "Inhale and brace before lowering; exhale as you drive the hips forward to stand.",
    cues: "\"Push the hips back like closing a car door with your butt; flat back the whole way.\"",
    commonMistakes: "Rounding the lower back; bending the knees like a squat instead of hinging the hips; lowering past the point where the back stays flat.",
    safety: "This is a hip-hinge, not a spinal-flexion exercise — the back should stay in a flat, neutral position throughout. If the lower back rounds, the range of motion is too deep; stop there. Anyone with acute low back pain should get clearance before loaded hinging.",
    regression: "Bodyweight or dowel-cued hip hinge, or a Romanian deadlift with light dumbbells, to groove the pattern before adding load.",
    progression: "Add load gradually once the flat-back position is consistent under fatigue.",
    alternatives: "Kettlebell deadlift, cable pull-through, single-leg Romanian deadlift.",
    whyItWorks: "By fixing the spine in neutral and moving only at the hips and knees, the hip hinge lets the glutes and hamstrings (which are built for large forces) do the lifting while the erector spinae and multifidus hold the spine steady — the safest and most efficient way to lift a load from the floor.",
    benefitsWho: "Anyone learning to lift objects safely, and anyone training the posterior chain (glutes/hamstrings/low back).",
    cautionWho: "People with current low back pain or who cannot keep the back flat through the movement should regress the range or load, or get individual guidance.",
    equipment: ["barbell"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "hip-hinge",
    setting: "gym",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["lower-back-region"],
    primaryMuscles: ["erector-spinae"],
    secondaryMuscles: ["quadratus-lumborum", "multifidus"],
    joints: [{ jointSlug: "lumbar-intervertebral-joints", jointAction: "isometric stabilization (extension held)" }],
    movements: ["spinal-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The erector spinae extends and stabilizes the vertebral column, as when returning to standing from a hip hinge.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
      { sourceSlug: NIAMS, claim: "Using safe lifting mechanics, such as keeping the back straight and hinging at the hips, helps protect the low back.", locator: "Back Pain" },
    ],
  },
  {
    slug: "back-extension",
    name: "Back Extension",
    altNames: "Hyperextension, 45-degree back extension",
    simpleExplanation: "Lying face-down over a back extension bench with hips supported, lowering the torso forward and then raising it back to a straight line.",
    purpose: "Directly and safely strengthens the erector spinae and glutes through spinal/hip extension under control.",
    startingPosition: "Position the hips on the pad of a back extension bench with ankles secured, body straight from head to heel.",
    instructions: [
      "Cross the arms over the chest or place hands lightly behind the head.",
      "Lower the torso forward under control by bending at the hips, keeping the back flat (not rounding).",
      "Raise back up to a straight line from head to heel — do not hyperextend (arch) past neutral at the top.",
    ],
    breathing: "Inhale as you lower; exhale as you raise.",
    cues: "\"Hinge at the hips, not the low back; stop level, don't arch past straight.\"",
    commonMistakes: "Rounding the back at the bottom; snapping up with momentum; overarching (hyperextending) past a neutral spine at the top.",
    safety: "Move slowly and stop at a straight body line at the top — do not add extra backward arch, which places unnecessary compressive force on the spine. Start with bodyweight only.",
    regression: "Reduce range of motion, or perform a bodyweight prone back extension on the floor instead of a bench.",
    progression: "Add a light weight held at the chest once bodyweight is controlled and pain-free.",
    alternatives: "Bird-dog, prone superman hold (lighter alternative).",
    whyItWorks: "It isolates hip and spinal extension under control, directly loading the erector spinae and glutes without the technical demands of a loaded barbell hip hinge — a good building block toward deadlift-pattern lifts.",
    benefitsWho: "Beginners building low-back and glute strength and control before progressing to loaded hinges.",
    cautionWho: "Those with acute low back pain, or who feel pain (not just muscular effort) during the movement, should stop and seek guidance.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "hip-hinge",
    setting: "gym",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["erector-spinae"],
    secondaryMuscles: ["multifidus"],
    joints: [{ jointSlug: "lumbar-intervertebral-joints", jointAction: "extension" }],
    movements: ["spinal-extension", "spinal-flexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The erector spinae produces extension of the vertebral column.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
    ],
  },
  {
    slug: "bird-dog",
    name: "Bird-Dog",
    altNames: "Quadruped opposite arm/leg reach",
    simpleExplanation: "On hands and knees, extending one arm and the opposite leg while keeping the spine still and level.",
    purpose: "Trains spinal stability and control — resisting unwanted motion rather than producing it — a foundation for safe lifting.",
    startingPosition: "Start on hands and knees (quadruped), hands under shoulders, knees under hips, spine in a neutral (flat) position.",
    instructions: [
      "Brace the core gently and extend one arm straight forward while extending the opposite leg straight back.",
      "Keep the hips and shoulders level and the low back still — do not let it sag or rotate.",
      "Hold briefly, return with control, and repeat on the other side.",
    ],
    breathing: "Breathe steadily throughout; do not hold your breath.",
    cues: "\"Imagine a cup of water balanced on your low back — don't spill it.\"",
    commonMistakes: "Letting the low back sag or arch; rotating the hips or shoulders; rushing the movement.",
    safety: "This is a low-load control exercise appropriate for most people, including those returning to exercise after minor back discomfort; if it reproduces pain, reduce range (e.g., arm or leg only) or stop and seek guidance.",
    regression: "Move only the arm, or only the leg, rather than both together; reduce range of motion.",
    progression: "Add a light hold at end range, or add resistance (light ankle/wrist weights) once control is excellent.",
    alternatives: "Dead bug (core region), plank.",
    whyItWorks: "By challenging the trunk to resist rotation and sagging while a limb moves, it trains the deep stabilizers (multifidus, quadratus lumborum, deep core) to hold a neutral spine under a changing load — exactly the skill needed to protect the back during real lifts.",
    benefitsWho: "Nearly everyone, especially beginners and anyone building a foundation of spinal control before loaded lifting.",
    cautionWho: "Generally very safe; those with acute pain that worsens with this movement should seek individual guidance.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "anti-rotation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "multiple",
    status: "source_checked",
    primaryMuscles: ["multifidus"],
    secondaryMuscles: ["erector-spinae", "quadratus-lumborum"],
    joints: [{ jointSlug: "lumbar-intervertebral-joints", jointAction: "isometric stabilization (neutral held)" }],
    movements: ["spinal-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The multifidus provides segmental stabilization of the vertebral column.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
      { sourceSlug: NIAMS, claim: "Exercises that build core and back strength and control can be part of managing and preventing low back pain.", locator: "Back Pain" },
    ],
  },
];

export const lowerBackLessons: LessonSeed[] = [
  {
    slug: "lower-back-region-overview",
    title: "The Lower Back: An Overview",
    summary: "The deep spinal muscles that hold you upright and transmit force between your upper body and hips.",
    moduleSlug: "the-lower-back",
    bodyRegionSlug: "lower-back",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["lower-back-region"],
    safetyNotes:
      "Low back pain with numbness, tingling, weakness, or pain radiating down a leg, or any loss of bladder/bowel control, is a medical emergency warning sign — seek prompt medical care. A trainer coaches lifting mechanics; they do not diagnose or treat back pain.",
    objectives: [
      "Name the main lower-back muscles and what they do.",
      "Explain the difference between the erector spinae (long, superficial) and multifidus (short, deep).",
      "Describe why the lower back is a high-priority region for safe coaching.",
    ],
    bodyMarkdown: `## The spine's support team

The lower back is built around the five sturdy **lumbar vertebrae**, stacked on the **sacrum**. Three
muscle groups run along and beside this stack:

- **Erector spinae** — long columns of muscle that extend the spine (straighten you up) and control
  how you lower into a bend.
- **Multifidus** — small, deep muscles that fine-tune control between individual vertebrae.
- **Quadratus lumborum** — a deep side muscle that bends you sideways and helps keep the pelvis level.

## Why this region gets extra care

The lower back bears load in almost everything you do standing up — walking, carrying, and especially
lifting. Most low back pain is mechanical and improves with appropriate movement, but some symptoms
(numbness, weakness, pain down a leg) are warning signs that need a medical professional, not a workout.

## The big idea: the hip hinge

Rather than bending and lifting by rounding the low back, a **hip hinge** keeps the spine in a flat,
neutral position and moves at the hips and knees instead — letting the much larger glute and hamstring
muscles do the lifting while the back muscles simply hold steady. You'll practice this pattern with the
Romanian deadlift, back extension, and bird-dog.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The erector spinae, multifidus, and quadratus lumborum extend, stabilize, and laterally flex the lumbar spine.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall, and Thorax and the Deep Back" },
      { sourceSlug: NIAMS, claim: "Low back pain is common and usually mechanical, but certain symptoms are warning signs requiring prompt medical evaluation.", locator: "Back Pain" },
    ],
  },
  {
    slug: "the-hip-hinge-and-spine-safety",
    title: "The Hip Hinge: Lifting Without Rounding",
    summary: "Why coaches teach the hip hinge, and how to recognize a flat back versus a rounded one.",
    moduleSlug: "the-lower-back",
    bodyRegionSlug: "lower-back",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 10,
    order: 2,
    prerequisiteSlugs: ["lower-back-region-overview"],
    safetyNotes:
      "Coaching a flat back and a comfortable range of motion is a technique skill. Persistent or radiating back pain during lifting is a signal to stop and refer to a healthcare professional, not to push through.",
    objectives: [
      "Describe a neutral (flat) spine versus a rounded (flexed) spine under load.",
      "Explain why the hip hinge shifts work from the low back to the hips.",
      "Identify common technique mistakes that increase low back strain.",
    ],
    bodyMarkdown: `## Neutral spine, moving hips

In a well-coached lift — a Romanian deadlift, a back extension, even picking something off the floor —
the spine stays close to its natural, **neutral** curve while the **hips** do most of the bending. This
is the **hip hinge**. The erector spinae and multifidus work hard, but mostly *isometrically*: holding
the spine steady rather than moving it.

## Why rounding matters

When the low back rounds under load instead of the hips hinging, more of the force passes through
spinal flexion rather than the hip. Coaches emphasize a flat back specifically to keep the load pattern
predictable and within what the spine handles well.

## Coaching cues that help

- "Push the hips back" (not "bend the knees") starts the hinge at the right joint.
- "Proud chest, flat back" gives an external check a lifter can feel.
- Reducing the range of motion (how low the bar/torso goes) is a simple, effective regression if the
  back starts to round before full depth.

## Scope reminder

Teaching hip-hinge technique is squarely within a trainer's scope. Diagnosing the *cause* of existing
back pain is not — that always belongs to a qualified healthcare professional.`,
    citations: [
      { sourceSlug: NIAMS, claim: "Using proper lifting technique, such as keeping the back straight and bending at the hips and knees, can help prevent back injury.", locator: "Back Pain" },
    ],
  },
];

export const lowerBackQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle group runs as long columns along either side of the spine and produces spinal extension?",
    explanation: "The erector spinae is the long, superficial muscle group that extends the spine and controls forward-bending.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "lower-back-region-overview",
    muscleSlug: "erector-spinae",
    bodyRegionSlug: "lower-back",
    domainCode: "D1",
    options: [
      { text: "Erector spinae", isCorrect: true, rationale: "Correct — the long columns of muscle beside the spine." },
      { text: "Quadratus lumborum", rationale: "This is a deeper, quadrangular side muscle, not the long column group." },
      { text: "Rhomboids", rationale: "An upper-back muscle that retracts the scapula, unrelated to the lumbar spine." },
      { text: "Multifidus", rationale: "Deep and segmental, not the long superficial column." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The erector spinae extends the vertebral column.", locator: "Ch. 11.4" }],
  },
  {
    type: "true_false",
    prompt: "In a well-coached Romanian deadlift, the spine should stay in a flat, neutral position while the hips do most of the bending.",
    explanation: "True. This is the hip hinge — it lets the glutes and hamstrings do the lifting while the erector spinae mainly stabilizes a neutral spine.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-hip-hinge-and-spine-safety",
    exerciseSlug: "romanian-deadlift",
    bodyRegionSlug: "lower-back",
    domainCode: "D3",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — the hip hinge keeps the spine neutral while the hips move." },
      { text: "False", rationale: "A rounding low back is a technique fault to correct, not the goal." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Keeping the back straight and bending at the hips helps protect the low back when lifting.", locator: "Back Pain" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which deep muscle provides segment-by-segment control between individual vertebrae, distinct from the longer erector spinae?",
    explanation: "The multifidus spans only a few vertebral levels at a time, giving fine intersegmental control that the longer erector spinae cannot provide.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "lower-back-region-overview",
    muscleSlug: "multifidus",
    exerciseSlug: "bird-dog",
    bodyRegionSlug: "lower-back",
    domainCode: "D1",
    options: [
      { text: "Multifidus", isCorrect: true, rationale: "Correct — short, deep, segmental control." },
      { text: "Latissimus dorsi", rationale: "An upper-back muscle that moves the arm, not a deep spinal stabilizer." },
      { text: "Erector spinae", rationale: "Longer and more superficial, spanning many segments at once." },
      { text: "Trapezius", rationale: "Moves the scapula, unrelated to lumbar segmental control." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The multifidus provides segmental stabilization of the vertebral column.", locator: "Ch. 11.4" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which of these is a genuine medical warning sign during low back pain that requires prompt professional evaluation?",
    explanation: "Numbness, tingling, weakness, or pain radiating down a leg can indicate nerve involvement and need prompt medical assessment — general muscular soreness does not.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "lower-back-region-overview",
    bodyRegionSlug: "lower-back",
    domainCode: "D4",
    options: [
      { text: "Numbness or weakness spreading down a leg", isCorrect: true, rationale: "Correct — a possible nerve-involvement warning sign needing prompt care." },
      { text: "Mild muscle soreness the day after a new exercise", rationale: "Typical, expected muscular adaptation, not a warning sign." },
      { text: "Feeling your erector spinae working during a back extension", rationale: "Normal muscular effort, not a red flag." },
      { text: "Being slightly tired after a workout", rationale: "General fatigue, unrelated to back-pain warning signs." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Certain low back pain symptoms, such as numbness, weakness, or pain radiating down a leg, are warning signs requiring prompt medical evaluation.", locator: "Back Pain" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the main technique fault the bird-dog exercise is designed to prevent?",
    explanation: "The bird-dog trains the trunk to resist sagging or rotating while a limb moves — building the control needed to keep a neutral spine during real lifts.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "the-hip-hinge-and-spine-safety",
    exerciseSlug: "bird-dog",
    muscleSlug: "quadratus-lumborum",
    bodyRegionSlug: "lower-back",
    domainCode: "D3",
    options: [
      { text: "The low back sagging or rotating out of a neutral position", isCorrect: true, rationale: "Correct — bird-dog trains resisting unwanted spinal motion." },
      { text: "Not lifting enough weight", isCorrect: false, rationale: "Bird-dog is a low-load control exercise, not a strength/load test." },
      { text: "Breathing too fast", rationale: "Breathing technique is not the primary fault this exercise targets." },
      { text: "Moving both arms at once", rationale: "The exercise specifically uses opposite arm/leg, not both arms." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The multifidus and quadratus lumborum provide stabilization that resists unwanted spinal motion.", locator: "Ch. 11.4" }],
  },
];
