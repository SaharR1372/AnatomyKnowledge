import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// ELBOWS region — a JOINT-type region (fewer unique muscles by design; the
// biceps/triceps/brachialis that move the elbow live in the Arms region and
// are referenced here, not redefined). This region covers the elbow's joint
// structure, collateral ligaments, and common overuse injuries (tennis and
// golfer's elbow). Facts from OpenStax A&P 2e Ch. 9.5 "Synovial Joints" and
// Ch. 11.5; safety framing from NIAMS. The "elbow-joint" (humeroulnar) was
// already introduced in arms.ts and is reused here, not redefined.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const elbowsRegion: BodyRegionSeed = {
  slug: "elbows",
  name: "Elbows",
  order: 13,
  description:
    "The elbow is actually three joints sharing one capsule: a hinge between the humerus and ulna (flexion/extension), a related gliding surface between the humerus and radius, and a rotating joint between the radius and ulna (forearm pronation/supination). This combination lets the elbow both bend/straighten and let the forearm twist, all in one compact region stabilized by strong collateral ligaments.",
  relationships:
    "The elbow sits between the **arms** (whose biceps, triceps, and brachialis are its prime movers) and the **forearms & hands** (whose wrist muscles originate right at the elbow's bony bumps, which is why wrist-tendon overuse injuries are felt at the elbow).",
  safetyNotes:
    "Inability to straighten or bend the elbow after an injury, visible deformity, or numbness/tingling into the hand needs prompt medical evaluation. A trainer coaches safe elbow loading and technique; they do not diagnose ligament sprains or nerve involvement.",
  assetSlugs: ["elbows-region"],
  pronunciations: [
    { term: "Humeroulnar joint", say: "hyoo-mer-oh-UL-nar joint" },
    { term: "Radioulnar joint", say: "ray-dee-oh-UL-nar joint" },
    { term: "Ulnar collateral ligament (UCL)", say: "UL-nar koh-LAT-er-al LIG-uh-ment" },
    { term: "Epicondyle", say: "ep-ih-KON-dyle" },
    { term: "Anconeus", say: "an-KOH-nee-us" },
    { term: "Lateral epicondylitis", say: "LAT-er-al ep-ih-kon-dih-LY-tis" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The elbow region contains the humeroulnar, humeroradial, and proximal radioulnar joints, stabilized by the ulnar and radial collateral ligaments.",
      locator: "Ch. 9.5 Synovial Joints",
    },
    {
      sourceSlug: NIAMS,
      claim: "Lateral epicondylitis ('tennis elbow') and medial epicondylitis ('golfer's elbow') are common overuse injuries of the tendons attaching near the elbow.",
      locator: "Sports Injuries",
    },
  ],
  bones: [],
  joints: [
    {
      slug: "proximal-radioulnar-joint",
      name: "Proximal radioulnar joint",
      jointType: "synovial, pivot",
      description: "The joint near the elbow where the head of the radius rotates against the ulna, working together with a matching joint at the wrist to let the forearm pronate and supinate (twist the palm down or up) without needing to move the elbow itself.",
      articulatingBones: "Radius and ulna (proximal ends)",
      movementsAllowed: "Pronation and supination of the forearm.",
    },
  ],
  muscles: [
    {
      slug: "anconeus",
      commonName: "Anconeus",
      scientificName: "Anconeus",
      pronunciation: "an-KOH-nee-us",
      locationSimple: "A small, triangular muscle on the back of the elbow, just beside the triceps.",
      origin: "Lateral epicondyle of the humerus.",
      insertion: "Olecranon and upper posterior surface of the ulna.",
      actions: "Assists the triceps brachii in extending the elbow; helps stabilize the elbow joint during forearm rotation.",
      jointsCrossed: "Elbow joint",
      movementPlane: "sagittal",
      innervation: "Radial nerve (C7–C8)",
      functionDaily: "Works alongside the triceps any time the elbow straightens.",
      functionExercise: "A minor assistant to the triceps brachii in all elbow-extension exercises; not a prime mover on its own.",
      beginnerExplanation:
        "A small helper muscle at the back of the elbow that assists the much larger triceps in straightening your arm, while also helping keep the joint steady.",
      advancedExplanation:
        "Beyond assisting extension, the anconeus is thought to help stabilize the elbow joint capsule during forearm pronation/supination, acting as a dynamic joint stabilizer rather than a major force producer.",
      commonlyConfused: "Easy to overlook as 'just part of the triceps' since it sits right beside it and shares a similar action.",
      misconceptions: "It cannot be meaningfully isolated or specifically targeted by any common exercise — it is trained incidentally alongside the triceps.",
      safetyInfo: "Rarely a source of isolated injury; general elbow-safety principles apply.",
      status: "source_checked",
      assetSlugs: ["elbows-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The anconeus assists elbow extension and stabilizes the elbow joint.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
  ],
};

export const elbowsMovements: MovementSeed[] = [
  {
    slug: "forearm-pronation",
    name: "Forearm pronation",
    description: "Rotating the forearm so the palm faces down (or backward, from anatomical position). Driven by the pronator teres and pronator quadratus (covered in the Forearms & Hands region).",
    plane: "transverse",
    axis: "longitudinal",
    jointAction: "Pronation at the proximal and distal radioulnar joints",
    oppositeSlug: "forearm-supination",
  },
];

export const elbowsExercises: ExerciseSeed[] = [
  {
    slug: "isometric-elbow-flexion-hold",
    name: "Isometric Elbow Flexion Hold",
    altNames: "Static curl hold",
    simpleExplanation: "Holding a dumbbell with the elbow bent at roughly a right angle and staying completely still for a set time.",
    purpose: "A low-technical-demand way to load the elbow joint and its flexor tendons at a fixed angle — a common early step in graded tendon and joint loading.",
    startingPosition: "Stand or sit holding a dumbbell with the elbow bent to about 90°, upper arm still at your side.",
    instructions: [
      "Hold the dumbbell steady at the chosen elbow angle without letting it drift up or down.",
      "Keep the upper arm still against the torso throughout.",
      "Hold for the target time, then lower the weight under control.",
    ],
    breathing: "Breathe steadily and continuously throughout the hold — do not hold your breath.",
    cues: "\"Pick an angle and hold it steady — no drifting.\"",
    commonMistakes: "Letting the weight slowly drift down during the hold; holding the breath; using a weight so heavy the position cannot be held with control.",
    safety: "Choose a weight and hold time that stay comfortable at the elbow; sharp joint pain (versus general muscular fatigue) is a stop signal.",
    regression: "Use a lighter weight or a shorter hold time.",
    progression: "Increase hold time, weight, or try the hold at a couple of different elbow angles across sets.",
    alternatives: "Barbell bicep curl or hammer curl (Arms region) for dynamic loading instead of a static hold.",
    whyItWorks: "Because nothing moves, an isometric hold loads the elbow joint and its flexor tendons predictably at a single angle, which is useful both as a beginner-friendly strength exercise and as a controlled way to reintroduce loading to the joint after a period of reduced activity.",
    benefitsWho: "Anyone building basic elbow-flexor strength, or easing back into elbow loading after time off.",
    cautionWho: "Those with current elbow joint pain should keep the load light and check with a professional if pain persists.",
    equipment: ["dumbbells"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "isometric",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    assetSlugs: ["elbows-region"],
    primaryMuscles: ["biceps-brachii"],
    secondaryMuscles: ["brachialis"],
    joints: [{ jointSlug: "elbow-joint", jointAction: "isometric hold (fixed flexion angle)" }],
    movements: [],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The biceps brachii and brachialis flex the elbow and can hold it isometrically at a fixed angle under load.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "diamond-push-up",
    name: "Diamond Push-Up",
    altNames: "Close-grip push-up, triangle push-up",
    simpleExplanation: "A push-up performed with the hands close together beneath the chest, thumbs and index fingers forming a diamond shape.",
    purpose: "Loads the elbow through a full pressing range with the hands close together, emphasizing the triceps and anconeus and challenging elbow stability.",
    startingPosition: "Start in a plank/push-up position with hands close together beneath the chest, forming a diamond shape with the thumbs and index fingers.",
    instructions: [
      "Keeping the elbows tracking back near the body (not flaring out), lower the chest toward the hands.",
      "Pause briefly near the bottom.",
      "Push back up to the starting position, extending the elbows fully.",
    ],
    breathing: "Inhale as you lower; exhale as you push up.",
    cues: "\"Elbows track back, not out to the sides; full range, controlled tempo.\"",
    commonMistakes: "Letting the elbows flare out to the sides; sagging the hips; only completing a partial range of motion.",
    safety: "This is a more demanding elbow-loading variation than a standard push-up; build up standard push-up strength first if the close-hand position causes elbow discomfort.",
    regression: "Perform from the knees, or with hands elevated on a bench or step.",
    progression: "Add a pause at the bottom, elevate the feet, or add external load (a weighted vest).",
    alternatives: "Standard push-up, close-grip bench press, triceps pushdown (Arms region).",
    whyItWorks: "The close hand position increases the demand on the triceps and anconeus to extend the elbow through a full pressing range while also challenging them to keep the elbow tracking stably, rather than flaring, under load.",
    benefitsWho: "Those with solid push-up strength wanting more triceps/elbow-extension emphasis and stability challenge.",
    cautionWho: "Those with elbow or wrist pain in this hand position should regress to a standard-grip push-up or reduce load.",
    equipment: ["bodyweight"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "horizontal-push",
    setting: "home",
    unilateral: false,
    chain: "closed",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["triceps-brachii"],
    secondaryMuscles: ["anconeus"],
    joints: [{ jointSlug: "elbow-joint", jointAction: "extension" }],
    movements: ["elbow-extension"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The triceps brachii, assisted by the anconeus, extends the elbow through a full pressing range of motion.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const elbowsLessons: LessonSeed[] = [
  {
    slug: "elbows-region-overview",
    title: "The Elbow: An Overview",
    summary: "Three joints in one capsule — bending/straightening and forearm rotation, stabilized by strong ligaments.",
    moduleSlug: "the-elbows",
    bodyRegionSlug: "elbows",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 1,
    prerequisiteSlugs: ["arms-region-overview"],
    assetSlugs: ["elbows-region"],
    safetyNotes:
      "Inability to bend or straighten the elbow after an injury, visible deformity, or numbness/tingling into the hand needs prompt medical evaluation. A trainer coaches safe elbow loading; they do not diagnose ligament or nerve injuries.",
    objectives: [
      "Describe the three joints that make up the elbow region.",
      "Explain the difference between the humeroulnar joint (bending) and the proximal radioulnar joint (rotating).",
      "Name the elbow's key stabilizing ligaments at a basic level.",
    ],
    bodyMarkdown: `## Three joints, one capsule

What we casually call 'the elbow' is really three joints sharing one joint capsule:

- The **humeroulnar joint** — a hinge between the humerus and ulna that bends and straightens the elbow.
- The **humeroradial joint** — a related gliding surface between the humerus and radius.
- The **proximal radioulnar joint** — where the radius rotates against the ulna, letting the forearm
  **pronate** (palm down) and **supinate** (palm up) without needing to move the elbow itself.

## Held together by ligaments

Strong collateral ligaments on the inner (ulnar) and outer (radial) sides of the elbow resist excess
side-to-side stress, particularly important during throwing and heavy pressing movements.

## The bony bumps that cause elbow pain

The bony bumps on either side of the elbow (**epicondyles**) are where the wrist muscles begin. This is
why wrist-tendon overuse problems — from gripping, typing, or racquet sports — are often felt as pain
right at the elbow rather than in the forearm itself.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The elbow region comprises the humeroulnar, humeroradial, and proximal radioulnar joints within a shared capsule.", locator: "Ch. 9.5 Synovial Joints" },
    ],
  },
  {
    slug: "tennis-golfers-elbow-lesson",
    title: "Tennis Elbow and Golfer's Elbow: Two Common Overuse Injuries",
    summary: "Why these two conditions happen at the elbow even though the muscles involved work the wrist.",
    moduleSlug: "the-elbows",
    bodyRegionSlug: "elbows",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 8,
    order: 2,
    prerequisiteSlugs: ["elbows-region-overview"],
    safetyNotes:
      "Eccentric wrist loading exercises are a common, well-supported approach for these conditions, but persistent or worsening elbow pain should be evaluated by a healthcare professional rather than self-managed indefinitely.",
    objectives: [
      "Distinguish lateral epicondylitis (tennis elbow) from medial epicondylitis (golfer's elbow) by location.",
      "Explain why these conditions are named after the elbow despite involving wrist muscles.",
      "Describe the general rationale for eccentric loading exercises in managing them.",
    ],
    bodyMarkdown: `## Same idea, opposite sides

- **Lateral epicondylitis** ('tennis elbow') involves the tendons of the wrist EXTENSOR muscles, which
  attach at the outer (lateral) epicondyle of the humerus.
- **Medial epicondylitis** ('golfer's elbow') involves the tendons of the wrist FLEXOR muscles, attaching
  at the inner (medial) epicondyle.

Despite the sport-specific nicknames, both are common in many repetitive gripping or wrist-motion
activities — not just tennis or golf.

## Why eccentric loading helps

Both conditions are commonly addressed with **eccentric** exercises — slow, controlled lengthening of
the affected tendon under load. This approach is widely used in tendon rehabilitation generally, not just
at the elbow, to build the tendon's capacity to handle load over time.`,
    citations: [
      { sourceSlug: NIAMS, claim: "Lateral and medial epicondylitis are common tendon overuse conditions of the elbow, often managed with eccentric loading exercise.", locator: "Sports Injuries" },
    ],
  },
];

export const elbowsQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which joint allows the forearm to pronate and supinate (rotate the palm down or up)?",
    explanation: "The proximal radioulnar joint, where the radius rotates against the ulna, is responsible for pronation and supination.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "elbows-region-overview",
    bodyRegionSlug: "elbows",
    domainCode: "D1",
    options: [
      { text: "Proximal radioulnar joint", isCorrect: true, rationale: "Correct — allows forearm pronation/supination." },
      { text: "Humeroulnar joint", rationale: "This joint bends and straightens the elbow, not forearm rotation." },
      { text: "Patellofemoral joint", rationale: "A knee joint, unrelated to the elbow or forearm." },
      { text: "Subtalar joint", rationale: "An ankle/foot joint, unrelated to the elbow or forearm." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The proximal radioulnar joint allows pronation and supination of the forearm.", locator: "Ch. 9.5" }],
  },
  {
    type: "true_false",
    prompt: "Lateral epicondylitis ('tennis elbow') involves the tendons of the wrist extensor muscles.",
    explanation: "True. The wrist extensors attach at the lateral epicondyle, and their tendon irritation there is what's commonly called tennis elbow.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "tennis-golfers-elbow-lesson",
    bodyRegionSlug: "elbows",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — tennis elbow involves the wrist extensor tendon origin." },
      { text: "False", rationale: "Tennis elbow does specifically involve the wrist extensor tendons at the lateral epicondyle." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Lateral epicondylitis involves the wrist extensor tendon origin at the elbow.", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the main rationale for using eccentric (slow-lowering) exercises for tennis or golfer's elbow?",
    explanation: "Eccentric loading is a well-supported approach for building the affected tendon's capacity to tolerate load over time.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "tennis-golfers-elbow-lesson",
    bodyRegionSlug: "elbows",
    domainCode: "D3",
    options: [
      { text: "It builds the affected tendon's capacity to tolerate load", isCorrect: true, rationale: "Correct — the general rationale for eccentric tendon-loading exercise." },
      { text: "It completely avoids using the injured tendon", rationale: "The exercise deliberately loads the tendon, under control, rather than avoiding it entirely." },
      { text: "It only works for professional athletes", rationale: "This approach is broadly applicable, not limited to a specific population." },
      { text: "It replaces the need for any medical evaluation ever", rationale: "Persistent or worsening symptoms still warrant professional evaluation." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Eccentric loading exercises are commonly used to manage tendon overuse conditions like epicondylitis.", locator: "Sports Injuries" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which small muscle assists the triceps brachii in elbow extension and helps stabilize the joint?",
    explanation: "The anconeus, a small muscle beside the triceps, assists elbow extension and contributes to joint stability.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "elbows-region-overview",
    muscleSlug: "anconeus",
    exerciseSlug: "diamond-push-up",
    bodyRegionSlug: "elbows",
    domainCode: "D1",
    options: [
      { text: "Anconeus", isCorrect: true, rationale: "Correct — a small assistant to the triceps and elbow stabilizer." },
      { text: "Brachialis", rationale: "An elbow flexor, not an extension assistant." },
      { text: "Coracobrachialis", rationale: "Acts at the shoulder, not the elbow." },
      { text: "Biceps brachii", rationale: "Flexes the elbow — the opposite action to the anconeus." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The anconeus assists elbow extension and stabilizes the elbow joint.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why are wrist-tendon overuse injuries commonly felt as pain at the elbow rather than in the forearm?",
    explanation: "The wrist flexor and extensor muscles originate at the elbow's epicondyles, so tendon irritation at their common origin is felt at the elbow, even though the muscles act on the wrist.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "elbows-region-overview",
    bodyRegionSlug: "elbows",
    domainCode: "D1",
    options: [
      { text: "The wrist flexor/extensor muscles originate at the elbow's epicondyles", isCorrect: true, rationale: "Correct — their common tendon origin sits at the elbow." },
      { text: "The elbow and wrist share the exact same joint", rationale: "They are separate joints; the connection is through muscle origin, not a shared joint." },
      { text: "Wrist pain always radiates upward regardless of anatomy", rationale: "Not a general rule — the specific reason is the shared tendon origin location." },
      { text: "The forearm has no nerves connecting it to the wrist", rationale: "Inaccurate and not the actual anatomical reason." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The wrist flexor and extensor muscles originate at the medial and lateral epicondyles of the humerus, at the elbow.", locator: "Ch. 9.5" }],
  },
];
