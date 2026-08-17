import type { BodyRegionSeed, MovementSeed, ExerciseSeed, LessonSeed, QuestionSeed } from "../types";

// SPINE region — a STRUCTURE-type region that ties together the vertebral
// column and the muscles that stabilize it. Unlike other regions, the Spine
// is not primarily about muscles (those live in Lower Back, Core, Arms, etc.)
// but about the bony structure and functional integrity of the whole spine.
// Facts from OpenStax A&P 2e Ch. 7.3 "Vertebral Column" and Ch. 9.1 "Joints".

const OPENSTAX = "openstax-anp-2e";

export const spineRegion: BodyRegionSeed = {
  slug: "spine",
  name: "Spine (The Vertebral Column)",
  order: 16,
  description:
    "The spine is the central structural pillar of the body, supporting the head, protecting the spinal cord, and transmitting forces from the upper body to the lower body. It is not a single, rigid rod but a series of bones (vertebrae) stacked with shock-absorbing discs between them, all stabilized by muscles and ligaments. Understanding the spine's structure and curvature is essential to training safely.",
  relationships:
    "The spine is the common thread linking **all body regions**. The cervical spine connects the **neck**; the thoracic spine anchors the **chest** and **upper back**; the lumbar spine forms the core of the **lower back** and **core**; and the sacral spine connects to the **pelvis and hips**. Every movement of the arms, legs, and trunk involves spinal stability and alignment.",
  safetyNotes:
    "Severe spine pain, loss of bladder/bowel control, progressive weakness or numbness in the legs, or sudden loss of sensation after an injury requires immediate medical evaluation. Trainers do NOT perform spinal mobilization or diagnosis — they coach posture, neutral spine, and movement patterns that respect spinal limitations.",
  assetSlugs: ["spine-region"],
  pronunciations: [
    { term: "Vertebra", say: "VER-tuh-bra" },
    { term: "Intervertebral disc", say: "IN-ter-VER-tuh-bral disk" },
    { term: "Cervical", say: "SER-vik-ul" },
    { term: "Thoracic", say: "thuh-RAS-ik" },
    { term: "Lumbar", say: "LUM-bar" },
    { term: "Sacral", say: "SAY-krul" },
    { term: "Kyphosis", say: "ky-FOH-sis" },
    { term: "Lordosis", say: "lor-DOH-sis" },
    { term: "Neutral spine", say: "NOO-trul spine" },
  ],
  citations: [
    {
      sourceSlug: OPENSTAX,
      claim: "The vertebral column consists of 33 vertebrae arranged in five regions (cervical, thoracic, lumbar, sacral, coccygeal), with intervertebral discs between them. The spine has natural curves that absorb shock and maintain balance.",
      locator: "Ch. 7.3 Vertebral Column",
    },
  ],
  bones: [
    {
      slug: "vertebra-generic",
      name: "Vertebra (generic structure)",
      latinName: "Vertebra",
      description:
        "A single bone unit of the spine. All vertebrae share a similar structure: a body (the thick, load-bearing front part), an arch (the back part that forms the spinal canal for the spinal cord), and processes (bony protrusions for muscle and ligament attachment).",
      landmarks:
        "Spinous process (the bump you feel running down the center of your back), transverse processes (side protrusions), and the spinal canal (the hole through which the spinal cord passes).",
    },
    {
      slug: "intervertebral-disc",
      name: "Intervertebral disc",
      latinName: "Discus intervertebralis",
      description:
        "A fibrocartilage disc sitting between the bodies of adjacent vertebrae. Each disc has an outer ring (annulus fibrosus) made of tough connective tissue, and an inner gel-like center (nucleus pulposus). Discs act as shock absorbers and allow the spine to flex, extend, and rotate.",
      landmarks:
        "The discs make up about 25% of the spine's total height. The nucleus pulposus can herniate (bulge) if the outer ring tears, especially under heavy flexion or repetitive loading.",
    },
    {
      slug: "spinal-cord",
      name: "Spinal cord",
      latinName: "Medulla spinalis",
      description:
        "The bundle of nerve fibers running down the center of the vertebral column, protected by the spinal canal (the opening in the back of each vertebra). The spinal cord carries sensory and motor information between the brain and the rest of the body.",
      landmarks:
        "The spinal cord extends from the brainstem to approximately the first lumbar vertebra (L1). Below L1, only nerve roots (cauda equina) remain. Compression of the spinal cord is a medical emergency.",
    },
  ],
  joints: [
    {
      slug: "intervertebral-disc-joint",
      name: "Intervertebral disc (as a joint)",
      jointType: "cartilaginous, amphiarthrodial (slightly movable)",
      description:
        "Each intervertebral disc connects two vertebral bodies and acts as both a shock absorber and a joint, allowing small amounts of flexion, extension, lateral flexion, and rotation between adjacent vertebrae.",
      articulatingBones: "Body of one vertebra and the body of the adjacent vertebra (connected via the disc)",
      movementsAllowed:
        "The disc itself does not move, but it allows the vertebrae it connects to move relative to each other in all directions (limited range).",
    },
    {
      slug: "facet-joint-spine",
      name: "Facet joints (zygapophyseal joints)",
      jointType: "synovial, plane (gliding)",
      description:
        "Small joints on the back side of the spine where the processes of adjacent vertebrae meet. They guide and limit spinal motion and share load-bearing with the discs and ligaments.",
      articulatingBones: "Facet processes of one vertebra articulating with facet processes of the adjacent vertebra",
      movementsAllowed:
        "Flexion, extension, lateral flexion, and rotation — the facet joints work with the discs to control these movements. Degeneration of facet joints is a common source of back pain.",
    },
  ],
  muscles: [],
  // NOTE: Spine has NO unique muscles; muscles live in Lower Back, Core, Neck,
  // etc. This region is about bony structure and functional integrity only.
};

export const spineMovements: MovementSeed[] = [];
// NOTE: Spine movements (flexion, extension, lateral flexion, rotation) are
// already defined in the lower-back region and are shared across the spine.
// The Spine region is a STRUCTURE type that focuses on bone/disc anatomy,
// not unique movements.

export const spineExercises: ExerciseSeed[] = [
  {
    slug: "neutral-spine-hold",
    name: "Neutral spine hold (posture reset)",
    altNames: "Neutral alignment reset",
    simpleExplanation:
      "Stand or sit with the natural curves of your spine (not flattened, not exaggerated), feeling the alignment from your head through your hips.",
    purpose:
      "Teaches what 'neutral spine' feels like and builds postural awareness. Neutral spine is the safest position for loading because it distributes force evenly across all spinal structures.",
    startingPosition:
      "Stand tall or sit upright. Shoulders back and down. Head over shoulders (not forward).",
    instructions: [
      "Feel your natural spine curves: gentle forward curve in the neck (cervical lordosis), gentle backward curve in the upper back (thoracic kyphosis), and gentle forward curve in the lower back (lumbar lordosis).",
      "Do NOT flatten your lower back or exaggerate the arch — just allow the natural curves.",
      "Imagine a vertical line running from the crown of your head through your shoulders, hips, knees, and ankles.",
      "Hold this position for 5–10 seconds, then move around normally.",
      "Throughout the day, pause every hour to reset to neutral and feel the correct alignment.",
    ],
    breathing: "Breathe normally; do not hold your breath.",
    cues: "Natural curves, head over shoulders, line from head to heels.",
    commonMistakes:
      "Flattening the lower back (posterior pelvic tilt), exaggerating the lumbar arch, allowing the head to drift forward, slouching the shoulders forward.",
    safety:
      "Neutral spine is a position of comfort and balance, not an extreme 'military' posture. It should feel sustainable.",
    progression:
      "Once neutral spine becomes a habitual default, carry it through everyday movement (walking, sitting, reaching) and loaded exercises.",
    equipment: [],
    difficulty: "beginner",
    level: "beginner",
    status: "source_checked",
    primaryMuscles: ["rectus-abdominis"],
    secondaryMuscles: ["external-oblique"],
    joints: [
      { jointSlug: "intervertebral-disc-joint", jointAction: "neutral alignment" },
      { jointSlug: "facet-joint-spine", jointAction: "neutral alignment" },
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The spine has natural curves that allow shock absorption and balance. Maintaining neutral spine during loaded exercise protects the discs and joints.", locator: "Ch. 7.3 Vertebral Column" },
    ],
  },
  {
    slug: "cat-cow-stretch",
    name: "Cat-cow stretch",
    altNames: "Quadruped spinal mobility",
    simpleExplanation:
      "Alternately arch and round your back while on hands and knees, gently mobilizing the entire spine through its full range of flexion and extension.",
    purpose:
      "Teaches spinal flexion and extension in a safe, low-load position. Builds awareness of the spine's natural mobility and warms up the discs before heavier work.",
    startingPosition:
      "On hands and knees (quadruped position). Hands under shoulders, knees under hips. Head neutral (looking down).",
    instructions: [
      "COW (extension): Drop your chest toward the floor, lifting your gaze and tailbone upward. Feel the gentle arch in your lower back.",
      "Hold for 1–2 seconds.",
      "CAT (flexion): Tuck your tailbone and round your spine, pressing your hands into the floor. Feel the stretch along the entire back of your body.",
      "Hold for 1–2 seconds.",
      "Alternate slowly between cow and cat for 8–10 cycles.",
      "Move at a slow, controlled pace — synchronize movement with breathing.",
    ],
    breathing: "Inhale during cow (extension), exhale during cat (flexion).",
    cues: "Slow, smooth, full range, synchronized with breath.",
    commonMistakes:
      "Moving too fast; not achieving full flexion in cat phase; holding the head up during cat (should tuck chin).",
    safety:
      "This exercise is very safe. It gently mobilizes the spine without load. Stop if you feel sharp pain.",
    progression:
      "Once familiar, you can add gentle holds (2–3 seconds) at each end range, or perform slower repetitions (5 seconds per direction).",
    equipment: [],
    difficulty: "beginner",
    level: "beginner",
    status: "source_checked",
    primaryMuscles: ["rectus-abdominis", "erector-spinae"],
    secondaryMuscles: ["external-oblique"],
    joints: [
      { jointSlug: "intervertebral-disc-joint", jointAction: "gentle flexion and extension mobility" },
      { jointSlug: "facet-joint-spine", jointAction: "gentle flexion and extension mobility" },
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Gentle spinal flexion and extension through a full range of motion in a low-load position is safe and effective for disc and joint health.", locator: "Ch. 7.3 Vertebral Column" },
    ],
  },
  {
    slug: "bird-dog-hold",
    name: "Bird-dog hold",
    altNames: "Opposite arm-leg raise, quadruped balance",
    simpleExplanation:
      "From hands and knees, extend one arm and the opposite leg behind you while keeping your spine in neutral — a core stability exercise.",
    purpose:
      "Teaches spinal stability under asymmetrical load. Builds anti-rotation and anti-extension endurance, strengthening the deep core muscles that protect the spine during real-world movement.",
    startingPosition:
      "On hands and knees (quadruped position). Hands under shoulders, knees under hips. Spine in neutral (not sagging, not rounded).",
    instructions: [
      "Extend your right arm forward and your left leg backward simultaneously, creating a straight line from your fingertips to your heel.",
      "Keep your spine neutral — do not rotate or let your hips sag.",
      "Hold this position for 5–10 seconds.",
      "Return to quadruped position, rest briefly.",
      "Repeat on the opposite side (left arm, right leg).",
      "Perform 6–10 repetitions per side, 2–3 sets, 3–4 days per week.",
    ],
    breathing: "Exhale as you extend, breathe steadily as you hold.",
    cues: "Neutral spine, straight line, no rotation, stable core.",
    commonMistakes:
      "Allowing the spine to rotate (shoulders twist); letting the hips sag or lift; moving too quickly without control.",
    safety:
      "Move slowly and deliberately. If you cannot maintain neutral spine, reduce hold time or do shorter range of motion.",
    progression:
      "Increase hold duration to 15–20 seconds, perform more repetitions, or add a slight hold or pulse at the end range.",
    equipment: [],
    difficulty: "intermediate",
    level: "intermediate",
    status: "source_checked",
    primaryMuscles: ["external-oblique"],
    secondaryMuscles: ["rectus-abdominis", "transversus-abdominis"],
    joints: [
      { jointSlug: "intervertebral-disc-joint", jointAction: "anti-rotation stabilization" },
      { jointSlug: "facet-joint-spine", jointAction: "anti-rotation stabilization" },
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Anti-rotation spinal exercises build the deep core muscles that stabilize the spine against rotational forces.", locator: "Ch. 7.3 Vertebral Column" },
    ],
  },
];

export const spineLessons: LessonSeed[] = [
  {
    slug: "spine-structure-curvature",
    title: "Spine Structure and Natural Curves",
    summary:
      "Learn the anatomy of the vertebral column, why the spine has natural curves, and what 'neutral spine' means for safe movement.",
    moduleSlug: "the-spine",
    bodyRegionSlug: "spine",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 13,
    order: 1,
    prerequisiteSlugs: ["head-neck-region-overview"],
    assetSlugs: ["spine-region"],
    safetyNotes:
      "Severe spine pain, progressive weakness, loss of bladder/bowel control, or sudden numbness after an injury requires immediate medical evaluation. Trainers do NOT perform spinal mobilization.",
    objectives: [
      "Identify the five regions of the spine (cervical, thoracic, lumbar, sacral, coccygeal) and their distinctive features.",
      "Explain the role of intervertebral discs as shock absorbers and why they are vulnerable to herniation in heavy flexion.",
      "Describe the natural curves of the spine (cervical lordosis, thoracic kyphosis, lumbar lordosis) and why they are essential for balance and shock absorption.",
      "Define and demonstrate 'neutral spine' posture.",
    ],
    bodyMarkdown: `
## The Vertebral Column: 33 Bones Stacked with Purpose

The spine is not a single rigid rod but a flexible column made of 33 vertebrae stacked one atop the other. Between each vertebra (except the fused sacral bones) sits an intervertebral disc — a shock-absorbing cushion that allows the spine to move while distributing load.

**The five regions of the spine:**

| Region | Number | Location | Key Features |
|--------|--------|----------|--------------|
| **Cervical** | 7 (C1–C7) | Neck | Smallest, most mobile; includes atlas (C1) and axis (C2) |
| **Thoracic** | 12 (T1–T12) | Upper back | Anchors the ribs; less mobile than cervical/lumbar |
| **Lumbar** | 5 (L1–L5) | Lower back | Largest vertebrae; bears most load; highly mobile |
| **Sacral** | 5 (fused) | Sacrum | Fused into one bone; connects to pelvis |
| **Coccygeal** | 4 (fused) | Tailbone | Vestigial; minimal function in humans |

## Vertebrae: Stacked Load-Bearers

Each vertebra has a similar structure:

- **Vertebral body** (front, thick part) — bears most of the load, works with the disc to support weight.
- **Vertebral arch** (back, ring-like) — protects the spinal cord and forms attachment points for muscles and ligaments.
- **Spinous process** (the bump you feel running down your back) — attachment point for muscles.
- **Transverse processes** (sides) — attachment points for muscles and ligaments.
- **Facet joints** (small joints where the back sides of adjacent vertebrae meet) — guide and limit motion.

## Intervertebral Discs: Shock Absorbers Under Siege

Each disc has two parts:

1. **Annulus fibrosus** — the tough, fibrous outer ring that holds the disc together.
2. **Nucleus pulposus** — the gel-like inner center that acts as a shock absorber.

The disc is exquisitely designed to absorb and distribute load. But it is vulnerable to herniation (bulging) if:

- The outer ring tears (from heavy flexion, repetitive loading, or poor lifting mechanics).
- The inner gel pushes through the tear, pressing on a nerve root or the spinal cord.

**This is why heavy loaded spinal flexion is risky** — it compresses the front of the disc while the back stretches, increasing herniation risk if form breaks down.

## The Spine Has Natural Curves — They're Not Flaws

The healthy spine is not perfectly straight. It has three natural curves:

1. **Cervical lordosis** (forward curve in the neck) — allows shock absorption and head balance.
2. **Thoracic kyphosis** (backward curve in the upper back) — anchors the ribs and allows the heart and lungs room to function.
3. **Lumbar lordosis** (forward curve in the lower back) — allows hip mobility and shock absorption during walking.

These curves are not defects — they are architectural features. **Loss of curve (like a flattened lumbar lordosis) is often a sign of postural dysfunction or tight hip flexors, not better alignment.**

## Neutral Spine: The Safest Position for Loading

**"Neutral spine"** is the spinal position that best distributes load across all structures (discs, facet joints, ligaments, muscles). It is:

- Not perfectly straight (that's actually risky — straight = no shock absorption).
- Not exaggerated (too much arch puts stress on facet joints).
- The natural, comfortable middle ground.

To find neutral spine:

1. Stand tall or sit upright.
2. Feel your natural curves (especially the gentle forward curve in your lower back).
3. Do NOT flatten the lower back or exaggerate the arch.
4. Shoulders over hips, head over shoulders.

Once you've felt neutral spine a few times, it becomes a habit — and then you naturally use it in exercises, lifting, and daily life.

## Why Spinal Health Matters

The spine is the central highway for your nervous system (the spinal cord) and the load-bearing pillar of your body. Spinal health directly affects:

- Posture and balance.
- Nerve function (arm/leg sensation and strength).
- Exercise performance (most compound movements demand spinal stability).
- Daily comfort (how much you can bend, lift, and carry without pain).

Small postural corrections and mobility work now prevent major dysfunction later.
`,
    vocabularyTerms: [
      "spine",
      "vertebra",
      "cervical-spine",
      "thoracic-spine",
      "lumbar-spine",
      "intervertebral-disc",
      "neutral-spine",
      "lordosis",
      "kyphosis",
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "The vertebral column consists of 33 vertebrae in five regions, with intervertebral discs between most of them. Natural spinal curves are essential for shock absorption and balance.", locator: "Ch. 7.3 Vertebral Column" },
    ],
  },
  {
    slug: "spine-loading-safety",
    title: "Spinal Loading and Safe Movement Patterns",
    summary:
      "Learn how different spinal movements and loads affect the discs and facet joints, and how to train the spine safely.",
    moduleSlug: "the-spine",
    bodyRegionSlug: "spine",
    level: "intermediate",
    status: "source_checked",
    estimatedMinutes: 11,
    order: 2,
    prerequisiteSlugs: ["spine-structure-curvature"],
    assetSlugs: ["spine-region"],
    safetyNotes:
      "Never train through sharp spinal pain. Disc herniation can cause radiating pain into the legs — seek medical evaluation if this occurs.",
    objectives: [
      "Explain how spinal flexion, extension, and rotation affect the discs and facet joints differently.",
      "Describe why heavy loaded spinal flexion increases disc-herniation risk.",
      "Identify safe movement patterns and progressions for spinal loading.",
      "Explain the difference between 'mobilizing' the spine (good for stiffness) and 'loading' the spine (requires caution).",
    ],
    bodyMarkdown: `
## How Spinal Movements Load the Discs

Each spinal movement distributes load differently across the disc and facet joints:

### Spinal Flexion (bending forward)
- Compresses the FRONT of the disc (nucleus pulposus is pushed forward).
- Stretches the back of the disc and the posterior ligaments.
- **Risk:** Repetitive or heavy flexion under load can cause the nucleus to push through the annulus (herniation).
- **Example:** Picking up a heavy weight with a rounded back, or doing heavy deadlifts with poor form.

### Spinal Extension (arching backward)
- Decompresses the front of the disc (good for disc health).
- Compresses the BACK (facet joints and posterior ligaments can be pinched).
- **Risk:** Excessive or ballistic extension can compress facet joints and cause facet-joint arthritis.
- **Best practice:** Controlled extension is usually safe; avoid forcing end-range.
- **Example:** A gentle cobra stretch is therapeutic; aggressive spinal arching under heavy load is risky.

### Spinal Lateral Flexion & Rotation
- Distribute load asymmetrically across the disc.
- Less commonly loaded than flexion/extension in most people.
- **Risk:** Heavy rotation under load (especially combined with flexion) is particularly stressful.
- **Example:** A clean-and-jerk with poor form, or rotating the spine while holding a heavy dumbbell.

## The Flexion-Intolerance Pattern

Many people with recurrent lower-back pain are **flexion-intolerant** — spinal flexion (especially loaded) is their primary pain trigger. For these individuals:

- Avoid heavy deadlifts, heavy squats with poor form, and heavy bending.
- Prioritize hip-hinge mechanics (bending at the hips, not the spine).
- Train extension gently (bird-dog holds, controlled cobra stretches).
- Build core stability to offload the discs.

## Mobilizing vs. Loading: Know the Difference

**Mobilizing the spine** (moving it through range of motion without load) is generally safe and therapeutic:
- Cat-cow stretch.
- Gentle neck rotations.
- Torso twists.
- These movements are healthy for disc and joint function.

**Loading the spine** (under force or resistance) requires more caution:
- Barbell squats.
- Deadlifts.
- Weighted carries.
- Heavy loaded rotations.
- These movements demand good form and spinal stability.

Most people benefit from regular mobilization and careful, progressive loading.

## Safe Spinal Loading Progressions

**Level 1 — Mobility (unloaded):**
- Cat-cow stretches, neck rotations, torso twists.
- Movement quality over everything.

**Level 2 — Bodyweight stability:**
- Planks, bird-dog holds, dead bugs.
- These build core endurance without spinal flexion or heavy loading.

**Level 3 — Loaded carries:**
- Farmer's carries, suitcase carries, overhead carries.
- Load is in your hands or on your shoulders, not directly on the spine.
- Spine stays neutral while the core stabilizes.

**Level 4 — Loaded movement (squat, deadlift, etc.):**
- Only after Levels 1–3 are solid.
- Perfect form with moderate load beats imperfect form with heavy load.
- Heavy weights are less important than spinal safety.

## Disc Herniation: The Consequence of Repeated Bad Flexion

If someone repeatedly lifts heavy objects with a rounded (flexed) spine, the discs gradually degenerate. Eventually:

1. The annulus (outer ring) develops micro-tears.
2. The nucleus (inner gel) begins to bulge through the tears.
3. If the nucleus touches a nerve root, you feel radiating pain, numbness, or weakness in the leg (sciatica).

**This is not acute trauma — it's cumulative.** Small form errors repeated hundreds of times cause more damage than a single heavy lift.

## The Bottom Line

- Mobilize your spine regularly (it needs to move).
- Load it carefully (use good form, don't force end-range).
- Train your core to stabilize the spine (so load is shared, not isolated to the discs).
- If something hurts, stop — pain is information that something is wrong.

A healthy spine is a strong, mobile, and resilient spine.
`,
    vocabularyTerms: [
      "spinal-flexion",
      "spinal-extension",
      "disc-herniation",
      "neutral-spine",
      "core-stability",
      "hip-hinge",
    ],
    citations: [
      { sourceSlug: OPENSTAX, claim: "Spinal flexion compresses the anterior disc; heavy loaded flexion increases disc-herniation risk. Extension decompresses the disc but can compress facet joints if excessive.", locator: "Ch. 7.3 Vertebral Column" },
    ],
  },
];

export const spineQuestions: QuestionSeed[] = [
  {
    type: "multiple_choice",
    prompt: "How many vertebrae make up the human spine?",
    explanation: "There are 33 vertebrae total: 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), and 4 coccygeal (fused).",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "spine-structure-curvature",
    bodyRegionSlug: "spine",
    domainCode: "D1",
    options: [
      { text: "24 (7 cervical + 12 thoracic + 5 lumbar)", rationale: "This counts the non-fused vertebrae but omits the sacral and coccygeal regions." },
      { text: "33 (7 + 12 + 5 + 5 + 4)", isCorrect: true, rationale: "33 total vertebrae: cervical, thoracic, lumbar, sacral (fused), and coccygeal (fused)." },
      { text: "31 (most are fused)", rationale: "While some are fused, the total is still 33." },
      { text: "37 (including ribs)", rationale: "Ribs are not vertebrae; they attach to the thoracic vertebrae." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The vertebral column consists of 33 vertebrae.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the role of the intervertebral disc?",
    explanation: "Discs act as shock absorbers between vertebrae, allowing flexibility while distributing load.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "spine-structure-curvature",
    bodyRegionSlug: "spine",
    domainCode: "D1",
    options: [
      { text: "Attach vertebrae together rigidly", rationale: "Discs allow movement; they are not rigid." },
      { text: "Absorb shock and allow flexible movement between vertebrae", isCorrect: true, rationale: "The disc's gel-like nucleus absorbs force; the fibrous annulus allows movement." },
      { text: "Protect the spinal cord", rationale: "The vertebral arch protects the spinal cord, not the disc." },
      { text: "Produce cerebrospinal fluid", rationale: "This is done by the spinal cord and brain, not the disc." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Intervertebral discs consist of an outer annulus fibrosus and inner nucleus pulposus and act as shock absorbers.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which spinal movement compresses the FRONT of the disc and increases herniation risk?",
    explanation: "Spinal flexion (bending forward) compresses the anterior disc and can cause the nucleus to herniate.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "spine-loading-safety",
    bodyRegionSlug: "spine",
    domainCode: "D2",
    options: [
      { text: "Spinal flexion (bending forward)", isCorrect: true, rationale: "Flexion compresses the front (anterior) of the disc and stretches the back, increasing herniation risk." },
      { text: "Spinal extension (arching backward)", rationale: "Extension decompresses the front of the disc; it compresses the facet joints, not the disc itself." },
      { text: "Spinal rotation only", rationale: "Rotation alone is less stressful than flexion; combined flexion + rotation is most risky." },
      { text: "None of these movements stress the disc", rationale: "All movements load the disc to some degree; flexion is most risky." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Spinal flexion under load compresses the anterior disc and increases herniation risk.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is 'neutral spine'?",
    explanation: "Neutral spine is the natural, comfortable middle ground — not flattened, not exaggerated — that best distributes load across spinal structures.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "spine-structure-curvature",
    bodyRegionSlug: "spine",
    domainCode: "D1",
    options: [
      { text: "A perfectly straight spine with no curves", rationale: "A straight spine lacks shock absorption; natural curves are essential." },
      { text: "The position of maximum spinal arch", rationale: "Exaggerated arch stresses facet joints." },
      { text: "The natural, comfortable middle position with healthy curves intact", isCorrect: true, rationale: "Neutral spine preserves natural curves while distributing load evenly." },
      { text: "A flattened lower back", rationale: "Flattening the lower back is actually a postural dysfunction, not neutral." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The natural curves of the spine are essential for shock absorption and balance. Neutral spine maintains these curves.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which region of the spine naturally has a backward curve (kyphosis)?",
    explanation: "The thoracic spine (upper back) naturally curves backward, anchoring the ribs and providing space for the heart and lungs.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "spine-structure-curvature",
    bodyRegionSlug: "spine",
    domainCode: "D1",
    options: [
      { text: "Cervical (neck)", rationale: "The cervical spine has a forward curve (lordosis)." },
      { text: "Thoracic (upper back)", isCorrect: true, rationale: "The thoracic spine naturally curves backward (kyphosis), anchoring the ribs." },
      { text: "Lumbar (lower back)", rationale: "The lumbar spine has a forward curve (lordosis)." },
      { text: "Sacral (sacrum)", rationale: "The sacrum is fused and curves posteriorly but is not typically called 'kyphotic'." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The thoracic spine naturally curves backward (kyphosis).", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "What happens to the disc when you perform a heavy deadlift with a rounded (flexed) lower back?",
    explanation: "Spinal flexion under heavy load compresses the front of the disc while stretching the back, pushing the nucleus toward the rear and increasing herniation risk.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "spine-loading-safety",
    bodyRegionSlug: "spine",
    domainCode: "D2",
    options: [
      { text: "The disc is decompressed and protected", rationale: "Flexion compresses the disc, especially the front." },
      { text: "The front is compressed and the nucleus is pushed backward, increasing herniation risk", isCorrect: true, rationale: "Flexion under load is the primary cause of disc herniation through repeated micro-tears." },
      { text: "The disc rotates but is not damaged", rationale: "Heavy flexion under load is damaging, especially with poor form." },
      { text: "No stress is placed on the disc", rationale: "A heavy deadlift places significant load on the disc, especially with flexion." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Heavy loaded spinal flexion increases disc-herniation risk by compressing the anterior disc and pushing the nucleus posteriorly.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which vertebral region naturally allows the most rotational movement?",
    explanation: "The thoracic spine (upper back) allows the most rotation because its vertebrae are oriented to permit twisting. The lumbar spine is more stable and resists rotation.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "spine-structure-curvature",
    bodyRegionSlug: "spine",
    domainCode: "D2",
    options: [
      { text: "Cervical (neck)", rationale: "The cervical spine allows good rotation but is less than thoracic." },
      { text: "Thoracic (upper back)", isCorrect: true, rationale: "The thoracic spine is naturally oriented for rotation; the lumbar spine resists rotation." },
      { text: "Lumbar (lower back)", rationale: "The lumbar spine is oriented for stability, not rotation. Loading the lumbar spine with rotation is risky." },
      { text: "All regions rotate equally", rationale: "Different regions allow different amounts of motion." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The thoracic spine is oriented to allow rotation; the lumbar spine is less suited to rotation and is more vulnerable to injury under loaded rotation.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the difference between 'mobilizing' and 'loading' the spine?",
    explanation: "Mobilizing means moving the spine through its range of motion without resistance (safe and therapeutic). Loading means adding force or resistance (requires caution and good form).",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "spine-loading-safety",
    bodyRegionSlug: "spine",
    domainCode: "D2",
    options: [
      { text: "Mobilizing is dangerous; loading is safe", rationale: "The opposite is true." },
      { text: "Mobilizing means moving through range without load; loading means adding force or resistance", isCorrect: true, rationale: "Mobilization is therapeutic; loading requires caution and good form." },
      { text: "They are the same thing", rationale: "They are distinctly different approaches." },
      { text: "Mobilizing is only for the cervical spine; loading is only for the lumbar spine", rationale: "Both mobilization and loading apply to all spinal regions." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Gentle spinal mobilization (unloaded movement) is therapeutic; loaded spinal movement requires careful form to avoid injury.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which spinal loading progression is safest for someone learning proper form?",
    explanation: "Starting with mobility drills and bodyweight stability work, then progressing to loaded carries, then finally to complex loaded movements (squat, deadlift) ensures a solid foundation.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "spine-loading-safety",
    bodyRegionSlug: "spine",
    domainCode: "D2",
    options: [
      { text: "Start with heavy deadlifts or squats immediately", rationale: "This risks poor form and injury. Build a foundation first." },
      { text: "Mobility → bodyweight stability → loaded carries → complex loaded movements", isCorrect: true, rationale: "This progression builds from simple to complex, ensuring the core and spine are prepared for heavy loading." },
      { text: "Do only mobility work forever", rationale: "While healthy, eventual loading is beneficial for strength and bone health." },
      { text: "Skip stability work and go straight to heavy loaded movements", rationale: "This is a recipe for injury." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Progressive loading from mobility to stability to resistance builds spinal resilience.", locator: "Ch. 7.3 Vertebral Column" }],
  },
  {
    type: "multiple_choice",
    prompt: "What is the nucleus pulposus?",
    explanation: "The nucleus pulposus is the gel-like center of the intervertebral disc that acts as a shock absorber, distributing load between vertebrae.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "spine-structure-curvature",
    bodyRegionSlug: "spine",
    domainCode: "D1",
    options: [
      { text: "The outer fibrous ring of the disc", rationale: "That is the annulus fibrosus." },
      { text: "The gel-like center of the disc that acts as a shock absorber", isCorrect: true, rationale: "The nucleus pulposus is the shock-absorbing gel at the disc's core." },
      { text: "A small bone in the spine", rationale: "The nucleus is soft tissue, not bone." },
      { text: "A nerve in the spinal cord", rationale: "The nucleus is part of the disc structure, not the nervous system." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The intervertebral disc consists of an outer annulus fibrosus and inner nucleus pulposus that acts as a shock absorber.", locator: "Ch. 7.3 Vertebral Column" }],
  },
];
