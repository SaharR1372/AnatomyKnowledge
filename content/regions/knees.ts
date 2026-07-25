import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// KNEES region — a JOINT-type region (fewer unique muscles by design; the
// quadriceps and hamstrings that move the knee live in the Thighs region and
// are referenced here, not redefined). This region focuses on the knee's bony/
// ligamentous structure, common injuries, and safety. Facts from OpenStax A&P 2e
// Ch. 9.5 "Synovial Joints" (knee joint structure) and NIAMS for injury/safety
// framing. The tibiofemoral "knee-joint" was already introduced in thighs.ts;
// this region adds the patella and patellofemoral joint, and the popliteus —
// a small muscle unique to the knee with no natural home in Thighs.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const kneesRegion: BodyRegionSeed = {
  slug: "knees",
  name: "Knees",
  order: 9,
  description:
    "The knee is the largest and one of the most load-bearing joints in the body. It relies on a thick set of ligaments and two C-shaped cartilage pads (menisci) for stability, since its bony surfaces alone are relatively flat and offer little inherent stability — unlike the deep socket of the hip. Because of this reliance on soft tissue for stability, the knee is one of the most commonly injured joints in sport and exercise.",
  relationships:
    "The knee sits between the **thighs** (whose quadriceps and hamstrings are its primary movers and dynamic stabilizers) and the **lower legs** (whose muscles cross the knee only in a minor, secondary way). Healthy hip control (from the **glutes**) also strongly influences safe knee alignment during single-leg movements.",
  safetyNotes:
    "A popping sound at the time of injury, immediate swelling, a feeling of the knee 'giving way,' locking, or inability to bear weight are warning signs of a significant ligament or meniscus injury and need prompt medical evaluation. A trainer coaches knee-safe technique (alignment, control, gradual loading); they do not diagnose ligament tears or meniscus injuries.",
  assetSlugs: ["knees-region"],
  pronunciations: [
    { term: "Patella", say: "puh-TEL-uh" },
    { term: "Patellofemoral", say: "puh-tel-oh-FEM-or-al" },
    { term: "Meniscus", say: "meh-NIS-kus" },
    { term: "Anterior cruciate ligament (ACL)", say: "an-TEER-ee-or KROO-shee-ate LIG-uh-ment" },
    { term: "Popliteus", say: "pop-LIT-ee-us" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The knee is a synovial hinge joint stabilized primarily by ligaments (including the ACL, PCL, MCL, and LCL) and two menisci, rather than by bony congruence.",
      locator: "Ch. 9.5 Synovial Joints",
    },
    {
      sourceSlug: NIAMS,
      claim: "Knee injuries involving ligaments or menisci are common in sport and exercise and often present with swelling, instability, or locking.",
      locator: "Sports Injuries",
    },
  ],
  bones: [
    {
      slug: "patella",
      name: "Patella (kneecap)",
      latinName: "Patella",
      description: "A sesamoid bone (a bone embedded within a tendon) sitting inside the quadriceps tendon, gliding in a groove on the front of the femur. It increases the leverage of the quadriceps for knee extension.",
      landmarks: "Apex (lower point, where the patellar tendon continues to the tibia), base (upper, broader edge).",
    },
  ],
  joints: [
    {
      slug: "patellofemoral-joint",
      name: "Patellofemoral joint",
      jointType: "synovial, gliding",
      description: "The joint between the patella and the groove (trochlea) on the front of the femur. As the knee bends and straightens, the patella glides up and down this groove, and its tracking (staying centered rather than shifting to one side) is a common focus of knee rehabilitation and injury prevention.",
      articulatingBones: "Patella and the femoral trochlear groove",
      movementsAllowed: "Superior/inferior gliding as the knee flexes and extends, with slight tilting and rotation.",
    },
  ],
  muscles: [
    {
      slug: "popliteus",
      commonName: "Popliteus",
      scientificName: "Popliteus",
      pronunciation: "pop-LIT-ee-us",
      locationSimple: "A small, flat, triangular muscle deep in the back of the knee, beneath the gastrocnemius.",
      origin: "Lateral condyle of the femur.",
      insertion: "Posterior surface of the tibia (above the soleal line).",
      actions: "\"Unlocks\" the fully extended knee by rotating the femur on the tibia (or the tibia on the femur, depending on which is fixed), allowing flexion to begin; assists knee flexion.",
      jointsCrossed: "Knee joint",
      movementPlane: "transverse",
      innervation: "Tibial nerve (L4–S1)",
      functionDaily: "The small rotation that happens at the very start of bending the knee after standing fully upright, such as beginning to walk or sit down.",
      functionExercise: "Not a prime mover in typical strength exercises, but active as a stabilizer, especially in movements that begin from a fully straightened knee.",
      beginnerExplanation:
        "This tiny muscle behind the knee does one specific job: it 'unlocks' your knee from being fully straight so you can start bending it, like the first moment of sitting down.",
      advancedExplanation:
        "In standing (closed-chain), the popliteus rotates the femur on the fixed tibia; non-weight-bearing (open-chain), it rotates the tibia on the femur — the same muscle producing different-looking motion depending on which bone is free to move.",
      commonlyConfused: "Easily overlooked entirely since it is small, deep, and not a prime mover — but it is a distinct, named muscle with a specific mechanical job.",
      misconceptions: "It is not a knee flexor in the same league as the hamstrings — its role is unlocking/rotating, with only a minor flexion contribution.",
      safetyInfo: "Rarely a source of isolated injury; general knee-safety principles apply.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The popliteus rotates the femur or tibia to unlock the fully extended knee, initiating flexion.", locator: "Ch. 9.5 Synovial Joints" },
      ],
    },
  ],
};

export const kneesMovements: MovementSeed[] = [];

export const kneesExercises: ExerciseSeed[] = [
  {
    slug: "wall-sit",
    name: "Wall Sit",
    altNames: "Static wall squat",
    simpleExplanation: "Leaning against a wall with the knees bent to roughly a right angle and holding the position, as if sitting in an invisible chair.",
    purpose: "Builds quadriceps endurance and knee control through an isometric (non-moving) hold, with low joint shear compared to dynamic loaded exercises.",
    startingPosition: "Stand with your back against a wall, feet out in front, then slide down until the knees are bent to roughly 90°, thighs parallel to the floor.",
    instructions: [
      "Keep the back flat against the wall and the knees tracking in line with the toes (not caving inward).",
      "Hold the position, breathing steadily, for the target time.",
      "Slide back up the wall to stand when finished.",
    ],
    breathing: "Breathe steadily and continuously throughout the hold — do not hold your breath.",
    cues: "\"Knees over your toes, back flat on the wall, breathe steadily.\"",
    commonMistakes: "Letting the knees cave inward; sliding too low or too high for comfort; holding the breath.",
    safety: "Choose a hold depth (higher up the wall = shallower knee bend) that feels controlled and pain-free at the front of the knee.",
    regression: "Hold a shallower position (less knee bend) or shorten the hold time.",
    progression: "Increase hold time, or move to a deeper position.",
    alternatives: "Bodyweight squat hold, split-stance isometric hold.",
    whyItWorks: "The isometric hold builds quadriceps endurance and control at a knee angle without the impact or shear forces of dynamic loaded movements, making it a common early step in knee-focused strength and rehabilitation programs.",
    benefitsWho: "Beginners building base quadriceps endurance, and anyone easing back into knee-loading exercise after a period of inactivity.",
    cautionWho: "Those with anterior knee pain that worsens with a deep hold should use a shallower angle.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isometric",
    setting: "home",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["knees-region"],
    primaryMuscles: ["quadriceps-femoris"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "knee-joint", jointAction: "isometric hold (partial flexion)" }],
    movements: [],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris controls knee position isometrically when the joint is held at a fixed angle under load.", locator: "Ch. 9.5 Synovial Joints" },
    ],
  },
  {
    slug: "banded-terminal-knee-extension",
    name: "Banded Terminal Knee Extension",
    altNames: "TKE",
    simpleExplanation: "With a band anchored behind the knee, straightening the last few degrees of the knee against the band's pull.",
    purpose: "Trains control through the final degrees of knee extension, a range often under-trained by machines and important for patellar tracking.",
    startingPosition: "Loop a resistance band around the back of the knee, anchored behind you, standing with the knee slightly bent.",
    instructions: [
      "Slowly straighten the knee fully against the band's resistance, squeezing the quadriceps at the top.",
      "Hold the fully straight position briefly.",
      "Return with control to the slightly bent starting position.",
    ],
    breathing: "Exhale as you straighten the knee; inhale as you return.",
    cues: "\"Squeeze the knee straight and hold — quality over speed.\"",
    commonMistakes: "Using a range of motion that is too large (starting from a deep bend, which shifts the exercise away from its terminal-extension purpose); moving too fast to control the squeeze.",
    safety: "This is a light, control-focused exercise; a mild pulling sensation at the band is expected, but sharp knee pain is a stop signal.",
    regression: "Lighter band tension or shorter hold.",
    progression: "Increase band tension or hold duration at full extension.",
    alternatives: "Quad sets (isometric squeeze with the leg straight on the floor), leg extension (Thighs region) with a focus on the final degrees.",
    whyItWorks: "The last few degrees of knee extension are where the quadriceps (particularly the vastus medialis) work hardest to keep the patella tracking centrally — a range that is easy to under-train with full-range exercises alone.",
    benefitsWho: "Anyone building terminal knee control, often used alongside general quad strengthening.",
    cautionWho: "Those with current knee pain should confirm this range is comfortable before progressing tension.",
    equipment: ["resistance-band"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["quadriceps-femoris"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "patellofemoral-joint", jointAction: "tracking through terminal extension" }],
    movements: ["knee-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris, particularly through its distal fibers, controls patellar tracking during the terminal degrees of knee extension.", locator: "Ch. 9.5 Synovial Joints" },
    ],
  },
  {
    slug: "lateral-step-down",
    name: "Lateral Step-Down",
    altNames: "Step-down control drill",
    simpleExplanation: "Standing on a low step or box, slowly lowering the non-standing foot to lightly tap the floor to the side, then returning to standing.",
    purpose: "Trains single-leg knee alignment and control, specifically watching for the knee caving inward (valgus) under control-demanding load.",
    startingPosition: "Stand on a low step or box on one leg, the other leg hanging free just off the edge.",
    instructions: [
      "Slowly bend the standing knee to lower the free leg's heel to lightly touch the floor beside the step.",
      "Keep the standing knee tracking in line with the toes, without caving inward.",
      "Push back up to standing through the working leg.",
    ],
    breathing: "Inhale as you lower; exhale as you push back up.",
    cues: "\"Slow and controlled, keep the knee in line with your toes, just a light tap on the floor.\"",
    commonMistakes: "Letting the standing knee drift inward (valgus); dropping quickly instead of controlling the descent; using the free leg to push off the floor.",
    safety: "Start with a very low step height and a slow tempo; increase height only once knee alignment stays consistent.",
    regression: "Use a lower step, or perform the movement in front of a mirror for visual feedback on knee position.",
    progression: "Increase step height, slow the tempo further, or add a small forward reach with the arms.",
    alternatives: "Single-leg sit-to-stand, single-leg balance reach.",
    whyItWorks: "By demanding slow, controlled single-leg knee flexion, it exposes and trains the alignment and hip/quad control needed to keep the knee tracking safely during real-world single-leg tasks like descending stairs.",
    benefitsWho: "Anyone building single-leg knee control, particularly useful for runners and field-sport athletes.",
    cautionWho: "Those with significant knee pain descending stairs in daily life should get individualized guidance before loading this pattern further.",
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["quadriceps-femoris"],
    secondaryMuscles: ["gluteus-medius"],
    joints: [{ jointSlug: "knee-joint", jointAction: "controlled flexion" }],
    movements: ["knee-flexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The quadriceps femoris controls knee flexion eccentrically during a controlled single-leg descent.", locator: "Ch. 9.5 Synovial Joints" },
      { sourceSlug: NIAMS, claim: "Controlled, hip- and knee-aligned movement patterns are commonly used to reduce injury risk during single-leg activities.", locator: "Sports Injuries" },
    ],
  },
];

export const kneesLessons: LessonSeed[] = [
  {
    slug: "knees-region-overview",
    title: "The Knee: An Overview",
    summary: "The body's largest hinge joint, stabilized by ligaments and menisci rather than bony fit alone.",
    moduleSlug: "the-knees",
    bodyRegionSlug: "knees",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["thighs-region-overview"],
    assetSlugs: ["knees-region"],
    safetyNotes:
      "A popping sound at injury, immediate swelling, giving way, locking, or inability to bear weight are warning signs of a significant knee injury needing prompt medical evaluation. A trainer coaches knee-safe technique; they do not diagnose ligament or meniscus injuries.",
    objectives: [
      "Describe the knee joint (tibiofemoral) and the patellofemoral joint.",
      "Name the knee's main stabilizing ligaments and the menisci at a basic level.",
      "Explain why the knee relies more on soft tissue than bone shape for stability.",
    ],
    bodyMarkdown: `## Two joints in one

The knee region actually contains two related joints: the large **tibiofemoral (knee) joint** between
the femur and tibia, which hinges to flex and extend, and the smaller **patellofemoral joint**, where the
kneecap (**patella**) glides in a groove on the femur as the knee bends.

## Stability from soft tissue, not bone shape

Unlike the hip's deep ball-and-socket, the knee's bony surfaces are relatively flat. Stability instead
comes from strong ligaments — commonly discussed as the **ACL**, **PCL**, **MCL**, and **LCL** — and two
C-shaped cartilage pads called **menisci** that cushion and stabilize the joint. This soft-tissue
dependence is exactly why the knee is one of the most frequently injured joints in sport.

## Warning signs vs. normal training feedback

Normal training brings mild, general muscle fatigue. A **pop at the moment of injury**, **rapid
swelling**, the knee **giving way**, or **locking** are different — they are signals of a possible
ligament or meniscus injury that need medical evaluation, not more exercise.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The knee joint relies on the ACL, PCL, MCL, LCL, and menisci for stability given its relatively flat articulating bone surfaces.", locator: "Ch. 9.5 Synovial Joints" },
      { sourceSlug: NIAMS, claim: "Knee ligament and meniscus injuries commonly present with swelling, instability, or locking and require medical evaluation.", locator: "Sports Injuries" },
    ],
  },
  {
    slug: "knee-alignment-and-safety-lesson",
    title: "Knee Alignment: Training the Joint Safely",
    summary: "Why coaches watch knee tracking during squats, lunges, and step-downs.",
    moduleSlug: "the-knees",
    bodyRegionSlug: "knees",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 9,
    order: 2,
    prerequisiteSlugs: ["knees-region-overview"],
    safetyNotes:
      "Coaching knee alignment (avoiding excessive inward collapse) is a technique skill within a trainer's scope. Diagnosing ligament laxity or structural issues is not — refer to a healthcare professional when those are suspected.",
    objectives: [
      "Explain why 'knees caving inward' (valgus collapse) is a common coaching focus.",
      "Describe how gradual loading protects the knee's soft-tissue stabilizers.",
      "Identify exercises used to build knee control in single-leg tasks.",
    ],
    bodyMarkdown: `## Why knee tracking matters

Because the knee depends heavily on ligaments for stability, coaches watch for the knee **caving inward**
(sometimes called valgus collapse) during squats, lunges, and step-downs. This pattern increases stress on
the medial (inner) knee structures and is a common focus of both injury-prevention and rehabilitation
programs.

## Gradual loading protects soft tissue

Ligaments and menisci adapt more slowly than muscle to increased load. This is a core reason training
programs increase knee-loading exercises (deeper squats, more single-leg work, higher step heights)
gradually rather than all at once.

## Building single-leg control

Exercises like the **lateral step-down** deliberately slow down a single-leg movement so a coach (or the
person themselves) can watch and correct knee alignment — turning a daily movement (descending stairs)
into a trainable skill.`,
    citations: [
      { sourceSlug: NIAMS, claim: "Programs that address knee alignment and control during single-leg tasks are commonly used to reduce injury risk.", locator: "Sports Injuries" },
    ],
  },
];

export const kneesQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "What primarily stabilizes the knee joint, given that its bony surfaces are relatively flat?",
    explanation: "Because the tibiofemoral joint surfaces are relatively flat (unlike the hip's deep socket), the knee depends heavily on ligaments (ACL, PCL, MCL, LCL) and the menisci for stability.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "knees-region-overview",
    bodyRegionSlug: "knees",
    domainCode: "D1",
    options: [
      { text: "Ligaments and menisci", isCorrect: true, rationale: "Correct — the knee relies on soft-tissue stabilizers." },
      { text: "The shape of the bones alone, like the hip's socket", rationale: "The opposite is true — the knee's bone shape offers little inherent stability." },
      { text: "The kneecap alone", rationale: "The patella improves quadriceps leverage but is not the joint's main stabilizer." },
      { text: "Skin and superficial fascia", rationale: "These do not provide meaningful joint stability." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The knee relies on ligaments and menisci for stability due to its relatively flat articulating surfaces.", locator: "Ch. 9.5" }],
  },
  {
    type: "true_false",
    prompt: "A popping sound, rapid swelling, and a knee 'giving way' after an injury are warning signs that need prompt medical evaluation.",
    explanation: "True. These are classic signs of a possible significant ligament or meniscus injury, distinct from normal training fatigue.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "knees-region-overview",
    bodyRegionSlug: "knees",
    domainCode: "D4",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — these are recognized warning signs requiring medical evaluation." },
      { text: "False", rationale: "These symptoms are specifically flagged as warning signs, not normal training responses." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Knee injuries commonly present with a pop, swelling, or instability and require medical evaluation.", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the patellofemoral joint?",
    explanation: "The patellofemoral joint is where the kneecap (patella) glides within a groove on the front of the femur as the knee bends and straightens.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "knees-region-overview",
    bodyRegionSlug: "knees",
    exerciseSlug: "banded-terminal-knee-extension",
    domainCode: "D1",
    options: [
      { text: "The joint between the kneecap and the femoral groove", isCorrect: true, rationale: "Correct — the patella-femur gliding joint." },
      { text: "The joint between the femur and tibia", rationale: "That is the tibiofemoral (knee) joint, a separate structure." },
      { text: "The joint between the tibia and fibula", rationale: "A different, minimally mobile joint lower in the leg." },
      { text: "The joint between the patella and tibia", rationale: "The patella connects to the tibia via a tendon, not a joint surface." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The patellofemoral joint is formed by the patella gliding in the femoral trochlear groove.", locator: "Ch. 9.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why do coaches commonly watch for the knee 'caving inward' during squats and step-downs?",
    explanation: "Knee valgus (inward collapse) increases stress on the knee's medial stabilizing structures, so coaches cue alignment to help manage that stress.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "knee-alignment-and-safety-lesson",
    exerciseSlug: "lateral-step-down",
    bodyRegionSlug: "knees",
    domainCode: "D3",
    options: [
      { text: "It increases stress on the knee's inner stabilizing structures", isCorrect: true, rationale: "Correct — a key reason knee alignment is coached." },
      { text: "It makes the exercise easier and should be encouraged", rationale: "The opposite is true — it's a technique fault to correct, not encourage." },
      { text: "It only affects appearance, not joint stress", rationale: "It has real mechanical consequences for the knee, not just a cosmetic effect." },
      { text: "It strengthens the quadriceps faster", rationale: "There is no such benefit; it is a control fault linked to injury risk." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Knee alignment during single-leg tasks is coached to reduce stress on stabilizing structures and injury risk.", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the specific job of the popliteus muscle at the knee?",
    explanation: "The popliteus 'unlocks' the fully extended knee by rotating the femur or tibia, allowing flexion to begin.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "knees-region-overview",
    muscleSlug: "popliteus",
    bodyRegionSlug: "knees",
    domainCode: "D1",
    options: [
      { text: "Unlocking the fully extended knee to allow flexion to begin", isCorrect: true, rationale: "Correct — its specific, well-defined mechanical role." },
      { text: "Powerfully extending the knee against heavy resistance", rationale: "That is the quadriceps femoris's role, not the popliteus's." },
      { text: "Flexing the hip", rationale: "The popliteus acts only at the knee, not the hip." },
      { text: "Stabilizing the kneecap in its groove", rationale: "That role belongs more to the quadriceps (especially the vastus medialis), not the popliteus." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The popliteus unlocks the fully extended knee joint, initiating flexion.", locator: "Ch. 9.5" }],
  },
];
