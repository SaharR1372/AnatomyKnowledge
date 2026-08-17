import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// HEAD & NECK region — full-depth content module. The neck is a common site of
// tension and dysfunction, especially in desk workers. This region covers the
// muscles responsible for neck flexion, extension, and rotation — all critical
// for posture and head stability. Facts from OpenStax A&P 2e Ch. 11.6 "Muscles
// of the Head, Neck, and Spine" (sternocleidomastoid, scalenes, splenius,
// upper trapezius). Focus: posture, daily tension patterns, and safe loading.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const headNeckRegion: BodyRegionSeed = {
  slug: "head-neck",
  name: "Head & Neck",
  order: 15,
  description:
    "The neck is a delicate structure that supports the weight of the head while allowing it to move in all directions. Its muscles are active in every head movement — turning, nodding, tilting — and must maintain constant, subtle adjustments to hold the head upright against gravity. Because the neck is thin, it has less room than other body regions to pack in muscle, and its muscles fatigue easily under poor posture.",
  relationships:
    "The neck connects the **head** to the **shoulders** and **upper back**. The sternocleidomastoid, scalenes, and splenius all originate on or near the shoulder girdle and thorax, which means shoulder position (forward, shrugged, or relaxed) directly affects neck muscle tension. Poor shoulder posture is a common driver of neck pain.",
  safetyNotes:
    "Neck pain that does not improve in a few days, radiating pain or numbness into the arm, severe headaches, dizziness, or loss of coordination after a neck injury requires immediate medical evaluation. A trainer coaches neutral neck posture and gentle mobility; they do NOT perform neck manipulation or diagnosis. Never apply heavy load directly to the neck (e.g., behind-the-neck pulldowns are not recommended).",
  assetSlugs: ["head-neck-region"],
  pronunciations: [
    { term: "Sternocleidomastoid", say: "STER-no-KLY-doh-MAS-toyd" },
    { term: "Scalene", say: "skay-LEEN" },
    { term: "Splenius capitis", say: "SPLEN-ee-us kuh-PIT-iss" },
    { term: "Cervical", say: "SER-vik-ul" },
    { term: "Trapezius", say: "truh-PEE-zee-us" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The sternocleidomastoid flexes and rotates the head; the scalenes assist in neck flexion and rib elevation; the splenius extends and rotates the head; the upper trapezius stabilizes the shoulder girdle and assists in neck extension.",
      locator: "Ch. 11.6 Muscles of the Head, Neck, and Spine",
    },
  ],
  bones: [
    {
      slug: "cervical-vertebrae",
      name: "Cervical vertebrae",
      latinName: "Vertebrae cervicales",
      description: "The seven small bones that form the cervical spine (neck). They are the smallest vertebrae in the spine, yet they support the weight of the head. The first cervical vertebra (atlas) directly supports the skull; the second (axis) allows rotation.",
      landmarks: "The prominent bone at the base of the neck (C7, the vertebra prominens) is easily felt and is a key anatomical landmark.",
    },
  ],
  joints: [
    {
      slug: "atlantoaxial-joint",
      name: "Atlantoaxial joint (C1–C2)",
      jointType: "synovial, pivot",
      description: "The joint between the atlas (C1) and axis (C2) vertebrae. It allows the head to rotate side to side — roughly 50% of total neck rotation happens here.",
      articulatingBones: "Atlas (C1) and axis (C2)",
      movementsAllowed: "Primarily rotation (turning the head left and right); limited flexion/extension.",
    },
    {
      slug: "cervical-intervertebral-joints",
      name: "Cervical intervertebral joints",
      jointType: "synovial, gliding (between vertebral bodies); facet joints",
      description: "The joints between the cervical vertebrae (C2–C7). They allow small amounts of flexion, extension, lateral flexion, and rotation. The intervertebral discs between them are susceptible to herniation if loaded poorly.",
      articulatingBones: "Cervical vertebral bodies (C2 through C7)",
      movementsAllowed: "Flexion, extension, lateral flexion, rotation — in combination, these allow the full range of head motion.",
    },
  ],
  muscles: [
    {
      slug: "sternocleidomastoid",
      commonName: "Sternocleidomastoid",
      scientificName: "Sternocleidomastoid",
      pronunciation: "STER-no-KLY-doh-MAS-toyd",
      locationSimple: "A thick, cordlike muscle on the front-side of the neck, easily seen when you turn your head hard to one side.",
      origin: "Sternum (breastbone) and clavicle (collarbone).",
      insertion: "Mastoid process of the temporal bone (a bony bump behind the ear).",
      actions: "Flexes the neck (brings the chin toward the chest); rotates the head to the opposite side (right SCM rotates the head left, and vice versa).",
      jointsCrossed: "Cervical spine (atlantoaxial and cervical intervertebral joints)",
      movementPlane: "sagittal (flexion), transverse (rotation)",
      innervation: "Spinal accessory nerve (CN XI)",
      functionDaily: "Nodding, turning the head to look over the shoulder, and stabilizing the head during movement.",
      functionExercise: "Prime mover of neck flexion in isolation; highly active in any head-turning or posture-correcting movement.",
      beginnerExplanation:
        "This is the muscle you see popping out on the side of your neck when you turn your head hard. It flexes your neck (brings your chin down) and rotates your head side to side.",
      advancedExplanation:
        "The sternocleidomastoid is a bilateral muscle — when both sides contract together, the neck flexes; when only one side contracts, the head rotates toward the opposite side. A short, tight SCM (common from slouching) pulls the head forward and can compress the nerves and blood vessels in the neck.",
      commonlyConfused: "Often confused with the scalenes, which lie deeper and run at a different angle.",
      misconceptions: "The SCM is not primarily responsible for neck extension — that job belongs to the posterior muscles (splenius, upper trapezius, and the posterior neck extensors introduced in Spine).",
      safetyInfo: "Excessive or ballistic neck rotation (whiplash-style movements) can strain the SCM and the cervical discs. A forward-head posture overstretches the posterior neck and shortens the SCM, leading to imbalance and pain.",
      status: "source_checked",
      assetSlugs: ["head-neck-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The sternocleidomastoid originates on the sternum and clavicle, inserts on the mastoid process, and flexes and rotates the neck.", locator: "Ch. 11.6 Muscles of the Head, Neck, and Spine" },
      ],
    },
    {
      slug: "scalenes",
      commonName: "Scalene muscles (anterior, middle, posterior)",
      scientificName: "Scalenus anterior, scalenus medius, scalenus posterior",
      pronunciation: "skay-LEEN",
      locationSimple: "Three deep muscles on the sides of the neck, running from the cervical vertebrae down to the ribs. They are not easily visible but are frequently tight in desk workers.",
      origin: "Transverse processes of the cervical vertebrae (C2–C7).",
      insertion: "First and second ribs.",
      actions: "Together: assist in neck flexion and lateral flexion. The anterior and middle scalenes also elevate the ribs during breathing (inspiration), especially during heavy or strained breathing.",
      jointsCrossed: "Cervical spine (cervical intervertebral joints)",
      movementPlane: "sagittal (flexion), frontal (lateral flexion)",
      innervation: "Cervical spinal nerves (C3–C8)",
      functionDaily: "Maintain neck posture during sitting and standing; assist in breathing, especially during exertion.",
      functionExercise: "Secondary flexors of the neck; prime movers of neck lateral flexion (tilting the ear toward the shoulder).",
      beginnerExplanation:
        "These are deep muscles on the sides of your neck. When they're tight (which is common), they can cause neck stiffness and shoulder tension. They also help you breathe harder during exercise.",
      advancedExplanation:
        "The scalenes are among the most frequently painful and dysfunctional muscles in desk workers because they are constantly recruited for stability against forward-head posture. Tightness in the scalenes can compress the brachial plexus and subclavian vessels, a condition called 'thoracic outlet syndrome' — numbness/tingling into the arm.",
      commonlyConfused: "Often lumped together with the sternocleidomastoid, but they are separate, deeper muscles with a different origin and primary action.",
      misconceptions: "The scalenes are not primarily for extending the neck — they flex and laterally flex; extension is the job of the posterior muscles.",
      safetyInfo: "Scalene tightness is a red flag for poor shoulder posture. Aggressive stretching of a tight scalene can occasionally trigger or worsen arm symptoms; mobility work should be gentle and monitored.",
      status: "source_checked",
      assetSlugs: ["head-neck-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The scalenes originate on the cervical vertebrae and insert on the ribs; they assist in neck flexion and lateral flexion, and elevate the ribs in breathing.", locator: "Ch. 11.6 Muscles of the Head, Neck, and Spine" },
      ],
    },
    {
      slug: "splenius-capitis",
      commonName: "Splenius capitis",
      scientificName: "Splenius capitis",
      pronunciation: "SPLEN-ee-us kuh-PIT-iss",
      locationSimple: "A muscle on the back-upper side of the neck, running from the upper thoracic spine up to the base of the skull. It's one of the primary neck extensors.",
      origin: "Spinous processes of the thoracic vertebrae (T1–T4) and the ligamentum nuchae (a ligament that runs down the back of the neck).",
      insertion: "Mastoid process and superior nuchal line of the temporal bone (same insertion region as the upper trapezius).",
      actions: "Extends the head and neck (tilts the chin upward); rotates the head to the same side (right splenius capitis rotates the head right).",
      jointsCrossed: "Cervical spine (cervical intervertebral joints and atlantoaxial joint)",
      movementPlane: "sagittal (extension), transverse (rotation)",
      innervation: "Dorsal rami of cervical spinal nerves (C3–C4)",
      functionDaily: "Holding the head upright, especially when looking upward (like when reading a high screen).",
      functionExercise: "Prime mover of neck extension; active during any posture-correcting movement that involves pulling the chin back.",
      beginnerExplanation:
        "This muscle on the back of your neck extends your head backward (like tilting your chin up) and helps rotate your head. It's one of the main muscles that holds your head upright.",
      advancedExplanation:
        "The splenius capitis is a short, powerful extensor that works in concert with the upper trapezius to support the head. A weak or inhibited splenius capitis (common in forward-head posture) leads to reliance on overactive upper trapezius and neck tension.",
      commonlyConfused: "Sometimes grouped with the 'upper trapezius' even though they are distinct muscles with different origins and actions.",
      misconceptions: "The splenius capitis does NOT rotate the head to the opposite side — it rotates to the SAME side (unlike the SCM).",
      safetyInfo: "Overuse of the splenius capitis to compensate for weak deep cervical flexors can create chronic upper-neck tension and headaches. Balanced neck training (flexion and extension, not just extension) is key.",
      status: "source_checked",
      assetSlugs: ["head-neck-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The splenius capitis originates on the thoracic spine and ligamentum nuchae, inserts on the mastoid process, and extends and rotates the head.", locator: "Ch. 11.6 Muscles of the Head, Neck, and Spine" },
      ],
    },
    {
      slug: "trapezius-upper",
      commonName: "Upper trapezius",
      scientificName: "Trapezius pars descendens (upper portion)",
      pronunciation: "truh-PEE-zee-us",
      locationSimple: "The upper portion of the trapezius muscle, running from the base of the skull and upper neck down to the shoulder. It's the large, flat muscle you feel on the upper back and shoulder.",
      origin: "External occipital protuberance and ligamentum nuchae (the ligament at the back of the neck).",
      insertion: "Lateral third of the clavicle and acromion process of the scapula.",
      actions: "Elevates the scapula (shrugs the shoulder); assists in neck extension; stabilizes the scapula during upper-limb work.",
      jointsCrossed: "Cervical spine (for extension); scapulothoracic articulation (for shoulder support)",
      movementPlane: "frontal (elevation), sagittal (extension of the head/neck)",
      innervation: "Spinal accessory nerve (CN XI)",
      functionDaily: "Shrugging the shoulders, bracing the neck against load, and stabilizing the shoulder during reaching and lifting.",
      functionExercise: "Secondary neck extensor; primary scapular elevator. Highly active in any overhead or carrying task.",
      beginnerExplanation:
        "This is the muscle you feel when you shrug your shoulders. It also extends your neck backward and helps hold your head and shoulder together. In desk workers, it's often tight and tense.",
      advancedExplanation:
        "The upper trapezius is a large, powerful muscle that is frequently overactive and shortened in forward-head posture. Chronic tightness here is a major driver of tension headaches and cervical pain. It works in tandem with the splenius capitis for neck extension, but if the splenius is weak, the upper trap becomes overloaded.",
      commonlyConfused: "Part of the larger trapezius muscle, which also has middle and lower portions with different actions (the lower trap helps depress and retract the scapula).",
      misconceptions: "The upper trapezius is not a primary scapular retractor — that job is the middle and lower trapezius. Upper trap's main scapular action is ELEVATION (shrug).",
      safetyInfo: "Excessive shrugging or neck-load (holding tension in the shoulders) is the primary driver of upper-trapezius strain. Conscious shoulder relaxation and postural awareness are key to prevention.",
      status: "source_checked",
      assetSlugs: ["head-neck-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The upper trapezius originates on the skull and ligamentum nuchae, inserts on the clavicle and scapula, and elevates the scapula and extends the head.", locator: "Ch. 11.6 Muscles of the Head, Neck, and Spine" },
      ],
    },
  ],
};

export const headNeckMovements: MovementSeed[] = [
  {
    slug: "neck-flexion",
    name: "Neck flexion",
    description: "Bringing the chin toward the chest. Driven primarily by the sternocleidomastoid (assisted by the scalenes). This is the most mechanically vulnerable movement because the neck is in a compressed position and the cervical discs are loaded.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the cervical intervertebral joints and atlantoaxial joint",
    oppositeSlug: "neck-extension",
  },
  {
    slug: "neck-extension",
    name: "Neck extension",
    description: "Tilting the chin upward, moving the head backward. Driven primarily by the splenius capitis and upper trapezius. This movement is safer than flexion because the cervical discs are decompressed.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Extension at the cervical intervertebral joints and atlantoaxial joint",
    oppositeSlug: "neck-flexion",
  },
  {
    slug: "neck-lateral-flexion",
    name: "Neck lateral flexion",
    description: "Tilting the ear toward the shoulder. Driven by the scalenes and sternocleidomastoid (on the same side). Less commonly trained but important for a balanced neck.",
    plane: "frontal",
    axis: "sagittal",
    jointAction: "Lateral flexion at the cervical intervertebral joints",
    oppositeSlug: undefined,
  },
  {
    slug: "neck-rotation",
    name: "Neck rotation",
    description: "Turning the head left and right. Driven by the sternocleidomastoid (which rotates the head to the opposite side) and splenius capitis (which rotates the head to the same side). The atlantoaxial joint (C1–C2) is responsible for roughly half of all neck rotation.",
    plane: "transverse",
    axis: "vertical",
    jointAction: "Rotation at the atlantoaxial joint (C1–C2) and cervical intervertebral joints",
    oppositeSlug: undefined,
  },
];

export const headNeckExercises: ExerciseSeed[] = [
  {
    slug: "isometric-neck-flexion-hold",
    name: "Isometric neck flexion hold",
    altNames: "Deep cervical flexor activation hold",
    simpleExplanation:
      "Press your forehead gently into your hand while keeping your head completely still, activating the deep neck flexors without any movement or compression.",
    purpose:
      "Reactivates and strengthens the deep cervical flexors, which are often inhibited and weakened in forward-head posture. Builds postural endurance without disc loading.",
    startingPosition:
      "Sit or lie on your back. Relax your shoulders. Place your hand on your forehead, just above the eyebrows.",
    instructions: [
      "Press your forehead gently into your hand as if you are trying to flex your neck.",
      "Do NOT allow your head to move — this is purely isometric contraction.",
      "Hold this light, steady pressure for 10–20 seconds.",
      "Breathe continuously; do not hold your breath.",
      "Rest for a few seconds, then repeat for 2–3 sets.",
    ],
    breathing: "Breathe steadily throughout — never hold your breath during isometric work.",
    cues: "Light pressure, steady, head stays completely still.",
    commonMistakes:
      "Allowing the head to flex forward; not maintaining steady pressure; holding the breath.",
    safety:
      "This exercise is extremely safe. Keep the pressure light and the movement absent. Stop immediately if you feel sharp pain.",
    regression: "Reduce pressure or hold time to 5–10 seconds.",
    progression: "Increase hold duration to 30–45 seconds, or add a light resistance band.",
    equipment: [],
    difficulty: "beginner",
    level: "beginner",
    status: "source_checked",
    primaryMuscles: ["sternocleidomastoid", "scalenes"],
    joints: [
      { jointSlug: "cervical-intervertebral-joints", jointAction: "isometric stabilization" },
      { jointSlug: "atlantoaxial-joint", jointAction: "isometric stabilization" },
    ],
    citations: [
      { sourceSlug: NIAMS, claim: "Isometric neck flexor exercises build endurance of the deep cervical stabilizers and are effective for neck pain management.", locator: "Neck Pain Information" },
    ],
  },
  {
    slug: "chin-tuck-nod",
    name: "Chin tuck and nod",
    altNames: "Chin tuck with nod",
    simpleExplanation:
      "Gently glide your chin straight back, then perform a small, slow nodding motion — an active postural retraining exercise.",
    purpose:
      "Corrects forward-head posture and retrains the deep cervical flexors. Combines gentle flexion with postural awareness.",
    startingPosition:
      "Stand or sit with good posture. Look straight ahead. Relax your shoulders.",
    instructions: [
      "Gently glide your chin straight back (as if making a double chin) without tilting your head.",
      "You should feel the back of your neck lengthen.",
      "Hold the chin tuck for 1 second.",
      "Keeping your chin tucked, gently nod your head as if saying 'yes' — a small, slow movement.",
      "Return to neutral and repeat.",
      "Perform 12–15 slow repetitions, 2–3 sets, 3–5 days per week.",
    ],
    breathing: "Breathe normally throughout.",
    cues: "Tuck, lengthen, nod slowly.",
    commonMistakes:
      "Tilting the head or looking up/down; pulling the chin too far back; moving too fast.",
    safety:
      "Move slowly and gently. If you feel any sharp pain (not normal muscular fatigue), stop and consult a healthcare provider.",
    progression:
      "Once this becomes easy (no fatigue by the end of 15 reps), hold the chin tuck position longer before nodding, or perform at a slower pace.",
    equipment: [],
    difficulty: "beginner",
    level: "beginner",
    status: "source_checked",
    primaryMuscles: ["sternocleidomastoid"],
    secondaryMuscles: ["splenius-capitis"],
    joints: [
      { jointSlug: "cervical-intervertebral-joints", jointAction: "gentle flexion with stabilization" },
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The deep cervical flexors are key to correcting forward-head posture.", locator: "Ch. 11.6 Muscles of the Head, Neck, and Spine" },
    ],
  },
  {
    slug: "gentle-neck-rotations",
    name: "Gentle neck rotations",
    altNames: "Slow head turns, neck rotation mobility",
    simpleExplanation:
      "Slowly turn your head side to side through a full, comfortable range of motion — a mobility drill for maintaining rotational freedom.",
    purpose:
      "Improves rotational mobility and reverses the asymmetry caused by desk work and poor posture. Maintains balanced neck function.",
    startingPosition:
      "Stand or sit with good posture. Relax your shoulders. Look straight ahead.",
    instructions: [
      "Slowly turn your head to the right as far as comfortable.",
      "You should feel a gentle stretch on the left side of your neck (but NO sharp pain).",
      "Hold for 1–2 seconds at end range.",
      "Slowly return to center.",
      "Rotate to the left and repeat.",
      "Perform 10–12 rotations each direction, 2–3 sets, daily.",
      "Move at a slow, controlled pace — do not bounce or force.",
    ],
    breathing: "Breathe steadily; exhale as you rotate.",
    cues: "Slow, smooth, stop at comfort, never forced.",
    commonMistakes:
      "Bouncing or forcing the stretch; rotating past the point of comfort; moving too fast.",
    safety:
      "Never force rotation into pain. Gentle mobility work is therapeutic; aggressive stretching is not.",
    progression:
      "Once full, pain-free rotation is achieved, hold end-range positions longer (5–10 seconds) or add light resistance band tension.",
    equipment: [],
    difficulty: "beginner",
    level: "beginner",
    status: "source_checked",
    primaryMuscles: ["sternocleidomastoid"],
    secondaryMuscles: ["scalenes", "splenius-capitis"],
    joints: [
      { jointSlug: "atlantoaxial-joint", jointAction: "rotation" },
      { jointSlug: "cervical-intervertebral-joints", jointAction: "rotation" },
    ],
    citations: [
      { sourceSlug: NIAMS, claim: "Gentle rotational exercises are effective for maintaining neck range of motion and managing stiffness.", locator: "Neck Pain Information" },
    ],
  },
];

export const headNeckLessons: LessonSeed[] = [
  {
    slug: "head-neck-region-overview",
    title: "The Head & Neck: An Overview",
    summary: "The muscles that move and stabilize the head, and why posture matters so much for neck health.",
    moduleSlug: "the-head-neck",
    bodyRegionSlug: "head-neck",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["forearms-hands-region-overview"],
    assetSlugs: ["head-neck-region"],
    safetyNotes:
      "Neck pain that doesn't improve in a few days, radiating pain into the arm, severe headaches, or loss of coordination after an injury requires immediate medical evaluation. A trainer coaches posture and gentle mobility; they do NOT perform neck manipulation or diagnosis.",
    objectives: [
      "Name the primary muscles of the neck and their actions: flexion, extension, rotation, and lateral flexion.",
      "Explain how forward-head posture overloads the cervical discs and shortens the upper trapezius.",
      "Describe the role of deep cervical flexors in postural stability and why they're often inhibited.",
    ],
    bodyMarkdown: `
## The Neck Is a Stability Challenge

The cervical spine (neck) is the thinnest and most mobile part of your spine. It has to do two contradictory jobs:

1. **Hold a 10–12 pound head** up against gravity all day long.
2. **Move that head** in all directions — forward, backward, side to side, and rotating.

Because the neck is small and the head is heavy, the neck's muscles are **always working** to keep the head balanced over the spine. When you sit poorly (head forward, shoulders rounded), you force these muscles to work much harder than they're designed to.

## Forward-Head Posture: The Silent Destroyer

In **forward-head posture** (FHP), your head migrates forward, in front of your shoulders. This is one of the most common postural faults and a major driver of neck pain.

**Why is this so damaging?**

- A 1-inch forward shift of the head creates an extra **10 pounds of leverage** on the neck (biomechanical disadvantage).
- The neck flexors (sternocleidomastoid and scalenes) are stretched and inhibited.
- The neck extensors (splenius capitis and upper trapezius) are overworked, shortened, and tight.
- The cervical intervertebral discs are compressed anteriorly (toward the front), increasing disc herniation risk.

**How it starts:** Desk work, phone use (text neck), and poor sleep positioning all promote FHP.

## How to Recognize Bad Posture

Stand sideways to a mirror. Draw a vertical line from your ear:

- **Good posture:** The line passes through the middle of your shoulder.
- **Forward-head posture:** The line passes *in front* of your shoulder.

## The Deep Cervical Flexors: Your Postural Heroes

Most of the neck's muscles are **superficial** — the sternocleidomastoid and scalenes are easy to see and tighten up. But there is a deeper layer of small muscles (the **deep cervical flexors**) that are largely hidden. These deep flexors:

- Stabilize the cervical spine against perturbation.
- Are inhibited and weakened by forward-head posture.
- Are the TARGET of effective posture-correction training.

**The solution:** Reactivate and strengthen the deep cervical flexors via gentle isometric holds and chin-tuck exercises.

## The Posture-Breathing Link

Slouching compresses your rib cage and makes breathing harder. The scalene muscles (which assist in inspiration) are already overworked in poor posture. Result: **shallow breathing**, less oxygen, and more upper-trapezius tension as your body recruits accessory muscles to breathe.

Standing tall and taking deep breaths is not just good for your spine — it's essential for whole-body function.

## Key Takeaway

Neck health is not about strength (the neck doesn't need a barbell). It's about **awareness and postural endurance**. Every hour at your desk, reset your head over your shoulders and take a few deep breaths. Small, frequent corrections beat infrequent heroic stretching.
`,
    vocabularyTerms: [
      "cervical-spine",
      "cervical-vertebrae",
      "sternocleidomastoid",
      "scalenes",
      "deep-cervical-flexors",
      "forward-head-posture",
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Cervical vertebrae are the smallest and most mobile vertebrae; forward-head posture increases compression and disc load.", locator: "Ch. 7.3 Vertebral Column" },
      { sourceSlug: NIAMS, claim: "Forward-head posture is a major risk factor for chronic neck pain; postural retraining and deep cervical flexor strengthening are effective treatments.", locator: "Neck Pain Information" },
    ],
  },
  {
    slug: "neck-mobility-stability-safety",
    title: "Neck Mobility, Stability, and Safe Loading",
    summary: "Safe ranges of motion, how to avoid injury, and why isometric holds matter more than stretching.",
    moduleSlug: "the-head-neck",
    bodyRegionSlug: "head-neck",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 2,
    prerequisiteSlugs: ["head-neck-region-overview"],
    assetSlugs: ["head-neck-region"],
    safetyNotes:
      "Never force the neck into range of motion. Gentle mobility work is therapeutic; aggressive or ballistic stretching can strain ligaments. Avoid behind-the-neck exercises under load.",
    objectives: [
      "Identify the safe range of motion for each neck movement (flexion, extension, rotation, lateral flexion).",
      "Explain why heavy loaded neck flexion increases disc-herniation risk.",
      "Describe how tight scalenes can compress nerves and blood vessels (thoracic outlet syndrome).",
    ],
    bodyMarkdown: `
## The Neck's Range of Motion

The cervical spine allows:

| Movement | Range | Key Joint |
|----------|-------|-----------|
| Flexion (chin to chest) | ~45° | Cervical intervertebral joints |
| Extension (look up) | ~45° | Cervical intervertebral joints |
| Lateral flexion (ear to shoulder) | ~45° | Cervical intervertebral joints |
| Rotation (turn head) | ~80° total (40° each side) | Atlantoaxial joint (C1–C2 is responsible for ~50%) |

All of these ranges are **pain-free in healthy individuals**. If you cannot achieve them, or if you feel pain in any of these directions, that's a red flag.

## Why the Neck Needs Stability Training (Not Just Stretching)

The deep cervical flexors (mentioned in Lesson 1) are the linchpin of neck health. Yet they're rarely targeted in typical "neck exercises." Why?

- They're small and act via **static contraction** (isometric holds), not dynamic movement.
- They don't "bulk up" visibly, so they're overlooked in strength training.
- But they're the **primary defense** against disc injury and postural collapse.

**The take-home:** Gentle, sustained isometric work on the deep cervical flexors is more valuable than aggressive stretching.

## The Cervical Disc Herniation Risk

The intervertebral discs between the cervical vertebrae (C2–C7) are under constant stress. When you flex your neck (chin to chest), the anterior (front) part of the disc is compressed and the posterior (back) bulges. Repeated, heavy flexion or forward-head posture increases disc herniation risk.

**Safe practice:**
- Keep heavy neck flexion to a minimum.
- Avoid loaded neck flexion (holding weight while the neck is flexed).
- Balance flexion work with gentle extension and mobility.

## The "No Behind-the-Neck" Rule

Certain exercises (behind-the-neck pulldowns, behind-the-neck lat pulldowns, behind-the-neck shoulder presses) force the neck into combined flexion + extension + rotation under load. This is a recipe for disc injury.

**Safer alternatives:**
- Pull-ups or lat pulldowns in front of the body (chest-height).
- Shoulder press with the bar in front of the body (not behind).

## Whiplash and Sudden Movements

The cervical spine is vulnerable to whiplash injury — rapid acceleration/deceleration of the head (car accidents, contact sports, falling). Even a slow fall that jerks the neck can strain ligaments and muscles.

**Recovery:** Rest, gentle mobility (once acute pain subsides), and gradual strengthening under guidance.

## The Scalene Compression Syndrome

Chronically tight scalene muscles can compress the **brachial plexus** (nerves to the arm) or the **subclavian artery** (blood vessel to the arm), causing:

- Numbness or tingling in the arm or hand.
- Weakness or clumsiness in the hand.
- A cold or pale hand.
- Shoulder or neck pain that radiates down the arm.

This condition is called **thoracic outlet syndrome (TOS)** and is more common than many realize. Treatment involves scalene mobility and postural retraining, not aggressive stretching.

## Key Takeaway

The neck is built for **mobility and stability**, not strength. The safest, most effective training emphasizes:

1. **Isometric stability** (holds) of the deep cervical flexors.
2. **Gentle mobility** (controlled rotations and lateral flexions).
3. **Postural awareness** (keeping the head over the shoulders).
4. **Breathing and relaxation** (releasing unnecessary tension).

Heavy loading of the neck is rarely necessary and often counterproductive.
`,
    vocabularyTerms: [
      "cervical-intervertebral-joints",
      "atlantoaxial-joint",
      "deep-cervical-flexors",
      "intervertebral-disc",
      "brachial-plexus",
      "thoracic-outlet-syndrome",
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Cervical discs are most vulnerable to herniation under flexion and repetitive loading; the atlantoaxial joint allows ~50% of head rotation.", locator: "Ch. 7.3 Vertebral Column" },
      { sourceSlug: NIAMS, claim: "Thoracic outlet syndrome can be caused by scalene muscle tightness; conservative treatment with postural retraining and mobility work is effective.", locator: "Thoracic Outlet Syndrome Information" },
    ],
  },
];

export const headNeckQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "In forward-head posture, the cervical discs are compressed anteriorly (at the front). Over time, this increases the risk of which problem?",
    explanation: "Anterior disc compression in forward-head posture increases strain on the front of the disc, elevating herniation risk over time.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "head-neck-region-overview",
    muscleSlug: "sternocleidomastoid",
    bodyRegionSlug: "head-neck",
    domainCode: "D1",
    options: [
      { text: "Disc herniation", isCorrect: true, rationale: "Anterior disc compression in forward-head posture directly increases herniation risk." },
      { text: "Posterior disc bulge only", rationale: "Forward-head posture compresses anteriorly, not posteriorly." },
      { text: "Scalene syndrome", rationale: "While related, scalene tightness is a consequence, not the primary mechanism." },
      { text: "Shoulder impingement", rationale: "This is a different joint problem, not directly caused by cervical disc loading." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Forward-head posture increases anterior load on cervical discs.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which of these muscles is often INHIBITED (weakened and stretched) in forward-head posture?",
    explanation: "Forward-head posture lengthens and weakens the deep cervical flexors, which are crucial for postural stability.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "head-neck-region-overview",
    muscleSlug: "scalenes",
    bodyRegionSlug: "head-neck",
    domainCode: "D1",
    options: [
      { text: "Deep cervical flexors", isCorrect: true, rationale: "Stretched and inhibited by forward-head posture; reactivating them is key to correction." },
      { text: "Upper trapezius", rationale: "The upper trapezius is typically OVERACTIVE and tight in FHP." },
      { text: "Sternocleidomastoid", rationale: "The SCM is often shortened and overactive in FHP." },
      { text: "Splenius capitis", rationale: "The splenius is often overworked and tight in FHP." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "The deep cervical flexors are inhibited in forward-head posture and must be reactivated for correction.", locator: "Neck Pain Information" }],
  },
  {
    type: "multiple_choice",
    prompt: "Approximately how much extra leverage (increased mechanical load) does a 1-inch forward head shift create on the neck?",
    explanation: "Biomechanical studies demonstrate that a 1-inch forward head shift multiplies the effective weight load on the neck by roughly 10 pounds.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "head-neck-region-overview",
    muscleSlug: "sternocleidomastoid",
    bodyRegionSlug: "head-neck",
    domainCode: "D2",
    options: [
      { text: "10 pounds of extra force", isCorrect: true, rationale: "Biomechanical studies show roughly 10 pounds of additional leverage per inch forward — this is why even small postural corrections matter." },
      { text: "2–3 pounds of extra force", rationale: "This underestimates the biomechanical disadvantage." },
      { text: "5–7 pounds of extra force", rationale: "Forward-head posture creates even more mechanical disadvantage than this." },
      { text: "15+ pounds of extra force", rationale: "While harmful, 1 inch creates closer to 10 pounds, not more." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Forward-head posture significantly increases mechanical load on the cervical spine.", locator: "Ch. 7.3" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which of these is a common driver of forward-head posture in modern life?",
    explanation: "Text neck (excessive phone/screen time looking down) and poor desk setup are leading causes of FHP.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "head-neck-region-overview",
    bodyRegionSlug: "head-neck",
    domainCode: "D1",
    options: [
      { text: "Desk work with screen too low + excessive phone use", isCorrect: true, rationale: "Text neck and low-screen positions are classic FHP drivers." },
      { text: "Too much neck-extension exercise", rationale: "Extension exercises do not cause forward-head posture." },
      { text: "Weak upper trapezius", rationale: "The upper trapezius is overactive in FHP, not weak." },
      { text: "Tight scalenes alone", rationale: "Scalene tightness results from poor posture, not the cause." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Desk posture and phone use are major contributors to forward-head posture.", locator: "Neck Pain Information" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the approximate range of motion for neck rotation (turning the head side to side) in a healthy individual?",
    explanation: "A healthy neck can rotate roughly 40° to each side (80° total). The atlantoaxial joint (C1–C2) accounts for about half of this.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "neck-mobility-stability-safety",
    muscleSlug: "sternocleidomastoid",
    bodyRegionSlug: "head-neck",
    domainCode: "D2",
    options: [
      { text: "80° total (roughly 40° each side)", isCorrect: true, rationale: "Healthy neck rotation is about 40° each direction. The atlantoaxial joint alone allows roughly 50% of total rotation." },
      { text: "20° total", rationale: "This is far too limited; healthy necks have much greater range." },
      { text: "45° total", rationale: "45° is closer to flexion/extension range, not rotation." },
      { text: "120° total", rationale: "This overestimates rotational range." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The atlantoaxial joint allows approximately 50% of head rotation; combined with lower cervical joints, total rotation is roughly 80°.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which of the following exercises is a biomechanical 'red flag' and should be avoided?",
    explanation: "Behind-the-neck exercises combine flexion, extension, and rotation under load — a biomechanically unsafe combination.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "neck-mobility-stability-safety",
    bodyRegionSlug: "head-neck",
    domainCode: "D2",
    options: [
      { text: "Behind-the-neck pulldowns under load", isCorrect: true, rationale: "This combines multiple stressful neck movements under load, increasing injury risk significantly." },
      { text: "Chin tucks", rationale: "Chin tucks are excellent for postural correction and widely recommended." },
      { text: "Gentle neck rotations", rationale: "Gentle rotations are safe and therapeutic." },
      { text: "Isometric neck flexion holds", rationale: "Isometric holds are very safe and often prescribed by physical therapists." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Behind-the-neck exercises are biomechanically poor and increase injury risk.", locator: "Neck Pain Information" }],
  },
  {
    type: "multiple_choice",
    prompt: "Numbness, tingling, or coldness radiating into the arm might indicate which condition involving the neck?",
    explanation: "Tight scalene muscles can compress the brachial plexus (nerves) or subclavian artery, causing this pattern of symptoms.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "neck-mobility-stability-safety",
    muscleSlug: "scalenes",
    bodyRegionSlug: "head-neck",
    domainCode: "D2",
    options: [
      { text: "Thoracic outlet syndrome (TOS)", isCorrect: true, rationale: "Tight scalenes compress the brachial plexus or subclavian vessels, causing arm numbness, tingling, or coldness." },
      { text: "Weak scalene muscles", rationale: "Weakness alone doesn't cause radiating neurological symptoms." },
      { text: "Poor neck posture only", rationale: "While posture contributes, radiating symptoms indicate nerve/vessel compression." },
      { text: "Tight sternocleidomastoid", rationale: "SCM tightness alone doesn't typically cause arm symptoms." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Scalene muscle tightness can cause thoracic outlet syndrome with arm symptoms.", locator: "Thoracic Outlet Syndrome Information" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which joint is responsible for approximately 50% of total head rotation (turning the head side to side)?",
    explanation: "The atlantoaxial joint (C1–C2) is a specialized pivot joint that alone accounts for roughly 50% of rotation.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "neck-mobility-stability-safety",
    bodyRegionSlug: "head-neck",
    domainCode: "D2",
    options: [
      { text: "Atlantoaxial joint (C1–C2)", isCorrect: true, rationale: "This pivot joint is specialized for rotation and accounts for roughly 50% of all head rotation by itself." },
      { text: "Cervical intervertebral joints (C2–C7)", rationale: "These contribute, but the atlantoaxial joint accounts for the majority." },
      { text: "Occipital-atlas joint", rationale: "This joint allows some motion, but not the majority of rotation." },
      { text: "Shoulder joint", rationale: "The shoulder joint is not involved in head rotation." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The atlantoaxial joint allows approximately 50% of head rotation due to its pivot structure.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "In an isometric neck flexion hold, what is the primary goal?",
    explanation: "Isometric work activates the deep cervical flexors without any movement, which is safe and therapeutic for postural retraining.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "head-neck-region-overview",
    exerciseSlug: "isometric-neck-flexion-hold",
    bodyRegionSlug: "head-neck",
    domainCode: "D1",
    options: [
      { text: "Create muscle tension WITHOUT moving the head", isCorrect: true, rationale: "Isometric holds activate the deep cervical flexors (which are often inhibited) safely, without loaded flexion." },
      { text: "Flex the neck as far as possible", rationale: "Isometric means NO movement occurs; the head stays completely still." },
      { text: "Rotate the head side to side rapidly", rationale: "That would be dynamic rotation, not an isometric hold." },
      { text: "Extend the neck backward", rationale: "An isometric flexion hold targets flexors, not extensors." },
    ],
    citations: [{ sourceSlug: NIAMS, claim: "Isometric neck flexor exercises are safe and effective for activating deep cervical stabilizers.", locator: "Neck Pain Information" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which neck movement should be MINIMIZED under load (with added weight) due to increased disc-herniation risk?",
    explanation: "Neck flexion compresses the anterior part of the cervical discs. Heavy or loaded flexion significantly increases herniation risk.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "neck-mobility-stability-safety",
    bodyRegionSlug: "head-neck",
    domainCode: "D2",
    options: [
      { text: "Neck flexion", isCorrect: true, rationale: "Flexion compresses the anterior cervical discs. Loaded flexion should be avoided." },
      { text: "Neck extension", rationale: "Extension is relatively safe and actually decompresses the discs." },
      { text: "Neck rotation", rationale: "Rotation is generally safe." },
      { text: "Shoulder elevation (shrug)", rationale: "Shrugs involve the trapezius, not direct cervical disc loading." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Cervical disc herniation risk is elevated with loaded flexion movements.", locator: "Ch. 7.3 Vertebral Column" }],
  },
];
