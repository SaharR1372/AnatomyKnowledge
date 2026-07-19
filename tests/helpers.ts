import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/password";

// Remove all rows between tests so each test is independent. Order respects FKs.
export async function resetDb() {
  await prisma.quizAttempt.deleteMany();
  await prisma.answerOption.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.reviewState.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.citation.deleteMany();
  await prisma.note.deleteMany();
  await prisma.bookmark.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.muscle.deleteMany();
  await prisma.bodyRegion.deleteMany();
  await prisma.source.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();
}

export async function createUser(email: string) {
  return prisma.user.create({
    data: {
      email,
      name: email.split("@")[0],
      passwordHash: await hashPassword("password123"),
      role: "learner",
      profile: { create: { learningLevel: "beginner" } },
    },
  });
}

/** A minimal lesson + one multiple-choice question with a known correct option. */
export async function createLessonWithQuestion() {
  const lesson = await prisma.lesson.create({
    data: { slug: "t-lesson", title: "Test Lesson", summary: "s", bodyMarkdown: "body", status: "source_checked" },
  });
  const question = await prisma.quizQuestion.create({
    data: {
      type: "multiple_choice",
      prompt: "2 + 2 = ?",
      explanation: "Because arithmetic.",
      status: "source_checked",
      lessonId: lesson.id,
      options: {
        create: [
          { text: "4", isCorrect: true, rationale: "Correct.", order: 0 },
          { text: "5", isCorrect: false, rationale: "No.", order: 1 },
        ],
      },
    },
    include: { options: true },
  });
  const correct = question.options.find((o) => o.isCorrect)!;
  const wrong = question.options.find((o) => !o.isCorrect)!;
  return { lesson, question, correct, wrong };
}
