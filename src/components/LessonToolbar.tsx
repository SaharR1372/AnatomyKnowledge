"use client";

import { useEffect, useState, useTransition } from "react";
import { completeLessonAction, viewLessonAction } from "@/lib/actions/learning";
import { toggleBookmarkAction, saveNoteAction } from "@/lib/actions/personalization";

interface Props {
  lessonId: string;
  slug: string;
  initialCompleted: boolean;
  initialBookmarked: boolean;
  initialNote: string;
}

/** Learner controls on a lesson: mark complete, bookmark, and private notes. */
export function LessonToolbar({ lessonId, slug, initialCompleted, initialBookmarked, initialNote }: Props) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [note, setNote] = useState(initialNote);
  const [noteSaved, setNoteSaved] = useState(false);
  const [pending, start] = useTransition();
  const path = `/learn/${slug}`;

  // Record that the lesson was opened (starts "in progress").
  useEffect(() => {
    viewLessonAction(lessonId).catch(() => {});
  }, [lessonId]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => start(async () => { await completeLessonAction(lessonId, slug); setCompleted(true); })}
          disabled={pending || completed}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90 disabled:opacity-60"
        >
          {completed ? "✅ Completed" : pending ? "Saving…" : "Mark as complete"}
        </button>
        <button
          onClick={() => start(async () => { const r = await toggleBookmarkAction("lesson", lessonId, path); setBookmarked(r.bookmarked); })}
          disabled={pending}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-surface-2"
        >
          {bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
        </button>
      </div>

      <details className="rounded-lg border border-border bg-surface p-3">
        <summary className="cursor-pointer text-sm font-medium">Your private notes</summary>
        <textarea
          value={note}
          onChange={(e) => { setNote(e.target.value); setNoteSaved(false); }}
          rows={4}
          placeholder="Write a note only you can see…"
          className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
        />
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => start(async () => { await saveNoteAction("lesson", lessonId, note, path); setNoteSaved(true); })}
            disabled={pending || !note.trim()}
            className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:bg-surface-2 disabled:opacity-60"
          >
            Save note
          </button>
          {noteSaved && <span className="text-xs text-success">Saved.</span>}
        </div>
      </details>
    </div>
  );
}
