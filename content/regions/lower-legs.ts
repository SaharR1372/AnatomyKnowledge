import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// LOWER LEGS region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 11.6 "Appendicular Muscles of the Pelvic Girdle
// and Lower Limbs" (gastrocnemius, soleus, tibialis anterior, fibularis longus).
// The ankle joint is introduced here since calf-raise/toe-raise exercises need it;
// the Ankles & Feet region (next, a JOINT-type region) reuses this "ankle-joint"
// slug and adds the subtalar joint, ligaments, and intrinsic foot muscles.

const OPENSTAX = "openstax-anp-2e";

export const lowerLegsRegion: BodyRegionSeed = {
  slug: "lower-legs",
  name: "Lower Legs",
  order: 10,
  description:
    "The lower leg runs from the knee to the ankle and is built around two bones (the tibia and fibula) and three functional muscle groups: the calf muscles behind (which point the foot down), the shin muscle in front (which lifts the foot up), and the outer muscles along the fibula (which roll the foot outward). Together they control the ankle and absorb impact during walking, running, and jumping.",
  relationships:
    "The lower leg sits between the **knee** (several of its muscles help stabilize it, though the knee's prime movers live in the Thighs region) and the **ankles & feet** (whose joint the calf and shin muscles directly move). Strong, balanced lower-leg muscles support shock absorption throughout the whole leg during impact activities.",
  safetyNotes:
    "Sudden sharp calf or shin pain, an audible pop, or inability to rise onto the toes after an injury needs prompt medical evaluation — these can indicate a significant strain or Achilles tendon injury. A trainer coaches calf and shin strengthening technique; they do not diagnose tendon or muscle injuries.",
  assetSlugs: ["lower-legs-region"],
  pronunciations: [
    { term: "Gastrocnemius", say: "gas-trok-NEE-mee-us" },
    { term: "Soleus", say: "SOH-lee-us" },
    { term: "Tibialis anterior", say: "tib-ee-AL-iss an-TEER-ee-or" },
    { term: "Fibularis longus", say: "fib-yoo-LAIR-iss LONG-gus" },
    { term: "Achilles tendon", say: "uh-KIL-eez TEN-dun" },
    { term: "Plantarflexion", say: "PLAN-tar-FLEK-shun" },
    { term: "Dorsiflexion", say: "DOR-sih-FLEK-shun" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The gastrocnemius and soleus plantarflex the ankle, the tibialis anterior dorsiflexes it, and the fibularis longus everts the foot.",
      locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs",
    },
  ],
  bones: [
    {
      slug: "fibula",
      name: "Fibula",
      latinName: "Fibula",
      description: "The thin, non-weight-bearing bone alongside the tibia on the outer side of the lower leg. It provides an attachment site for several lower-leg muscles and forms the outer bump of the ankle (lateral malleolus).",
      landmarks: "Head (upper end, near the knee), lateral malleolus (the bony bump on the outside of the ankle).",
    },
  ],
  joints: [
    {
      slug: "ankle-joint",
      name: "Ankle joint (talocrural joint)",
      jointType: "synovial, hinge",
      description: "The joint between the tibia and fibula above and the talus (a foot bone) below. Primarily a hinge that allows the foot to point up (dorsiflexion) and down (plantarflexion).",
      articulatingBones: "Tibia, fibula, and talus",
      movementsAllowed: "Dorsiflexion and plantarflexion; a small amount of side-to-side motion is provided by the subtalar joint just below it (covered in the Ankles & Feet region).",
    },
  ],
  muscles: [
    {
      slug: "gastrocnemius",
      commonName: "Gastrocnemius",
      scientificName: "Gastrocnemius",
      pronunciation: "gas-trok-NEE-mee-us",
      locationSimple: "The larger, more superficial of the two major calf muscles, forming the visible bulge of the calf.",
      origin: "Two heads from the back of the femur, just above the knee.",
      insertion: "Calcaneus (heel bone), via the Achilles tendon (shared with the soleus).",
      actions: "Plantarflexes the ankle (points the foot down); because it also crosses the knee, it assists knee flexion.",
      jointsCrossed: "Ankle joint and knee joint",
      movementPlane: "sagittal",
      innervation: "Tibial nerve (S1–S2)",
      functionDaily: "Pushing off the ground while walking, running, or jumping.",
      functionExercise: "Prime mover of ankle plantarflexion in standing calf raises, most effective when the knee is straight (since it also crosses the knee).",
      beginnerExplanation:
        "This is the visible, rounded muscle at the top of your calf — it points your foot downward, powering every step and jump.",
      advancedExplanation:
        "Because it crosses both the knee and ankle, the gastrocnemius is stretched more (and works harder) when the knee is straight, which is why standing (straight-knee) calf raises emphasize it more than seated (bent-knee) calf raises.",
      commonlyConfused: "Often used interchangeably with 'the calf muscle' as if it were the only one; the deeper soleus is a separate, equally important muscle beneath it.",
      misconceptions: "Calf size is not solely determined by training — genetics play a notable role in gastrocnemius shape, though strength can still be built at any starting point.",
      safetyInfo: "A sudden sharp pain or 'pop' in the calf, especially during a forceful push-off, can indicate a strain and should be evaluated before continuing to train through it.",
      status: "source_checked",
      assetSlugs: ["lower-legs-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The gastrocnemius plantarflexes the ankle and assists knee flexion, crossing both joints.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "soleus",
      commonName: "Soleus",
      scientificName: "Soleus",
      pronunciation: "SOH-lee-us",
      locationSimple: "A broad, flat muscle lying deep beneath the gastrocnemius, visible along the sides of the lower calf.",
      origin: "Back of the tibia and fibula (below the knee).",
      insertion: "Calcaneus (heel bone), via the Achilles tendon (shared with the gastrocnemius).",
      actions: "Plantarflexes the ankle; unlike the gastrocnemius, it does not cross the knee, so its contribution does not change with knee position.",
      jointsCrossed: "Ankle joint only",
      movementPlane: "sagittal",
      innervation: "Tibial nerve (S1–S2)",
      functionDaily: "Maintaining standing balance by making small, constant adjustments at the ankle, and assisting push-off while walking.",
      functionExercise: "Prime mover of ankle plantarflexion in seated calf raises, where the bent knee slackens the gastrocnemius and shifts more demand to the soleus.",
      beginnerExplanation:
        "Hidden beneath the gastrocnemius, this muscle also points your foot down, but because it doesn't cross the knee, it stays active whether your knee is bent or straight — which is why seated calf raises target it more.",
      advancedExplanation:
        "Composed of a higher proportion of slow-twitch (fatigue-resistant) fibers than the gastrocnemius, the soleus is well-suited to its role in constant postural micro-adjustments during standing.",
      commonlyConfused: "Frequently lumped together with the gastrocnemius as 'the calf,' but training them optimally uses different knee positions (straight vs. bent).",
      misconceptions: "'Calf raises are all the same regardless of knee position' is incorrect — knee angle meaningfully shifts the emphasis between the gastrocnemius and soleus.",
      safetyInfo: "Similar precautions to the gastrocnemius; sharp calf pain or a pop needs assessment.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The soleus plantarflexes the ankle and, unlike the gastrocnemius, does not cross the knee joint.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "tibialis-anterior",
      commonName: "Tibialis anterior",
      scientificName: "Tibialis anterior",
      pronunciation: "tib-ee-AL-iss an-TEER-ee-or",
      locationSimple: "A long muscle running down the outer front edge of the shin bone (tibia).",
      origin: "Upper lateral surface of the tibia.",
      insertion: "First metatarsal and medial cuneiform bones of the foot.",
      actions: "Dorsiflexes the ankle (lifts the foot up) and assists inversion (turning the sole of the foot inward).",
      jointsCrossed: "Ankle joint",
      movementPlane: "sagittal",
      innervation: "Deep fibular (peroneal) nerve (L4–L5)",
      functionDaily: "Lifting the toes and front of the foot to clear the ground during the swing phase of walking, preventing tripping.",
      functionExercise: "Prime mover of ankle dorsiflexion in toe raises; works eccentrically to control the foot's descent after heel strike while walking or running.",
      beginnerExplanation:
        "This shin muscle lifts your toes and the front of your foot up toward your knee — the muscle you feel working if you try to walk on your heels.",
      advancedExplanation:
        "It contracts eccentrically (lengthening under tension) right after heel strike in walking/running to control how quickly the foot lowers to the ground — weakness here is one contributor to a foot-slap gait pattern.",
      commonlyConfused: "Sometimes assumed to be part of 'the calf,' but it sits on the front of the shin and does the opposite action (dorsiflexion, not plantarflexion).",
      misconceptions: "Shin discomfort during new or increased running volume is not automatically 'shin splints' requiring rest forever — but persistent or worsening shin pain does need evaluation.",
      safetyInfo: "Progressive, worsening shin pain with impact activity should be assessed rather than pushed through, since several distinct conditions can cause it.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The tibialis anterior dorsiflexes the ankle and assists foot inversion.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
    {
      slug: "fibularis-longus",
      commonName: "Fibularis longus (peroneus longus)",
      scientificName: "Fibularis longus",
      pronunciation: "fib-yoo-LAIR-iss LONG-gus",
      locationSimple: "A long muscle running down the outer side of the lower leg, along the fibula.",
      origin: "Upper lateral surface of the fibula.",
      insertion: "First metatarsal and medial cuneiform (crossing under the sole of the foot).",
      actions: "Everts the foot (turns the sole outward) and assists plantarflexion; helps support the foot's arches.",
      jointsCrossed: "Ankle joint",
      movementPlane: "frontal",
      innervation: "Superficial fibular (peroneal) nerve (L5–S1)",
      functionDaily: "Stabilizing the outer ankle on uneven ground, resisting an ankle rolling inward too far.",
      functionExercise: "A stabilizer rather than a prime mover in most standard exercises; specifically targeted in ankle-eversion rehabilitation and balance work.",
      beginnerExplanation:
        "Running along the outside of your lower leg, this muscle rolls your foot outward and helps steady your ankle when you're on uneven ground.",
      advancedExplanation:
        "Along with its partner fibularis brevis, it is a key dynamic stabilizer against ankle inversion sprains (rolling the ankle inward), which is why balance and eversion-strength work is common after an ankle sprain.",
      commonlyConfused: "Its role is often reduced to 'foot stabilizer' generally, without recognizing its specific eversion action, which is functionally opposite to the tibialis anterior's inversion assistance.",
      misconceptions: "Ankle sprains are not purely a ligament issue — the surrounding dynamic stabilizers like the fibularis longus play a real role in prevention and rehabilitation.",
      safetyInfo: "Outer-ankle pain after a rolling injury should be assessed for a possible sprain rather than assumed to be simple muscle soreness.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The fibularis longus everts the foot and assists ankle plantarflexion, contributing to lateral ankle stability.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
      ],
    },
  ],
};

export const lowerLegsMovements: MovementSeed[] = [
  {
    slug: "ankle-plantarflexion",
    name: "Ankle plantarflexion",
    description: "Pointing the foot downward, away from the shin. Driven by the gastrocnemius and soleus.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Plantarflexion at the ankle joint",
    oppositeSlug: "ankle-dorsiflexion",
  },
  {
    slug: "ankle-dorsiflexion",
    name: "Ankle dorsiflexion",
    description: "Lifting the foot upward, toward the shin. Driven by the tibialis anterior.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Dorsiflexion at the ankle joint",
    oppositeSlug: "ankle-plantarflexion",
  },
  {
    slug: "ankle-eversion",
    name: "Ankle/foot eversion",
    description: "Turning the sole of the foot outward, away from the midline. Driven by the fibularis longus and brevis.",
    plane: "frontal",
    axis: "sagittal",
    jointAction: "Eversion at the subtalar joint",
  },
];

export const lowerLegsExercises: ExerciseSeed[] = [
  {
    slug: "standing-calf-raise",
    name: "Standing Calf Raise",
    altNames: "Standing heel raise",
    simpleExplanation: "Standing with knees straight, rising up onto the balls of the feet, then lowering with control.",
    purpose: "Builds ankle plantarflexion strength, emphasizing the gastrocnemius because the knee stays straight.",
    startingPosition: "Stand tall, feet hip-width apart, knees straight but not locked. Optionally stand on a step edge for extra range.",
    instructions: [
      "Rise up onto the balls of the feet as high as comfortable, keeping the knees straight.",
      "Pause briefly at the top, feeling the calf fully contracted.",
      "Lower under control, allowing the heels to drop below the level of the toes if using a step, for a full stretch.",
    ],
    breathing: "Exhale as you rise; inhale as you lower.",
    cues: "\"Straight knees, rise tall, control the way down.\"",
    commonMistakes: "Bouncing at the bottom instead of controlling the descent; bending the knees (which shifts work toward the soleus); using a partial range of motion.",
    safety: "Hold onto a wall or rail for balance if needed; avoid bouncing to protect the Achilles tendon.",
    regression: "Perform without added range (flat ground instead of a step), or hold onto support for balance.",
    progression: "Add a step edge for a fuller range, add load (dumbbells or a machine), or perform single-leg.",
    alternatives: "Seated calf raise (soleus emphasis), single-leg calf raise.",
    whyItWorks: "Keeping the knee straight lengthens the gastrocnemius across both joints it crosses, maximizing its involvement in the plantarflexion movement compared to a bent-knee variation.",
    benefitsWho: "Anyone building calf strength and size, and athletes needing powerful push-off (running, jumping).",
    cautionWho: "Those with Achilles tendon pain should reduce range and load, or avoid bouncing entirely.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["lower-legs-region"],
    primaryMuscles: ["gastrocnemius"],
    secondaryMuscles: ["soleus"],
    joints: [{ jointSlug: "ankle-joint", jointAction: "plantarflexion" }],
    movements: ["ankle-plantarflexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gastrocnemius plantarflexes the ankle and is most engaged when the knee is extended.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "seated-calf-raise",
    name: "Seated Calf Raise",
    altNames: "Bent-knee calf raise",
    simpleExplanation: "Seated with knees bent at roughly 90°, rising onto the balls of the feet against resistance placed across the thighs.",
    purpose: "Builds ankle plantarflexion strength with the knee bent, emphasizing the soleus.",
    startingPosition: "Sit with the balls of the feet on a raised platform, knees bent to about 90°, resistance (a machine pad or held weight) across the lower thighs.",
    instructions: [
      "Rise up onto the balls of the feet, lifting the resistance through ankle plantarflexion.",
      "Pause briefly at the top.",
      "Lower under control until a comfortable stretch is felt at the bottom.",
    ],
    breathing: "Exhale as you rise; inhale as you lower.",
    cues: "\"Bent knees, push through the balls of your feet, smooth and controlled.\"",
    commonMistakes: "Using a bouncing tempo; too small a range of motion; letting the knees drift forward off the resistance pad.",
    safety: "Use a controlled tempo and comfortable range; avoid maximal loads before technique is consistent.",
    regression: "Reduce added resistance, or perform with body weight and hands on the thighs for light resistance only.",
    progression: "Increase resistance or add a pause at full contraction.",
    alternatives: "Standing calf raise (gastrocnemius emphasis).",
    whyItWorks: "Bending the knee slackens the two-joint gastrocnemius, shifting more of the plantarflexion demand onto the single-joint soleus — giving both major calf muscles dedicated, complementary training.",
    benefitsWho: "Anyone wanting complete calf development alongside standing calf raises.",
    cautionWho: "Those with Achilles tendon pain should reduce range/load.",
    equipment: ["dumbbells"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "gym",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["soleus"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "ankle-joint", jointAction: "plantarflexion" }],
    movements: ["ankle-plantarflexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The soleus plantarflexes the ankle independent of knee position, making it the primary target when the knee is bent.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "tibialis-toe-raise",
    name: "Tibialis Toe Raise",
    altNames: "Toe raise, heel walk",
    simpleExplanation: "Standing with weight on the heels, lifting the toes and front of the foot up toward the shin, then lowering with control.",
    purpose: "Strengthens the tibialis anterior for ankle dorsiflexion, balancing the much more commonly trained calf muscles.",
    startingPosition: "Stand tall with weight on the heels (or lean the back against a wall with heels slightly forward for a wall-supported version).",
    instructions: [
      "Lift the toes and front of the foot up toward the shin as high as comfortable, keeping the heels on the ground.",
      "Pause briefly at the top.",
      "Lower the toes back down under control and repeat.",
    ],
    breathing: "Exhale as the toes lift; inhale as they lower.",
    cues: "\"Heels down, toes up, control the lowering.\"",
    commonMistakes: "Rocking the whole body instead of isolating ankle movement; rushing the tempo; too small a range of motion.",
    safety: "A low-load, generally very safe exercise; balance support (a wall or rail) is fine to use.",
    regression: "Perform seated instead of standing, reducing the balance demand.",
    progression: "Add a light band around the top of the foot for resistance, or perform single-leg.",
    alternatives: "Seated resisted dorsiflexion with a band.",
    whyItWorks: "It directly trains the tibialis anterior's dorsiflexion action, which is comparatively neglected relative to the calf muscles despite its role in controlling foot-strike and preventing toe drag while walking or running.",
    benefitsWho: "Runners and walkers wanting balanced ankle strength, and anyone building general lower-leg strength.",
    cautionWho: "Those with shin pain that worsens with this movement should reduce range or seek guidance.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["tibialis-anterior"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "ankle-joint", jointAction: "dorsiflexion" }],
    movements: ["ankle-dorsiflexion"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The tibialis anterior dorsiflexes the ankle.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
];

export const lowerLegsLessons: LessonSeed[] = [
  {
    slug: "lower-legs-region-overview",
    title: "The Lower Legs: An Overview",
    summary: "The calf, shin, and outer-leg muscles that move the ankle and absorb impact with every step.",
    moduleSlug: "the-lower-legs",
    bodyRegionSlug: "lower-legs",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["knees-region-overview"],
    assetSlugs: ["lower-legs-region"],
    safetyNotes:
      "Sudden sharp calf pain, an audible pop, or inability to rise onto the toes needs prompt medical evaluation — possible signs of a significant strain or Achilles tendon injury. A trainer coaches calf/shin strengthening technique; they do not diagnose tendon injuries.",
    objectives: [
      "Name the lower leg's main muscle groups and their primary actions.",
      "Explain the difference between the gastrocnemius and soleus.",
      "Describe the tibialis anterior's role as the dorsiflexion counterpart to the calf muscles.",
    ],
    bodyMarkdown: `## Three groups, one job: controlling the ankle

The lower leg has three functional muscle groups, all acting on the **ankle joint**:

- **Calf muscles** (back): the **gastrocnemius** and **soleus** point the foot down (plantarflexion),
  sharing the Achilles tendon.
- **Shin muscle** (front): the **tibialis anterior** lifts the foot up (dorsiflexion) — the opposing
  action to the calf muscles.
- **Outer muscles** (side): the **fibularis longus** rolls the foot outward (eversion) and helps
  stabilize the ankle.

## Two calf muscles, two knee positions

The gastrocnemius crosses both the knee and ankle, while the soleus crosses only the ankle. That single
difference is why standing (straight-knee) calf raises emphasize the gastrocnemius, while seated
(bent-knee) calf raises emphasize the soleus.

## The neglected shin muscle

Because the calf gets most of the training attention, the tibialis anterior is often under-trained
despite its important role in controlling the foot right after it strikes the ground during walking and
running.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gastrocnemius and soleus plantarflex the ankle, and the tibialis anterior dorsiflexes it.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
  {
    slug: "calf-raise-variations-lesson",
    title: "Straight Knee vs. Bent Knee: Two Calf Raises, Two Muscles",
    summary: "Why knee position changes which calf muscle a calf raise emphasizes.",
    moduleSlug: "the-lower-legs",
    bodyRegionSlug: "lower-legs",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 8,
    order: 2,
    prerequisiteSlugs: ["lower-legs-region-overview"],
    objectives: [
      "Explain why a straight-knee calf raise emphasizes the gastrocnemius.",
      "Explain why a bent-knee calf raise emphasizes the soleus.",
      "Identify the tibialis anterior exercise that balances calf-focused training.",
    ],
    bodyMarkdown: `## A joint-crossing difference

The **gastrocnemius** crosses both the knee and the ankle; the **soleus** crosses only the ankle. A
muscle that crosses a joint is most effective when it is lengthened across that joint — so:

- A **standing calf raise** (knee straight) lengthens the gastrocnemius across the knee, emphasizing it.
- A **seated calf raise** (knee bent) slackens the gastrocnemius, shifting emphasis to the soleus.

## Balancing with dorsiflexion

Both calf raises train plantarflexion. Adding a **tibialis toe raise** trains the opposing dorsiflexion
action, giving the lower leg balanced strength in both directions at the ankle — useful for walking/
running mechanics and general ankle health.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The gastrocnemius crosses the knee and ankle while the soleus crosses only the ankle, changing which is emphasized by knee position.", locator: "Ch. 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs" },
    ],
  },
];

export const lowerLegsQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which two muscles share the Achilles tendon and plantarflex the ankle?",
    explanation: "The gastrocnemius and soleus both insert on the calcaneus via the shared Achilles tendon and plantarflex the ankle.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "lower-legs-region-overview",
    muscleSlug: "gastrocnemius",
    bodyRegionSlug: "lower-legs",
    domainCode: "D1",
    options: [
      { text: "Gastrocnemius and soleus", isCorrect: true, rationale: "Correct — both share the Achilles tendon and plantarflex the ankle." },
      { text: "Tibialis anterior and fibularis longus", rationale: "These are the dorsiflexor and evertor, not the plantarflexors sharing the Achilles tendon." },
      { text: "Quadriceps femoris and hamstrings", rationale: "Thigh muscles acting at the hip and knee, not the ankle." },
      { text: "Gluteus maximus and gluteus medius", rationale: "Hip muscles, unrelated to the Achilles tendon." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The gastrocnemius and soleus insert via the Achilles tendon and plantarflex the ankle.", locator: "Ch. 11.6" }],
  },
  {
    type: "true_false",
    prompt: "A seated (bent-knee) calf raise emphasizes the soleus more than a standing (straight-knee) calf raise does.",
    explanation: "True. Bending the knee slackens the two-joint gastrocnemius, shifting more of the plantarflexion demand onto the single-joint soleus.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "calf-raise-variations-lesson",
    muscleSlug: "soleus",
    exerciseSlug: "seated-calf-raise",
    bodyRegionSlug: "lower-legs",
    domainCode: "D3",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — bending the knee shifts emphasis toward the soleus." },
      { text: "False", rationale: "This is exactly why seated and standing calf raises differ in emphasis." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The soleus does not cross the knee, so bending it does not reduce its length or involvement, unlike the gastrocnemius.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which muscle dorsiflexes the ankle (lifts the foot up), the opposite action of the calf muscles?",
    explanation: "The tibialis anterior, on the front of the shin, dorsiflexes the ankle — the opposing action to the calf's plantarflexion.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "lower-legs-region-overview",
    muscleSlug: "tibialis-anterior",
    exerciseSlug: "tibialis-toe-raise",
    bodyRegionSlug: "lower-legs",
    domainCode: "D1",
    options: [
      { text: "Tibialis anterior", isCorrect: true, rationale: "Correct — the primary dorsiflexor of the ankle." },
      { text: "Gastrocnemius", rationale: "Plantarflexes the ankle — the opposite action." },
      { text: "Fibularis longus", rationale: "Everts the foot; not the primary dorsiflexor." },
      { text: "Soleus", rationale: "Also plantarflexes the ankle, not dorsiflexion." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The tibialis anterior dorsiflexes the ankle.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which muscle everts the foot and helps stabilize the outer ankle on uneven ground?",
    explanation: "The fibularis longus everts the foot and is a key dynamic stabilizer against ankle inversion (rolling inward).",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "lower-legs-region-overview",
    muscleSlug: "fibularis-longus",
    bodyRegionSlug: "lower-legs",
    domainCode: "D1",
    options: [
      { text: "Fibularis longus", isCorrect: true, rationale: "Correct — everts the foot and stabilizes the outer ankle." },
      { text: "Tibialis anterior", rationale: "Assists inversion, the opposite action, and dorsiflexes rather than everts." },
      { text: "Gastrocnemius", rationale: "Plantarflexes the ankle; not primarily an evertor." },
      { text: "Popliteus", rationale: "A knee muscle, not involved in ankle eversion." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The fibularis longus everts the foot and contributes to lateral ankle stability.", locator: "Ch. 11.6" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why might a training program deliberately include a tibialis anterior exercise like the toe raise?",
    explanation: "Because most lower-leg training emphasizes the calf (plantarflexion), adding dorsiflexion work balances ankle strength in both directions.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "calf-raise-variations-lesson",
    exerciseSlug: "tibialis-toe-raise",
    bodyRegionSlug: "lower-legs",
    domainCode: "D2",
    options: [
      { text: "To balance the ankle's plantarflexion strength (calves) with dorsiflexion strength", isCorrect: true, rationale: "Correct — a deliberate balance between opposing ankle actions." },
      { text: "Because the calf muscles should never be trained", rationale: "Calf training remains valuable; the point is balance, not avoidance." },
      { text: "Because the tibialis anterior is the strongest muscle in the leg", rationale: "Not the rationale — the reasoning is about balanced ankle strength, not raw muscle size." },
      { text: "To replace all squatting exercises", rationale: "Unrelated; a toe raise is a small, targeted ankle exercise, not a squat replacement." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The tibialis anterior and calf muscles produce opposing ankle actions (dorsiflexion vs. plantarflexion).", locator: "Ch. 11.6" }],
  },
];
