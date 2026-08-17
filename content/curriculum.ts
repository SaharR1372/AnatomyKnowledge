import type { LearningPathSeed, CertificationSeed } from "./types";

// The beginner learning path and its modules. Lessons reference these modules by
// slug (see content/lessons.ts). Intermediate/advanced paths are planned for
// later phases (see docs/roadmap.md).

export const learningPaths: LearningPathSeed[] = [
  {
    slug: "beginner-foundations",
    title: "Beginner: Foundations & the Shoulder",
    level: "beginner",
    order: 1,
    description:
      "Start from the absolute basics: how we describe the body, how it moves, and a complete first body region — the shoulder — followed by core safety principles.",
    modules: [
      {
        slug: "foundations-of-anatomy",
        title: "Foundations of Anatomy",
        order: 1,
        description: "The shared language of the body: position, directional terms, planes, and movements.",
      },
      {
        slug: "the-shoulder",
        title: "The Shoulder",
        order: 2,
        description: "The bones, joints, and muscles of the shoulder — your first complete body region.",
      },
      {
        slug: "the-chest",
        title: "The Chest",
        order: 3,
        description: "The rib cage, the pectoralis major and its pushing role, and the muscles of breathing.",
      },
      {
        slug: "the-upper-back",
        title: "The Upper Back",
        order: 4,
        description: "The muscles that move the shoulder blades and pull the arms — the 'pull' balance to the chest.",
      },
      {
        slug: "the-lower-back",
        title: "The Lower Back",
        order: 5,
        description: "The lumbar spine and its deep muscles, the hip hinge, and safe lifting mechanics.",
      },
      {
        slug: "the-core",
        title: "The Core & Abdominal Region",
        order: 6,
        description: "The abdominal muscles that flex, rotate, and — most importantly — brace and stabilize the trunk.",
      },
      {
        slug: "the-pelvis-hips",
        title: "The Pelvis & Hips",
        order: 7,
        description: "The pelvic ring and the ball-and-socket hip joint that links the spine to the legs.",
      },
      {
        slug: "the-glutes",
        title: "The Glutes",
        order: 8,
        description: "The powerful hip extensors and pelvic stabilizers of the buttock.",
      },
      {
        slug: "the-thighs",
        title: "The Thighs",
        order: 9,
        description: "The quadriceps, hamstrings, adductors, and sartorius — the powerhouse muscles between hip and knee.",
      },
      {
        slug: "the-knees",
        title: "The Knees",
        order: 10,
        description: "The body's largest hinge joint — structure, ligaments, common injuries, and safe alignment.",
      },
      {
        slug: "the-lower-legs",
        title: "The Lower Legs",
        order: 11,
        description: "The calf, shin, and outer-leg muscles that move the ankle and absorb impact with every step.",
      },
      {
        slug: "the-ankles-feet",
        title: "The Ankles & Feet",
        order: 12,
        description: "The body's base of support — the subtalar joint, the foot's arches, and balance.",
      },
      {
        slug: "the-arms",
        title: "The Arms",
        order: 13,
        description: "The biceps and triceps opposing pair, plus their quieter helpers brachialis and coracobrachialis.",
      },
      {
        slug: "the-elbows",
        title: "The Elbows",
        order: 14,
        description: "Three joints in one capsule — bending/straightening, forearm rotation, and common overuse injuries.",
      },
      {
        slug: "the-forearms-hands",
        title: "The Forearms & Hands",
        order: 15,
        description: "The muscles that move the wrist and grip with the fingers.",
      },
      {
        slug: "training-safely",
        title: "Training Safely",
        order: 16,
        description: "General safety principles and understanding a personal trainer's scope of practice.",
      },
    ],
  },
];

// Certification-prep scaffold. Domains are organized from the PUBLIC exam content
// outline named in the source. Weight percentages are intentionally omitted where
// they cannot be verified offline; a reviewer should confirm current percentages
// against the official outline before relying on them (spec §13).
export const certifications: CertificationSeed[] = [
  {
    slug: "cpt-foundations",
    name: "Personal Trainer Foundations (study domains)",
    organization: "Organized from public exam content outlines (ACE, NASM)",
    outlineUrl: "https://www.acefitness.org/fitness-certifications/certification-exam-content/",
    outlineCheckedDate: "2026-07-19",
    description:
      "A neutral set of study domains that mirror the broad competency areas found in public personal-trainer exam outlines. All practice questions in the app are ORIGINAL and grounded in the app's cited content — no proprietary exam questions are used. Confirm the latest official outline and domain weights before exam preparation.",
    domains: [
      {
        code: "D1",
        name: "Anatomy, Physiology & Biomechanics Foundations",
        order: 1,
        description:
          "Basic anatomy, muscle and joint function, movement terminology, planes, and how the body produces movement.",
      },
      {
        code: "D2",
        name: "Assessment & Program Design",
        order: 2,
        description:
          "Gathering client information, movement basics, and designing safe, appropriate exercise programs for goals and levels.",
      },
      {
        code: "D3",
        name: "Exercise Technique & Instruction",
        order: 3,
        description:
          "Exercise selection, correct technique, cueing, common mistakes, regressions, and progressions.",
      },
      {
        code: "D4",
        name: "Professional Practice, Safety & Scope",
        order: 4,
        description:
          "Professional responsibilities, safety, scope of practice, and when to refer to other qualified professionals.",
      },
    ],
  },
];
