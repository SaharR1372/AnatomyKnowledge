import { prisma } from "./db";

// Shape sent to the client quiz runner. IMPORTANT: option correctness is NOT
// included — the server decides correctness when an answer is submitted, so the
// answers can't be read from the page source.
export interface ClientQuestion {
  id: string;
  type: string;
  prompt: string;
  questionData: unknown | null;
  options: { id: string; text: string }[];
}

export interface QuizSet {
  title: string;
  subtitle?: string;
  questions: ClientQuestion[];
}

function toClient(rows: Awaited<ReturnType<typeof fetchQuestions>>): ClientQuestion[] {
  return rows.map((q) => ({
    id: q.id,
    type: q.type,
    prompt: q.prompt,
    questionData: q.questionData ? JSON.parse(q.questionData) : null,
    // Shuffle options so position is not a giveaway.
    options: shuffle(q.options.map((o) => ({ id: o.id, text: o.text }))),
  }));
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fetchQuestions(where: object) {
  return prisma.quizQuestion.findMany({
    where,
    include: { options: { orderBy: { order: "asc" } } },
  });
}

/**
 * Build a quiz set for a given scope. Returns null if the scope target does not
 * exist. `review` requires a user and returns questions due for spaced review.
 */
export async function buildQuizSet(scope: string, value: string | undefined, userId?: string): Promise<QuizSet | null> {
  switch (scope) {
    case "lesson": {
      const lesson = await prisma.lesson.findUnique({ where: { slug: value } });
      if (!lesson) return null;
      const qs = await fetchQuestions({ lessonId: lesson.id });
      return { title: `Quiz: ${lesson.title}`, subtitle: "Questions from this lesson.", questions: toClient(qs) };
    }
    case "muscle": {
      const muscle = await prisma.muscle.findUnique({ where: { slug: value } });
      if (!muscle) return null;
      const qs = await fetchQuestions({ muscleId: muscle.id });
      return { title: `Quiz: ${muscle.commonName}`, questions: toClient(qs) };
    }
    case "region": {
      const region = await prisma.bodyRegion.findUnique({ where: { slug: value } });
      if (!region) return null;
      const qs = await fetchQuestions({ bodyRegionId: region.id });
      return { title: `Quiz: ${region.name}`, questions: toClient(qs) };
    }
    case "domain": {
      const domain = await prisma.certificationDomain.findFirst({ where: { code: value } });
      if (!domain) return null;
      const qs = await fetchQuestions({ domainId: domain.id });
      return { title: `Practice: ${domain.name}`, subtitle: "Original questions grouped by certification study domain.", questions: toClient(qs) };
    }
    case "all": {
      const qs = await fetchQuestions({});
      return { title: "Mixed quiz", subtitle: "Questions from across the whole curriculum.", questions: toClient(qs) };
    }
    case "review": {
      if (!userId) return null;
      const due = await prisma.reviewState.findMany({
        where: { userId, itemType: "question", dueDate: { lte: new Date() } },
        orderBy: { dueDate: "asc" },
        take: 20,
      });
      const ids = due.map((d) => d.itemId);
      if (ids.length === 0) return { title: "Review", subtitle: "Nothing is due for review right now — great job!", questions: [] };
      const qs = await fetchQuestions({ id: { in: ids } });
      return { title: "Due for review", subtitle: "Spaced-repetition brings back what you need to reinforce.", questions: toClient(qs) };
    }
    default:
      return null;
  }
}
