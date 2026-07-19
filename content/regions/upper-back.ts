import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// UPPER BACK region — the "pull" counterpart to the chest's "push".
// Facts from OpenStax A&P 2e Ch. 11.5 "Muscles of the Pectoral Girdle and Upper
// Limbs" (trapezius, latissimus dorsi, rhomboids, levator scapulae, teres major).
// The trapezius was relocated here from the shoulder region (its canonical home).

const OPENSTAX = "openstax-anp-2e";

export const upperBackRegion: BodyRegionSeed = {
  slug: "upper-back",
  name: "Upper Back",
  order: 3,
  description:
    "The upper back is the muscular region between the shoulder blades and the spine. Its muscles move and stabilize the shoulder blades (scapulae) and pull the arms down and back. A strong, well-controlled upper back supports good posture and healthy shoulders.",
  relationships:
    "The upper back is the **pulling** partner to the **chest's** pushing: they balance each other. It works with the **shoulder** (positioning the scapula so the arm can move), the **neck** (the upper trapezius blends into it), and the **lower back/spine** below.",
  safetyNotes:
    "Back pain with numbness, tingling, weakness, or pain spreading down an arm should be assessed by a healthcare professional. A trainer coaches pulling technique and posture; they do not diagnose or treat back or nerve pain.",
  assetSlugs: ["upper-back-region"],
  pronunciations: [
    { term: "Thoracic vertebrae", say: "thor-ASS-ik VER-teh-bray" },
    { term: "Scapula", say: "SKAP-yoo-luh" },
    { term: "Scapulothoracic", say: "SKAP-you-lo-thor-ASS-ik" },
    { term: "Trapezius", say: "truh-PEE-zee-us" },
    { term: "Latissimus dorsi", say: "lah-TISS-ih-mus DOR-sy" },
    { term: "Rhomboids", say: "ROM-boyds" },
    { term: "Levator scapulae", say: "leh-VAY-tor SKAP-you-lay" },
    { term: "Teres major", say: "TEH-reez MAY-jor" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "Muscles of the upper back (trapezius, rhomboids, levator scapulae) move the scapula, while the latissimus dorsi and teres major move the humerus.",
      locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
    },
  ],
  bones: [
    {
      slug: "thoracic-vertebrae",
      name: "Thoracic vertebrae",
      latinName: "Vertebrae thoracicae",
      description: "The twelve vertebrae of the mid/upper spine that the ribs attach to and that anchor many upper-back muscles.",
      landmarks: "Spinous processes (the bumps you can feel down the back), transverse processes.",
    },
    {
      slug: "scapula-upper-back",
      name: "Scapula (shoulder blade)",
      latinName: "Scapula",
      description: "The flat triangular bone that glides over the rib cage; the upper-back muscles attach to it to move and steady it. (Also covered under the shoulder.)",
      landmarks: "Medial border, spine of the scapula, superior angle.",
    },
  ],
  joints: [
    {
      slug: "scapulothoracic-upper-back",
      name: "Scapulothoracic articulation",
      jointType: "functional (not a true synovial joint)",
      description: "The gliding of the shoulder blade over the rib cage. Upper-back muscles control it — retraction, elevation, depression, and rotation.",
      articulatingBones: "Scapula gliding on the thoracic rib cage",
      movementsAllowed: "Elevation, depression, protraction, retraction, upward/downward rotation.",
    },
  ],
  muscles: [
    {
      slug: "trapezius",
      commonName: "Trapezius",
      scientificName: "Trapezius",
      pronunciation: "truh-PEE-zee-us",
      locationSimple: "The large diamond-shaped muscle of the upper back and neck.",
      origin: "Base of the skull and spinous processes of the cervical and thoracic vertebrae.",
      insertion: "Clavicle, acromion, and spine of the scapula.",
      actions: "Moves and stabilizes the scapula: upper fibers elevate, middle fibers retract, lower fibers depress; together they help upwardly rotate the scapula for overhead reaching.",
      jointsCrossed: "Scapulothoracic and acromioclavicular articulations",
      movementPlane: "multiple",
      innervation: "Accessory nerve (CN XI) and cervical nerves C3–C4",
      functionDaily: "Shrugging, carrying loads, and positioning the shoulder blade for reaching.",
      functionExercise: "Key stabilizer/mover in rows, shrugs, and overhead work; supports posture under load.",
      beginnerExplanation:
        "A big back-of-the-neck-and-shoulders muscle that moves your shoulder blades up, together, and down, and helps you reach overhead.",
      advancedExplanation:
        "Its three functional regions form a force couple with the serratus anterior to upwardly rotate the scapula — essential for pain-free overhead motion.",
      commonlyConfused: "Its upper fibers are often confused with the deltoid or the levator scapulae.",
      misconceptions: "Not just the 'shrug muscle' at the top — its middle and lower fibers are vital for shoulder-blade control.",
      safetyInfo: "Chronic upper-trap tension is common with stress and desk posture; balance with mid/lower-trap strengthening.",
      status: "source_checked",
      assetSlugs: ["upper-back-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The trapezius stabilizes and moves the scapula (elevation, retraction, depression, upward rotation).", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "latissimus-dorsi",
      commonName: "Latissimus dorsi",
      scientificName: "Latissimus dorsi",
      pronunciation: "lah-TISS-ih-mus DOR-sy",
      locationSimple: "The broad muscle of the mid and lower back that fans up to the arm.",
      origin: "Lower thoracic and lumbar vertebrae, the sacrum, and the iliac crest (via a broad sheet of connective tissue).",
      insertion: "Intertubercular (bicipital) groove of the humerus.",
      actions: "Extends, adducts, and internally rotates the arm at the shoulder — powerfully pulling the arm down and back.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "multiple",
      innervation: "Thoracodorsal nerve (C6–C8)",
      functionDaily: "Pulling movements — climbing, pulling a door closed, pushing up out of a chair.",
      functionExercise: "Prime mover in pull-ups, lat pulldowns, and rows; the biggest muscle of the back.",
      beginnerExplanation:
        "Nicknamed the 'lats', this large muscle gives the back its V-shape. It pulls your arm down toward your body and behind you, which is why it powers pull-ups and pulldowns.",
      advancedExplanation:
        "Because it spans from the pelvis and spine to the humerus, it links the arm to the trunk and contributes to trunk stability and even forced expiration; tightness can limit overhead reach.",
      commonlyConfused: "Confused with the teres major (a smaller muscle with a similar action, nicknamed 'lat's little helper').",
      misconceptions: "Pulldowns/pull-ups are compound — the lats work with the biceps, rear delts, and mid-back, not alone.",
      safetyInfo: "Very heavy overhead pulling with poor control can stress the shoulder; build range and strength gradually.",
      status: "source_checked",
      assetSlugs: ["upper-back-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The latissimus dorsi extends, adducts, and medially rotates the humerus.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "rhomboids",
      commonName: "Rhomboids (major & minor)",
      scientificName: "Rhomboideus major et minor",
      pronunciation: "ROM-boyds",
      locationSimple: "Muscles between the spine and the inner edge of each shoulder blade, under the trapezius.",
      origin: "Spinous processes of the lower cervical and upper thoracic vertebrae.",
      insertion: "Medial (inner) border of the scapula.",
      actions: "Retract (squeeze together) the scapulae and help rotate them downward; steady the shoulder blade against the rib cage.",
      jointsCrossed: "Scapulothoracic articulation",
      movementPlane: "transverse",
      innervation: "Dorsal scapular nerve (C4–C5)",
      functionDaily: "Pulling the shoulder blades back — good upright posture.",
      functionExercise: "Prime movers of scapular retraction in rows and reverse flyes.",
      beginnerExplanation:
        "These muscles pull your shoulder blades together toward the spine, like standing up tall and 'proud'. They are important for posture and for rowing movements.",
      advancedExplanation:
        "With the middle trapezius they retract the scapula; weakness or overstretch (from a rounded posture) can contribute to a protracted, forward-shoulder position.",
      commonlyConfused: "Hidden beneath the trapezius, so their action is often credited to the traps.",
      misconceptions: "You cannot 'see' the rhomboids, but they are key posture and pulling muscles.",
      safetyInfo: "Aching between the shoulder blades from posture is common; persistent or radiating pain needs assessment.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The rhomboids retract and stabilize the scapula.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "levator-scapulae",
      commonName: "Levator scapulae",
      scientificName: "Levator scapulae",
      pronunciation: "leh-VAY-tor SKAP-you-lay",
      locationSimple: "A strap-like muscle running from the neck to the top corner of the shoulder blade.",
      origin: "Transverse processes of the upper cervical vertebrae.",
      insertion: "Superior angle of the scapula.",
      actions: "Elevates the scapula (as in a shrug) and helps rotate it downward; assists neck side-bending.",
      jointsCrossed: "Scapulothoracic articulation",
      movementPlane: "multiple",
      innervation: "Dorsal scapular nerve and cervical nerves (C3–C5)",
      functionDaily: "Shrugging and steadying the shoulder blade; involved in neck posture.",
      functionExercise: "Assists elevation in shrugs and carries.",
      beginnerExplanation:
        "As its name says ('levator' = lifter), it lifts the shoulder blade — part of shrugging. It also connects to the neck, so it is often tense with stress and desk posture.",
      advancedExplanation:
        "Frequently overactive/tight with a forward-head, rounded-shoulder posture, contributing to neck-shoulder tension; balancing it with lower-trap strength is common practice.",
      commonlyConfused: "Confused with the upper trapezius, which also elevates the scapula.",
      misconceptions: "Neck-shoulder tightness is not always 'the traps' — the levator scapulae is often involved.",
      safetyInfo: "Persistent neck pain, headaches, or arm symptoms need professional assessment, not just stretching.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The levator scapulae elevates the scapula.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "teres-major",
      commonName: "Teres major",
      scientificName: "Teres major",
      pronunciation: "TEH-reez MAY-jor",
      locationSimple: "A thick muscle along the lower outer edge of the shoulder blade, below teres minor.",
      origin: "Inferior angle / lower lateral border of the scapula.",
      insertion: "Intertubercular groove of the humerus (near the latissimus dorsi).",
      actions: "Extends, adducts, and internally rotates the arm — assisting the latissimus dorsi.",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "multiple",
      innervation: "Lower subscapular nerve (C5–C6)",
      functionDaily: "Assists pulling the arm down and back.",
      functionExercise: "Assists the lats in pull-ups, pulldowns, and rows.",
      beginnerExplanation:
        "Nicknamed 'lat's little helper' because it copies the latissimus dorsi's action of pulling the arm down and in.",
      advancedExplanation:
        "Unlike its neighbour teres minor (a rotator-cuff external rotator), teres major is an internal rotator and is NOT part of the rotator cuff.",
      commonlyConfused: "Very commonly confused with teres minor — same neighbourhood, opposite rotation; teres major is NOT a cuff muscle.",
      misconceptions: "'Teres major helps abduct like teres minor' is wrong — it adducts and internally rotates.",
      safetyInfo: "Rarely a source of isolated problems; shoulder pain overall should be assessed if persistent.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The teres major extends, adducts, and medially rotates the humerus, assisting the latissimus dorsi.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
  ],
};

export const upperBackMovements: MovementSeed[] = [
  {
    slug: "scapular-elevation",
    name: "Scapular elevation",
    description: "Lifting the shoulder blades upward (a shrug). Driven by the upper trapezius and levator scapulae.",
    plane: "frontal",
    axis: "—",
    jointAction: "Elevation at the scapulothoracic articulation",
    oppositeSlug: "scapular-depression",
  },
  {
    slug: "scapular-depression",
    name: "Scapular depression",
    description: "Pulling the shoulder blades downward (away from the ears). Driven by the lower trapezius.",
    plane: "frontal",
    axis: "—",
    jointAction: "Depression at the scapulothoracic articulation",
    oppositeSlug: "scapular-elevation",
  },
];

export const upperBackExercises: ExerciseSeed[] = [
  {
    slug: "bent-over-barbell-row",
    name: "Bent-Over Barbell Row",
    altNames: "Barbell row",
    simpleExplanation: "Hinging at the hips with a flat back and pulling a barbell to the lower ribs/upper belly.",
    purpose: "A foundational horizontal pull for the lats, mid-back, and rear shoulders.",
    startingPosition: "Stand holding a barbell, feet hip-width. Hinge at the hips with a flat (neutral) back until the torso is 45°–90°, arms hanging.",
    instructions: [
      "Brace the core and keep the back flat throughout (do not round).",
      "Pull the bar toward your lower ribs, leading with the elbows and squeezing the shoulder blades together.",
      "Lower the bar under control to full arm extension.",
    ],
    breathing: "Exhale as you pull; inhale as you lower.",
    cues: "\"Proud chest, flat back, drive the elbows back and squeeze.\"",
    commonMistakes: "Rounding the back; using momentum/jerking; shrugging instead of retracting; standing too upright.",
    safety: "A flat, braced back is essential — rounding under load stresses the spine. Reduce load or regress if you cannot keep a neutral spine.",
    regression: "Chest-supported dumbbell row (removes the low-back demand) or seated cable row.",
    progression: "Increase load gradually or add a pause at the top.",
    alternatives: "Chest-supported row, seated cable row, single-arm dumbbell row.",
    whyItWorks: "It loads the latissimus dorsi and mid-back through a horizontal pull while the rhomboids/mid-traps retract the scapula and the whole posterior chain stabilizes — building pulling strength and posture.",
    benefitsWho: "People building back strength who can hold a braced, neutral spine while hinged.",
    cautionWho: "Those with back pain or who cannot maintain a neutral spine hinged over should use a chest-supported variation.",
    equipment: ["barbell"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "horizontal-pull",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["upper-back-region"],
    primaryMuscles: ["latissimus-dorsi"],
    secondaryMuscles: ["rhomboids", "trapezius", "teres-major", "deltoid"],
    joints: [{ jointSlug: "glenohumeral-joint", jointAction: "extension" }],
    movements: ["shoulder-extension", "scapular-retraction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Rowing the arm downward/backward uses the latissimus dorsi and teres major (shoulder extension) with rhomboids/trapezius retracting the scapula.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "lat-pulldown",
    name: "Lat Pulldown",
    altNames: "Cable pulldown",
    simpleExplanation: "Seated at a cable machine, pulling a bar from overhead down to the upper chest.",
    purpose: "A vertical pull that builds the latissimus dorsi; a common progression toward pull-ups.",
    startingPosition: "Sit at the pulldown machine, thighs secured, gripping the bar wider than shoulder-width, arms extended overhead.",
    instructions: [
      "Start by depressing the shoulder blades (think 'pull the shoulders down away from the ears').",
      "Pull the bar to the upper chest, driving the elbows down and slightly back.",
      "Control the bar back up to full stretch overhead.",
    ],
    breathing: "Exhale as you pull down; inhale as the bar rises.",
    cues: "\"Lead with the elbows, bring the bar to the collarbone, no leaning way back.\"",
    commonMistakes: "Using body swing/momentum; pulling behind the neck; not controlling the return; shrugging.",
    safety: "Avoid excessive leaning back or behind-the-neck pulling, which can stress the shoulders/neck.",
    regression: "Lighter load or band-assisted pulldown; machine-assisted pull-up.",
    progression: "Progress toward strict pull-ups.",
    alternatives: "Pull-up (assisted), straight-arm pulldown.",
    whyItWorks: "The lats are strong adductors/extenders of the arm, so pulling a bar down from overhead directly loads them; it is a scalable path to bodyweight pulling.",
    benefitsWho: "People developing vertical pulling strength and working toward pull-ups.",
    cautionWho: "Those with shoulder pain overhead should limit range or substitute.",
    equipment: ["cable-machine"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "vertical-pull",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "frontal",
    status: "source_checked",
    primaryMuscles: ["latissimus-dorsi"],
    secondaryMuscles: ["teres-major", "rhomboids", "trapezius"],
    joints: [{ jointSlug: "glenohumeral-joint", jointAction: "adduction" }],
    movements: ["shoulder-adduction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The latissimus dorsi (with teres major) adducts and extends the humerus, as in pulling the arm down from overhead.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "face-pull",
    name: "Face Pull",
    altNames: "Cable face pull",
    simpleExplanation: "Pulling a rope from a high cable toward your face, spreading it apart at the end.",
    purpose: "Strengthens the mid-back, rear shoulders, and external rotators for posture and shoulder health.",
    startingPosition: "Set a rope at about head height on a cable. Hold both ends, step back, arms extended.",
    instructions: [
      "Pull the rope toward your face, leading with the elbows high.",
      "As you pull, spread the rope apart and squeeze the shoulder blades together, rotating the hands so the knuckles finish pointing back.",
      "Return slowly under control.",
    ],
    breathing: "Exhale as you pull; inhale on the return.",
    cues: "\"Elbows high, pull to the eyes, show me your muscles at the end.\"",
    commonMistakes: "Using too much weight and turning it into a row; low elbows; jerking.",
    safety: "Light, controlled loads; this is a posture/health exercise, not a max-strength lift.",
    regression: "Band face pull with lighter tension.",
    progression: "Slightly more tension or a pause at the squeezed position.",
    alternatives: "Band pull-apart, reverse fly.",
    whyItWorks: "It combines scapular retraction with external rotation — training the mid-traps, rhomboids, and rear delts that oppose all-day rounded posture and balance pressing-heavy programs.",
    benefitsWho: "Almost everyone, especially desk workers and those who do a lot of pressing.",
    cautionWho: "Anyone with acute shoulder pain should get assessed first.",
    equipment: ["cable-machine"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "horizontal-pull",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "transverse",
    status: "source_checked",
    primaryMuscles: ["rhomboids", "trapezius"],
    secondaryMuscles: ["deltoid", "infraspinatus", "teres-minor"],
    joints: [{ jointSlug: "glenohumeral-joint", jointAction: "horizontal abduction / external rotation" }],
    movements: ["scapular-retraction", "shoulder-horizontal-abduction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Scapular retraction is produced by the rhomboids and middle trapezius; external rotation by the infraspinatus and teres minor.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const upperBackLessons: LessonSeed[] = [
  {
    slug: "upper-back-region-overview",
    title: "The Upper Back: An Overview",
    summary: "The muscles that move the shoulder blades and pull the arms — the balance to the chest.",
    moduleSlug: "the-upper-back",
    bodyRegionSlug: "upper-back",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["upper-back-region"],
    safetyNotes:
      "Back pain with numbness, tingling, weakness, or pain radiating down an arm needs professional assessment. A trainer coaches pulling technique, not diagnosis or treatment.",
    objectives: [
      "Name the major upper-back muscles and what they do.",
      "Explain scapular retraction, elevation, and depression.",
      "Explain why upper-back 'pull' work balances chest 'push' work.",
    ],
    bodyMarkdown: `## Movers of the shoulder blade — and the arm

The upper back has two groups of muscles:

- **Scapula movers**: the **trapezius** (a big diamond that can elevate, retract, and depress the
  shoulder blades), the **rhomboids** (which squeeze the blades together), and the **levator scapulae**
  (which lifts them).
- **Arm pullers**: the **latissimus dorsi** ('lats') — the broad muscle that pulls the arm down and
  back — helped by the **teres major**.

## The push–pull balance

The chest **pushes**; the upper back **pulls**. Programs that only push (lots of bench press and
push-ups) without pulling can drift toward a rounded-shoulder posture. Balancing pressing with rows and
pulldowns keeps the shoulders healthy and posture upright.

## Scapular control

Good pulling starts at the shoulder blade. **Retraction** (squeezing the blades together),
**depression** (pulling them down from the ears), and **elevation** (shrugging up) are controlled by
the traps, rhomboids, and levator scapulae working together.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The trapezius, rhomboids, and levator scapulae move the scapula; the latissimus dorsi and teres major move the humerus (extension/adduction).", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "the-latissimus-dorsi-lesson",
    title: "The Latissimus Dorsi: Your Pull Muscle",
    summary: "The broad back muscle that powers pull-ups, pulldowns, and rows.",
    moduleSlug: "the-upper-back",
    bodyRegionSlug: "upper-back",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 10,
    order: 2,
    prerequisiteSlugs: ["upper-back-region-overview"],
    objectives: [
      "Describe where the latissimus dorsi attaches and what it does.",
      "Match the lats to vertical and horizontal pulling exercises.",
      "Explain why pulling exercises are compound.",
    ],
    bodyMarkdown: `## The 'lats'

The **latissimus dorsi** is the broad, flat muscle that gives the back its V-shape. It reaches from the
lower spine, pelvis, and lower ribs all the way to the upper arm bone (**humerus**). Because it crosses
the shoulder, it **extends, adducts, and internally rotates the arm** — in plain terms, it pulls your
arm **down and back toward your body**.

## Which exercises use it

- **Vertical pull** (pull-up, lat pulldown) — pulling the arms down from overhead.
- **Horizontal pull** (rows) — pulling the arms back toward the torso.

## Not back-only

Like pushing, pulling is a team effort: the lats work with the **biceps**, **rear deltoids**, and the
**rhomboids/mid-traps** that retract the shoulder blades. No single-muscle claims here either.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The latissimus dorsi extends, adducts, and medially rotates the humerus.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const upperBackQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle is the prime mover in a pull-up or lat pulldown?",
    explanation: "Pulling the arms down from overhead is shoulder adduction/extension — the latissimus dorsi's job (helped by the teres major and biceps).",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-latissimus-dorsi-lesson",
    muscleSlug: "latissimus-dorsi",
    exerciseSlug: "lat-pulldown",
    bodyRegionSlug: "upper-back",
    domainCode: "D3",
    options: [
      { text: "Latissimus dorsi", isCorrect: true, rationale: "Correct — the lats pull the arm down and in." },
      { text: "Pectoralis major", rationale: "That's the main pushing muscle, not the vertical puller." },
      { text: "Levator scapulae", rationale: "It elevates the scapula; it is not the prime mover of a pulldown." },
      { text: "Diaphragm", rationale: "A breathing muscle, unrelated to pulling." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The latissimus dorsi adducts and extends the humerus as in a pulldown.", locator: "Ch. 11.5" }],
  },
  {
    type: "true_false",
    prompt: "The rhomboids retract the scapulae (squeeze the shoulder blades together).",
    explanation: "True. The rhomboids, with the middle trapezius, pull the shoulder blades toward the spine — scapular retraction.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "upper-back-region-overview",
    muscleSlug: "rhomboids",
    bodyRegionSlug: "upper-back",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — the rhomboids retract the scapula." },
      { text: "False", rationale: "They do retract the scapula, working with the middle trapezius." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The rhomboids retract the scapula.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which pair of muscles is most COMMONLY CONFUSED, despite doing opposite rotations of the arm?",
    explanation: "Teres minor (a rotator-cuff muscle that externally rotates) and teres major (not a cuff muscle; internally rotates) sit next to each other and are classically confused.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "upper-back-region-overview",
    muscleSlug: "teres-major",
    bodyRegionSlug: "upper-back",
    domainCode: "D1",
    options: [
      { text: "Teres major and teres minor", isCorrect: true, rationale: "Correct — same area, opposite rotation; only teres minor is a rotator-cuff muscle." },
      { text: "Trapezius and diaphragm", rationale: "These are not confused and do unrelated jobs." },
      { text: "Latissimus dorsi and pectoralis major", rationale: "Opposites (pull vs push) but not the classic confused pair by name/location." },
      { text: "Rhomboids and ribs", rationale: "One is a muscle, one is bone — not a confusion pair." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Teres major medially rotates the arm and is not part of the rotator cuff; teres minor laterally rotates and is a cuff muscle.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why do many trainers add rows and face pulls to a program full of bench press and push-ups?",
    explanation: "Push-heavy programs can bias the shoulders forward. Adding pulling (rows, face pulls) strengthens the mid-back and rear shoulders, balancing push with pull for posture and shoulder health.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "upper-back-region-overview",
    exerciseSlug: "face-pull",
    bodyRegionSlug: "upper-back",
    domainCode: "D2",
    options: [
      { text: "To balance pushing with pulling for posture and shoulder health", isCorrect: true, rationale: "Correct — push/pull balance supports the shoulders and posture." },
      { text: "Because pushing muscles should never be trained", rationale: "Pushing is valuable; the point is balance, not avoidance." },
      { text: "Because pulling trains the diaphragm", rationale: "Pulling trains the back muscles, not primarily the diaphragm." },
      { text: "To make the chest the only working muscle", rationale: "The opposite — pulling develops the back to balance the chest." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Upper-back muscles (latissimus dorsi, rhomboids, trapezius) oppose and balance the pushing muscles of the chest.", locator: "Ch. 11.5" }],
  },
];
