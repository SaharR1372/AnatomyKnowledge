import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// CORE & ABDOMINAL region — full-depth content module (same pattern every region follows).
// Facts from OpenStax A&P 2e Ch. 11.3 "Axial Muscles of the Abdominal Wall, and
// Thorax" (rectus abdominis, external/internal obliques, transversus abdominis).
// This region emphasizes anti-movement (resisting unwanted spinal motion) rather
// than only flexion, reflecting current core-training and low-back-safety practice.

const OPENSTAX = "openstax-anp-2e";
const NIAMS = "niams";

export const coreRegion: BodyRegionSeed = {
  slug: "core",
  name: "Core & Abdominal",
  order: 5,
  description:
    "The core is the muscular box around the trunk: the abdominal muscles in front and at the sides, working with the diaphragm above and the deep back muscles behind. Its main jobs are to flex and rotate the trunk, and — just as importantly — to resist unwanted motion of the spine so force can transfer efficiently between the upper and lower body.",
  relationships:
    "The core works as a team with the **lower back** (which it braces from the front and sides) and the **pelvis/hips** (which it stabilizes during single-leg and carrying tasks). It also connects to the **chest** through the diaphragm and rib cage, which the abdominal muscles help control during forceful breathing and bracing.",
  safetyNotes:
    "Sharp abdominal pain, a visible bulge, or pain that worsens with straining can indicate issues (such as a hernia) that need medical evaluation, not exercise. A trainer coaches bracing and trunk-control technique; they do not diagnose abdominal or hernia-related pain.",
  assetSlugs: ["core-region"],
  pronunciations: [
    { term: "Rectus abdominis", say: "REK-tus ab-DOM-ih-nis" },
    { term: "External oblique", say: "eks-TER-nal oh-BLEEK" },
    { term: "Internal oblique", say: "in-TER-nal oh-BLEEK" },
    { term: "Transversus abdominis", say: "trans-VER-sus ab-DOM-ih-nis" },
    { term: "Linea alba", say: "LIN-ee-uh AL-buh" },
    { term: "Anti-rotation", say: "AN-tee roh-TAY-shun" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The muscles of the anterolateral abdominal wall — rectus abdominis, external oblique, internal oblique, and transversus abdominis — flex, rotate, and compress the trunk.",
      locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax",
    },
  ],
  bones: [
    {
      slug: "xiphoid-process-core",
      name: "Xiphoid process",
      latinName: "Processus xiphoideus",
      description: "The small cartilaginous tip at the bottom of the sternum, an attachment point for the upper abdominal muscles and diaphragm. (Also covered under the chest.)",
      landmarks: "The lowest, softest point of the sternum, at the top of the abdominal midline.",
    },
    {
      slug: "iliac-crest-core",
      name: "Iliac crest",
      latinName: "Crista iliaca",
      description: "The curved upper rim of the pelvic (hip) bone, a major attachment site for the oblique and transversus abdominis muscles and the quadratus lumborum.",
      landmarks: "The bony ridge you can feel at the top of each side of the pelvis.",
    },
  ],
  joints: [
    {
      slug: "linea-alba",
      name: "Linea alba (midline abdominal seam)",
      jointType: "fibrous (not a true joint — a connective-tissue seam)",
      description: "A tough band of connective tissue running down the abdominal midline where the sheaths of the abdominal muscles from both sides meet. It transmits tension between the left and right abdominal walls.",
      articulatingBones: "Connects the abdominal muscle sheaths of both sides; not a bone-to-bone joint.",
      movementsAllowed: "None directly — it transmits and resists force rather than producing motion.",
    },
  ],
  muscles: [
    {
      slug: "rectus-abdominis",
      commonName: "Rectus abdominis",
      scientificName: "Rectus abdominis",
      pronunciation: "REK-tus ab-DOM-ih-nis",
      locationSimple: "The long, paired muscle running down the front of the abdomen, popularly known as the 'six-pack' (the visible segments come from tendinous bands crossing it).",
      origin: "Pubic bone.",
      insertion: "Cartilage of ribs 5–7 and the xiphoid process.",
      actions: "Flexes the vertebral column (curls the trunk forward), and compresses the abdomen.",
      jointsCrossed: "Intervertebral joints of the lumbar and lower thoracic spine",
      movementPlane: "sagittal",
      innervation: "Intercostal nerves (T7–T12)",
      functionDaily: "Curling forward, such as sitting up from lying down, and bracing when coughing or straining.",
      functionExercise: "Prime mover in trunk-flexion exercises (crunches, sit-ups) and active isometrically in planks.",
      beginnerExplanation:
        "This is the muscle people mean by 'abs' — it runs down the front of your belly and curls your ribcage toward your pelvis, like a sit-up.",
      advancedExplanation:
        "The tendinous intersections that create the 'six-pack' look are a structural feature, not separate muscles that can be trained individually — genetics and body-fat level, not exercise choice, mainly determine visibility.",
      commonlyConfused: "Often assumed to be 'the' core muscle; in reality the obliques and transversus abdominis are equally important for rotation and bracing.",
      misconceptions: "'You can spot-reduce belly fat by training the rectus abdominis' is false — exercise builds/strengthens the muscle, but fat loss is a whole-body process.",
      safetyInfo: "High-repetition spinal flexion (many crunches/sit-ups) under load can aggravate some low-back conditions; alternatives that limit spinal flexion exist for those cases.",
      status: "source_checked",
      assetSlugs: ["core-region"],
      citations: [
        { sourceSlug: OPENSTAX, claim: "The rectus abdominis flexes the vertebral column and compresses the abdomen.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
      ],
    },
    {
      slug: "external-oblique",
      commonName: "External oblique",
      scientificName: "Obliquus externus abdominis",
      pronunciation: "eks-TER-nal oh-BLEEK",
      locationSimple: "The most superficial ab muscle on the side of the abdomen, with fibers running diagonally down and inward, like hands in front pockets.",
      origin: "Lower eight ribs.",
      insertion: "Iliac crest and the linea alba (abdominal midline).",
      actions: "Flexes and laterally flexes the trunk; rotates the trunk to the OPPOSITE side when acting alone; with the internal oblique of the other side, produces trunk rotation.",
      jointsCrossed: "Intervertebral joints of the lumbar and lower thoracic spine",
      movementPlane: "transverse (rotation); frontal (lateral flexion)",
      innervation: "Intercostal nerves (T7–T12) and the iliohypogastric/ilioinguinal nerves",
      functionDaily: "Twisting the torso, such as looking over a shoulder or a golf/throwing-style rotation.",
      functionExercise: "Prime mover (with the opposite internal oblique) in rotational exercises like the Russian twist or cable woodchop.",
      beginnerExplanation:
        "These are the muscles on the sides of your waist that let you twist your torso and bend sideways — think of reaching down to the side, or a baseball swing.",
      advancedExplanation:
        "The external oblique on one side works with the internal oblique on the opposite side as a functional pair to rotate the trunk — rotation is always a cross-body team effort, not one muscle alone.",
      commonlyConfused: "Its rotation direction is a common point of confusion: the external oblique on the right side helps rotate the trunk to the LEFT, not the right.",
      misconceptions: "Doing many side-bends will not 'slim the waist' — spot reduction is not possible, and heavy loaded side-bends mainly build the muscle, not remove fat over it.",
      safetyInfo: "Forceful, uncontrolled twisting under heavy load can strain the obliques; build rotational strength gradually.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The external oblique flexes and rotates the vertebral column, rotating the trunk to the opposite side.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
      ],
    },
    {
      slug: "internal-oblique",
      commonName: "Internal oblique",
      scientificName: "Obliquus internus abdominis",
      pronunciation: "in-TER-nal oh-BLEEK",
      locationSimple: "A deeper ab muscle beneath the external oblique, with fibers running diagonally the opposite direction (up and inward).",
      origin: "Iliac crest and inguinal ligament.",
      insertion: "Cartilage of the lower ribs and the linea alba.",
      actions: "Flexes and laterally flexes the trunk; rotates the trunk to the SAME side when acting alone.",
      jointsCrossed: "Intervertebral joints of the lumbar and lower thoracic spine",
      movementPlane: "transverse (rotation); frontal (lateral flexion)",
      innervation: "Intercostal nerves (T7–T12) and the iliohypogastric/ilioinguinal nerves",
      functionDaily: "Twisting and bracing, working as a same-side rotation partner to the opposite external oblique.",
      functionExercise: "Co-contracts with the transversus abdominis during bracing; drives rotation together with the opposite-side external oblique.",
      beginnerExplanation:
        "Hidden beneath the external oblique, this muscle's fibers run the other diagonal way. It teams up with the external oblique on the OTHER side to twist your trunk.",
      advancedExplanation:
        "Because its fibers run perpendicular to the external oblique's, the internal oblique also contributes strongly to anti-rotation bracing, not just active rotation.",
      commonlyConfused: "Its same-side rotation action is often mixed up with the external oblique's opposite-side action — they are mirror-image partners across the body.",
      misconceptions: "It is not simply 'a smaller external oblique' — its fiber direction gives it a distinct, complementary rotation role.",
      safetyInfo: "Same general precautions as other abdominal muscles: build twisting load gradually.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The internal oblique flexes and rotates the vertebral column, rotating the trunk to the same side.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
      ],
    },
    {
      slug: "transversus-abdominis",
      commonName: "Transversus abdominis",
      scientificName: "Transversus abdominis",
      pronunciation: "trans-VER-sus ab-DOM-ih-nis",
      locationSimple: "The deepest abdominal muscle, with fibers running horizontally around the trunk like a natural weight belt.",
      origin: "Iliac crest, inguinal ligament, and lower rib cartilages.",
      insertion: "Linea alba (abdominal midline).",
      actions: "Compresses the abdominal contents (draws the belly wall inward), increasing intra-abdominal pressure and helping stabilize the spine.",
      jointsCrossed: "None directly (a compressor, not a mover of a specific joint); contributes to spinal stability indirectly.",
      movementPlane: "—",
      innervation: "Intercostal nerves (T7–T12) and the iliohypogastric/ilioinguinal nerves",
      functionDaily: "Bracing the trunk before lifting something, coughing, or straining.",
      functionExercise: "The key muscle behind a 'brace' cue; heavily active in planks and anti-rotation exercises like the Pallof press.",
      beginnerExplanation:
        "Picture a corset wrapping around your waist — that is the transversus abdominis. It does not bend the trunk; it tightens around it to stiffen and protect the spine, especially right before you lift something.",
      advancedExplanation:
        "Because its fibers run circumferentially rather than up-down, it does not produce trunk flexion or rotation; its main role is raising intra-abdominal pressure to create a rigid cylinder that supports the spine under load.",
      commonlyConfused: "Confused with 'the abs' generally, but unlike the rectus abdominis it cannot be seen and does not curl the trunk.",
      misconceptions: "'Sucking in the stomach' is not the same as a proper brace — a functional brace stiffens the whole trunk, not just the front.",
      safetyInfo: "Learning to brace correctly (rather than only sucking in) is a foundational safety skill before lifting heavier loads.",
      status: "source_checked",
      citations: [
        { sourceSlug: OPENSTAX, claim: "The transversus abdominis compresses the abdominal cavity, increasing intra-abdominal pressure.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
      ],
    },
  ],
};

export const coreMovements: MovementSeed[] = [
  {
    slug: "trunk-flexion",
    name: "Trunk flexion",
    description: "Curling the ribcage toward the pelvis (or the pelvis toward the ribcage). Driven mainly by the rectus abdominis.",
    plane: "sagittal",
    axis: "frontal",
    jointAction: "Flexion at the lumbar/lower thoracic intervertebral joints",
  },
  {
    slug: "trunk-rotation",
    name: "Trunk rotation",
    description: "Twisting the trunk around its vertical axis. Produced by the external oblique on one side working with the internal oblique on the other.",
    plane: "transverse",
    axis: "vertical",
    jointAction: "Rotation at the thoracic and lumbar intervertebral joints",
  },
  {
    slug: "anti-rotation-bracing",
    name: "Anti-rotation bracing",
    description: "Resisting an outside force that would otherwise rotate or bend the trunk, rather than producing movement. The core's most-used real-world function.",
    plane: "—",
    axis: "—",
    jointAction: "Isometric stabilization of the trunk against an external rotational or bending force",
  },
];

export const coreExercises: ExerciseSeed[] = [
  {
    slug: "plank",
    name: "Plank",
    altNames: "Front plank, forearm plank",
    simpleExplanation: "Holding a straight-line body position supported on the forearms and toes, bracing the trunk still.",
    purpose: "Builds the ability to keep the spine stable (resist sagging into extension) under a bracing demand.",
    startingPosition: "Forearms on the floor under the shoulders, body straight from head to heels, toes tucked under.",
    instructions: [
      "Brace the abdominals and glutes to keep the hips level — not sagging down or piked up.",
      "Keep the neck neutral, gaze toward the floor.",
      "Hold the position for the target time while breathing normally.",
    ],
    breathing: "Breathe steadily throughout — do not hold your breath.",
    cues: "\"Straight line from head to heels, squeeze the glutes, don't let the hips sag.\"",
    commonMistakes: "Letting the hips sag (low back overextends); piking the hips up too high; holding the breath.",
    safety: "If the low back arches and you feel it in the spine rather than the abs, shorten the hold time or regress to a knee plank.",
    regression: "Plank from the knees instead of the toes, or shorten the hold duration.",
    progression: "Increase hold time, or lift one foot briefly while maintaining a level trunk.",
    alternatives: "Dead bug, bird-dog (lower back region).",
    whyItWorks: "The plank challenges the rectus abdominis, obliques, and transversus abdominis to work isometrically together to resist the low back sagging into extension under the load of your own body weight.",
    benefitsWho: "Nearly everyone — a foundational trunk-bracing exercise appropriate at almost any fitness level with the right regression.",
    cautionWho: "Those with wrist or shoulder discomfort in a forearm position, or low back pain that worsens when the hips sag, should regress or shorten holds.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "anti-extension",
    setting: "home",
    unilateral: false,
    chain: "closed",
    movementPlane: "—",
    status: "source_checked",
    assetSlugs: ["core-region"],
    primaryMuscles: ["rectus-abdominis", "transversus-abdominis"],
    secondaryMuscles: ["external-oblique", "internal-oblique"],
    joints: [],
    movements: ["anti-rotation-bracing"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The rectus abdominis and transversus abdominis compress and stabilize the trunk, resisting unwanted spinal extension under load.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
    ],
  },
  {
    slug: "dead-bug",
    name: "Dead Bug",
    altNames: "Supine opposite arm/leg reach",
    simpleExplanation: "Lying on your back with arms and knees up, slowly lowering opposite arm and leg toward the floor while keeping the low back flat.",
    purpose: "Trains bracing and trunk control while limbs move — a low-back-friendly way to build core stability.",
    startingPosition: "Lie on your back, arms reaching straight up over the shoulders, hips and knees bent to 90°.",
    instructions: [
      "Brace the core so the low back stays gently flat against the floor.",
      "Slowly lower one arm overhead and the opposite leg toward the floor, keeping the low back still.",
      "Return to the start and repeat on the other side.",
    ],
    breathing: "Exhale as the arm and leg lower; inhale as they return.",
    cues: "\"Keep your low back glued to the floor the whole time.\"",
    commonMistakes: "Letting the low back arch off the floor as the limbs lower; moving too fast to keep control; holding the breath.",
    safety: "Only lower the arm/leg as far as the low back can stay flat — range of motion should shrink, not the control.",
    regression: "Move only the legs (keep arms still), or reduce how far the leg/arm travels.",
    progression: "Increase the range of motion, or add a light ankle weight once control is excellent.",
    alternatives: "Bird-dog (lower back region), plank.",
    whyItWorks: "Moving opposite limbs challenges the deep core (transversus abdominis, obliques) to keep the pelvis and low back still, which is precisely the anti-movement skill needed to protect the spine during real-life lifting and reaching.",
    benefitsWho: "Beginners and anyone who finds standard crunches uncomfortable for the low back.",
    cautionWho: "Very safe for most; if the low back cannot stay flat even with a small range, reduce further or seek guidance.",
    equipment: ["bodyweight"],
    difficulty: "beginner",
    level: "beginner",
    movementPattern: "anti-extension",
    setting: "home",
    unilateral: true,
    chain: "open",
    movementPlane: "sagittal",
    status: "source_checked",
    primaryMuscles: ["transversus-abdominis"],
    secondaryMuscles: ["rectus-abdominis", "internal-oblique", "external-oblique"],
    joints: [],
    movements: ["anti-rotation-bracing"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The transversus abdominis increases intra-abdominal pressure and helps stabilize the lumbar spine during limb movement.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
    ],
  },
  {
    slug: "pallof-press",
    name: "Pallof Press",
    altNames: "Anti-rotation cable press",
    simpleExplanation: "Standing sideways to a cable or band, pressing a handle straight out from the chest and resisting being pulled/rotated toward the anchor.",
    purpose: "Trains the core to resist unwanted rotation — an anti-rotation exercise rather than a rotation exercise.",
    startingPosition: "Stand sideways to a cable machine or anchored band at chest height, feet shoulder-width, holding the handle at the chest with both hands.",
    instructions: [
      "Brace the core and press the handle straight out in front of the chest.",
      "Resist the pull of the cable/band trying to rotate your trunk toward the anchor — keep the shoulders and hips square.",
      "Hold briefly, then return the handle to the chest under control.",
    ],
    breathing: "Exhale as you press out; inhale as you return.",
    cues: "\"Press out, don't let it twist you — stay square to the front.\"",
    commonMistakes: "Allowing the trunk to rotate toward the anchor; leaning instead of staying upright; using too much resistance to maintain a square trunk.",
    safety: "Choose a resistance light enough to keep the trunk from rotating at all; twisting under load defeats the exercise's purpose and can strain the obliques.",
    regression: "Lighter band tension, or hold the press position without stepping as far from the anchor.",
    progression: "Increase resistance, widen the stance, or add a step out/in while holding the press.",
    alternatives: "Dead bug, plank with shoulder taps.",
    whyItWorks: "By creating a rotational force the trunk must resist rather than produce, it directly trains the obliques and transversus abdominis in the anti-rotation role they play constantly in real-world movement — carrying an uneven load, pushing, or changing direction.",
    benefitsWho: "Anyone wanting rotational core stability for sport or general lifting; a strong complement to flexion-based ab work.",
    cautionWho: "Those with shoulder or wrist discomfort pressing at chest height should use a lighter load or adjust hand position.",
    equipment: ["cable-machine"],
    difficulty: "intermediate",
    level: "intermediate",
    movementPattern: "anti-rotation",
    setting: "gym",
    unilateral: false,
    chain: "open",
    movementPlane: "transverse",
    status: "source_checked",
    primaryMuscles: ["external-oblique", "internal-oblique"],
    secondaryMuscles: ["transversus-abdominis", "rectus-abdominis"],
    joints: [],
    movements: ["anti-rotation-bracing"],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The obliques and transversus abdominis act together to resist rotation and stabilize the trunk against an external force.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
    ],
  },
];

export const coreLessons: LessonSeed[] = [
  {
    slug: "core-region-overview",
    title: "The Core: An Overview",
    summary: "The abdominal muscles that flex, rotate, and — most importantly — brace and stabilize the trunk.",
    moduleSlug: "the-core",
    bodyRegionSlug: "core",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["core-region"],
    safetyNotes:
      "Sharp abdominal pain or a visible bulge that worsens with straining needs medical evaluation, not exercise. A trainer coaches bracing technique; they do not diagnose abdominal conditions.",
    objectives: [
      "Name the four main abdominal muscles and what each does.",
      "Explain the difference between a mover (rectus abdominis, obliques) and a stabilizer (transversus abdominis).",
      "Describe why 'anti-movement' exercises are as important as sit-ups for a well-rounded core.",
    ],
    bodyMarkdown: `## Four muscles, two jobs

The abdominal wall has four layered muscles:

- **Rectus abdominis** — the 'six-pack' muscle that curls the trunk forward.
- **External oblique** and **internal oblique** — layered, diagonal muscles that rotate and side-bend the
  trunk (working in cross-body pairs).
- **Transversus abdominis** — the deepest layer, wrapping around like a corset to brace the trunk.

Together they do two kinds of work: **producing** trunk movement (flexion, rotation) and **resisting**
unwanted movement (bracing against an outside force).

## Why 'anti-movement' matters

Real-world core demands are often about NOT moving — keeping the spine steady while you carry an uneven
load, push a door, or catch your balance. That is why modern core training includes exercises like the
plank, dead bug, and Pallof press alongside classic flexion work like crunches.

## Bracing, not just sucking in

A proper brace — gently tightening the whole trunk, not just pulling the belly button in — uses the
transversus abdominis and obliques together and is the foundation of safe lifting technique taught
throughout this app.`,
    citations: [
      { sourceSlug: OPENSTAX, claim: "The rectus abdominis, external oblique, internal oblique, and transversus abdominis flex, rotate, and compress the trunk.", locator: "Ch. 11.3 Axial Muscles of the Abdominal Wall, and Thorax" },
    ],
  },
  {
    slug: "anti-rotation-and-bracing-lesson",
    title: "Anti-Rotation and Bracing: Training the Core's 'No' Muscles",
    summary: "Why resisting motion is often more useful to train than producing it.",
    moduleSlug: "the-core",
    bodyRegionSlug: "core",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 9,
    order: 2,
    prerequisiteSlugs: ["core-region-overview"],
    objectives: [
      "Define anti-rotation and anti-extension exercise categories.",
      "Match the plank, dead bug, and Pallof press to what each resists.",
      "Explain why bracing is coached before heavier lifting.",
    ],
    bodyMarkdown: `## Producing motion vs. resisting it

Sit-ups and Russian twists train the core to **produce** trunk flexion and rotation. But just as often,
the core's job in daily life and sport is to **resist** motion that an outside force is trying to cause:

- The **plank** resists the low back sagging into extension (anti-extension).
- The **dead bug** resists the low back arching as a limb moves (anti-extension, dynamically).
- The **Pallof press** resists a cable pulling the trunk into rotation (anti-rotation).

## Bracing as a skill

Before lifting anything heavy, a quick trunk brace — tightening the abdominal wall in all directions,
not just pulling it in — stiffens the trunk so force transfers efficiently between the upper and lower
body. This is why trainers cue bracing before a hip hinge or a carry, not just during ab-specific work.`,
    citations: [
      { sourceSlug: NIAMS, claim: "Core-strengthening exercise that builds trunk control and stability is commonly recommended alongside safe lifting mechanics.", locator: "Back Pain" },
    ],
  },
];

export const coreQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "Which abdominal muscle is the deepest, wrapping around the trunk like a natural weight belt to brace the spine?",
    explanation: "The transversus abdominis has horizontal fibers that compress the abdomen and raise intra-abdominal pressure, stabilizing the spine rather than moving it.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "core-region-overview",
    muscleSlug: "transversus-abdominis",
    bodyRegionSlug: "core",
    domainCode: "D1",
    options: [
      { text: "Transversus abdominis", isCorrect: true, rationale: "Correct — the deepest layer, a bracing/stabilizing muscle." },
      { text: "Rectus abdominis", rationale: "The surface 'six-pack' muscle that flexes the trunk, not the deep stabilizer." },
      { text: "External oblique", rationale: "A more superficial rotator/side-bender, not the deepest layer." },
      { text: "Erector spinae", rationale: "A back muscle, not part of the abdominal wall." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The transversus abdominis compresses the abdominal cavity and stabilizes the trunk.", locator: "Ch. 11.3" }],
  },
  {
    type: "true_false",
    prompt: "The right external oblique and the left internal oblique work together as a team to rotate the trunk.",
    explanation: "True. Trunk rotation is produced by the external oblique on one side pairing with the internal oblique on the opposite side.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "core-region-overview",
    muscleSlug: "external-oblique",
    bodyRegionSlug: "core",
    domainCode: "D1",
    options: [
      { text: "True", isCorrect: true, rationale: "Correct — rotation is a cross-body oblique partnership." },
      { text: "False", rationale: "This cross-body pairing is exactly how trunk rotation is produced." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The external oblique rotates the trunk to the opposite side, pairing functionally with the contralateral internal oblique.", locator: "Ch. 11.3" }],
  },
  {
    type: "multiple_choice",
    prompt: "The Pallof press is best described as which type of core exercise?",
    explanation: "The Pallof press resists an external rotational pull rather than producing rotation — the definition of an anti-rotation exercise.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "anti-rotation-and-bracing-lesson",
    exerciseSlug: "pallof-press",
    bodyRegionSlug: "core",
    domainCode: "D3",
    options: [
      { text: "Anti-rotation", isCorrect: true, rationale: "Correct — it trains resisting rotation, not producing it." },
      { text: "Trunk flexion", rationale: "No forward curling of the trunk occurs in a Pallof press." },
      { text: "Spinal extension", rationale: "Not an extension-focused exercise; the trunk stays upright and square." },
      { text: "Shoulder mobility", rationale: "The shoulders are involved only to hold the handle; the target is trunk stability." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The obliques and transversus abdominis resist an external rotational force to stabilize the trunk.", locator: "Ch. 11.3" }],
  },
  {
    type: "multiple_choice",
    prompt: "In a well-performed dead bug, what should stay still throughout the movement?",
    explanation: "The core's job in the dead bug is to keep the low back flat against the floor while the limbs move independently — the definition of anti-extension core control.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "anti-rotation-and-bracing-lesson",
    exerciseSlug: "dead-bug",
    bodyRegionSlug: "core",
    domainCode: "D3",
    options: [
      { text: "The low back, which should stay flat against the floor", isCorrect: true, rationale: "Correct — the core's job is to prevent the low back from arching as the limbs move." },
      { text: "The arms, which should never move", rationale: "The arms are meant to move — that is the point of the exercise." },
      { text: "The legs, which should be locked straight the whole time", rationale: "The legs move through the exercise; they are not required to stay locked." },
      { text: "The head, which should be lifted off the floor", rationale: "Head position is not the focus; low back control is." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The transversus abdominis helps stabilize the lumbar spine as the limbs move.", locator: "Ch. 11.3" }],
  },
  {
    type: "multiple_choice",
    prompt: "Why is 'spot reducing' belly fat by doing many crunches a misconception?",
    explanation: "Exercise strengthens the muscle worked, but fat loss occurs across the whole body based on overall energy balance, not at the specific muscle being trained.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "core-region-overview",
    muscleSlug: "rectus-abdominis",
    bodyRegionSlug: "core",
    domainCode: "D2",
    options: [
      { text: "Fat loss happens across the whole body, not just over the muscle being trained", isCorrect: true, rationale: "Correct — this is the well-established reason spot reduction doesn't work." },
      { text: "Crunches don't strengthen the rectus abdominis at all", rationale: "Crunches do strengthen the rectus abdominis; the misconception is about fat loss, not muscle strengthening." },
      { text: "The rectus abdominis cannot be trained with bodyweight exercise", rationale: "It can be trained with bodyweight exercises like crunches; that isn't the issue." },
      { text: "Only surgery can change abdominal appearance", rationale: "Overstated — diet, overall exercise, and genetics all play a role; surgery isn't the only lever." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The rectus abdominis flexes the trunk; muscle strengthening and regional fat loss are separate physiological processes.", locator: "Ch. 11.3" }],
  },
];
