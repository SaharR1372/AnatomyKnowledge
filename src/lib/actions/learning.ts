"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { answerSchema, type AnswerInput } from "@/lib/validation";
import { gradeFromAnswer, schedule } from "@/lib/spaced-repetition";
import type { Confidence } from "@/lib/enums";

/** Update the user's study streak based on today's activity. */
async function touchStreak(userId: string) {
  const profile = await prisma.profile.findUnique({ where: { userId } });
  if (!profile) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const last = profile.lastStudyDate ? new Date(profile.lastStudyDate) : null;
  if (last) last.setHours(0, 0, 0, 0);

  let current = profile.currentStreak;
  if (!last) {
    current = 1;
  } else {
    const diffDays = Math.round((today.getTime() - last.getTime()) / 86_400_000);
    if (diffDays === 0) {
      // already studied today — streak unchanged
    } else if (diffDays === 1) {
      current += 1;
    } else {
      current = 1;
    }
  }

  await prisma.profile.update({
    where: { userId },
    data: {
      currentStreak: current,
      longestStreak: Math.max(current, profile.longestStreak),
      lastStudyDate: new Date(),
    },
  });
}

/** Mark a lesson complete for the current user (idempotent). */
export async function completeLessonAction(lessonId: string, lessonSlug: string) {
  const user = await requireUser();
  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId } },
    create: { userId: user.id, lessonId, status: "completed", completedAt: new Date() },
    update: { status: "completed", completedAt: new Date(), lastViewedAt: new Date() },
  });
  await touchStreak(user.id);
  revalidatePath(`/learn/${lessonSlug}`);
  revalidatePath("/dashboard");
}

/** Record that the user viewed a lesson (starts progress if new). */
export async function viewLessonAction(lessonId: string) {
  const user = await requireUser();
  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId } },
    create: { userId: user.id, lessonId, status: "in_progress", lastViewedAt: new Date() },
    update: { lastViewedAt: new Date() },
  });
}

export interface AnswerResult {
  isCorrect: boolean;
  correctOptionIds: string[];
  explanation: string;
  optionRationales: { id: string; rationale: string | null; isCorrect: boolean }[];
  masteryLevel: number;
  nextDueInDays: number;
}

/**
 * Grade a quiz answer, save it to the user's private history, and update the
 * spaced-repetition schedule. Correctness for option-based questions is decided
 * ON THE SERVER from the stored options (never trusted from the client).
 */
export async function submitAnswerAction(raw: AnswerInput): Promise<AnswerResult> {
  const user = await requireUser();
  const input = answerSchema.parse(raw);

  const question = await prisma.quizQuestion.findUnique({
    where: { id: input.questionId },
    include: { options: true },
  });
  if (!question) throw new Error("Question not found");

  const selfGraded = question.type === "matching" || question.type === "fill_blank";
  let isCorrect: boolean;

  if (selfGraded) {
    isCorrect = input.selfCorrect === true;
  } else {
    const selected = question.options.find((o) => o.id === input.selectedOptionId);
    isCorrect = Boolean(selected?.isCorrect);
  }

  // Was this the user's first-ever attempt at this question?
  const priorAttempts = await prisma.quizAttempt.count({
    where: { userId: user.id, questionId: question.id },
  });
  const firstAttempt = priorAttempts === 0;

  await prisma.quizAttempt.create({
    data: {
      userId: user.id,
      questionId: question.id,
      selectedOptionId: selfGraded ? null : input.selectedOptionId ?? null,
      freeResponse: input.freeResponse ?? null,
      isCorrect,
      confidence: input.confidence ?? null,
      firstAttempt,
    },
  });

  // Update spaced-repetition state for this question.
  const existing = await prisma.reviewState.findUnique({
    where: { userId_itemType_itemId: { userId: user.id, itemType: "question", itemId: question.id } },
  });
  const grade = gradeFromAnswer(isCorrect, input.confidence as Confidence | undefined);
  const next = schedule(
    {
      repetitions: existing?.repetitions ?? 0,
      intervalDays: existing?.intervalDays ?? 0,
      easeFactor: existing?.easeFactor ?? 2.5,
      lapses: existing?.lapses ?? 0,
    },
    grade,
  );

  await prisma.reviewState.upsert({
    where: { userId_itemType_itemId: { userId: user.id, itemType: "question", itemId: question.id } },
    create: {
      userId: user.id,
      itemType: "question",
      itemId: question.id,
      repetitions: next.repetitions,
      intervalDays: next.intervalDays,
      easeFactor: next.easeFactor,
      lapses: next.lapses,
      dueDate: next.dueDate,
      lastReviewedAt: new Date(),
      masteryLevel: next.masteryLevel,
      firstAttemptCorrect: firstAttempt ? isCorrect : existing?.firstAttemptCorrect ?? false,
    },
    update: {
      repetitions: next.repetitions,
      intervalDays: next.intervalDays,
      easeFactor: next.easeFactor,
      lapses: next.lapses,
      dueDate: next.dueDate,
      lastReviewedAt: new Date(),
      masteryLevel: next.masteryLevel,
    },
  });

  await touchStreak(user.id);
  revalidatePath("/dashboard");

  return {
    isCorrect,
    correctOptionIds: question.options.filter((o) => o.isCorrect).map((o) => o.id),
    explanation: question.explanation,
    optionRationales: question.options.map((o) => ({ id: o.id, rationale: o.rationale, isCorrect: o.isCorrect })),
    masteryLevel: next.masteryLevel,
    nextDueInDays: next.intervalDays,
  };
}
