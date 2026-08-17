import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// FOREARMS & HANDS region — full-depth content module (same pattern every
// region follows). Facts from OpenStax A&P 2e Ch. 11.5 "Muscles of the
// Pectoral Girdle and Upper Limbs" (wrist flexors/extensors, brachioradialis,
// finger flexors). The wrist joint is introduced here since wrist-curl
// exercises need it. This region also finally supplies the wrist-flexor and
// wrist-extensor muscle groups that the Elbows region's tennis-elbow/golfer's-
// elbow lesson referenced but deliberately did not attach to any muscle —
// the eccentric wrist exercises deferred from there are added here.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const forearmsHandsRegion: BodyRegionSeed = {
  slug: "forearms-hands",
  name: "Forearms & Hands",
  order: 14,
  description:
    "The forearm contains the muscles that move the wrist and fingers — the muscles that give the hand its grip strength and fine motor control. Because long tendons carry their force across the wrist and into the hand, the forearm can pack in a large number of muscles without making the hand itself bulky.",
  relationships:
    "The forearm sits below the **elbow** (its wrist-flexor and wrist-extensor muscles share their origin with the elbow's epicondyles, which is why 'tennis elbow' and 'golfer's elbow' are really forearm-tendon conditions felt at the elbow) and works with the **arms** during any pulling or carrying task that requires a firm grip.",
  safetyNotes:
    "Numbness or tingling into the fingers, a weak or painful grip that doesn't improve with rest, or a wrist that looks deformed after an injury needs prompt medical evaluation. A trainer coaches grip and wrist-loading technique; they do not diagnose nerve compression or fractures.",
  assetSlugs: ["forearms-hands-region"],
  pronunciations: [
    { term: "Brachioradialis", say: "BRAY-kee-oh-ray-dee-AL-iss" },
    { term: "Flexor carpi radialis", say: "FLEK-sor KAR-py ray-dee-AL-iss" },
    { term: "Extensor carpi ulnaris", say: "eks-TEN-sor KAR-py ul-NAIR-iss" },
    { term: "Carpal bones", say: "KAR-pul bohns" },
    { term: "Grip strength", say: "grip strength" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The forearm's wrist flexors and extensors originate near the elbow's epicondyles and act across the wrist to flex and extend the hand; the finger flexors provide grip strength.",
      locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
    },
  ],
  bones: [
    {
      slug: "carpal-bones",
      name: "Carpal bones",
      latinName: "Ossa carpi",
      description: "The eight small bones of the wrist, arranged in two rows between the forearm bones and the hand. They form the wrist (radiocarpal) joint with the radius above.",
      landmarks: "Scaphoid (the most commonly fractured carpal bone, on the thumb side).",
    },
  ],
  joints: [
    {
      slug: "wrist-joint",
      name: "Wrist joint (radiocarpal joint)",
      jointType: "synovial, condyloid",
      description: "The joint between the radius and the first row of carpal bones. It allows the hand to flex, extend, and deviate side to side, but not rotate (forearm rotation happens higher up, at the elbow's radioulnar joint).",
      articulatingBones: "Radius and the proximal row of carpal bones",
      movementsAllowed: "Flexion, extension, radial deviation (toward the thumb), and ulnar deviation (toward the pinky).",
    },
  ],
  muscles: [
    {
      slug: "wrist-flexors",
      commonName: "Wrist flexors (flexor carpi radialis, flexor carpi ulnaris, palmaris longus)",
      scientificName: "Flexor carpi radialis, flexor carpi ulnaris, palmaris longus",
      pronunciation: "FLEK-sor KAR-py ray-dee-AL-iss",
      locationSimple: "A group of muscles on the palm side of the forearm, sharing a common tendinous origin at the elbow.",
      origin: "Medial epicondyle of the humerus (a shared 'common flexor origin').",
      insertion: "Carpal and metacarpal bones of the hand (palmaris longus inserts into the palm's connective tissue).",
      actions: "Flexes the wrist; assists ulnar/radial deviation depending on the specific muscle.",
      jointsCrossed: "Wrist (radiocarpal) joint",
      movementPlane: "sagittal",
      innervation: "Median nerve (with the ulnar nerve supplying flexor carpi ulnaris)",
      functionDaily: "Curling the wrist downward, such as when gripping and pulling something toward you.",
      functionExercise: "Prime mover of wrist flexion in wrist curls; active isometrically during most gripping exercises.",
      beginnerExplanation:
        "These muscles on the palm side of your forearm bend your wrist downward (toward your palm) — the motion used in a wrist curl.",
      advancedExplanation:
        "Because they share a common tendinous origin at the elbow's medial epicondyle, overuse of this whole group (not just one muscle) is what produces medial epicondylitis ('golfer's elbow').",
      commonlyConfused: "Easy to mix up with the finger flexors, which are separate, deeper muscles that bend the fingers rather than the wrist itself.",
      misconceptions: "Wrist curls alone do not build overall grip strength — grip strength depends more on the finger flexors than the wrist flexors specifically.",
      safetyInfo: "Pain at the inner elbow that worsens with gripping or wrist-flexion tasks may indicate golfer's elbow and should be assessed if persistent.",
      status: "source_checked",
      assetSlugs: ["forearms-hands-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The wrist flexor group originates at the medial epicondyle of the humerus and flexes the wrist.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "wrist-extensors",
      commonName: "Wrist extensors (extensor carpi radialis longus/brevis, extensor carpi ulnaris)",
      scientificName: "Extensor carpi radialis longus, extensor carpi radialis brevis, extensor carpi ulnaris",
      pronunciation: "eks-TEN-sor KAR-py ul-NAIR-iss",
      locationSimple: "A group of muscles on the back-of-hand side of the forearm, sharing a common tendinous origin at the elbow.",
      origin: "Lateral epicondyle of the humerus (a shared 'common extensor origin').",
      insertion: "Metacarpal bones of the hand.",
      actions: "Extends the wrist; assists radial/ulnar deviation depending on the specific muscle.",
      jointsCrossed: "Wrist (radiocarpal) joint",
      movementPlane: "sagittal",
      innervation: "Radial nerve",
      functionDaily: "Lifting the back of the hand upward, and stabilizing the wrist in a slightly extended position during most gripping tasks (so the finger flexors can work efficiently).",
      functionExercise: "Prime mover of wrist extension in reverse wrist curls; a key stabilizer during heavy gripping exercises.",
      beginnerExplanation:
        "These muscles on the back of your forearm lift your wrist upward — and importantly, they also quietly hold your wrist steady whenever you grip something firmly.",
      advancedExplanation:
        "Because a stable, slightly extended wrist lets the finger flexors generate more force, the wrist extensors are heavily active (isometrically) during almost any strong gripping task, which is one reason they're prone to overuse.",
      commonlyConfused: "Their stabilizing role during gripping is often overlooked — people assume grip strength is 'just' the fingers and forget the wrist extensors' supporting job.",
      misconceptions: "'Tennis elbow only happens to tennis players' is a myth — it results from wrist-extensor tendon overuse from many repetitive gripping activities.",
      safetyInfo: "Pain at the outer elbow that worsens with gripping or wrist-extension tasks may indicate tennis elbow and should be assessed if persistent.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The wrist extensor group originates at the lateral epicondyle of the humerus and extends the wrist.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "brachioradialis",
      commonName: "Brachioradialis",
      scientificName: "Brachioradialis",
      pronunciation: "BRAY-kee-oh-ray-dee-AL-iss",
      locationSimple: "A muscle on the thumb side of the forearm, forming the prominent bulge visible when the elbow is flexed against resistance with the thumb up.",
      origin: "Lateral supracondylar ridge of the humerus (just above the lateral epicondyle).",
      insertion: "Styloid process of the radius, near the wrist.",
      actions: "Flexes the elbow; despite living in the forearm, it does not act on the wrist at all. It is most mechanically effective when the forearm is midway between palm-up and palm-down (a neutral, 'hammer' grip).",
      jointsCrossed: "Elbow joint",
      movementPlane: "sagittal",
      innervation: "Radial nerve (C5–C6)",
      functionDaily: "Assists any elbow-bending task, especially those done with a neutral (thumb-up) grip, like carrying a suitcase or lifting a hammer.",
      functionExercise: "A significant contributor to elbow flexion in neutral-grip exercises like the hammer curl, working alongside the brachialis.",
      beginnerExplanation:
        "Even though it's located in the forearm, this muscle actually bends your ELBOW, not your wrist — and it works hardest when your palm faces sideways, like holding a hammer.",
      advancedExplanation:
        "Its mechanical advantage peaks in the mid-pronation/supination (neutral) position, which is why neutral-grip exercises like the hammer curl load it more than either a fully supinated or fully pronated curl.",
      commonlyConfused: "Its name ('brachio' + 'radialis') and forearm location often lead people to assume it is a wrist muscle, when it is actually purely an elbow flexor.",
      misconceptions: "It is not part of 'the forearm muscles' functionally, even though it's located there — it belongs functionally with the elbow flexors.",
      safetyInfo: "Rarely a source of isolated injury; general elbow-flexor precautions apply.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The brachioradialis flexes the elbow and is most mechanically effective with the forearm in a neutral position.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "finger-flexors",
      commonName: "Finger flexors (flexor digitorum superficialis and profundus)",
      scientificName: "Flexor digitorum superficialis, flexor digitorum profundus",
      pronunciation: "FLEK-sor DIJ-ih-TOR-um",
      locationSimple: "Deeper forearm muscles whose long tendons cross the wrist and palm to reach each finger.",
      origin: "Humerus, ulna, and radius (varies by muscle and layer).",
      insertion: "Middle and distal phalanges (finger bones), via long tendons that run through the wrist and palm.",
      actions: "Flex the fingers at the finger joints — the primary muscles responsible for gripping.",
      jointsCrossed: "Wrist joint and the finger joints",
      movementPlane: "sagittal",
      innervation: "Median and ulnar nerves",
      functionDaily: "Every act of gripping — holding a bag, turning a key, or closing a fist.",
      functionExercise: "The primary muscles trained by grip work like farmer's carries and dead hangs; work isometrically during almost any exercise that involves holding a bar or handle.",
      beginnerExplanation:
        "These are the muscles that actually close your fingers into a grip — even though they're located up in your forearm, their long tendons reach all the way down to each fingertip.",
      advancedExplanation:
        "Because their tendons cross both the wrist and finger joints, a fully extended (cocked-back) wrist can slightly reduce their grip force compared to a neutral wrist — one reason wrist position matters for maximal grip tasks.",
      commonlyConfused: "Often just called 'the forearm' generically, without distinguishing them from the wrist flexors, which are separate muscles that move the wrist rather than the fingers.",
      misconceptions: "'Big forearms mean a strong grip' isn't a reliable rule — grip strength depends on training and tendon/nervous-system factors as much as visible muscle size.",
      safetyInfo: "Numbness or tingling into the fingers during or after gripping activity can indicate nerve involvement and should be evaluated.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The flexor digitorum muscles flex the fingers and are the primary muscles responsible for grip strength.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
  ],
};

export const forearmsHandsMovements: MovementSeed[] = [
  {
    slug: "wrist-flexion",
    name: "Wrist flexion",
    description: "Bending the wrist so the palm moves toward the forearm. Driven by the wrist flexor group.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the wrist (radiocarpal) joint",
    oppositeSlug: "wrist-extension",
  },
  {
    slug: "wrist-extension",
    name: "Wrist extension",
    description: "Bending the wrist so the back of the hand moves toward the forearm. Driven by the wrist extensor group.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Extension at the wrist (radiocarpal) joint",
    oppositeSlug: "wrist-flexion",
  },
];

export const forearmsHandsExercises: ExerciseSeed[] = [
  {
    slug: "eccentric-wrist-extension",
    name: "Eccentric Wrist Extension",
    altNames: "Tennis elbow rehab exercise",
    simpleExplanation: "With the forearm supported and palm down, slowly lowering a light weight held in the hand by controlling the wrist as it bends downward.",
    purpose: "Builds tolerance and strength in the wrist-extensor tendons that attach at the elbow's lateral epicondyle, commonly used for lateral epicondylitis ('tennis elbow') prevention and rehab.",
    startingPosition: "Rest the forearm on a table or your thigh, palm facing down, wrist hanging just off the edge, holding a light weight (such as a small dumbbell).",
    instructions: [
      "Using the other hand, help lift the wrist into extension (bent back).",
      "Slowly lower the weight by letting the wrist bend downward under control, taking several seconds.",
      "Use the other hand again to reset to the top position and repeat.",
    ],
    breathing: "Breathe steadily throughout; exhale during the slow lowering phase.",
    cues: "\"Assist up, resist down — the slow lowering is the whole point.\"",
    commonMistakes: "Lowering too quickly (losing the eccentric/slow-control emphasis); using too much weight; letting the forearm lift off its support.",
    safety: "Use a light load — this is a tendon-loading and rehab-style exercise, not a maximal-strength movement. Sharp pain (versus mild working discomfort) is a stop signal.",
    regression: "Use a lighter weight or a shorter range of motion.",
    progression: "Increase weight gradually, or slow the lowering phase further.",
    alternatives: "Resistance-band wrist extension, isometric wrist-extension hold.",
    whyItWorks: "Slow, controlled lengthening (eccentric) loading is well-supported for building tendon capacity at the common wrist-extensor origin near the elbow, where tennis elbow symptoms arise.",
    benefitsWho: "Anyone with elbow pain related to gripping/wrist-extension tasks (racquet sports, manual work) or looking to prevent it.",
    cautionWho: "Those with acute, significant elbow pain should get individualized guidance before starting a loading program.",
    equipment: ["dumbbells"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["forearms-hands-region"],
    primaryMuscles: ["wrist-extensors"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "wrist-joint", jointAction: "eccentric extension" }],
    movements: ["wrist-extension"],
    citations: [
      { sourceSlug: NIAMS, claim: "Eccentric loading exercises for the wrist extensors are commonly used to manage and prevent lateral epicondylitis (tennis elbow).", locator: "Sports Injuries" },
    ],
  },
  {
    slug: "eccentric-wrist-flexion",
    name: "Eccentric Wrist Flexion",
    altNames: "Golfer's elbow rehab exercise",
    simpleExplanation: "With the forearm supported and palm up, slowly lowering a light weight held in the hand by controlling the wrist as it straightens.",
    purpose: "Builds tolerance and strength in the wrist-flexor tendons that attach at the elbow's medial epicondyle, commonly used for medial epicondylitis ('golfer's elbow') prevention and rehab.",
    startingPosition: "Rest the forearm on a table or your thigh, palm facing up, wrist hanging just off the edge, holding a light weight.",
    instructions: [
      "Using the other hand, help curl the wrist upward into flexion.",
      "Slowly lower the weight by letting the wrist straighten under control, taking several seconds.",
      "Use the other hand again to reset to the top position and repeat.",
    ],
    breathing: "Breathe steadily throughout; exhale during the slow lowering phase.",
    cues: "\"Assist up, resist down, nice and slow.\"",
    commonMistakes: "Lowering too quickly; using too much weight; letting the forearm shift off its support during the movement.",
    safety: "Use a light load; sharp pain (versus mild working discomfort) is a stop signal to reduce load or range.",
    regression: "Use a lighter weight or a shorter range of motion.",
    progression: "Increase weight gradually, or slow the lowering phase further.",
    alternatives: "Resistance-band wrist flexion, isometric wrist-flexion hold.",
    whyItWorks: "Slow, controlled lengthening loading at the common wrist-flexor origin near the elbow's medial epicondyle builds tendon capacity in the exact tissue involved in golfer's elbow.",
    benefitsWho: "Anyone with medial elbow pain related to gripping/wrist-flexion tasks (golf, throwing, manual work) or looking to prevent it.",
    cautionWho: "Those with acute, significant elbow pain should get individualized guidance before starting a loading program.",
    equipment: ["dumbbells"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isolation",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["wrist-flexors"],
    secondaryMuscles: [],
    joints: [{ jointSlug: "wrist-joint", jointAction: "eccentric flexion" }],
    movements: ["wrist-flexion"],
    citations: [
      { sourceSlug: NIAMS, claim: "Eccentric loading exercises for the wrist flexors are commonly used to manage and prevent medial epicondylitis (golfer's elbow).", locator: "Sports Injuries" },
    ],
  },
  {
    slug: "farmers-carry",
    name: "Farmer's Carry",
    altNames: "Suitcase carry (loaded carry)",
    simpleExplanation: "Walking a set distance while holding a heavy weight in each hand at your sides.",
    purpose: "Builds grip endurance and strength along with total-body postural control under load.",
    startingPosition: "Stand tall holding a heavy dumbbell or kettlebell in each hand, arms at your sides, shoulders back and down.",
    instructions: [
      "Brace the core and walk forward with controlled, even steps.",
      "Keep the shoulders level and avoid leaning to either side.",
      "Walk the target distance or time, then set the weights down under control.",
    ],
    breathing: "Breathe steadily throughout — do not hold your breath for the whole carry.",
    cues: "\"Stand tall, shoulders back, walk like the weights aren't there.\"",
    commonMistakes: "Letting the shoulders round forward or shrug up toward the ears; leaning to one side; using a grip so heavy that walking form breaks down.",
    safety: "Choose a load that allows good posture for the full distance; set the weights down under control rather than dropping them.",
    regression: "Use lighter weights, or a shorter distance/time.",
    progression: "Increase load, distance, or time, or carry the weight in one hand only (offset carry) for extra core demand.",
    alternatives: "Dead hang from a bar, plate pinch hold.",
    whyItWorks: "Because the finger flexors must maintain a strong isometric grip for the entire carry, it directly builds grip endurance, while the wrist extensors and shoulder/trunk muscles work isometrically to keep everything stable — a highly functional, whole-body strength exercise.",
    benefitsWho: "Anyone wanting to build grip strength and endurance alongside general total-body strength and postural control.",
    cautionWho: "Those with grip pain, wrist pain, or lower-back pain that worsens under carried load should reduce weight or distance.",
    equipment: ["dumbbells"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "carry",
    setting: "gym",
    unilateral: false,
    chain: "closed",
    movementPlane: "—",
    status: "source_checked",
    primaryMuscles: ["finger-flexors"],
    secondaryMuscles: ["wrist-extensors", "trapezius"],
    joints: [{ jointSlug: "wrist-joint", jointAction: "isometric stabilization" }],
    movements: [],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The finger flexor muscles maintain grip force isometrically during sustained carrying tasks.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const forearmsHandsLessons: LessonSeed[] = [
  {
    slug: "forearms-hands-region-overview",
    title: "The Forearms & Hands: An Overview",
    summary: "The muscles that move the wrist and grip with the fingers, and why elbow pain can come from here.",
    moduleSlug: "the-forearms-hands",
    bodyRegionSlug: "forearms-hands",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["elbows-region-overview"],
    assetSlugs: ["forearms-hands-region"],
    safetyNotes:
      "Numbness or tingling into the fingers, a weak or worsening grip, or a deformed-looking wrist after an injury needs prompt medical evaluation. A trainer coaches grip and wrist-loading technique; they do not diagnose nerve compression or fractures.",
    objectives: [
      "Name the forearm's main muscle groups and their primary actions.",
      "Explain why wrist flexor/extensor tendon problems are felt at the elbow.",
      "Distinguish the wrist flexors/extensors (move the wrist) from the finger flexors (grip).",
    ],
    bodyMarkdown: `## Two systems in one region

The forearm contains two related but distinct muscle systems:

- **Wrist movers**: the **wrist flexor** and **wrist extensor** groups, which bend the wrist down or up.
  Both share a common tendon origin at the elbow — the flexors at the medial epicondyle, the extensors
  at the lateral epicondyle.
- **Grip**: the **finger flexors**, deeper muscles whose long tendons cross the wrist and palm to reach
  each finger, doing the actual work of closing a grip.

There's also the **brachioradialis** — despite living in the forearm, it is functionally an elbow flexor,
not a wrist muscle at all.

## Why tennis and golfer's elbow are forearm conditions

Because the wrist flexor and extensor groups originate right at the elbow's epicondyles, overuse of these
forearm muscles is felt as pain at the elbow — this is exactly what's happening in **tennis elbow**
(wrist extensors) and **golfer's elbow** (wrist flexors), introduced in the Elbows region and revisited
here now that the muscles themselves are covered.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The wrist flexors and extensors originate near the elbow epicondyles and act on the wrist; the finger flexors are the primary grip muscles.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "grip-strength-and-carries-lesson",
    title: "Grip Strength and Loaded Carries",
    summary: "Why farmer's carries are one of the most functional ways to train grip.",
    moduleSlug: "the-forearms-hands",
    bodyRegionSlug: "forearms-hands",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 8,
    order: 2,
    prerequisiteSlugs: ["forearms-hands-region-overview"],
    objectives: [
      "Explain why the finger flexors, not the wrist flexors, are most responsible for grip strength.",
      "Describe why loaded carries train grip endurance specifically.",
      "Identify a role the wrist extensors play during heavy gripping.",
    ],
    bodyMarkdown: `## Grip is mostly about the fingers

While the wrist flexors bend the wrist, it's the **finger flexors** — with tendons running all the way to
each fingertip — that actually close the hand around an object. Grip training targets these muscles most
directly.

## Why the wrist extensors matter too

A stable, slightly extended wrist lets the finger flexors generate more force efficiently. This is why the
wrist extensors work hard (isometrically) during heavy gripping, even though they don't produce the
gripping action itself.

## Carries: a simple, effective grip builder

The **farmer's carry** demands a sustained maximal or near-maximal grip for an extended time — directly
training grip endurance — while also challenging total-body posture and stability, making it a popular,
efficient exercise beyond just the forearms.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The finger flexor muscles are primarily responsible for grip force, while the wrist extensors stabilize the wrist to support that force.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const forearmsHandsQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle group is primarily responsible for grip strength (closing the fingers around an object)?",
    explanation: "The finger flexors, with tendons running to each fingertip, are the primary muscles responsible for grip strength — distinct from the wrist flexors, which move the wrist itself.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "grip-strength-and-carries-lesson",
    muscleSlug: "finger-flexors",
    exerciseSlug: "farmers-carry",
    bodyRegionSlug: "forearms-hands",
    domainCode: "D1",
    options: [
      { text: "Finger flexors", isCorrect: true, rationale: "Correct — the primary muscles responsible for grip force." },
      { text: "Wrist flexors", rationale: "Move the wrist itself, not primarily responsible for finger grip force." },
      { text: "Brachioradialis", rationale: "An elbow flexor, uninvolved in gripping." },
      { text: "Wrist extensors", rationale: "Stabilize the wrist during gripping but do not close the fingers." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The finger flexor muscles are the primary muscles responsible for grip strength.", locator: "Ch. 11.5" }],
  },
  {
    type: "true_false",
    prompt: "The wrist extensor and wrist flexor muscle groups share their tendon origins with the elbow's epicondyles.",
    explanation: "True. The wrist extensors originate at the lateral epicondyle and the wrist flexors at the medial epicondyle — which is why their overuse injuries are felt at the elbow.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "forearms-hands-region-overview",
    muscleSlug: "wrist-extensors",
    bodyRegionSlug: "forearms-hands",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — both groups originate at the elbow's epicondyles." },
      { text: "False", rationale: "Both groups do share their tendon origins with the elbow's epicondyles." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The wrist flexors originate at the medial epicondyle and the wrist extensors at the lateral epicondyle of the humerus.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Despite being located in the forearm, which muscle actually acts only at the elbow, not the wrist?",
    explanation: "The brachioradialis, though located in the forearm, flexes the elbow and does not cross or act on the wrist joint at all.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "forearms-hands-region-overview",
    muscleSlug: "brachioradialis",
    bodyRegionSlug: "forearms-hands",
    domainCode: "D1",
    options: [
      { text: "Brachioradialis", isCorrect: true, rationale: "Correct — a forearm-located muscle that is functionally an elbow flexor." },
      { text: "Wrist flexors", rationale: "These muscles do act on the wrist, as their name indicates." },
      { text: "Finger flexors", rationale: "These act on the fingers (and cross the wrist), not solely the elbow." },
      { text: "Wrist extensors", rationale: "These act on the wrist, not solely the elbow." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The brachioradialis flexes the elbow and does not act on the wrist joint.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which exercise is used as a rehab/prevention exercise specifically for golfer's elbow (medial epicondylitis)?",
    explanation: "Eccentric wrist flexion loads the wrist-flexor tendon origin at the medial epicondyle, the tissue involved in golfer's elbow.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "forearms-hands-region-overview",
    exerciseSlug: "eccentric-wrist-flexion",
    muscleSlug: "wrist-flexors",
    bodyRegionSlug: "forearms-hands",
    domainCode: "D3",
    options: [
      { text: "Eccentric wrist flexion", isCorrect: true, rationale: "Correct — targets the wrist-flexor tendon origin involved in golfer's elbow." },
      { text: "Eccentric wrist extension", rationale: "Targets the wrist-extensor origin, relevant to tennis elbow instead." },
      { text: "Farmer's carry", rationale: "A grip-endurance exercise, not a targeted eccentric rehab exercise for this condition." },
      { text: "Diamond push-up", rationale: "An elbow-extension exercise (Elbows region), unrelated to wrist-flexor tendon loading." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Eccentric wrist flexion exercises are commonly used to manage medial epicondylitis (golfer's elbow).", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why does the farmer's carry build grip strength particularly well?",
    explanation: "The farmer's carry requires the finger flexors to maintain a strong, sustained isometric grip for the entire duration of the carry, directly training grip endurance.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "grip-strength-and-carries-lesson",
    exerciseSlug: "farmers-carry",
    bodyRegionSlug: "forearms-hands",
    domainCode: "D3",
    options: [
      { text: "It requires the finger flexors to sustain a strong isometric grip for an extended time", isCorrect: true, rationale: "Correct — directly builds grip endurance through sustained isometric demand." },
      { text: "It isolates the wrist flexors while resting the fingers completely", rationale: "The fingers are actively gripping throughout — the opposite of resting." },
      { text: "It only works the shoulders, not the grip at all", rationale: "The shoulders are involved for posture, but the grip demand on the fingers is the primary training stimulus." },
      { text: "It requires no muscular effort from the hand", rationale: "Sustained hand/finger effort to maintain the grip is the core of the exercise." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The finger flexor muscles maintain isometric grip force during sustained carrying tasks.", locator: "Ch. 11.5" }],
  },
];
