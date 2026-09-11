// DEMO OVERLAY — stands in for every /quiz/* route in the static build.
//
// Muscle, lesson, and certification pages all link into the quiz engine. Those
// links are part of the content, so rather than leaving them to 404 on GitHub
// Pages, each one is prerendered as the same "not in this demo" explanation.

import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Quizzes" };
export const dynamicParams = false;

/** Every quiz URL the rest of the site can link to. */
export async function generateStaticParams() {
  const [lessons, muscles, domains] = await Promise.all([
    prisma.lesson.findMany({ select: { slug: true } }),
    prisma.muscle.findMany({ select: { slug: true } }),
    prisma.certificationDomain.findMany({ select: { code: true } }),
  ]);
  return [
    { rest: ["all"] },
    { rest: ["review"] },
    ...lessons.map((l) => ({ rest: ["lesson", l.slug] })),
    ...muscles.map((m) => ({ rest: ["muscle", m.slug] })),
    ...domains.map((d) => ({ rest: ["domain", d.code] })),
  ];
}

export default function Page() {
  return (
    <DemoUnavailable
      title="Quizzes"
      feature="The quiz engine"
      why="Answers are graded on the server so that correct options are never exposed to the browser, and each result updates a spaced-repetition schedule stored per user. Shipping the answer key to a static page would defeat both."
    />
  );
}
