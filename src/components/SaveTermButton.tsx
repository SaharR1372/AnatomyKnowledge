"use client";

import { useState, useTransition } from "react";
import { saveVocabAction } from "@/lib/actions/personalization";

export function SaveTermButton({ termId, initialSaved }: { termId: string; initialSaved: boolean }) {
  const [saved, setSaved] = useState(initialSaved);
  const [pending, start] = useTransition();
  return (
    <button
      onClick={() => start(async () => { await saveVocabAction(termId, "/vocabulary"); setSaved(true); })}
      disabled={pending || saved}
      className="rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:bg-surface-2 disabled:opacity-60"
    >
      {saved ? "★ Saved" : "☆ Save to my list"}
    </button>
  );
}
