"use client";

import { useState } from "react";

// A small "tap to hear" button that speaks a term using the browser's built-in
// speech synthesis (no external service). Falls back gracefully if unsupported.
// Helpful for learners whose first language is not English (spec §14).
export function Pronounce({ term, label }: { term: string; label?: string }) {
  const [speaking, setSpeaking] = useState(false);

  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(term);
    u.lang = "en-US";
    u.rate = 0.85; // a little slower for learning
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  }

  return (
    <button
      type="button"
      onClick={speak}
      aria-label={`Hear how to say ${label ?? term}`}
      title={`Hear "${label ?? term}"`}
      className={`inline-flex items-center rounded-md border border-border px-1.5 py-0.5 text-xs hover:bg-surface-2 ${speaking ? "text-primary" : ""}`}
    >
      <span aria-hidden>{speaking ? "🔈" : "🔊"}</span>
    </button>
  );
}
