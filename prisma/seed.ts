/**
 * Database seeder. Loads the version-controlled content in /content into the
 * database and creates demo accounts. It is IDEMPOTENT via a full reset: it
 * clears existing rows first, so it is intended for initial setup and demos,
 * not for topping up a production database with live user data.
 *
 * Run with:  npm run seed
 */
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";
import {
  sources,
  vocabulary,
  visualAssets,
  bodyRegions,
  movements,
  exercises,
  lessons,
  learningPaths,
  certifications,
  questions,
} from "../content";
import type { CitationSeed } from "../content/types";

const prisma = new PrismaClient();

async function reset() {
  // Delete in FK-safe order (children before parents).
  await prisma.quizAttempt.deleteMany();
  await prisma.answerOption.deleteMany();
  await prisma.examAttempt.deleteMany();
  await prisma.practiceExam.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.certificationDomain.deleteMany();
  await prisma.certification.deleteMany();
  await prisma.reviewState.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.learningObjective.deleteMany();
  await prisma.lessonPrerequisite.deleteMany();
  await prisma.assetUsage.deleteMany();
  await prisma.citation.deleteMany();
  await prisma.contentReview.deleteMany();
  await prisma.bookmark.deleteMany();
  await prisma.note.deleteMany();
  await prisma.userVocabulary.deleteMany();
  await prisma.flashcard.deleteMany();
  await prisma.exerciseMuscle.deleteMany();
  await prisma.exerciseJoint.deleteMany();
  await prisma.exerciseMovement.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.learningPath.deleteMany();
  await prisma.muscle.deleteMany();
  await prisma.bone.deleteMany();
  await prisma.joint.deleteMany();
  await prisma.movement.deleteMany();
  await prisma.bodyRegion.deleteMany();
  await prisma.vocabularyTerm.deleteMany();
  await prisma.visualAsset.deleteMany();
  await prisma.source.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();
}

async function main() {
  console.log("Resetting database...");
  await reset();

  // --- Sources ---
  const sourceId = new Map<string, string>();
  for (const s of sources) {
    const row = await prisma.source.create({ data: { ...s } });
    sourceId.set(s.slug, row.id);
  }
  console.log(`Sources: ${sourceId.size}`);

  // Helper: create polymorphic citations for a content entity.
  async function addCitations(entityType: string, entityId: string, cites?: CitationSeed[]) {
    if (!cites) return;
    for (const c of cites) {
      const sid = sourceId.get(c.sourceSlug);
      if (!sid) {
        console.warn(`  ! citation references unknown source "${c.sourceSlug}" — skipped`);
        continue;
      }
      await prisma.citation.create({
        data: { sourceId: sid, entityType, entityId, claim: c.claim, locator: c.locator, note: c.note },
      });
    }
  }

  // --- Visual assets ---
  const assetId = new Map<string, string>();
  for (const a of visualAssets) {
    const row = await prisma.visualAsset.create({ data: { ...a } });
    assetId.set(a.slug, row.id);
  }
  async function addAssetUsages(entityType: string, entityId: string, slugs?: string[]) {
    if (!slugs) return;
    for (const slug of slugs) {
      const aid = assetId.get(slug);
      if (!aid) {
        console.warn(`  ! asset usage references unknown asset "${slug}" — skipped`);
        continue;
      }
      await prisma.assetUsage.create({ data: { assetId: aid, entityType, entityId } });
    }
  }
  console.log(`Visual assets: ${assetId.size}`);

  // --- Vocabulary ---
  const termId = new Map<string, string>();
  for (const v of vocabulary) {
    const row = await prisma.vocabularyTerm.create({ data: { ...v } });
    termId.set(v.slug, row.id);
    // A flashcard per term (front = term, back = simple definition).
    await prisma.flashcard.create({
      data: { front: v.term, back: v.simpleDefinition, termId: row.id, category: "vocabulary" },
    });
  }
  console.log(`Vocabulary + flashcards: ${termId.size}`);

  // --- Body regions (with bones, joints, muscles) ---
  const regionId = new Map<string, string>();
  const muscleId = new Map<string, string>();
  const jointId = new Map<string, string>();
  for (const region of bodyRegions) {
    const row = await prisma.bodyRegion.create({
      data: {
        slug: region.slug,
        name: region.name,
        description: region.description,
        relationships: region.relationships,
        safetyNotes: region.safetyNotes,
        pronunciations: region.pronunciations ? JSON.stringify(region.pronunciations) : null,
        order: region.order ?? 0,
      },
    });
    regionId.set(region.slug, row.id);
    await addCitations("body_region", row.id, region.citations);
    await addAssetUsages("body_region", row.id, region.assetSlugs);

    for (const b of region.bones) {
      await prisma.bone.create({ data: { ...b, bodyRegionId: row.id } });
    }
    for (const j of region.joints) {
      const jr = await prisma.joint.create({ data: { ...j, bodyRegionId: row.id } });
      jointId.set(j.slug, jr.id);
    }
    for (const m of region.muscles) {
      const { assetSlugs, citations, ...rest } = m;
      const mr = await prisma.muscle.create({
        data: { ...rest, status: m.status ?? "draft", bodyRegionId: row.id },
      });
      muscleId.set(m.slug, mr.id);
      await addCitations("muscle", mr.id, citations);
      await addAssetUsages("muscle", mr.id, assetSlugs);
      // A quick flashcard from the muscle's main action.
      await prisma.flashcard.create({
        data: { front: `Main action of the ${m.commonName}?`, back: m.actions, muscleId: mr.id, category: "muscle" },
      });
    }
  }
  console.log(`Body regions: ${regionId.size}, muscles: ${muscleId.size}, joints: ${jointId.size}`);

  // --- Movements (two passes for the self-referential opposite link) ---
  const movementId = new Map<string, string>();
  for (const mv of movements) {
    const { oppositeSlug, ...rest } = mv;
    const row = await prisma.movement.create({ data: { ...rest } });
    movementId.set(mv.slug, row.id);
  }
  for (const mv of movements) {
    if (mv.oppositeSlug && movementId.get(mv.oppositeSlug)) {
      await prisma.movement.update({
        where: { id: movementId.get(mv.slug)! },
        data: { oppositeId: movementId.get(mv.oppositeSlug)! },
      });
    }
  }
  console.log(`Movements: ${movementId.size}`);

  // --- Exercises ---
  const exerciseId = new Map<string, string>();
  for (const ex of exercises) {
    const {
      primaryMuscles, secondaryMuscles, stabilizerMuscles, joints, movements: exMoves,
      assetSlugs, citations, instructions, equipment, ...rest
    } = ex;
    const row = await prisma.exercise.create({
      data: {
        ...rest,
        status: ex.status ?? "draft",
        instructions: JSON.stringify(instructions),
        equipment: JSON.stringify(equipment),
      },
    });
    exerciseId.set(ex.slug, row.id);

    const linkMuscles = async (slugs: string[] | undefined, role: string) => {
      for (const slug of slugs ?? []) {
        const mid = muscleId.get(slug);
        if (!mid) { console.warn(`  ! exercise "${ex.slug}" references unknown muscle "${slug}" — skipped`); continue; }
        await prisma.exerciseMuscle.create({ data: { exerciseId: row.id, muscleId: mid, role } });
      }
    };
    await linkMuscles(primaryMuscles, "primary");
    await linkMuscles(secondaryMuscles, "secondary");
    await linkMuscles(stabilizerMuscles, "stabilizer");

    for (const jn of joints ?? []) {
      const jid = jointId.get(jn.jointSlug);
      if (jid) await prisma.exerciseJoint.create({ data: { exerciseId: row.id, jointId: jid, jointAction: jn.jointAction } });
    }
    for (const ms of exMoves ?? []) {
      const mvid = movementId.get(ms);
      if (mvid) await prisma.exerciseMovement.create({ data: { exerciseId: row.id, movementId: mvid } });
    }
    await addCitations("exercise", row.id, citations);
    await addAssetUsages("exercise", row.id, assetSlugs);
  }
  console.log(`Exercises: ${exerciseId.size}`);

  // --- Learning paths + modules ---
  const moduleId = new Map<string, string>();
  for (const path of learningPaths) {
    const prow = await prisma.learningPath.create({
      data: { slug: path.slug, title: path.title, description: path.description, level: path.level, order: path.order ?? 0 },
    });
    for (const mod of path.modules) {
      const mrow = await prisma.module.create({
        data: { slug: mod.slug, title: mod.title, description: mod.description, order: mod.order ?? 0, pathId: prow.id },
      });
      moduleId.set(mod.slug, mrow.id);
    }
  }
  console.log(`Learning paths: ${learningPaths.length}, modules: ${moduleId.size}`);

  // --- Lessons (objectives, links, citations); prerequisites in a 2nd pass ---
  const lessonId = new Map<string, string>();
  for (const l of lessons) {
    const row = await prisma.lesson.create({
      data: {
        slug: l.slug, title: l.title, summary: l.summary, bodyMarkdown: l.bodyMarkdown,
        level: l.level, status: l.status ?? "draft", estimatedMinutes: l.estimatedMinutes ?? 10,
        order: l.order ?? 0, safetyNotes: l.safetyNotes, reviewWarning: l.reviewWarning,
        moduleId: l.moduleSlug ? moduleId.get(l.moduleSlug) : null,
        bodyRegionId: l.bodyRegionSlug ? regionId.get(l.bodyRegionSlug) : null,
      },
    });
    lessonId.set(l.slug, row.id);
    for (let i = 0; i < l.objectives.length; i++) {
      await prisma.learningObjective.create({ data: { lessonId: row.id, text: l.objectives[i], order: i } });
    }
    await addCitations("lesson", row.id, l.citations);
    await addAssetUsages("lesson", row.id, l.assetSlugs);
  }
  for (const l of lessons) {
    for (const pre of l.prerequisiteSlugs ?? []) {
      const lid = lessonId.get(l.slug);
      const pid = lessonId.get(pre);
      if (lid && pid) await prisma.lessonPrerequisite.create({ data: { lessonId: lid, prerequisiteId: pid } });
    }
  }
  console.log(`Lessons: ${lessonId.size}`);

  // --- Certifications + domains ---
  const domainId = new Map<string, string>();
  for (const cert of certifications) {
    const crow = await prisma.certification.create({
      data: {
        slug: cert.slug, name: cert.name, organization: cert.organization,
        outlineUrl: cert.outlineUrl, outlineCheckedDate: cert.outlineCheckedDate, description: cert.description,
      },
    });
    for (const d of cert.domains) {
      const drow = await prisma.certificationDomain.create({
        data: { certificationId: crow.id, code: d.code, name: d.name, description: d.description, weightPercent: d.weightPercent, order: d.order ?? 0 },
      });
      domainId.set(d.code, drow.id);
    }
    // A simple practice exam pulling from this certification's questions.
    await prisma.practiceExam.create({
      data: { slug: `${cert.slug}-practice-1`, certificationId: crow.id, title: `${cert.name}: Practice Set 1`, description: "A mixed practice set drawn from the app's original, cited questions.", timeLimitMinutes: 20, questionCount: 10 },
    });
  }
  console.log(`Certifications: ${certifications.length}, domains: ${domainId.size}`);

  // --- Quiz questions + options + citations ---
  let qCount = 0;
  for (const q of questions) {
    const row = await prisma.quizQuestion.create({
      data: {
        type: q.type, prompt: q.prompt, explanation: q.explanation,
        difficulty: q.difficulty ?? "beginner", status: q.status ?? "draft",
        questionData: q.questionData ? JSON.stringify(q.questionData) : null,
        lessonId: q.lessonSlug ? lessonId.get(q.lessonSlug) : null,
        muscleId: q.muscleSlug ? muscleId.get(q.muscleSlug) : null,
        exerciseId: q.exerciseSlug ? exerciseId.get(q.exerciseSlug) : null,
        bodyRegionId: q.bodyRegionSlug ? regionId.get(q.bodyRegionSlug) : null,
        domainId: q.domainCode ? domainId.get(q.domainCode) : null,
      },
    });
    for (let i = 0; i < q.options.length; i++) {
      const o = q.options[i];
      await prisma.answerOption.create({
        data: { questionId: row.id, text: o.text, isCorrect: o.isCorrect ?? false, rationale: o.rationale, order: i },
      });
    }
    await addCitations("quiz_question", row.id, q.citations);
    qCount++;
  }
  console.log(`Quiz questions: ${qCount}`);

  // --- Demo accounts ---
  const demoPassword = "password123";
  const hash = await hashPassword(demoPassword);
  const admin = await prisma.user.create({
    data: {
      email: "admin@demo.local", name: "Demo Admin", role: "admin", passwordHash: hash,
      profile: { create: { learningLevel: "beginner" } },
    },
  });
  const learner = await prisma.user.create({
    data: {
      email: "learner@demo.local", name: "Demo Learner", role: "learner", passwordHash: hash,
      profile: { create: { learningLevel: "beginner" } },
    },
  });
  console.log(`Demo users: ${admin.email} (admin), ${learner.email} (learner) — password: ${demoPassword}`);

  console.log("\nSeed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
