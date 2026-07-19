import type { QuestionSeed } from "./types";

// ORIGINAL quiz questions written from the app's own cited lessons. No question
// is copied or reconstructed from any proprietary certification exam (spec §13).
// Each question links to the content it assesses (for review + spaced repetition)
// and, where relevant, to a certification study domain.

const OPENSTAX = "openstax-anp-2e";

export const questions: QuestionSeed[] = [
  // --- Directional terms ---
  {
    type: "multiple_choice",
    prompt: "The wrist is ______ to the elbow.",
    explanation:
      "Distal means farther from the point where a limb attaches to the trunk. The wrist is farther down the arm than the elbow, so it is distal to the elbow.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "anatomical-position-and-directional-terms",
    domainCode: "D1",
    options: [
      { text: "distal", isCorrect: true, rationale: "Correct — the wrist is farther from the shoulder attachment than the elbow." },
      { text: "proximal", rationale: "Proximal means closer to the attachment; that describes the elbow relative to the wrist, not the reverse." },
      { text: "superior", rationale: "Superior means toward the head; it is not the term for position along a limb." },
      { text: "medial", rationale: "Medial means toward the midline, which is not what this comparison describes." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Distal = farther from the limb's attachment; proximal = closer.", locator: "Ch. 1.6 Anatomical Terminology" }],
  },
  {
    type: "true_false",
    prompt: "In the anatomical position, the palms face backward.",
    explanation:
      "In the anatomical position the body stands upright, facing forward, with the arms at the sides and the palms facing FORWARD (not backward).",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "anatomical-position-and-directional-terms",
    domainCode: "D1",
    options: [
      { text: "True", rationale: "Incorrect — the palms face forward in the anatomical position." },
      { text: "False", isCorrect: true, rationale: "Correct — the palms face forward." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Anatomical position has palms facing forward.", locator: "Ch. 1.6 Anatomical Terminology" }],
  },
  // --- Planes ---
  {
    type: "multiple_choice",
    prompt: "Raising your arms straight out to the sides happens primarily in which plane?",
    explanation:
      "Side-to-side movements away from and toward the midline occur in the frontal (coronal) plane. Abduction of the arm is a frontal-plane movement.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "body-planes-and-axes",
    domainCode: "D1",
    options: [
      { text: "Frontal (coronal) plane", isCorrect: true, rationale: "Correct — abduction/adduction occur in the frontal plane." },
      { text: "Sagittal plane", rationale: "The sagittal plane is for forward/backward movements like flexion and extension." },
      { text: "Transverse plane", rationale: "The transverse plane is for rotational movements." },
      { text: "Oblique plane", rationale: "Not one of the three standard reference planes for this movement." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Frontal-plane movements include abduction and adduction.", locator: "Ch. 1.6; Ch. 9.5" }],
  },
  // --- Movements ---
  {
    type: "multiple_choice",
    prompt: "Bending the elbow to bring the hand toward the shoulder is an example of:",
    explanation: "Flexion decreases the angle at a joint. Bending the elbow decreases the elbow angle, so it is elbow flexion.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "fundamental-movement-terms",
    domainCode: "D1",
    options: [
      { text: "Flexion", isCorrect: true, rationale: "Correct — the joint angle decreases." },
      { text: "Extension", rationale: "Extension increases the joint angle (straightening)." },
      { text: "Abduction", rationale: "Abduction moves a limb away from the midline, not bending the elbow." },
      { text: "Pronation", rationale: "Pronation is turning the forearm/palm downward, a different action." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Flexion decreases the angle at a joint.", locator: "Ch. 9.5 Types of Body Movements" }],
  },
  {
    type: "matching",
    prompt: "Match each movement to its opposite.",
    explanation:
      "Movements occur in opposite pairs: flexion/extension, abduction/adduction, and internal rotation/external rotation.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "fundamental-movement-terms",
    domainCode: "D1",
    questionData: {
      pairs: [
        { left: "Flexion", right: "Extension" },
        { left: "Abduction", right: "Adduction" },
        { left: "Internal rotation", right: "External rotation" },
      ],
    },
    options: [
      { text: "Flexion ↔ Extension", isCorrect: true, rationale: "Correct opposite pair." },
      { text: "Abduction ↔ Adduction", isCorrect: true, rationale: "Correct opposite pair." },
      { text: "Internal rotation ↔ External rotation", isCorrect: true, rationale: "Correct opposite pair." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Joint movements occur in opposing pairs.", locator: "Ch. 9.5 Types of Body Movements" }],
  },
  // --- Shoulder bones/joints ---
  {
    type: "multiple_choice",
    prompt: "Which three bones make up the shoulder?",
    explanation:
      "The shoulder is formed by the clavicle (collarbone), scapula (shoulder blade), and humerus (upper arm bone).",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "shoulder-region-overview",
    bodyRegionSlug: "shoulder",
    domainCode: "D1",
    options: [
      { text: "Clavicle, scapula, humerus", isCorrect: true, rationale: "Correct — these three bones form the shoulder." },
      { text: "Clavicle, sternum, radius", rationale: "The sternum and radius are not the main shoulder bones (the radius is in the forearm)." },
      { text: "Scapula, humerus, ulna", rationale: "The ulna is a forearm bone, not part of the shoulder." },
      { text: "Humerus, radius, ulna", rationale: "These are the arm/forearm bones of the elbow, not the shoulder." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The pectoral girdle and arm involve the clavicle, scapula, and humerus.", locator: "Ch. 8.2 The Pectoral Girdle" }],
  },
  {
    type: "multiple_choice",
    prompt: "The glenohumeral joint is described as very mobile but relatively unstable because:",
    explanation:
      "Its socket (the glenoid cavity) is shallow, like a golf ball on a tee. This allows a large range of motion but means the joint depends on muscles — especially the rotator cuff — for stability.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "shoulder-region-overview",
    bodyRegionSlug: "shoulder",
    domainCode: "D1",
    options: [
      { text: "its socket is shallow, so it relies on muscles for stability", isCorrect: true, rationale: "Correct — the shallow glenoid trades stability for mobility." },
      { text: "it has no muscles crossing it", rationale: "Many muscles cross it — they are what provide stability." },
      { text: "it is a hinge joint", rationale: "It is a ball-and-socket joint, not a hinge." },
      { text: "the bones are fused together", rationale: "Fused bones would not move; the joint is highly mobile." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The shallow glenoid cavity gives the glenohumeral joint high mobility and lower stability.", locator: "Ch. 9.4 Synovial Joints" }],
  },
  // --- Deltoid ---
  {
    type: "multiple_choice",
    prompt: "Which part of the deltoid is the main mover in a dumbbell lateral raise?",
    explanation:
      "A lateral raise is shoulder abduction (lifting the arm out to the side). The middle (lateral) deltoid fibers are the primary abductors, so they are emphasized.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-deltoid",
    muscleSlug: "deltoid",
    exerciseSlug: "dumbbell-lateral-raise",
    domainCode: "D3",
    options: [
      { text: "The middle (lateral) fibers", isCorrect: true, rationale: "Correct — the middle deltoid abducts the arm." },
      { text: "The anterior (front) fibers", rationale: "Front fibers are emphasized in pressing/flexion, not side raises." },
      { text: "The posterior (rear) fibers", rationale: "Rear fibers extend/externally rotate the shoulder, emphasized in rowing." },
      { text: "None — the deltoid is not involved", rationale: "The deltoid is the primary muscle in a lateral raise." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The middle deltoid fibers abduct the arm.", locator: "Ch. 11.5 Muscles of the Pectoral Girdle and Upper Limbs" }],
  },
  {
    type: "true_false",
    prompt: "A single shoulder exercise trains the entire deltoid equally.",
    explanation:
      "False. The deltoid's front, middle, and rear fibers pull in different directions, so different movements emphasize different parts. Balanced shoulder training uses more than one direction.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-deltoid",
    muscleSlug: "deltoid",
    domainCode: "D3",
    options: [
      { text: "True", rationale: "Incorrect — different fibers are emphasized by different movements." },
      { text: "False", isCorrect: true, rationale: "Correct — front, middle, and rear fibers require different movements." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Deltoid fibers have different lines of pull and actions.", locator: "Ch. 11.5" }],
  },
  // --- Rotator cuff ---
  {
    type: "multiple_choice",
    prompt: "What is the rotator cuff's most important role?",
    explanation:
      "The four cuff muscles primarily STABILIZE the shoulder by keeping the humeral head centered in its shallow socket, so the larger muscles (like the deltoid) can move the arm safely.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "the-rotator-cuff",
    domainCode: "D1",
    options: [
      { text: "Stabilizing the shoulder by centering the humeral head", isCorrect: true, rationale: "Correct — stability is the cuff's key job." },
      { text: "Producing the most force in overhead pressing", rationale: "The deltoid and triceps are the big pressing movers, not the cuff." },
      { text: "Bending the elbow", rationale: "Elbow flexion is the biceps/brachialis, unrelated to the cuff." },
      { text: "Rotating the spine", rationale: "The cuff acts at the shoulder, not the spine." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The rotator cuff stabilizes the glenohumeral joint.", locator: "Ch. 11.5" }],
  },
  {
    type: "multiple_choice",
    prompt: "Which rotator cuff muscle INTERNALLY (medially) rotates the arm?",
    explanation:
      "The subscapularis is the cuff muscle that internally rotates the arm. The infraspinatus and teres minor externally rotate; the supraspinatus assists abduction.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "the-rotator-cuff",
    muscleSlug: "subscapularis",
    domainCode: "D1",
    options: [
      { text: "Subscapularis", isCorrect: true, rationale: "Correct — it is the internal rotator of the cuff." },
      { text: "Infraspinatus", rationale: "Infraspinatus externally rotates the arm." },
      { text: "Teres minor", rationale: "Teres minor externally rotates the arm." },
      { text: "Supraspinatus", rationale: "Supraspinatus assists abduction, not internal rotation." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "The subscapularis medially (internally) rotates the arm.", locator: "Ch. 11.5" }],
  },
  // --- Exercises ---
  {
    type: "multiple_choice",
    prompt: "A push-up is best described as a:",
    explanation:
      "A push-up is a closed-chain, compound horizontal push. The chest (pectoralis major) and front deltoid drive the movement while the triceps assist and the core stabilizes — it is not a single-muscle exercise.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "exercise-safety-basics",
    exerciseSlug: "push-up",
    domainCode: "D3",
    options: [
      { text: "compound movement working the chest, shoulders, triceps, and core", isCorrect: true, rationale: "Correct — multiple muscles cooperate." },
      { text: "isolation exercise for the chest only", rationale: "Push-ups are compound, not isolation; many muscles contribute." },
      { text: "exercise that trains only the triceps", rationale: "The triceps assist, but the chest and front deltoid are prime movers." },
      { text: "purely a core exercise", rationale: "The core stabilizes, but the movement is a push driven by the upper body." },
    ],
    citations: [{ sourceSlug: OPENSTAX, claim: "Horizontal pushing uses pectoralis major and anterior deltoid as prime movers.", locator: "Ch. 11.5" }],
  },
  // --- Safety / scope ---
  {
    type: "scenario",
    prompt:
      "A client tells you they have sharp shoulder pain and numbness down the arm that started this week. What is the most appropriate action for a personal trainer?",
    explanation:
      "Sharp pain with numbness is a warning sign outside a trainer's scope. The appropriate action is to refer the client to a qualified healthcare professional (e.g., physician or physical therapist) rather than diagnosing, treating, or 'training through' it.",
    difficulty: "intermediate",
    status: "source_checked",
    lessonSlug: "exercise-safety-basics",
    domainCode: "D4",
    options: [
      { text: "Refer them to a qualified healthcare professional", isCorrect: true, rationale: "Correct — this is beyond a trainer's scope; refer out." },
      { text: "Diagnose a rotator cuff tear and prescribe rehab exercises", rationale: "Diagnosing and prescribing rehab is outside a personal trainer's scope of practice." },
      { text: "Tell them to push through the pain", rationale: "Never advise training through sharp pain or ignoring warning signs." },
      { text: "Give them anti-inflammatory medication", rationale: "Trainers do not prescribe or provide medication." },
    ],
    citations: [{ sourceSlug: "cdc-physical-activity", claim: "Seek medical guidance for pain or warning signs; start activity safely.", locator: "Physical Activity Basics" }],
  },
  {
    type: "multiple_choice",
    prompt:
      "According to the Physical Activity Guidelines for Americans, adults should do muscle-strengthening activities on how many days per week?",
    explanation:
      "The guidelines recommend muscle-strengthening activities involving all major muscle groups on 2 or more days per week, in addition to aerobic activity.",
    difficulty: "beginner",
    status: "source_checked",
    lessonSlug: "exercise-safety-basics",
    domainCode: "D2",
    options: [
      { text: "2 or more days per week", isCorrect: true, rationale: "Correct — 2+ days per week for major muscle groups." },
      { text: "Only 1 day per week", rationale: "The guideline is 2 or more days, not 1." },
      { text: "Every day without rest", rationale: "Daily strength training of the same muscles is not the recommendation; recovery matters." },
      { text: "Never — only aerobic activity is recommended", rationale: "Both aerobic and muscle-strengthening activity are recommended." },
    ],
    citations: [{ sourceSlug: "pag-americans", claim: "Adults should do muscle-strengthening activity on 2+ days per week.", locator: "Key Guidelines for Adults" }],
  },
];
