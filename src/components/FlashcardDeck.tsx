"use client";

import { useState } from "react";

interface Fc { id: string; front: string; back: string; category: string | null }

export function FlashcardDeck({ cards }: { cards: Fc[] }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (cards.length === 0) return <p className="text-sm text-muted">No flashcards yet.</p>;
  const card = cards[i];

  const go = (delta: number) => { setFlipped(false); setI((v) => (v + delta + cards.length) % cards.length); };

  return (
    <div>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-48 w-full flex-col items-center justify-center rounded-xl border border-border bg-surface p-8 text-center shadow-sm transition hover:border-primary"
        aria-label="Flip card"
      >
        <span className="mb-2 text-xs uppercase tracking-wide text-muted">{flipped ? "Answer" : "Prompt"}{card.category ? ` · ${card.category}` : ""}</span>
        <span className="text-lg font-medium">{flipped ? card.back : card.front}</span>
        <span className="mt-3 text-xs text-muted">Click to flip</span>
      </button>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => go(-1)} className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-2">← Previous</button>
        <span className="text-sm text-muted">{i + 1} / {cards.length}</span>
        <button onClick={() => go(1)} className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-2">Next →</button>
      </div>
    </div>
  );
}
