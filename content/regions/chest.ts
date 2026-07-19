import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// CHEST region — full-depth content module (same pattern every region follows).
// Facts come from standard descriptions in OpenStax Anatomy & Physiology 2e:
//   Ch. 11.5 "Muscles of the Pectoral Girdle and Upper Limbs" (pec major/minor, serratus)
//   Ch. 11.4 "Axial Muscles ... of Respiration" (diaphragm, intercostals)
// Each muscle carries a citation. Status is "source_checked" for basic facts.

const OPENSTAX = "openstax-anp-2e";

export const chestRegion: BodyRegionSeed = {
  slug: "chest",
  name: "Chest",
  order: 2,
  description:
    "The chest (thorax) is the front of the upper torso. It is built on the rib cage and sternum, and its muscles do two big jobs: they power pushing movements of the arms (mainly the pectoralis major) and they drive breathing (the diaphragm and the muscles between the ribs).",
  relationships:
    "The chest works closely with the **shoulder** (the pectoralis major crosses to the arm and helps pushing), the **upper back** (which must allow the shoulder blades to glide as you press), and the **core** (which stabilizes the torso during pressing). Breathing links the chest to the whole trunk.",
  safetyNotes:
    "Chest pain is never something to 'train through' — chest pain, pressure, shortness of breath, dizziness, or pain spreading to the arm/jaw are medical warning signs and need urgent care. A trainer teaches pressing technique; they do not assess chest pain.",
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The muscles of the thorax include the pectoralis major/minor and serratus anterior (acting on the shoulder) and the diaphragm and intercostals (acting in breathing).",
      locator: "Ch. 11.4 & 11.5",
    },
  ],
  bones: [
    {
      slug: "sternum",
      name: "Sternum",
      latinName: "Sternum",
      description: "The breastbone — a flat bone in the middle front of the chest that the ribs and collarbones attach to.",
      landmarks: "Manubrium, body, xiphoid process; the sternal angle is a useful surface landmark.",
    },
    {
      slug: "ribs",
      name: "Ribs",
      latinName: "Costae",
      description: "Twelve pairs of curved bones that form the rib cage, protecting the heart and lungs and providing attachment for chest and breathing muscles.",
      landmarks: "True ribs (1–7), false ribs (8–10), floating ribs (11–12); costal cartilages connect most ribs to the sternum.",
    },
    {
      slug: "costal-cartilage",
      name: "Costal cartilage",
      description: "Bars of cartilage that connect the ribs to the sternum, letting the rib cage flex and expand as you breathe.",
    },
  ],
  joints: [
    {
      slug: "sternocostal-joints",
      name: "Sternocostal joints",
      jointType: "cartilaginous / plane synovial",
      description: "Where the costal cartilages of the ribs meet the sternum, allowing the small movements of the rib cage during breathing.",
      articulatingBones: "Sternum and costal cartilages of the ribs",
      movementsAllowed: "Small gliding/rotation as the rib cage expands and recoils in breathing.",
    },
    {
      slug: "costovertebral-joints",
      name: "Costovertebral joints",
      jointType: "plane synovial",
      description: "Where the ribs meet the thoracic vertebrae at the back, guiding how the ribs swing up and out during inhalation.",
      articulatingBones: "Ribs and thoracic vertebrae",
      movementsAllowed: "Gliding/rotation that raises and lowers the ribs in breathing.",
    },
  ],
  muscles: [
    {
      slug: "pectoralis-major",
      commonName: "Pectoralis major",
      scientificName: "Pectoralis major",
      pronunciation: "pek-tor-AL-iss MAY-jor",
      locationSimple: "The large fan-shaped muscle across the front of the chest.",
      origin: "Clavicle, sternum, and cartilage of the upper ribs.",
      insertion: "Greater tubercle / intertubercular groove of the humerus.",
      actions: "Flexes, adducts, and internally rotates the arm at the shoulder; a strong horizontal adductor (drawing the arm across the body).",
      jointsCrossed: "Glenohumeral joint",
      movementPlane: "multiple",
      innervation: "Medial and lateral pectoral nerves (C5–T1)",
      functionDaily: "Pushing movements and drawing the arm across the body — pushing a door or a shopping cart, hugging.",
      functionExercise: "Prime mover in push-ups, bench press, chest press, and chest fly; assists in dips.",
      beginnerExplanation:
        "The main chest muscle. It powers pushing movements and pulls the arm toward and across the body. Even though we call it a 'chest' muscle, it actually acts on the arm at the shoulder.",
      advancedExplanation:
        "Its clavicular and sternocostal heads have different lines of pull, so incline vs. flat pressing emphasizes them differently. It is a strong internal rotator and horizontal adductor of the humerus.",
      commonlyConfused: "Confused with the deeper pectoralis minor, which moves the shoulder blade rather than the arm.",
      misconceptions: "Pushing exercises are compound: the chest works with the deltoids and triceps, not alone.",
      safetyInfo: "Very heavy pressing with a fully stretched shoulder can strain the pec tendon; control range and load.",
      status: "source_checked",
      assetSlugs: ["chest-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The pectoralis major flexes, adducts, and medially rotates the humerus and is a primary mover of arm flexion/horizontal adduction.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "pectoralis-minor",
      commonName: "Pectoralis minor",
      scientificName: "Pectoralis minor",
      pronunciation: "pek-tor-AL-iss MY-nor",
      locationSimple: "A small muscle beneath the pectoralis major, running from the upper ribs to the shoulder blade.",
      origin: "Ribs 3–5.",
      insertion: "Coracoid process of the scapula.",
      actions: "Draws the scapula forward and down (protraction and depression); helps with forced inhalation by raising the ribs when the scapula is fixed.",
      jointsCrossed: "Scapulothoracic articulation",
      movementPlane: "multiple",
      innervation: "Medial pectoral nerve (C8–T1)",
      functionDaily: "Helps position the shoulder blade for reaching forward and down.",
      functionExercise: "Stabilizer of the scapula during pressing and dips.",
      beginnerExplanation:
        "A small muscle hidden under the big chest muscle. Instead of moving the arm, it tilts and pulls the shoulder blade forward and down.",
      advancedExplanation:
        "A tight pectoralis minor can anteriorly tilt the scapula and contribute to rounded-shoulder posture and impingement-type symptoms, which is why chest-opening mobility is often programmed.",
      commonlyConfused: "Confused with the pectoralis major — the major moves the arm, the minor moves the scapula.",
      misconceptions: "It is not a big 'mass' muscle; its importance is postural and stabilizing.",
      safetyInfo: "Chronic tightness may relate to rounded-shoulder posture; persistent shoulder symptoms should be professionally assessed.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The pectoralis minor moves the scapula (protraction/depression) and assists respiration.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "serratus-anterior",
      commonName: "Serratus anterior",
      scientificName: "Serratus anterior",
      pronunciation: "ser-AY-tus an-TEER-ee-or",
      locationSimple: "A fan-shaped muscle along the side of the rib cage, under the arm.",
      origin: "Outer surfaces of ribs 1–8/9.",
      insertion: "Medial (inner) border of the scapula, on its rib-cage side.",
      actions: "Protracts the scapula (pulls it forward) and, crucially, upwardly rotates it so the arm can reach overhead; holds the scapula flat against the rib cage.",
      jointsCrossed: "Scapulothoracic articulation",
      movementPlane: "multiple",
      innervation: "Long thoracic nerve (C5–C7)",
      functionDaily: "Reaching and pushing forward; keeping the shoulder blade stable when you carry or press.",
      functionExercise: "Key stabilizer in push-ups and pressing; prime mover in scapular protraction ('push-up plus').",
      beginnerExplanation:
        "Nicknamed the 'boxer's muscle' because it powers a forward punch. It pulls the shoulder blade forward and helps rotate it upward so you can lift your arm overhead safely.",
      advancedExplanation:
        "It forms a force couple with the trapezius to upwardly rotate the scapula during arm elevation. Weakness causes 'scapular winging' (the inner edge of the blade lifting off the rib cage).",
      commonlyConfused: "Confused with the intercostals because of its serrated look along the ribs — but the serratus moves the scapula.",
      misconceptions: "It is not just an aesthetic muscle; it is essential for healthy overhead motion.",
      safetyInfo: "Winging of the shoulder blade or loss of overhead motion should be professionally assessed.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The serratus anterior protracts and upwardly rotates the scapula and holds it against the thoracic wall.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
      ],
    },
    {
      slug: "diaphragm",
      commonName: "Diaphragm",
      scientificName: "Diaphragm",
      pronunciation: "DY-uh-fram",
      locationSimple: "A dome-shaped sheet of muscle at the bottom of the rib cage, separating the chest from the abdomen.",
      origin: "Lower ribs, sternum (xiphoid process), and lumbar vertebrae.",
      insertion: "Central tendon of the diaphragm.",
      actions: "The main muscle of breathing: it flattens and descends to draw air into the lungs (inhalation).",
      jointsCrossed: "—",
      movementPlane: "—",
      innervation: "Phrenic nerve (C3–C5)",
      functionDaily: "Every breath. Also contributes to core pressure (bracing) and stability.",
      functionExercise: "Breathing and intra-abdominal pressure during lifting; 'breathe out on effort' cues relate to it.",
      beginnerExplanation:
        "Your main breathing muscle. When it tightens it drops down like a piston, pulling air into your lungs; when it relaxes, air flows out.",
      advancedExplanation:
        "The diaphragm co-contracts with the abdominal wall and pelvic floor to generate intra-abdominal pressure, contributing to spinal stability during loaded tasks (the basis of the 'brace and breathe' cue).",
      commonlyConfused: "Confused with the abdominal muscles; the diaphragm is deeper and is primarily a breathing muscle.",
      misconceptions: "You cannot 'train the diaphragm' like a biceps curl, but breathing mechanics can be practiced.",
      safetyInfo: "Holding the breath under heavy load (Valsalva) raises blood pressure; general exercisers should usually exhale on effort. People with cardiovascular conditions should follow professional guidance.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The diaphragm is the primary muscle of inspiration; contracting it increases the volume of the thoracic cavity.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall and Thorax" },
      ],
    },
    {
      slug: "intercostals",
      commonName: "Intercostal muscles",
      scientificName: "Musculi intercostales (externi & interni)",
      pronunciation: "in-ter-KOS-tul",
      locationSimple: "Short muscles filling the spaces between the ribs.",
      origin: "Lower border of each rib.",
      insertion: "Upper border of the rib below.",
      actions: "External intercostals help raise the ribs for inhalation; internal intercostals help lower them for forced exhalation. Together they stiffen the chest wall.",
      jointsCrossed: "Costovertebral / sternocostal joints",
      movementPlane: "—",
      innervation: "Intercostal nerves (T1–T11)",
      functionDaily: "Assist breathing, especially deeper or faster breathing.",
      functionExercise: "Support forceful breathing during hard effort and stabilize the trunk.",
      beginnerExplanation:
        "The little muscles between your ribs. One set helps lift the ribs to breathe in; another set helps pull them down to breathe out hard.",
      advancedExplanation:
        "The external intercostals are more active in inspiration; the internal (and innermost) intercostals assist active expiration. They also provide chest-wall rigidity that aids trunk stability.",
      commonlyConfused: "Confused with the serratus anterior, which lies more to the side and moves the scapula.",
      misconceptions: "They are not major 'movement' muscles for exercises; their main role is breathing and chest-wall support.",
      safetyInfo: "Sharp rib or breathing pain (e.g. after a fall) needs medical assessment, not exercise.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "External intercostals aid inspiration and internal intercostals aid forced expiration by moving the ribs.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall and Thorax" },
      ],
    },
  ],
};

export const chestMovements: MovementSeed[] = [
  {
    slug: "shoulder-horizontal-adduction",
    name: "Shoulder horizontal adduction",
    description: "With the arm raised to shoulder height, moving it across the front of the body (as in a chest fly or the pushing phase of a bench press).",
    plane: "transverse",
    axis: "longitudinal (vertical)",
    jointAction: "Horizontal adduction at the glenohumeral joint",
    oppositeSlug: "shoulder-horizontal-abduction",
  },
  {
    slug: "shoulder-horizontal-abduction",
    name: "Shoulder horizontal abduction",
    description: "With the arm raised to shoulder height, moving it out to the side and back (as in a reverse fly or the lowering phase of a chest fly).",
    plane: "transverse",
    axis: "longitudinal (vertical)",
    jointAction: "Horizontal abduction at the glenohumeral joint",
    oppositeSlug: "shoulder-horizontal-adduction",
  },
  {
    slug: "scapular-protraction",
    name: "Scapular protraction",
    description: "Sliding the shoulder blades forward around the rib cage (reaching forward). Driven mainly by the serratus anterior.",
    plane: "transverse",
    axis: "—",
    jointAction: "Protraction at the scapulothoracic articulation",
    oppositeSlug: "scapular-retraction",
  },
  {
    slug: "scapular-retraction",
    name: "Scapular retraction",
    description: "Squeezing the shoulder blades back and together. Driven mainly by the rhomboids and middle trapezius.",
    plane: "transverse",
    axis: "—",
    jointAction: "Retraction at the scapulothoracic articulation",
    oppositeSlug: "scapular-protraction",
  },
];

export const chestExercises: ExerciseSeed[] = [
  {
    slug: "barbell-bench-press",
    name: "Barbell Bench Press",
    altNames: "Flat bench press",
    simpleExplanation: "Lying on a bench, lowering a barbell to the chest and pressing it back up.",
    purpose: "A foundational horizontal push for chest, front-shoulder, and triceps strength.",
    startingPosition: "Lie on a flat bench, feet planted, shoulder blades pulled back and down, gripping the bar slightly wider than shoulder-width, bar over the upper chest.",
    instructions: [
      "Keep the shoulder blades retracted and down against the bench.",
      "Lower the bar under control to the lower-chest/sternum area, elbows at roughly a 45–75° angle to the torso.",
      "Press the bar up and slightly back toward the shoulders until the arms are straight.",
      "Keep the wrists stacked over the elbows throughout.",
    ],
    breathing: "Inhale and brace as you lower; exhale as you press up.",
    cues: "\"Bend the bar, tuck the elbows, drive the feet.\" A spotter is recommended for heavier loads.",
    commonMistakes: "Flaring the elbows straight out to 90°; bouncing the bar off the chest; hips lifting off the bench; uneven press.",
    safety: "Use a spotter or safety pins. Do not lift beyond controllable load. Shoulder pain during pressing warrants regression or assessment.",
    regression: "Dumbbell bench press (more shoulder-friendly range) or push-up.",
    progression: "Add load gradually, or pause reps at the chest.",
    alternatives: "Dumbbell bench press, machine chest press, push-up.",
    whyItWorks: "It loads the pectoralis major (with the front deltoid and triceps) through a large horizontal-push range while the whole body stabilizes — an efficient way to build pressing strength.",
    benefitsWho: "People building upper-body pushing strength who can set up and control the barbell safely.",
    cautionWho: "Those with shoulder pain in pressing, or without a spotter/safety setup, should regress or substitute.",
    equipment: ["barbell", "bench"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "horizontal-push",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "transverse",
    status: "source_checked",
    assetSlugs: ["chest-region"],
    primaryMuscles: ["pectoralis-major"],
    secondaryMuscles: ["deltoid"],
    stabilizerMuscles: ["serratus-anterior", "subscapularis"],
    joints: [{ jointSlug: "glenohumeral-joint", jointAction: "horizontal adduction / flexion" }],
    movements: ["shoulder-horizontal-adduction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The pectoralis major (with anterior deltoid and triceps) is the prime mover of horizontal pushing of the arm.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "dumbbell-chest-fly",
    name: "Dumbbell Chest Fly",
    altNames: "Flat dumbbell fly",
    simpleExplanation: "Lying on a bench, opening the arms out to the sides with a slight elbow bend, then bringing the dumbbells back together over the chest.",
    purpose: "Isolates the pectoralis major through horizontal adduction with less triceps involvement than pressing.",
    startingPosition: "Lie on a flat bench holding a dumbbell in each hand above the chest, palms facing each other, elbows slightly bent.",
    instructions: [
      "Keeping a fixed slight elbow bend, lower the dumbbells out to the sides in a wide arc.",
      "Stop when you feel a comfortable stretch across the chest (about level with the torso).",
      "Bring the dumbbells back together over the chest, squeezing the chest muscles.",
    ],
    breathing: "Inhale as you lower the arms; exhale as you bring them together.",
    cues: "\"Hug a big tree.\" Keep the elbow angle constant — the movement is at the shoulder, not the elbow.",
    commonMistakes: "Turning it into a press by bending the elbows; going too deep or too heavy and straining the shoulder; shrugging.",
    safety: "Use a moderate weight; the stretched position is where the shoulder is most vulnerable. Reduce range if it pinches.",
    regression: "Reduce range/weight, or use a machine (pec deck) for a guided path.",
    progression: "Slow the lowering phase or add a brief pause in the stretched position with controlled load.",
    alternatives: "Cable crossover, pec-deck machine.",
    whyItWorks: "By keeping the elbows fixed, the movement happens almost entirely at the shoulder as horizontal adduction — the pectoralis major's specialty — so it targets the chest with little triceps help.",
    benefitsWho: "People wanting to emphasize the chest with a joint-friendly moderate load.",
    cautionWho: "Those with shoulder pain in the stretched position should limit range or substitute.",
    equipment: ["dumbbells", "bench"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "isolation",
    setting: "both",
    unilateral: false,
    chain: "open",
    movementPlane: "transverse",
    status: "source_checked",
    primaryMuscles: ["pectoralis-major"],
    secondaryMuscles: ["deltoid"],
    joints: [{ jointSlug: "glenohumeral-joint", jointAction: "horizontal adduction" }],
    movements: ["shoulder-horizontal-adduction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Horizontal adduction of the arm is produced primarily by the pectoralis major.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "push-up-plus",
    name: "Push-Up Plus",
    altNames: "Scapular push-up (plus)",
    simpleExplanation: "A push-up with an extra push at the top that rounds the upper back slightly, spreading the shoulder blades apart.",
    purpose: "Strengthens the serratus anterior and trains healthy scapular protraction/upward rotation.",
    startingPosition: "Start in a push-up (or, to regress, a hands-elevated) plank position with a straight body.",
    instructions: [
      "Perform a normal push-up (optional — the 'plus' can be done from the top position alone).",
      "At the top, without bending the elbows, push the floor away further so your upper back rounds slightly and the shoulder blades spread apart.",
      "Reverse smoothly, letting the shoulder blades draw back together.",
    ],
    breathing: "Exhale on the push/protraction; inhale as you return.",
    cues: "\"Push the floor away and reach the upper back to the ceiling.\" Small, controlled range.",
    commonMistakes: "Bending the elbows to fake the movement; shrugging the neck; overarching the low back.",
    safety: "Keep the neck relaxed and the low back neutral. Stop if the shoulder pinches.",
    regression: "Perform against a wall or on hands elevated on a bench; or do the 'plus' on hands and knees.",
    progression: "Full push-up plus, or add a slow tempo.",
    alternatives: "Wall slides, serratus wall push, bear-crawl holds.",
    whyItWorks: "The 'plus' (scapular protraction) directly loads the serratus anterior, which is essential for stable, pain-free overhead and pressing mechanics and is often under-trained.",
    benefitsWho: "People wanting better shoulder-blade control and shoulder health, and those with 'winging' tendencies.",
    cautionWho: "Anyone with acute shoulder pain should get assessed before loading.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "horizontal-push",
    setting: "both",
    unilateral: false,
    chain: "closed",
    movementPlane: "transverse",
    status: "source_checked",
    primaryMuscles: ["serratus-anterior"],
    secondaryMuscles: ["pectoralis-major", "deltoid"],
    joints: [{ jointSlug: "glenohumeral-joint", jointAction: "flexion" }],
    movements: ["scapular-protraction"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The serratus anterior protracts and upwardly rotates the scapula and holds it against the thoracic wall.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
];

export const chestLessons: LessonSeed[] = [
  {
    slug: "chest-region-overview",
    title: "The Chest: An Overview",
    summary: "The rib cage and sternum, and the two big jobs of the chest muscles: pushing and breathing.",
    moduleSlug: "the-chest",
    bodyRegionSlug: "chest",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["chest-region"],
    safetyNotes:
      "Chest pain or pressure, shortness of breath, dizziness, or pain spreading to the arm or jaw are medical warning signs — seek urgent care. A trainer does not assess chest pain.",
    objectives: [
      "Name the bones of the chest (sternum, ribs, costal cartilage).",
      "Describe the two main roles of chest muscles: pushing the arms and breathing.",
      "Explain how the chest works with the shoulder and upper back.",
    ],
    bodyMarkdown: `## The frame: rib cage and sternum

The chest is built on the **rib cage** — twelve pairs of **ribs** curving around from the spine to the
**sternum** (breastbone) at the front, connected by flexible **costal cartilage**. This cage protects
the heart and lungs and gives chest and breathing muscles something to pull on.

## Two jobs, two muscle groups

Chest muscles do two very different things:

1. **Move the arms (pushing).** The **pectoralis major** is the big fan-shaped muscle you can see and
   feel. It powers pushing and pulls the arm across the body. The deeper **pectoralis minor** and the
   side-of-ribs **serratus anterior** position and stabilize the shoulder blade so pushing is smooth.
2. **Breathe.** The dome-shaped **diaphragm** at the base of the rib cage is your main breathing
   muscle, helped by the small **intercostals** between the ribs.

## Working with its neighbors

Pushing is never "chest only": the chest teams up with the **front deltoid** and **triceps** of the
arm, while the **upper back** lets the shoulder blades glide and the **core** keeps the torso stable.
This is why bench press and push-ups are *compound* movements.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The thorax is formed by the ribs, sternum, and costal cartilages; its muscles act on the arm/shoulder and in respiration.", locator: "Ch. 7.4 The Thoracic Cage; Ch. 11.4–11.5" },
    ],
  },
  {
    slug: "the-pectoralis-major-lesson",
    title: "The Pectoralis Major: Your Push Muscle",
    summary: "The main chest muscle — what it does and why pushing is a whole-team effort.",
    moduleSlug: "the-chest",
    bodyRegionSlug: "chest",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 2,
    prerequisiteSlugs: ["chest-region-overview"],
    objectives: [
      "Describe where the pectoralis major attaches and what it does.",
      "Explain horizontal adduction and which exercises use it.",
      "Explain why pushing exercises are compound, not chest-only.",
    ],
    bodyMarkdown: `## Where it is and what it does

The **pectoralis major** fans across the front of the chest, attaching to the **clavicle, sternum, and
upper ribs**, then narrowing to attach onto the **humerus** (upper arm bone). Because it crosses the
shoulder, a "chest" muscle actually **moves the arm**: it flexes, adducts, and internally rotates the
shoulder, and it is the main muscle of **horizontal adduction** — drawing the arm across the front of
the body.

## Which exercises use it

- **Horizontal push** (bench press, push-up, chest press) — the pec major drives the arm forward.
- **Chest fly / cable crossover** — nearly pure horizontal adduction, so it isolates the pec major.

## Not chest-only

A bench press looks like a "chest exercise," but the **front deltoid** and **triceps** help push while
the **serratus anterior** and rotator cuff stabilize the shoulder. Claiming an exercise trains only one
muscle is a classic oversimplification — real movements are team efforts.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The pectoralis major flexes, adducts, and medially rotates the humerus; horizontal pushing also uses the anterior deltoid and triceps.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" },
    ],
  },
  {
    slug: "breathing-muscles-lesson",
    title: "Breathing Muscles: The Diaphragm & Intercostals",
    summary: "How the chest moves air, and how breathing supports safe lifting.",
    moduleSlug: "the-chest",
    bodyRegionSlug: "chest",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 10,
    order: 3,
    prerequisiteSlugs: ["chest-region-overview"],
    safetyNotes:
      "Breath-holding under heavy load raises blood pressure. General exercisers should usually exhale on effort; people with cardiovascular or blood-pressure conditions should follow professional guidance.",
    objectives: [
      "Describe the diaphragm's role in breathing.",
      "Explain what the intercostals do.",
      "Connect breathing to core bracing and the 'exhale on effort' cue.",
    ],
    bodyMarkdown: `## The diaphragm: your breathing engine

The **diaphragm** is a dome of muscle under the lungs. When it contracts it **flattens and drops**,
enlarging the chest so air flows in (**inhalation**). When it relaxes, the chest recoils and air flows
out (**exhalation**). It is controlled by the **phrenic nerve**.

## The intercostals

The small **intercostal** muscles between the ribs help. The **external** intercostals raise the ribs
to assist breathing in; the **internal** intercostals help pull them down for a forceful breath out.

## Breathing and lifting

The diaphragm also helps stiffen the trunk. Together with the abdominal wall it builds **intra-abdominal
pressure** — the basis of "brace your core." A common, safe cue for general exercisers is to **exhale on
the effort** (e.g. as you press up). Prolonged breath-holding under heavy load (the Valsalva maneuver)
sharply raises blood pressure and is not appropriate for everyone.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The diaphragm is the primary muscle of inspiration; the external and internal intercostals assist inspiration and forced expiration respectively.", locator: "Ch. 11.4 Axial Muscles of the Abdominal Wall and Thorax" },
    ],
  },
];

export const chestQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which muscle is the prime mover in a chest fly (horizontal adduction of the arm)?",
    explanation: "A chest fly brings the arm across the front of the body — horizontal adduction — which is the pectoralis major's specialty. Keeping the elbow fixed minimizes triceps involvement.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-pectoralis-major-lesson",
    muscleSlug: "pectoralis-major",
    exerciseSlug: "dumbbell-chest-fly",
    bodyRegionSlug: "chest",
    domainCode: "D3",
    options: [
      { text: "Pectoralis major", isCorrect: true, rationale: "Correct — it is the main horizontal adductor of the arm." },
      { text: "Serratus anterior", rationale: "The serratus moves the scapula, not the arm across the body." },
      { text: "Diaphragm", rationale: "The diaphragm is a breathing muscle, not an arm mover." },
      { text: "Trapezius", rationale: "The trapezius moves the scapula (upper back), not horizontal adduction of the arm." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Horizontal adduction of the arm is produced primarily by the pectoralis major.", locator: "Ch. 11.5" }],
  },
  {
    type: "true_false",
    prompt: "The pectoralis major is a 'chest' muscle, but it actually moves the arm at the shoulder.",
    explanation: "True. Although it sits on the chest, the pectoralis major attaches to the humerus and acts on the shoulder joint (flexion, adduction, internal rotation, horizontal adduction).",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-pectoralis-major-lesson",
    muscleSlug: "pectoralis-major",
    bodyRegionSlug: "chest",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — it acts on the humerus at the shoulder." },
      { text: "False", rationale: "It does move the arm — it inserts on the humerus and crosses the shoulder." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The pectoralis major inserts on the humerus and acts at the glenohumeral joint.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Weakness of which muscle causes the inner edge of the shoulder blade to lift off the rib cage ('winging')?",
    explanation: "The serratus anterior holds the scapula flat against the rib cage and upwardly rotates it. When it is weak, the medial border wings off the thorax.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "chest-region-overview",
    muscleSlug: "serratus-anterior",
    bodyRegionSlug: "chest",
    domainCode: "D1",
    options: [
      { text: "Serratus anterior", isCorrect: true, rationale: "Correct — it holds the scapula against the rib cage." },
      { text: "Pectoralis major", rationale: "The pec major moves the arm; it doesn't hold the scapula flat." },
      { text: "Diaphragm", rationale: "A breathing muscle, unrelated to scapular winging." },
      { text: "Intercostals", rationale: "These are breathing muscles between the ribs." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The serratus anterior holds the scapula against the thoracic wall; weakness causes winging.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the main muscle of inhalation (breathing in)?",
    explanation: "The diaphragm is the primary muscle of inspiration: when it contracts it flattens and descends, enlarging the chest cavity so air is drawn in.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "breathing-muscles-lesson",
    muscleSlug: "diaphragm",
    bodyRegionSlug: "chest",
    domainCode: "D1",
    options: [
      { text: "The diaphragm", isCorrect: true, rationale: "Correct — the primary muscle of inspiration." },
      { text: "The pectoralis major", rationale: "A pushing muscle for the arm, not the main breathing muscle." },
      { text: "The rectus abdominis", rationale: "An abdominal muscle; it assists forced expiration, not primary inhalation." },
      { text: "The trapezius", rationale: "A scapular muscle of the upper back." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The diaphragm is the primary muscle of inspiration.", locator: "Ch. 11.4" }],
  },
  {
    type: "scenario",
    prompt: "During a set of bench press a client feels sudden chest pressure and shortness of breath. What should a personal trainer do?",
    explanation: "Chest pressure with shortness of breath is a medical warning sign, not normal training effort. The trainer should stop the exercise and seek/urge urgent medical care — never 'train through' it or attempt to diagnose it.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "chest-region-overview",
    bodyRegionSlug: "chest",
    domainCode: "D4",
    options: [
      { text: "Stop immediately and seek urgent medical help", isCorrect: true, rationale: "Correct — chest pressure + breathlessness are red-flag symptoms." },
      { text: "Add more weight to finish the session strong", rationale: "Never increase load in response to warning-sign symptoms." },
      { text: "Tell the client it's just a normal chest pump", rationale: "Chest pressure with breathlessness is not normal effort; do not dismiss it." },
      { text: "Diagnose the problem and give advice", rationale: "Diagnosis is outside a trainer's scope; this needs medical care." },
    ],
    citations: [{ sourceSlug: "cdc-physical-activity", claim: "Warning signs during activity require stopping and seeking medical guidance.", locator: "Physical Activity Basics" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which statement about the bench press is most accurate?",
    explanation: "The bench press is a compound horizontal push: the pectoralis major is the prime mover, with the anterior deltoid and triceps assisting and the scapular stabilizers (serratus, cuff) keeping the shoulder stable.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "the-pectoralis-major-lesson",
    exerciseSlug: "barbell-bench-press",
    bodyRegionSlug: "chest",
    domainCode: "D3",
    options: [
      { text: "It is a compound push using chest, front shoulder, and triceps", isCorrect: true, rationale: "Correct — multiple muscles cooperate." },
      { text: "It isolates the pectoralis major only", rationale: "Pressing is compound; the deltoid and triceps assist." },
      { text: "It mainly trains the diaphragm", rationale: "The diaphragm is a breathing muscle, not a bench-press mover." },
      { text: "It trains the serratus as the prime mover", rationale: "The serratus stabilizes the scapula; the pec major is the prime mover." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Horizontal pushing uses pectoralis major (prime mover) with anterior deltoid and triceps.", locator: "Ch. 11.5" }],
  },
];
