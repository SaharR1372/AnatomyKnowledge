"use client";

import { useState } from "react";
import Link from "next/link";
import type { ClientQuestion } from "@/lib/quiz";
import { submitAnswerAction, type AnswerResult } from "@/lib/actions/learning";
import { CONFIDENCE, type Confidence } from "@/lib/enums";

const confidenceLabels: Record<Confidence, string> = {
  dont_know: "I don't know",
  unsure: "I'm unsure",
  know: "I know this",
  too_easy: "Too easy",
};

export function QuizRunner({ questions, requireAuth }: { questions: ClientQuestion[]; requireAuth: boolean }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<Confidence | undefined>();
  const [result, setResult] = useState<AnswerResult | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (questions.length === 0) {
    return <p className="rounded-lg border border-border bg-surface p-4 text-sm text-muted">No questions here yet.</p>;
  }

  const q = questions[index];
  const selfGraded = q.type === "matching" || q.type === "fill_blank";
  const pairs = (q.questionData as { pairs?: { left: string; right: string }[] } | null)?.pairs;

  async function submit(selfCorrect?: boolean) {
    setBusy(true);
    setError(null);
    try {
      const res = await submitAnswerAction({
        questionId: q.id,
        selectedOptionId: selfGraded ? undefined : selected ?? undefined,
        confidence,
        selfCorrect,
      });
      setResult(res);
      if (res.isCorrect) setCorrectCount((c) => c + 1);
    } catch {
      setError("Could not save your answer. Please make sure you are signed in.");
    } finally {
      setBusy(false);
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setConfidence(undefined);
    setResult(null);
    setRevealed(false);
  }

  if (done) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center">
        <h2 className="text-xl font-bold">Quiz complete</h2>
        <p className="mt-2 text-3xl font-extrabold text-primary">{correctCount}/{questions.length}</p>
        <p className="text-muted">{pct}% correct</p>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Missed questions are scheduled to come back sooner through spaced repetition. Mastery grows with repeated success, not a single correct answer.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href="/dashboard" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90">Back to dashboard</Link>
          <Link href="/quiz" className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-2">More quizzes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-center justify-between text-xs text-muted">
        <span>Question {index + 1} of {questions.length}</span>
        <span className="capitalize">{q.type.replace("_", " ")}</span>
      </div>
      <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div className="h-full bg-primary transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      <h2 className="mb-4 mt-3 text-lg font-semibold">{q.prompt}</h2>

      {requireAuth && (
        <p className="mb-3 rounded-lg border border-warning/40 bg-warning/10 p-2 text-xs text-warning">
          You are previewing. <Link href="/register" className="underline">Sign in</Link> to save answers and track mastery.
        </p>
      )}

      {/* Option-based question */}
      {!selfGraded && (
        <ul className="space-y-2">
          {q.options.map((o) => {
            const isSel = selected === o.id;
            const isCorrect = result?.correctOptionIds.includes(o.id);
            const rationale = result?.optionRationales.find((r) => r.id === o.id)?.rationale;
            const stateClass = result
              ? isCorrect
                ? "border-success bg-success/10"
                : isSel
                  ? "border-danger bg-danger/10"
                  : "border-border opacity-70"
              : isSel
                ? "border-primary bg-primary/5"
                : "border-border hover:bg-surface-2";
            return (
              <li key={o.id}>
                <button
                  disabled={!!result}
                  onClick={() => setSelected(o.id)}
                  className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm transition ${stateClass}`}
                >
                  <span className="font-medium">{o.text}</span>
                  {result && isCorrect && <span className="ml-2 text-success">✓ correct</span>}
                  {result && isSel && !isCorrect && <span className="ml-2 text-danger">✗ your answer</span>}
                  {result && rationale && <p className="mt-1 text-xs text-muted">{rationale}</p>}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* Self-graded question (matching / fill-in-the-blank) */}
      {selfGraded && (
        <div>
          {!revealed ? (
            <button onClick={() => setRevealed(true)} className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-surface-2">
              Reveal answer
            </button>
          ) : (
            <div className="rounded-lg border border-border bg-surface-2 p-3 text-sm">
              {pairs ? (
                <ul className="space-y-1">
                  {pairs.map((p, i) => <li key={i}><strong>{p.left}</strong> ↔ {p.right}</li>)}
                </ul>
              ) : (
                <p>{result?.explanation ?? "See the explanation below."}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Confidence (before answering) */}
      {!result && (
        <div className="mt-4">
          <p className="mb-1 text-xs font-medium text-muted">How confident are you? (optional)</p>
          <div className="flex flex-wrap gap-2">
            {CONFIDENCE.map((c) => (
              <button
                key={c}
                onClick={() => setConfidence(c)}
                className={`rounded-full border px-3 py-1 text-xs ${confidence === c ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-surface-2"}`}
              >
                {confidenceLabels[c]}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && <p className="mt-3 text-sm text-danger">{error}</p>}

      {/* Explanation after answering */}
      {result && (
        <div className={`mt-4 rounded-lg border p-3 text-sm ${result.isCorrect ? "border-success bg-success/10" : "border-danger bg-danger/10"}`}>
          <p className="font-semibold">{result.isCorrect ? "Correct ✓" : "Not quite ✗"}</p>
          <p className="mt-1 text-text/90">{result.explanation}</p>
        </div>
      )}

      {/* Controls */}
      <div className="mt-5 flex items-center justify-between">
        {!result ? (
          selfGraded ? (
            <div className="flex gap-2">
              <button disabled={!revealed || busy} onClick={() => submit(true)} className="rounded-lg bg-success px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">I got it right</button>
              <button disabled={!revealed || busy} onClick={() => submit(false)} className="rounded-lg bg-danger px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">I got it wrong</button>
            </div>
          ) : (
            <button disabled={!selected || busy} onClick={() => submit()} className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-fg hover:opacity-90 disabled:opacity-50">
              {busy ? "Checking…" : "Check answer"}
            </button>
          )
        ) : (
          <button onClick={next} className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-fg hover:opacity-90">
            {index + 1 >= questions.length ? "See results" : "Next question →"}
          </button>
        )}
        <span className="text-xs text-muted">Score: {correctCount}/{index + (result ? 1 : 0)}</span>
      </div>
    </div>
  );
}
