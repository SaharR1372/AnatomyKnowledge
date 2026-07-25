import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// PELVIS & HIPS region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 7.5 "The Pelvis" (hip bone anatomy) and Ch. 11.6
// "Appendicular Muscles of the Pelvic Girdle and Lower Limbs" (iliopsoas, tensor
// fasciae latae, piriformis). Gluteal muscles (gluteus maximus/medius/minimus)
// are covered in their own canonical Glutes region; adductors/quadriceps/sartorius
// live in the Thighs region.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const pelvisHipsRegion: BodyRegionSeed = {
  slug: "pelvis-hips",
  name: "Pelvis & Hips",
  order: 6,
  description:
    "The pelvis is the bony ring that connects the spine to the legs, and the hip is the deep ball-and-socket joint where the leg attaches to it. This region is the body's central power-transfer point: it links upper-body and lower-body force, and its deep muscles control how the thigh and trunk move relative to each other.",
  relationships:
    "The pelvis sits directly below the **lower back** (sharing the sacroiliac joint) and above the **thighs**, and works closely with the **glutes** (which move the hip from the back) and **core** (which stabilizes the pelvis from the front and sides). Good hip mobility and control reduce compensation at the low back during bending and lifting.",
  safetyNotes:
    "Sharp groin or hip pain, a locking/catching sensation in the joint, or pain that prevents weight-bearing needs medical evaluation, not exercise. A trainer coaches hip-flexor and mobility work; they do not diagnose hip joint pathology.",
  assetSlugs: ["pelvis-hips-region"],
  pronunciations: [
    { term: "Pelvis", say: "PEL-vis" },
    { term: "Ilium", say: "ILL-ee-um" },
    { term: "Acetabulum", say: "as-eh-TAB-yoo-lum" },
    { term: "Iliopsoas", say: "il-ee-oh-SOH-as" },
    { term: "Psoas major", say: "SOH-as MAY-jor" },
    { term: "Tensor fasciae latae", say: "TEN-sor FASH-ee-ee LAY-tee" },
    { term: "Piriformis", say: "peer-ih-FOR-mis" },
    { term: "Sacroiliac joint", say: "say-kroh-ILL-ee-ak joint" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The hip joint is a ball-and-socket synovial joint between the femoral head and the acetabulum of the hip bone; the iliopsoas is the primary hip flexor.",
      locator: "Ch. 7.5 The Pelvis; Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs",
    },
  ],
  bones: [
    {
      slug: "hip-bone",
      name: "Hip bone (os coxae)",
      latinName: "Os coxae",
      description: "The large, irregularly shaped bone formed by the fusion of three bones (ilium, ischium, pubis). The left and right hip bones join the sacrum behind to form the pelvis, and each contains the acetabulum — the socket of the hip joint.",
      landmarks: "Iliac crest, anterior superior iliac spine (ASIS), acetabulum, pubic symphysis (where the two hip bones meet in front).",
    },
  ],
  joints: [
    {
      slug: "hip-joint",
      name: "Hip joint (coxal joint)",
      jointType: "synovial, ball-and-socket",
      description: "The deep, highly stable ball-and-socket joint between the rounded head of the femur and the cup-shaped acetabulum of the hip bone. It allows a large range of motion while bearing enormous load during standing, walking, and lifting.",
      articulatingBones: "Head of the femur and the acetabulum of the hip bone",
      movementsAllowed: "Flexion, extension, abduction, adduction, internal rotation, external rotation, and circumduction.",
    },
    {
      slug: "sacroiliac-joint",
      name: "Sacroiliac (SI) joint",
      jointType: "synovial (with strong ligamentous reinforcement) — very limited motion",
      description: "The joint between the sacrum and the ilium on each side, transmitting force between the spine and the legs. It allows only small amounts of gliding/rotation, but is a common source of low-back-region pain when irritated.",
      articulatingBones: "Sacrum and ilium",
      movementsAllowed: "Minimal gliding and rotation — primarily a stable, force-transmitting joint rather than a mobile one.",
    },
  ],
  muscles: [
    {
      slug: "iliopsoas",
      commonName: "Iliopsoas",
      scientificName: "Iliopsoas (psoas major + iliacus)",
      pronunciation: "il-ee-oh-SOH-as",
      locationSimple: "A deep muscle group running from the lower spine and the inside of the pelvis, down and forward across the front of the hip to the upper thigh bone.",
      origin: "Psoas major: bodies and transverse processes of the lumbar vertebrae. Iliacus: inner surface of the ilium.",
      insertion: "Lesser trochanter of the femur.",
      actions: "Flexes the thigh at the hip (the primary hip flexor); when the thigh is fixed, helps flex the trunk toward the thigh; assists in maintaining lumbar posture.",
      jointsCrossed: "Hip joint (and, for the psoas major, the lumbar intervertebral joints)",
      movementPlane: "sagittal",
      innervation: "Femoral nerve (iliacus) and lumbar plexus branches (psoas major, L1–L3)",
      functionDaily: "Lifting the knee to walk, climb stairs, or kick, and the last part of sitting up from lying down.",
      functionExercise: "Prime mover in hip-flexion exercises (leg raises, marching, high-knee drills) and active in the top phase of a squat or lunge as the hip flexes.",
      beginnerExplanation:
        "This deep muscle group is your main 'hip flexor' — it lifts your knee toward your chest, like the first part of a high step or a kick.",
      advancedExplanation:
        "Because the psoas major attaches directly to the lumbar spine, tightness here can pull the low back into extra arch (anterior pelvic tilt); balancing hip-flexor mobility with core and glute strength is common coaching practice.",
      commonlyConfused: "Often lumped simply as 'hip flexors' along with the rectus femoris (a quad muscle); the iliopsoas is the deeper, primary flexor while the rectus femoris assists.",
      misconceptions: "'Tight hip flexors' is not a diagnosis of injury by itself — mobility work and balanced strength training, not medical treatment, is the usual first approach for simple tightness.",
      safetyInfo: "A deep, sharp groin pain with hip flexion (rather than simple tightness) should be assessed by a professional before continuing loaded hip-flexor work.",
      status: "source_checked",
      assetSlugs: ["pelvis-hips-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The iliopsoas (psoas major and iliacus) is the primary flexor of the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "tensor-fasciae-latae",
      commonName: "Tensor fasciae latae",
      scientificName: "Tensor fasciae latae",
      pronunciation: "TEN-sor FASH-ee-ee LAY-tee",
      locationSimple: "A small muscle at the front-outer point of the hip, feeding into the long iliotibial (IT) band that runs down the outside of the thigh.",
      origin: "Anterior superior iliac spine (ASIS) and the iliac crest.",
      insertion: "Iliotibial (IT) band, which continues to the outer shin bone (tibia).",
      actions: "Flexes, internally rotates, and abducts the thigh at the hip; tenses the IT band, helping stabilize the knee and pelvis during walking and running.",
      jointsCrossed: "Hip joint (and indirectly the knee, via the IT band)",
      movementPlane: "multiple",
      innervation: "Superior gluteal nerve (L4–S1)",
      functionDaily: "Stabilizing the pelvis and knee during the stance phase of walking and running.",
      functionExercise: "Assists in hip-abduction and hip-flexion exercises; commonly discussed in runners for its role in IT-band tension.",
      beginnerExplanation:
        "A small hip muscle that helps lift and rotate your thigh inward, and tightens a long band (the IT band) running down the outside of your leg to help stabilize your stride.",
      advancedExplanation:
        "Because it tensions the IT band, overactivity or tightness here is frequently discussed alongside lateral knee discomfort in runners and cyclists, though causation is multifactorial.",
      commonlyConfused: "Its abduction role is often credited entirely to the gluteus medius; in reality the two act together on the outside of the hip.",
      misconceptions: "IT-band discomfort is not caused by the IT band itself 'snapping' — training approaches typically address hip and glute strength/control rather than trying to 'stretch' the band directly.",
      safetyInfo: "Persistent outer-hip or outer-knee pain in runners should be evaluated rather than trained through.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The tensor fasciae latae flexes, abducts, and medially rotates the thigh and tenses the iliotibial band.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "piriformis",
      commonName: "Piriformis",
      scientificName: "Piriformis",
      pronunciation: "peer-ih-FOR-mis",
      locationSimple: "A small, deep muscle running from the inner surface of the sacrum to the top of the thigh bone, deep beneath the gluteus maximus.",
      origin: "Anterior (front) surface of the sacrum.",
      insertion: "Greater trochanter of the femur.",
      actions: "Externally (laterally) rotates the thigh at the hip when the hip is extended; assists hip abduction when the hip is flexed to 90°.",
      jointsCrossed: "Hip joint",
      movementPlane: "transverse",
      innervation: "Nerve to piriformis (branches of S1–S2)",
      functionDaily: "Turning the foot/leg outward, such as pivoting to change direction while walking.",
      functionExercise: "A stabilizer in single-leg standing and rotational movements; often targeted in hip-mobility and glute-activation warm-ups.",
      beginnerExplanation:
        "A small, deep muscle under your glutes that rotates your thigh outward — think of turning your toes out while standing.",
      advancedExplanation:
        "The sciatic nerve passes very close to (and in some people through) the piriformis; irritation here is discussed as one possible contributor to sciatica-like symptoms, though true nerve root causes are far more common and must be distinguished by a professional.",
      commonlyConfused: "Buttock or posterior-hip pain is often assumed to be 'piriformis syndrome' by default, when low-back nerve involvement is a more common cause and needs proper assessment.",
      misconceptions: "Stretching alone does not resolve all deep-glute pain — the underlying cause needs identifying, which is outside a trainer's scope.",
      safetyInfo: "Pain radiating down the leg, numbness, or tingling should be referred to a healthcare professional rather than treated with stretching alone.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The piriformis laterally rotates the extended thigh and abducts the flexed thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
  ],
};

export const pelvisHipsMovements: MovementSeed[] = [
  {
    slug: "hip-flexion",
    name: "Hip flexion",
    description: "Lifting the thigh forward and up toward the trunk. Driven mainly by the iliopsoas.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the hip joint",
    oppositeSlug: "hip-extension",
  },
  {
    slug: "hip-extension",
    name: "Hip extension",
    description: "Moving the thigh backward, in line with or behind the trunk. Driven mainly by the gluteus maximus and hamstrings (covered in the Glutes and Thighs regions).",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Extension at the hip joint",
    oppositeSlug: "hip-flexion",
  },
  {
    slug: "hip-internal-rotation",
    name: "Hip internal rotation",
    description: "Rotating the thigh inward around its long axis (toes turning inward). Assisted by the tensor fasciae latae.",
    plane: "transverse",
    axis: "vertical",
    jointAction: "Internal (medial) rotation at the hip joint",
    oppositeSlug: "hip-external-rotation",
  },
  {
    slug: "hip-external-rotation",
    name: "Hip external rotation",
    description: "Rotating the thigh outward around its long axis (toes turning outward). Driven by the piriformis and other deep rotators.",
    plane: "transverse",
    axis: "vertical",
    jointAction: "External (lateral) rotation at the hip joint",
    oppositeSlug: "hip-internal-rotation",
  },
];

export const pelvisHipsExercises: ExerciseSeed[] = [
  {
    slug: "standing-hip-flexor-march",
    name: "Standing Hip Flexor March",
    altNames: "High-knee march",
    simpleExplanation: "Standing tall and alternately lifting each knee toward the chest in a controlled marching motion.",
    purpose: "Builds control and strength through the hip-flexion range while challenging single-leg balance.",
    startingPosition: "Stand tall, feet hip-width apart, core gently braced.",
    instructions: [
      "Lift one knee toward the chest, keeping the standing leg tall and the trunk upright (avoid leaning back).",
      "Lower the leg with control back to the floor.",
      "Repeat on the other side, alternating in a marching rhythm.",
    ],
    breathing: "Exhale as you lift the knee; inhale as you lower it.",
    cues: "\"Tall spine, lift the knee, don't lean back to help it up.\"",
    commonMistakes: "Leaning the trunk backward to swing the leg up (using momentum instead of the hip flexor); rushing the tempo; letting the standing-leg hip drop sideways.",
    safety: "Hold onto a wall or rail for balance if needed; a sharp groin pinch (versus normal muscular effort) is a stop signal.",
    regression: "Hold onto a support and reduce how high the knee lifts.",
    progression: "Add a resistance band around the thighs, or slow the tempo for more time under tension.",
    alternatives: "Seated or lying knee raises; band-resisted hip flexion.",
    whyItWorks: "It isolates hip flexion — the iliopsoas's main job — while also demanding single-leg balance and trunk control, transferring directly to walking, stair climbing, and sprinting mechanics.",
    benefitsWho: "Beginners building hip-flexor strength and control, and anyone working on single-leg balance.",
    cautionWho: "Those with current groin or hip joint pain should get clearance before loaded hip-flexor work.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["pelvis-hips-region"],
    primaryMuscles: ["iliopsoas"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "hip-joint", jointAction: "flexion" }],
    movements: ["hip-flexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The iliopsoas is the primary flexor of the thigh at the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "standing-band-hip-abduction",
    name: "Standing Band Hip Abduction",
    altNames: "Side-step with band, monster walk",
    simpleExplanation: "With a light resistance band around the ankles or thighs, stepping sideways against the band's tension.",
    purpose: "Trains the muscles on the outside of the hip (tensor fasciae latae with the gluteus medius) that stabilize the pelvis during single-leg stance.",
    startingPosition: "Place a light loop band around the thighs (just above the knees) or ankles, feet hip-width, knees soft, hips hinged slightly.",
    instructions: [
      "Keeping tension on the band, step sideways with control, then bring the trailing leg in only partway (keep tension on).",
      "Keep the toes pointing forward and the trunk upright throughout.",
      "Repeat for the set distance/reps, then reverse direction.",
    ],
    breathing: "Breathe steadily; avoid holding your breath.",
    cues: "\"Toes forward, stay low, keep tension on the band the whole time.\"",
    commonMistakes: "Letting the toes turn outward to cheat the movement; standing tall (losing hip hinge) so the band goes slack; leaning side to side.",
    safety: "Use light band tension to start; this is a control and activation exercise, not a max-effort strength move.",
    regression: "Lighter band tension or a smaller step width.",
    progression: "Heavier band tension, a lower athletic stance, or more steps per set.",
    alternatives: "Side-lying leg raise, cable hip abduction.",
    whyItWorks: "It challenges the hip's outer stabilizers to control the pelvis against a side-pulling resistance — the same demand placed on the hip every time you stand and walk on one leg at a time.",
    benefitsWho: "Anyone building hip stability for walking, running, or single-leg strength work; a common warm-up staple.",
    cautionWho: "Those with hip or outer-knee pain that worsens with this movement should reduce band tension or range.",
    equipment: ["resistance-band"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "closed",
    movementPlane: "frontal",
    status: "source_checked",
    primaryMuscles: ["tensor-fasciae-latae"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "hip-joint", jointAction: "abduction" }],
    movements: [],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The tensor fasciae latae assists hip abduction and stabilizes the pelvis via the iliotibial band.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "seated-hip-external-rotation-stretch",
    name: "Seated Hip External-Rotation Mobility Drill",
    altNames: "Seated figure-4 rotation",
    simpleExplanation: "Seated, crossing one ankle over the opposite knee and gently hinging forward to mobilize the outer hip and deep rotators.",
    purpose: "Improves comfortable range of motion in hip external rotation, supporting exercises like the squat that need it.",
    startingPosition: "Sit tall in a chair, cross one ankle just above the opposite knee, forming a '4' shape.",
    instructions: [
      "Keep the crossed-leg ankle relaxed (avoid pointing the foot hard) and the back tall.",
      "Gently hinge forward from the hips until a comfortable stretch is felt in the outer hip/buttock.",
      "Hold for the target time, breathing normally, then switch sides.",
    ],
    breathing: "Breathe slowly and steadily throughout the hold.",
    cues: "\"Tall spine, hinge forward until you feel a gentle stretch — not pain.\"",
    commonMistakes: "Rounding the back instead of hinging at the hips; forcing the stretch into pain; bouncing.",
    safety: "This should feel like a mild stretch, never sharp or radiating pain; radiating pain down the leg is a stop signal.",
    regression: "Reduce how far you hinge forward, or perform lying on the back instead of seated.",
    progression: "Hold longer, or add a gentle overpressure with the hand on the crossed knee.",
    alternatives: "Supine figure-4 stretch, 90/90 hip stretch.",
    whyItWorks: "It lengthens the deep external rotators (including the piriformis) and the outer hip capsule, supporting the range of motion needed for a comfortable squat depth and general hip health.",
    benefitsWho: "Anyone with limited hip external rotation or who sits for long periods.",
    cautionWho: "Those with hip joint pathology (labral tears, impingement symptoms) should get individualized guidance rather than pushing range.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "mobility",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "transverse",
    status: "source_checked",
    primaryMuscles: ["piriformis"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "hip-joint", jointAction: "external rotation (stretch)" }],
    movements: ["hip-external-rotation"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The piriformis is a deep external rotator of the hip joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      { sourceSlug: NIAMS, claim: "Gentle stretching within a pain-free range can support joint mobility, while sharp or radiating pain warrants medical evaluation.", locator: "Back Pain" },
    ],
  },
];

export const pelvisHipsLessons: LessonSeed[] = [
  {
    slug: "pelvis-hips-region-overview",
    title: "The Pelvis & Hips: An Overview",
    summary: "The bony ring and ball-and-socket joint that connect the spine to the legs and transfer force between them.",
    moduleSlug: "the-pelvis-hips",
    bodyRegionSlug: "pelvis-hips",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["pelvis-hips-region"],
    safetyNotes:
      "Sharp groin/hip pain, joint locking or catching, or pain that prevents weight-bearing needs medical evaluation, not exercise. A trainer coaches hip mobility and strength work; they do not diagnose hip joint pathology.",
    objectives: [
      "Describe the hip joint as a ball-and-socket joint and name its bones.",
      "Identify the iliopsoas as the primary hip flexor.",
      "Explain why the pelvis is a central link between the upper and lower body.",
    ],
    bodyMarkdown: `## A bony ring with a deep socket

The **pelvis** is formed by the two **hip bones** joined to the **sacrum** behind. Each hip bone contains
the **acetabulum** — a deep cup that, together with the rounded head of the **femur**, forms the **hip
joint**: a stable ball-and-socket joint built for both mobility and heavy load-bearing.

## The primary hip flexor

The **iliopsoas** — really two muscles (psoas major and iliacus) working as one — is the main muscle that
lifts your thigh toward your chest. Because the psoas major attaches directly onto the lumbar spine, hip
flexor tightness and low-back posture are closely linked.

## The pelvis as a link

Sitting between the spine and the legs, the pelvis transmits force in both directions: up from the ground
through the legs, and down from the trunk during lifting. Good hip mobility lets that transfer happen
efficiently, which is why hip-focused mobility work often appears alongside core and low-back training.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The hip joint is a ball-and-socket joint between the femoral head and the acetabulum; the iliopsoas is the primary hip flexor.", locator: "Ch. 7.5 The Pelvis; Ch. 11.6" },
    ],
  },
  {
    slug: "hip-mobility-and-scope-lesson",
    title: "Hip Mobility Work — and Where a Trainer's Scope Ends",
    summary: "Why hip mobility matters for squatting and lifting, and how to tell normal tightness from a problem that needs referral.",
    moduleSlug: "the-pelvis-hips",
    bodyRegionSlug: "pelvis-hips",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 9,
    order: 2,
    prerequisiteSlugs: ["pelvis-hips-region-overview"],
    safetyNotes:
      "Radiating pain, numbness, or a locking/catching hip joint are signals to refer to a healthcare professional. General muscular tightness is a normal training target; joint pathology is not something a trainer treats.",
    objectives: [
      "Distinguish normal muscular tightness from hip joint warning signs.",
      "Explain why hip external rotation range matters for squat depth.",
      "State what falls inside versus outside a trainer's scope regarding hip pain.",
    ],
    bodyMarkdown: `## Why hip range of motion matters

Comfortable hip **external rotation** and **flexion** range let the thighs rotate outward and the hips
sink low without the low back or knees compensating — relevant to squat depth, lunges, and everyday tasks
like getting up from the floor.

## Tight muscle vs. joint problem

A gentle, non-painful stretch sensation in a mobility drill is normal muscular tightness. **Sharp,
radiating, or locking/catching** sensations are different — they suggest something is happening at the
joint itself (or the nearby nerve), not just a short muscle.

## Staying in scope

A trainer's job is to coach mobility drills, progressions, and strength work within a pain-free range.
Diagnosing labral tears, impingement, or nerve involvement is outside that scope — those clients should be
referred to a physician or physical therapist.`,
    citations: [
      { sourceSlug: NIAMS, claim: "Persistent or radiating joint pain, or pain with locking or catching, should be evaluated by a healthcare professional.", locator: "Back Pain" },
    ],
  },
];

export const pelvisHipsQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle is the primary flexor of the thigh at the hip?",
    explanation: "The iliopsoas (psoas major + iliacus) is the main hip flexor, lifting the thigh toward the trunk.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "pelvis-hips-region-overview",
    muscleSlug: "iliopsoas",
    exerciseSlug: "standing-hip-flexor-march",
    bodyRegionSlug: "pelvis-hips",
    domainCode: "D1",
    options: [
      { text: "Iliopsoas", isCorrect: true, rationale: "Correct — the primary hip flexor." },
      { text: "Piriformis", rationale: "A deep external rotator, not the primary flexor." },
      { text: "Gluteus maximus", rationale: "The main hip extensor, the opposite action." },
      { text: "Tensor fasciae latae", rationale: "Assists hip flexion but is not the primary flexor." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The iliopsoas is the primary flexor of the thigh at the hip joint.", locator: "Ch. 11.6" }],
  },
  {
    type: "true_false",
    prompt: "The hip joint is a ball-and-socket joint formed by the femoral head and the acetabulum.",
    explanation: "True. This ball-and-socket design gives the hip a large range of motion while remaining highly stable under load.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "pelvis-hips-region-overview",
    bodyRegionSlug: "pelvis-hips",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — a classic ball-and-socket synovial joint." },
      { text: "False", rationale: "The hip joint is indeed a ball-and-socket joint." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The hip joint is a ball-and-socket synovial joint between the femoral head and the acetabulum.", locator: "Ch. 7.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "A client reports a locking, catching sensation deep in the hip joint during a mobility drill. What should the trainer do?",
    explanation: "Joint locking/catching is a warning sign of possible joint pathology, outside a trainer's scope — refer to a healthcare professional rather than continuing or diagnosing.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "hip-mobility-and-scope-lesson",
    bodyRegionSlug: "pelvis-hips",
    domainCode: "D4",
    options: [
      { text: "Stop the drill and refer the client to a healthcare professional", isCorrect: true, rationale: "Correct — locking/catching is a joint-pathology warning sign requiring referral." },
      { text: "Push through more repetitions to loosen the joint", isCorrect: false, rationale: "Pushing through joint locking risks harm and is not appropriate coaching." },
      { text: "Diagnose it as a labral tear and prescribe a treatment plan", rationale: "Diagnosis and treatment are outside a trainer's scope of practice." },
      { text: "Ignore it since hip sounds are always harmless", rationale: "Locking/catching is a distinct warning sign, not routine joint noise." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Joint locking, catching, or persistent pain should be evaluated by a healthcare professional.", locator: "Back Pain" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which small hip muscle tenses the iliotibial (IT) band and assists hip flexion, abduction, and internal rotation?",
    explanation: "The tensor fasciae latae feeds into the IT band and assists these hip actions, working alongside the gluteus medius.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "pelvis-hips-region-overview",
    muscleSlug: "tensor-fasciae-latae",
    exerciseSlug: "standing-band-hip-abduction",
    bodyRegionSlug: "pelvis-hips",
    domainCode: "D1",
    options: [
      { text: "Tensor fasciae latae", isCorrect: true, rationale: "Correct — tensions the IT band and assists hip flexion/abduction/internal rotation." },
      { text: "Piriformis", rationale: "An external rotator, and does not tension the IT band." },
      { text: "Iliopsoas", rationale: "The primary hip flexor, but does not attach to or tension the IT band." },
      { text: "Quadratus lumborum", rationale: "A lower-back muscle, unrelated to the IT band." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The tensor fasciae latae flexes, abducts, and medially rotates the thigh and tenses the iliotibial band.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "The sacroiliac (SI) joint connects which two structures?",
    explanation: "The SI joint joins the sacrum (bottom of the spine) to the ilium (part of the hip bone) on each side, transmitting force between the spine and legs.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "pelvis-hips-region-overview",
    bodyRegionSlug: "pelvis-hips",
    domainCode: "D1",
    options: [
      { text: "The sacrum and the ilium", isCorrect: true, rationale: "Correct — the SI joint links the spine's base to the pelvis." },
      { text: "The femur and the acetabulum", rationale: "That describes the hip joint, not the SI joint." },
      { text: "The lumbar vertebrae and the ribs", rationale: "Unrelated structures — ribs articulate with thoracic vertebrae." },
      { text: "The pubic bones of each side", rationale: "That junction is the pubic symphysis, a different joint." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The sacroiliac joint joins the sacrum and the ilium, transmitting force between the spine and the lower limbs.", locator: "Ch. 7.5 The Pelvis" }],
  },
];
