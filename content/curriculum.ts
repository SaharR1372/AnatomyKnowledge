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
        slug: "training-safely",
        title: "Training Safely",
        order: 4,
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
