import type { LessonSeed } from "./types";

// Beginner-path lessons for the MVP. Each lesson has learning objectives,
// prerequisites (so concepts are learned in order), citations to authoritative
// sources, and — where relevant — a safety note. Prose is written in clear,
// simple English for English-as-an-additional-language learners (spec §2).

const OPENSTAX = "openstax-anp-2e";
const MEDLINE = "medlineplus-anatomy";
const PAG = "pag-americans";

export const lessons: LessonSeed[] = [
  {
    slug: "anatomical-position-and-directional-terms",
    title: "Anatomical Position and Directional Terms",
    summary:
      "The standard body position and the shared 'map words' used to describe where structures are.",
    moduleSlug: "foundations-of-anatomy",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    objectives: [
      "Describe the standard anatomical position.",
      "Use the main directional terms (anterior, posterior, superior, inferior, medial, lateral, proximal, distal, superficial, deep).",
      "Explain why a shared reference position matters.",
    ],
    assetSlugs: ["directional-terms"],
    bodyMarkdown: `## Why we need a shared reference

To talk about the body clearly, everyone must agree on a starting position and a shared set of direction words. Without this, "the arm is above the hand" is ambiguous — it depends on how the person is standing.

## The anatomical position

The **anatomical position** is the agreed reference: the body stands upright, facing forward, feet flat and slightly apart, arms at the sides with the **palms facing forward**. All directional terms assume the body is in this position, even if the real person is lying down or moving.

## Directional terms

These terms come in opposite pairs:

- **Anterior** (front) ↔ **Posterior** (back)
- **Superior** (toward the head) ↔ **Inferior** (toward the feet)
- **Medial** (toward the midline) ↔ **Lateral** (toward the side)
- **Proximal** (closer to where a limb attaches) ↔ **Distal** (farther from the attachment)
- **Superficial** (closer to the surface) ↔ **Deep** (farther inside)

For example, the elbow is **proximal** to the wrist, the wrist is **distal** to the elbow, the breastbone is **medial** to the shoulder, and the skin is **superficial** to the muscle beneath it.

## Why this matters for training

When you read that a muscle is on the "posterior" shoulder, or that an exercise works the "lateral" deltoid, these words tell you exactly where to look. Directional terms are the vocabulary the rest of this course is built on.`,
    citations: [
      {
        sourceSlug: OPENSTAX,
        claim:
          "The anatomical position is a standard reference (standing erect, facing forward, arms at sides, palms forward) and directional terms describe positions relative to it.",
        locator: "Ch. 1.6 Anatomical Terminology",
      },
      {
        sourceSlug: MEDLINE,
        claim: "Anatomy describes the structures of the body and how they are organized.",
        locator: "Anatomy overview page",
      },
    ],
  },
  {
    slug: "body-planes-and-axes",
    title: "Body Planes and Axes",
    summary: "The three flat 'slices' used to describe the direction a movement happens in.",
    moduleSlug: "foundations-of-anatomy",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 10,
    order: 2,
    prerequisiteSlugs: ["anatomical-position-and-directional-terms"],
    assetSlugs: ["body-planes"],
    objectives: [
      "Name the three anatomical planes.",
      "Match each plane to the movements that occur in it.",
      "Explain what an axis of rotation is.",
    ],
    bodyMarkdown: `## Planes: imaginary slices through the body

A **plane** is a flat surface that cuts through the body. We use three:

- **Sagittal plane** — a vertical slice that divides the body into **left and right**. Forward/backward movements (like a biceps curl or walking) happen here.
- **Frontal (coronal) plane** — a vertical slice that divides the body into **front and back**. Side-to-side movements (like raising your arms out to the sides) happen here.
- **Transverse plane** — a horizontal slice that divides the body into **top and bottom**. Rotational movements (like twisting the torso) happen here.

## Axes: the lines movement turns around

Every rotation happens around an **axis** — an imaginary line the movement pivots on, like the pin in a door hinge. Each plane has an axis at right angles to it. You do not need to master axes yet; just know that "plane" describes the direction of a movement and "axis" describes the line it rotates around.

## Why this matters for training

Describing an exercise by its plane helps you balance a program. Many everyday exercises happen in the sagittal plane; adding frontal-plane and transverse-plane work trains the body more completely.`,
    citations: [
      {
        sourceSlug: OPENSTAX,
        claim:
          "The sagittal, frontal (coronal), and transverse planes are the standard anatomical planes used to describe the body and its movements.",
        locator: "Ch. 1.6 Anatomical Terminology (Anatomical Planes)",
      },
    ],
  },
  {
    slug: "fundamental-movement-terms",
    title: "Fundamental Movement Terms",
    summary: "The core words for joint movements: flexion, extension, abduction, adduction, and rotation.",
    moduleSlug: "foundations-of-anatomy",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 3,
    prerequisiteSlugs: ["body-planes-and-axes"],
    objectives: [
      "Define flexion and extension.",
      "Define abduction and adduction.",
      "Define internal and external rotation, pronation, and supination.",
      "Match each movement to its plane.",
    ],
    bodyMarkdown: `## Movements come in opposite pairs

Most joint movements have an opposite. Learning them in pairs makes them easier to remember.

### In the sagittal plane
- **Flexion** — bending a joint, decreasing the angle between bones (bending the elbow).
- **Extension** — straightening a joint, increasing the angle (straightening the elbow).

### In the frontal plane
- **Abduction** — moving a limb **away** from the midline (raising the arm out to the side).
- **Adduction** — moving a limb **toward** the midline (lowering the arm back down).

### In the transverse plane
- **Internal (medial) rotation** — turning a limb inward, toward the body.
- **External (lateral) rotation** — turning a limb outward, away from the body.
- **Pronation / supination** — at the forearm, turning the palm down (pronation) or up (supination).

## Why this matters for training

Every exercise is a set of joint movements. When you can name them, you can predict which muscles produce the movement — for example, the middle deltoid produces shoulder **abduction**, so a lateral raise (abduction) trains it.`,
    citations: [
      {
        sourceSlug: OPENSTAX,
        claim:
          "Flexion/extension, abduction/adduction, medial/lateral rotation, and pronation/supination are defined movements of synovial joints.",
        locator: "Ch. 9.5 Types of Body Movements",
      },
    ],
  },
  {
    slug: "shoulder-region-overview",
    title: "The Shoulder: An Overview",
    summary: "The bones, joints, and big picture of how the shoulder trades stability for mobility.",
    moduleSlug: "the-shoulder",
    bodyRegionSlug: "shoulder",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 14,
    order: 1,
    prerequisiteSlugs: ["fundamental-movement-terms"],
    assetSlugs: ["shoulder-region"],
    safetyNotes:
      "The shoulder's large range of motion comes with less inherent stability. Persistent shoulder pain, weakness, numbness, or a feeling of instability should be checked by a qualified healthcare professional — a trainer does not diagnose or treat these.",
    objectives: [
      "Name the three bones of the shoulder.",
      "Describe the main shoulder joints and their types.",
      "Explain the trade-off between mobility and stability.",
    ],
    bodyMarkdown: `## Three bones

The shoulder is built from three bones:

- **Clavicle** (collarbone) — connects the arm skeleton to the breastbone at the front.
- **Scapula** (shoulder blade) — a flat triangular bone on the upper back with a shallow socket.
- **Humerus** (upper arm bone) — its rounded head sits in the scapula's socket.

## Several joints, working together

The shoulder is not one joint but a **complex** of several:

- **Glenohumeral joint** — the main **ball-and-socket** joint between the humerus and the scapula's shallow socket. This is what most people mean by "the shoulder joint."
- **Acromioclavicular (AC) joint** — between the scapula and clavicle.
- **Sternoclavicular (SC) joint** — the only bony link between the arm skeleton and the trunk.
- **Scapulothoracic articulation** — the shoulder blade gliding over the rib cage (a functional joint, not a true one).

## Mobility vs. stability

The glenohumeral socket is shallow, like a golf ball on a tee. This lets the arm move in almost every direction — but it also means the joint relies heavily on **muscles** (especially the rotator cuff) for stability, rather than on deep bony fit. This trade-off is the key idea for understanding shoulder training and shoulder injuries.`,
    citations: [
      {
        sourceSlug: OPENSTAX,
        claim:
          "The pectoral girdle (clavicle and scapula) attaches the upper limb to the axial skeleton; the glenohumeral joint is a ball-and-socket joint with a shallow glenoid cavity, giving high mobility and lower stability.",
        locator: "Ch. 8.2 The Pectoral Girdle; Ch. 9.4 Synovial Joints",
      },
      {
        sourceSlug: MEDLINE,
        claim: "Joints are where two bones meet and allow movement; muscles and connective tissue support them.",
        locator: "Bones, Joints and Muscles overview",
      },
    ],
  },
  {
    slug: "the-deltoid",
    title: "The Deltoid: Your Shoulder's Cap",
    summary: "The three-part muscle that lifts the arm in every direction.",
    moduleSlug: "the-shoulder",
    bodyRegionSlug: "shoulder",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 2,
    prerequisiteSlugs: ["shoulder-region-overview"],
    assetSlugs: ["shoulder-region"],
    objectives: [
      "Locate the deltoid and its three parts.",
      "Match each part of the deltoid to the movement it produces.",
      "Explain why one exercise does not train the whole deltoid equally.",
    ],
    bodyMarkdown: `## Where it is

The **deltoid** is the rounded muscle that caps the shoulder and gives it its shape. Its name comes from the Greek letter delta (Δ) because of its triangular shape.

## Three parts, three jobs

The deltoid has three sets of fibers with different lines of pull:

- **Anterior (front) fibers** — flex and internally rotate the shoulder. Emphasized in overhead pressing.
- **Middle (lateral) fibers** — **abduct** the arm (lift it out to the side). Emphasized in lateral raises.
- **Posterior (rear) fibers** — extend and externally rotate the shoulder. Assist in rowing and reverse-fly movements.

## A common misconception

Because the three parts pull in different directions, **no single "shoulder exercise" trains the whole deltoid equally**. Overhead pressing leans on the front fibers; lateral raises target the middle; rowing-type pulls hit the rear. A balanced program includes movement in more than one direction.

## How it works with its neighbors

The deltoid is powerful, but it does not act alone. The **rotator cuff** underneath keeps the ball of the humerus centered so the deltoid can lift the arm without the joint slipping — a good example of muscles cooperating.`,
    citations: [
      {
        sourceSlug: OPENSTAX,
        claim:
          "The deltoid's anterior, middle, and posterior fibers flex/medially rotate, abduct, and extend/laterally rotate the arm, respectively.",
        locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
      },
    ],
  },
  {
    slug: "the-rotator-cuff",
    title: "The Rotator Cuff: Stability First",
    summary: "Four deep muscles that keep the shoulder centered and healthy.",
    moduleSlug: "the-shoulder",
    bodyRegionSlug: "shoulder",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 3,
    prerequisiteSlugs: ["the-deltoid"],
    safetyNotes:
      "Sharp shoulder pain, catching, or weakness when lifting or rotating the arm can signal a rotator cuff problem and should be assessed by a healthcare professional. Do not train through sharp shoulder pain.",
    objectives: [
      "Name the four rotator cuff muscles.",
      "Describe the cuff's main job (stability) and its rotation actions.",
      "Explain why external-rotation training is often included.",
    ],
    bodyMarkdown: `## Four small muscles, one big job

The **rotator cuff** is a group of four deep muscles that wrap around the shoulder joint. A helpful memory aid is **SITS**:

- **S**upraspinatus — helps **start** lifting the arm to the side (abduction).
- **I**nfraspinatus — rotates the arm **outward** (external rotation).
- **T**eres minor — also rotates the arm **outward**.
- **S**ubscapularis — rotates the arm **inward** (internal rotation).

## Stability first

The cuff's most important role is not producing big movements — it is **keeping the ball of the humerus centered** in its shallow socket. When the deltoid lifts the arm, the cuff pulls the humeral head down and in so the joint stays stable. Think of the cuff as the shoulder's steering and suspension, not its engine.

## Why external rotation gets extra attention

Many everyday and gym movements (pressing, pushing) involve **internal** rotation. To keep the shoulder balanced, trainers often include gentle **external-rotation** work (like band external rotations) for the infraspinatus and teres minor. This is about balance and joint health, so light loads and good control matter more than heavy weight.

## A commonly confused pair

**Teres minor** is part of the cuff and rotates the arm **outward**. **Teres major** (a different muscle) is **not** part of the cuff and rotates the arm **inward**. Same neighborhood, opposite rotation — a classic mix-up.`,
    citations: [
      {
        sourceSlug: OPENSTAX,
        claim:
          "The rotator cuff consists of the supraspinatus, infraspinatus, teres minor, and subscapularis, which stabilize the glenohumeral joint; infraspinatus and teres minor externally rotate the arm while subscapularis internally rotates it.",
        locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs",
      },
    ],
  },
  {
    slug: "exercise-safety-basics",
    title: "Exercise Safety Basics",
    summary: "Core safety principles and knowing when a concern is beyond a trainer's scope.",
    moduleSlug: "training-safely",
    level: "beginner",
    status: "source_checked",
    estimatedMinutes: 12,
    order: 1,
    prerequisiteSlugs: ["shoulder-region-overview"],
    safetyNotes:
      "This app is educational and does not provide medical advice. For pain, injury, or health concerns, consult a qualified healthcare professional.",
    objectives: [
      "State general principles for training safely.",
      "Tell the difference between normal training effort and warning signs.",
      "Describe when a trainer should refer someone to a healthcare professional.",
    ],
    bodyMarkdown: `## General principles

- **Start where you are.** Choose a level you can control with good form, then progress gradually.
- **Progress slowly.** Increase load, reps, or difficulty a little at a time. Sudden big jumps raise injury risk.
- **Prioritize form over weight.** Controlled movement through a range you own beats heavier, sloppy reps.
- **Warm up** and include a mix of activity. National guidelines recommend regular aerobic activity plus muscle-strengthening on 2+ days per week for adults.

## Normal effort vs. warning signs

Muscles working hard, breathing faster, and mild next-day muscle soreness are **normal**. The following are **warning signs** to stop and seek advice:

- Sharp, sudden, or joint pain (not muscle effort).
- Chest pain, dizziness, fainting, or unusual shortness of breath.
- Numbness, tingling, or weakness.
- Pain that persists or worsens after training.

> **Never train through sharp pain, and never ignore pain hoping it will pass.**

## Scope of practice: when to refer

A personal trainer teaches exercise and healthy movement. A trainer does **not** diagnose injuries, treat disease, prescribe rehabilitation, or give medical or detailed nutrition prescriptions. Refer to the right professional when:

- There is pain, injury, or a suspected medical condition → **physician** or **physical therapist**.
- Specific medical nutrition needs arise → **registered dietitian**.
- Symptoms are red flags (chest pain, fainting, severe or spreading pain) → urgent **medical care**.

Knowing the edge of your scope is part of being a good, safe trainer.`,
    citations: [
      {
        sourceSlug: PAG,
        claim:
          "Adults should do at least 150 minutes of moderate-intensity aerobic activity per week and muscle-strengthening activities on 2 or more days per week.",
        locator: "Key Guidelines for Adults",
      },
      {
        sourceSlug: "cdc-physical-activity",
        claim: "Regular physical activity is one of the most important things people can do for their health; start gradually.",
        locator: "Physical Activity Basics",
      },
    ],
  },
];
