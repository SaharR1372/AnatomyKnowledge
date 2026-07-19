import { vi, describe, it, expect, beforeEach } from "vitest";

// Control the "current user" the server actions see, and neutralize Next.js
// request-scoped helpers so the real action code can run under vitest.
const state = vi.hoisted(() => ({ user: null as { id: string; email: string; role: string; name?: string | null } | null }));

vi.mock("@/lib/session", () => ({
  getCurrentUser: async () => state.user,
  requireUser: async () => {
    if (!state.user) throw new Error("unauthenticated");
    return state.user;
  },
  requireEditor: async () => state.user,
}));
vi.mock("@/lib/auth", () => ({ signIn: vi.fn(), signOut: vi.fn() }));
// next-auth pulls in Next server internals that don't resolve under vitest; we
// only need its AuthError type for the login action's catch block.
vi.mock("next-auth", () => ({ AuthError: class AuthError extends Error {} }));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));
vi.mock("next/navigation", () => ({
  redirect: (url: string) => {
    throw new Error("REDIRECT:" + url);
  },
}));

import { prisma } from "@/lib/db";
import { resetDb, createUser, createLessonWithQuestion } from "./helpers";
import { registerAction } from "@/lib/actions/auth";
import { submitAnswerAction, completeLessonAction } from "@/lib/actions/learning";
import { saveNoteAction, toggleBookmarkAction } from "@/lib/actions/personalization";
import { verifyPassword } from "@/lib/password";

beforeEach(async () => {
  await resetDb();
  state.user = null;
});

describe("registration & login", () => {
  it("creates a user with a hashed password (never plaintext)", async () => {
    const fd = new FormData();
    fd.set("name", "Alice");
    fd.set("email", "alice@test.local");
    fd.set("password", "supersecret1");

    // Success path ends in redirect("/dashboard"), which our mock turns into a throw.
    await expect(registerAction({}, fd)).rejects.toThrow("REDIRECT:/dashboard");

    const user = await prisma.user.findUnique({ where: { email: "alice@test.local" } });
    expect(user).not.toBeNull();
    expect(user!.passwordHash).not.toBe("supersecret1");
    expect(await verifyPassword("supersecret1", user!.passwordHash)).toBe(true);
    // A profile is created alongside the user.
    expect(await prisma.profile.findUnique({ where: { userId: user!.id } })).not.toBeNull();
  });

  it("rejects duplicate email and short passwords", async () => {
    await createUser("dup@test.local");
    const fd = new FormData();
    fd.set("name", "Dup");
    fd.set("email", "dup@test.local");
    fd.set("password", "longenough1");
    const res = await registerAction({}, fd);
    expect(res.fieldErrors?.email).toBeTruthy();

    const short = new FormData();
    short.set("name", "Bob");
    short.set("email", "bob@test.local");
    short.set("password", "123");
    const res2 = await registerAction({}, short);
    expect(res2.fieldErrors?.password).toBeTruthy();
  });
});

describe("quiz scoring & spaced repetition", () => {
  it("grades correctness on the server and schedules review", async () => {
    const a = await createUser("a@test.local");
    const { question, correct, wrong } = await createLessonWithQuestion();
    state.user = { id: a.id, email: a.email, role: "learner" };

    const good = await submitAnswerAction({ questionId: question.id, selectedOptionId: correct.id, confidence: "know" });
    expect(good.isCorrect).toBe(true);
    expect(good.masteryLevel).toBeLessThan(0.8); // not mastered from one answer

    const attempt = await prisma.quizAttempt.findFirst({ where: { userId: a.id, questionId: question.id } });
    expect(attempt?.isCorrect).toBe(true);
    expect(attempt?.firstAttempt).toBe(true);

    const rs = await prisma.reviewState.findUnique({
      where: { userId_itemType_itemId: { userId: a.id, itemType: "question", itemId: question.id } },
    });
    expect(rs).not.toBeNull();
    expect(rs!.repetitions).toBe(1);

    // A wrong answer creates a lapse and shortens the interval.
    const bad = await submitAnswerAction({ questionId: question.id, selectedOptionId: wrong.id });
    expect(bad.isCorrect).toBe(false);
    const rs2 = await prisma.reviewState.findUnique({
      where: { userId_itemType_itemId: { userId: a.id, itemType: "question", itemId: question.id } },
    });
    expect(rs2!.lapses).toBe(1);
    expect(rs2!.repetitions).toBe(0);
  });
});

describe("lesson completion & progress", () => {
  it("marks a lesson complete and starts a streak", async () => {
    const a = await createUser("c@test.local");
    const { lesson } = await createLessonWithQuestion();
    state.user = { id: a.id, email: a.email, role: "learner" };

    await completeLessonAction(lesson.id, lesson.slug);
    const prog = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId: a.id, lessonId: lesson.id } },
    });
    expect(prog?.status).toBe("completed");
    const profile = await prisma.profile.findUnique({ where: { userId: a.id } });
    expect(profile?.currentStreak).toBe(1);
  });
});

describe("user-data isolation", () => {
  it("keeps one user's progress, notes, and bookmarks invisible to another", async () => {
    const a = await createUser("owner@test.local");
    const b = await createUser("intruder@test.local");
    const { lesson, question, correct } = await createLessonWithQuestion();

    // User A generates private data.
    state.user = { id: a.id, email: a.email, role: "learner" };
    await completeLessonAction(lesson.id, lesson.slug);
    await submitAnswerAction({ questionId: question.id, selectedOptionId: correct.id });
    await saveNoteAction("lesson", lesson.id, "A's private note");
    await toggleBookmarkAction("lesson", lesson.id);

    // What B can see when queries are correctly scoped by userId: nothing of A's.
    const bProgress = await prisma.lessonProgress.findMany({ where: { userId: b.id } });
    const bNotes = await prisma.note.findMany({ where: { userId: b.id } });
    const bBookmarks = await prisma.bookmark.findMany({ where: { userId: b.id } });
    const bAttempts = await prisma.quizAttempt.findMany({ where: { userId: b.id } });
    expect(bProgress).toHaveLength(0);
    expect(bNotes).toHaveLength(0);
    expect(bBookmarks).toHaveLength(0);
    expect(bAttempts).toHaveLength(0);

    // A's data still exists and belongs to A.
    expect(await prisma.note.count({ where: { userId: a.id } })).toBe(1);
    const note = await prisma.note.findFirst({ where: { userId: a.id } });
    expect(note?.body).toBe("A's private note");
  });

  it("saveNote only ever writes rows owned by the acting user", async () => {
    const a = await createUser("x@test.local");
    const b = await createUser("y@test.local");
    const { lesson } = await createLessonWithQuestion();

    state.user = { id: b.id, email: b.email, role: "learner" };
    await saveNoteAction("lesson", lesson.id, "B note");

    const aNotes = await prisma.note.findMany({ where: { userId: a.id } });
    expect(aNotes).toHaveLength(0);
    const bNotes = await prisma.note.findMany({ where: { userId: b.id } });
    expect(bNotes).toHaveLength(1);
  });
});
