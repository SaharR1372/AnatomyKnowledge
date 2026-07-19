import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/ui";
import { FlashcardDeck } from "@/components/FlashcardDeck";

export const metadata: Metadata = { title: "Flashcards" };

export default async function FlashcardsPage() {
  const cards = await prisma.flashcard.findMany({
    select: { id: true, front: true, back: true, category: true },
  });

  return (
    <div className="mx-auto max-w-xl">
      <PageHeader title="Flashcards" subtitle="Quick recall practice from the vocabulary and muscle facts in the curriculum." />
      <FlashcardDeck cards={cards} />
      <p className="mt-6 text-center text-xs text-muted">
        Spaced-repetition scheduling for flashcards is planned for Phase 2; quiz questions already use it today.
      </p>
    </div>
  );
}
