import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { buildQuizSet } from "@/lib/quiz";
import { PageHeader } from "@/components/ui";
import { QuizRunner } from "@/components/QuizRunner";

export const metadata: Metadata = { title: "Quiz" };

// Handles scoped quizzes: /quiz/lesson/[slug], /quiz/muscle/[slug],
// /quiz/region/[slug], /quiz/domain/[code].
export default async function QuizTargetPage({ params }: { params: Promise<{ scope: string; value: string }> }) {
  const { scope, value } = await params;
  const user = await getCurrentUser();

  if (!["lesson", "muscle", "region", "domain"].includes(scope)) notFound();
  const set = await buildQuizSet(scope, value, user?.id);
  if (!set) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title={set.title} subtitle={set.subtitle} />
      <QuizRunner questions={set.questions} requireAuth={!user} />
    </div>
  );
}
