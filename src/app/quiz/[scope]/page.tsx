import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { buildQuizSet } from "@/lib/quiz";
import { PageHeader } from "@/components/ui";
import { QuizRunner } from "@/components/QuizRunner";

export const metadata: Metadata = { title: "Quiz" };

// Handles scopes with no target segment: /quiz/all and /quiz/review.
export default async function QuizScopePage({ params }: { params: Promise<{ scope: string }> }) {
  const { scope } = await params;
  const user = await getCurrentUser();

  if (!["all", "review"].includes(scope)) notFound();
  const set = await buildQuizSet(scope, undefined, user?.id);
  if (!set) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title={set.title} subtitle={set.subtitle} />
      <QuizRunner questions={set.questions} requireAuth={!user} />
    </div>
  );
}
