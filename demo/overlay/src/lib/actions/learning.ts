// DEMO OVERLAY — replaces src/lib/actions/learning.ts in the static build.
// Inert stubs; nothing is persisted because there is no server or database.

export interface AnswerResult {
  isCorrect: boolean;
  correctOptionIds: string[];
  explanation: string;
  optionRationales: { id: string; rationale: string | null; isCorrect: boolean }[];
  masteryLevel: number;
  nextDueInDays: number;
}

export async function completeLessonAction(_lessonId: string, _lessonSlug: string): Promise<void> {}

export async function viewLessonAction(_lessonId: string): Promise<void> {}

export async function submitAnswerAction(_raw: unknown): Promise<AnswerResult> {
  throw new Error("Quiz grading is server-side and is not part of the static demo");
}
