import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// ANKLES & FEET region — a JOINT-type region (fewer unique muscles by design;
// the calf, shin, and outer-leg muscles that move the ankle live in the Lower
// Legs region and are referenced here, not redefined). This region focuses on
// the subtalar joint, ankle ligaments/sprains, the foot's arches, and the
// intrinsic foot muscles. Facts from OpenStax A&P 2e Ch. 9.5 "Synovial Joints"
// and Ch. 11.6; safety framing from NIAMS. The "ankle-joint" (talocrural) was
// already introduced in lower-legs.ts and is reused here, not redefined.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const anklesFeetRegion: BodyRegionSeed = {
  slug: "ankles-feet",
  name: "Ankles & Feet",
  order: 11,
  description:
    "The ankle and foot form the body's base of support — a complex of small bones, arches, and joints that must be both stable enough to bear full body weight and mobile enough to adapt to uneven ground. The subtalar joint, just below the ankle joint, is what allows the foot to tilt side to side, and it is central to how the foot absorbs and redirects impact forces.",
  relationships:
    "The ankle and foot sit below the **lower legs**, whose calf, shin, and outer-leg muscles are the prime movers of the ankle joint. Ankle and foot stability also influences alignment further up the chain, including the **knees** and **hips**, during standing and single-leg movement.",
  safetyNotes:
    "Significant swelling, bruising, inability to bear weight, or a visibly deformed ankle after an injury needs prompt medical evaluation — these can indicate a fracture or a significant ligament tear, not a simple sprain. A trainer coaches balance and mobility work; they do not diagnose fractures or grade ligament sprains.",
  assetSlugs: ["ankles-feet-region"],
  pronunciations: [
    { term: "Talus", say: "TAY-lus" },
    { term: "Calcaneus", say: "kal-KAY-nee-us" },
    { term: "Subtalar joint", say: "sub-TAY-lar joint" },
    { term: "Anterior talofibular ligament", say: "an-TEER-ee-or tay-lo-FIB-yoo-lar LIG-uh-ment" },
    { term: "Proprioception", say: "PRO-pree-oh-SEP-shun" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The subtalar joint, between the talus and calcaneus, allows the foot to invert and evert, working with the ankle joint and supported by ligaments including the anterior talofibular ligament.",
      locator: "Ch. 9.5 Synovial Joints",
    },
    {
      sourceSlug: NIAMS,
      claim: "Ankle sprains, commonly involving the ligaments on the outside of the ankle, are among the most frequent exercise and sport injuries.",
      locator: "Sports Injuries",
    },
  ],
  bones: [
    {
      slug: "talus",
      name: "Talus",
      latinName: "Talus",
      description: "The foot bone that sits directly beneath the tibia and fibula, forming the lower half of the ankle joint and the upper half of the subtalar joint. It has no muscles attaching directly to it.",
      landmarks: "Trochlea (the upper surface that articulates with the tibia and fibula).",
    },
    {
      slug: "calcaneus",
      name: "Calcaneus (heel bone)",
      latinName: "Calcaneus",
      description: "The largest bone of the foot, forming the heel. It receives the Achilles tendon from the calf muscles and forms the lower half of the subtalar joint with the talus above it.",
      landmarks: "Posterior tubercle (where the Achilles tendon attaches), sustentaculum tali.",
    },
  ],
  joints: [
    {
      slug: "subtalar-joint",
      name: "Subtalar joint",
      jointType: "synovial, gliding",
      description: "The joint between the talus and calcaneus, just below the ankle joint. It allows the heel and foot to tilt side to side (inversion and eversion), which is essential for adapting to uneven ground and absorbing impact.",
      articulatingBones: "Talus and calcaneus",
      movementsAllowed: "Inversion and eversion (the foot tilting inward or outward), working together with the ankle joint's up/down motion.",
    },
  ],
  muscles: [
    {
      slug: "intrinsic-foot-muscles",
      commonName: "Intrinsic foot muscles",
      scientificName: "Intrinsic muscles of the foot (e.g., flexor digitorum brevis, abductor hallucis, interossei)",
      pronunciation: "in-TRIN-sik foot MUSS-uls",
      locationSimple: "A group of small muscles entirely within the foot itself (unlike the calf and shin muscles, which start in the lower leg).",
      origin: "Calcaneus and other foot bones.",
      insertion: "Toe bones (phalanges).",
      actions: "Flex, spread, and stabilize the toes; support the foot's arches during standing and walking.",
      jointsCrossed: "Joints of the toes and midfoot",
      movementPlane: "multiple",
      innervation: "Medial and lateral plantar nerves (branches of the tibial nerve)",
      functionDaily: "Fine control of balance and foot-shape adjustments while standing and walking on varied surfaces.",
      functionExercise: "Trained through balance and 'short foot' arch-control exercises rather than traditional strength-machine work.",
      beginnerExplanation:
        "These are the small muscles entirely inside your foot (not the calf muscles from your lower leg) — they help support your arch and fine-tune your balance.",
      advancedExplanation:
        "Along with the plantar fascia and foot's ligaments, these muscles contribute to the foot's arch and its 'windlass mechanism' (the arch stiffening as the toes extend during push-off), which is relevant to both performance and injury-prevention discussions.",
      commonlyConfused: "Easy to overlook entirely since they are small and internal to the foot, unlike the more obvious calf and shin muscles that also move the foot.",
      misconceptions: "Flat-appearing arches are not automatically a problem requiring correction — many people with flatter arches have no pain or dysfunction at all.",
      safetyInfo: "Persistent foot pain, especially under the heel or arch, deserves professional assessment rather than assumption of a simple weakness issue.",
      status: "source_checked",
      assetSlugs: ["ankles-feet-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The intrinsic muscles of the foot flex and stabilize the toes and support the plantar arches.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
  ],
};

export const anklesFeetMovements: MovementSeed[] = [
  {
    slug: "foot-inversion",
    name: "Foot inversion",
    description: "Tilting the sole of the foot inward, toward the midline. Occurs at the subtalar joint, assisted by the tibialis anterior.",
    plane: "frontal",
    axis: "sagittal",
    jointAction: "Inversion at the subtalar joint",
  },
];

export const anklesFeetExercises: ExerciseSeed[] = [
  {
    slug: "single-leg-balance-hold",
    name: "Single-Leg Balance Hold",
    altNames: "Single-leg stand",
    simpleExplanation: "Standing on one foot and holding a steady position for a set amount of time.",
    purpose: "Trains the ankle and foot's balance and proprioceptive control — the body's ability to sense and adjust joint position without looking.",
    startingPosition: "Stand tall, then lift one foot slightly off the floor, keeping the standing knee soft (not locked).",
    instructions: [
      "Hold the position, keeping the standing foot's arch and toes making small adjustments as needed to stay balanced.",
      "Keep the hips level and the trunk upright.",
      "Hold for the target time, then switch legs.",
    ],
    breathing: "Breathe steadily throughout — do not hold your breath.",
    cues: "\"Soft knee, tall spine, let your foot make small adjustments to stay steady.\"",
    commonMistakes: "Locking the standing knee; letting the hips tilt to one side; staring at the floor instead of a fixed point ahead (which helps balance).",
    safety: "Practice near a wall or sturdy support to catch yourself if needed, especially when starting out.",
    regression: "Hold onto a wall or rail with one or two fingers for light support, or reduce the hold time.",
    progression: "Close the eyes briefly (with support nearby), stand on an unstable surface (like a folded towel), or add a small reaching movement with the arms.",
    alternatives: "Single-leg balance with a ball toss, tandem (heel-to-toe) stance.",
    whyItWorks: "Removing the second foot forces the ankle's muscles and joint receptors to make constant small corrections, directly training the balance and control that keep the ankle stable on uneven ground or after a change of direction.",
    benefitsWho: "Nearly everyone, especially those returning to activity after an ankle injury or wanting to reduce fall/sprain risk.",
    cautionWho: "Those with significant balance impairment should always have a support nearby and progress very gradually.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "balance",
    setting: "home",
    unilateral: true,
    chain: "closed",
    movementPlane: "—",
    status: "source_checked",
    assetSlugs: ["ankles-feet-region"],
    primaryMuscles: ["intrinsic-foot-muscles"],
    secondaryMuscles: ["fibularis-longus", "tibialis-anterior", "gluteus-medius"],
    joints: [{ jointSlug: "subtalar-joint", jointAction: "fine balance adjustments" }],
    movements: [],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The subtalar joint and intrinsic foot muscles make fine balance adjustments during single-leg standing.", locator: "Ch. 9.5 Synovial Joints" },
    ],
  },
  {
    slug: "short-foot-exercise",
    name: "Short Foot Exercise",
    altNames: "Foot doming, arch doming",
    simpleExplanation: "Standing or seated, gently drawing the ball of the foot toward the heel without curling the toes, to 'dome' the arch upward.",
    purpose: "Activates the intrinsic foot muscles that support the arch, without relying on the toes to grip.",
    startingPosition: "Stand (or sit) with the foot flat on the floor, toes relaxed and spread.",
    instructions: [
      "Without curling or clawing the toes, gently draw the ball of the foot toward the heel, shortening the foot and lifting the arch slightly.",
      "Hold the doming briefly, keeping the toes relaxed and flat.",
      "Release back to a flat foot and repeat.",
    ],
    breathing: "Breathe normally throughout the brief holds.",
    cues: "\"Shorten the foot, don't claw the toes — think 'arch lifts', not 'toes grip'.\"",
    commonMistakes: "Curling the toes to try to create the lift (this uses the wrong muscles); pressing so hard that the foot cramps; holding the breath.",
    safety: "A very low-risk exercise; mild foot fatigue is normal, sharp pain is not.",
    regression: "Perform seated with less body-weight demand, or with a shorter hold.",
    progression: "Perform standing on one leg, or hold longer.",
    alternatives: "Towel scrunches (using the toes to scrunch a towel toward you), marble/object pickup with the toes.",
    whyItWorks: "It isolates the small intrinsic foot muscles' arch-supporting action, distinct from the long tendons of the calf/shin muscles that cross into the foot from above, building a foundation of foot control that supports balance and shock absorption.",
    benefitsWho: "Anyone working on foot/arch control, including those with a history of ankle instability or flat-feeling arches.",
    cautionWho: "Those with significant foot pain should get individualized guidance before adding foot-specific exercise.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "closed",
    movementPlane: "—",
    status: "source_checked",
    primaryMuscles: ["intrinsic-foot-muscles"],
    secondaryMuscles: [],
    joints: [],
    movements: [],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The intrinsic foot muscles support the plantar arches of the foot.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "banded-ankle-eversion",
    name: "Banded Ankle Eversion",
    altNames: "Resisted ankle eversion",
    simpleExplanation: "Seated with a resistance band looped around the foot, turning the sole of the foot outward against the band's pull.",
    purpose: "Strengthens the muscles that resist an ankle rolling inward — a common focus after an ankle sprain.",
    startingPosition: "Sit with the leg extended, a light resistance band looped around the ball of the foot and anchored to the side, foot relaxed.",
    instructions: [
      "Keeping the leg still, turn the sole of the foot outward against the band's resistance.",
      "Hold the outward position briefly.",
      "Return with control to the starting position and repeat.",
    ],
    breathing: "Exhale as you turn the foot outward; inhale as you return.",
    cues: "\"Keep the leg still, roll the foot outward against the band, control the return.\"",
    commonMistakes: "Moving the whole leg instead of isolating the foot/ankle; using a band that is too strong to control smoothly; rushing the tempo.",
    safety: "Use a light band, especially soon after an ankle injury, and stop if sharp pain (rather than muscular effort) occurs.",
    regression: "Lighter band tension or a smaller range of motion.",
    progression: "Increase band tension or add a brief hold at end range.",
    alternatives: "Standing single-leg balance progressions, banded ankle inversion (opposite direction).",
    whyItWorks: "It directly strengthens the muscles (including the fibularis longus) that dynamically resist the ankle rolling into an inverted, sprain-prone position — a targeted way to rebuild strength and confidence after an ankle sprain.",
    benefitsWho: "Anyone recovering from or wanting to reduce the risk of an ankle sprain.",
    cautionWho: "Those in the acute phase right after an ankle injury should get clearance before loaded eversion work.",
    equipment: ["resistance-band"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "frontal",
    status: "source_checked",
    primaryMuscles: ["fibularis-longus"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "subtalar-joint", jointAction: "eversion" }],
    movements: ["ankle-eversion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The fibularis longus everts the foot at the subtalar joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      { sourceSlug: NIAMS, claim: "Strengthening the muscles around the ankle is commonly used to support recovery after a sprain and reduce re-injury risk.", locator: "Sports Injuries" },
    ],
  },
];

export const anklesFeetLessons: LessonSeed[] = [
  {
    slug: "ankles-feet-region-overview",
    title: "The Ankle & Foot: An Overview",
    summary: "The body's base of support — the subtalar joint, the foot's arches, and its small intrinsic muscles.",
    moduleSlug: "the-ankles-feet",
    bodyRegionSlug: "ankles-feet",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["lower-legs-region-overview"],
    assetSlugs: ["ankles-feet-region"],
    safetyNotes:
      "Significant swelling, bruising, inability to bear weight, or visible deformity after an ankle injury needs prompt medical evaluation. A trainer coaches balance and mobility work; they do not diagnose fractures or sprains.",
    objectives: [
      "Distinguish the ankle joint (up/down motion) from the subtalar joint (side-to-side tilt).",
      "Name the two key foot bones introduced in this region and their role in the subtalar joint.",
      "Describe the general role of the intrinsic foot muscles.",
    ],
    bodyMarkdown: `## Two joints, two directions

The foot's motion comes from two stacked joints working together:

- The **ankle joint** (talocrural), covered in the Lower Legs region, hinges the foot up and down.
- The **subtalar joint**, between the **talus** and **calcaneus**, tilts the foot side to side
  (inversion and eversion).

Together, they let the foot both push off powerfully in a straight line and adapt to uneven or angled
ground.

## Small muscles, big stabilizing role

The **intrinsic foot muscles** live entirely within the foot itself, supporting the arches and fine-tuning
balance — distinct from the calf and shin muscles, which start in the lower leg and only reach into the
foot via long tendons.

## Why ankle sprains are so common

Because the subtalar joint allows the foot to tilt, and because the outer ankle ligaments are relatively
thin compared to the inner ones, rolling the ankle inward (inversion) is one of the most common sport and
exercise injuries.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The subtalar joint (talus and calcaneus) allows inversion and eversion of the foot, distinct from the ankle joint's flexion/extension.", locator: "Ch. 9.5 Synovial Joints" },
      { sourceSlug: NIAMS, claim: "Ankle sprains are among the most common exercise and sport injuries.", locator: "Sports Injuries" },
    ],
  },
  {
    slug: "balance-training-and-scope-lesson",
    title: "Balance Training and Ankle Safety",
    summary: "Why balance work matters for ankle health, and where a trainer's role ends after an injury.",
    moduleSlug: "the-ankles-feet",
    bodyRegionSlug: "ankles-feet",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 8,
    order: 2,
    prerequisiteSlugs: ["ankles-feet-region-overview"],
    safetyNotes:
      "Balance and eversion-strengthening exercises are appropriate general training tools. A history of significant, unhealed, or recurring ankle injury should be cleared by a healthcare professional before progressing this work.",
    objectives: [
      "Explain what proprioception is and why balance exercises train it.",
      "Describe why eversion strength is often emphasized after an ankle sprain.",
      "Identify signs that a foot/ankle issue is outside a trainer's scope.",
    ],
    bodyMarkdown: `## Proprioception: sensing joint position

**Proprioception** is the body's sense of where a joint is in space, without needing to look at it.
Ankle sprains can temporarily (or sometimes persistently) reduce this sense at the ankle, which is one
reason balance exercises — not just strength exercises — are a standard part of recovery and prevention.

## Why eversion strength gets attention

Most ankle sprains involve the ankle rolling inward (inversion), stretching or tearing the ligaments on
the outside of the ankle. Strengthening the muscles that **evert** the foot (like the fibularis longus)
builds a dynamic counter-force that can help resist future inversion injuries.

## When to refer out

Balance and light strengthening work fit well within a trainer's scope. Significant swelling, visible
deformity, or inability to bear weight point toward a fracture or high-grade ligament injury — these need
a healthcare professional's evaluation, not a training program.`,
    citations: [
      { sourceSlug: NIAMS, claim: "Recovery from ankle sprains commonly includes balance and strengthening exercise; significant swelling or inability to bear weight warrants medical evaluation.", locator: "Sports Injuries" },
    ],
  },
];

export const anklesFeetQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which joint allows the foot to tilt side to side (inversion and eversion)?",
    explanation: "The subtalar joint, between the talus and calcaneus, is responsible for inversion and eversion, distinct from the ankle joint's up/down hinge motion.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "ankles-feet-region-overview",
    bodyRegionSlug: "ankles-feet",
    domainCode: "D1",
    options: [
      { text: "Subtalar joint", isCorrect: true, rationale: "Correct — allows inversion and eversion." },
      { text: "Ankle joint (talocrural)", rationale: "This joint hinges the foot up and down, not side to side." },
      { text: "Knee joint", rationale: "Located above the lower leg, not part of the foot's tilting motion." },
      { text: "Patellofemoral joint", rationale: "Involves the kneecap, unrelated to foot inversion/eversion." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The subtalar joint allows inversion and eversion of the foot.", locator: "Ch. 9.5" }],
  },
  {
    type: "true_false",
    prompt: "Most ankle sprains involve the foot rolling inward (inversion), stretching the ligaments on the outside of the ankle.",
    explanation: "True. Inversion sprains, affecting the lateral (outer) ankle ligaments, are the most common type of ankle sprain.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "balance-training-and-scope-lesson",
    bodyRegionSlug: "ankles-feet",
    domainCode: "D4",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — inversion sprains affecting the outer ankle ligaments are the most common type." },
      { text: "False", rationale: "Inversion sprains are indeed the most common ankle sprain pattern." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Ankle sprains commonly involve the ligaments on the outside of the ankle from an inversion injury.", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which two bones form the subtalar joint?",
    explanation: "The subtalar joint is formed by the talus (above) and the calcaneus/heel bone (below).",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "ankles-feet-region-overview",
    bodyRegionSlug: "ankles-feet",
    domainCode: "D1",
    options: [
      { text: "Talus and calcaneus", isCorrect: true, rationale: "Correct — these two bones form the subtalar joint." },
      { text: "Tibia and fibula", rationale: "These form the upper part of the ankle mortise, not the subtalar joint itself." },
      { text: "Femur and tibia", rationale: "These form the knee joint, not the subtalar joint." },
      { text: "Patella and femur", rationale: "These form the patellofemoral joint at the knee." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The subtalar joint is formed by the talus and calcaneus.", locator: "Ch. 9.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why might a trainer include banded ankle eversion exercises after a client recovers from an ankle sprain?",
    explanation: "Since most sprains involve excessive inversion, strengthening the opposing eversion muscles (like the fibularis longus) helps build dynamic resistance against future inversion injuries.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "balance-training-and-scope-lesson",
    exerciseSlug: "banded-ankle-eversion",
    muscleSlug: "fibularis-longus",
    bodyRegionSlug: "ankles-feet",
    domainCode: "D3",
    options: [
      { text: "To build dynamic strength that resists future inversion (rolling-in) injuries", isCorrect: true, rationale: "Correct — targets the muscles that oppose the most common sprain mechanism." },
      { text: "To increase ankle dorsiflexion range only", rationale: "Eversion strengthening targets a different plane of motion than dorsiflexion range." },
      { text: "Because it replaces the need for any balance training", rationale: "Eversion strengthening and balance training are complementary, not substitutes for each other." },
      { text: "To reduce knee pain specifically", rationale: "This exercise targets the ankle/foot, not a knee-pain intervention." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Strengthening the ankle evertors is commonly used to support recovery and reduce re-injury risk after an inversion ankle sprain.", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "A client cannot bear any weight on their foot after twisting it, and the ankle looks visibly swollen and deformed. What should the trainer do?",
    explanation: "Inability to bear weight plus visible deformity are warning signs of a possible fracture or severe ligament injury, requiring prompt medical evaluation rather than continued training or self-diagnosis.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "ankles-feet-region-overview",
    bodyRegionSlug: "ankles-feet",
    domainCode: "D4",
    options: [
      { text: "Stop the session and refer the client for prompt medical evaluation", isCorrect: true, rationale: "Correct — these are warning signs of a significant injury needing medical assessment." },
      { text: "Have them walk it off to test the ankle", isCorrect: false, rationale: "Continuing to bear weight on a possible fracture or severe sprain risks further harm." },
      { text: "Diagnose it as a mild sprain and continue the workout", rationale: "Diagnosis is outside a trainer's scope, and these signs suggest more than a mild sprain." },
      { text: "Apply balance exercises immediately to strengthen the joint", rationale: "Inappropriate immediately after an acute injury with these warning signs." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Inability to bear weight and visible deformity after an ankle injury are signs requiring prompt medical evaluation.", locator: "Sports Injuries" }],
  },
];
