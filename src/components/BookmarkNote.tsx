"use client";

import { useState, useTransition } from "react";
import { toggleBookmarkAction, saveNoteAction } from "@/lib/actions/personalization";

interface Props {
  entityType: string;
  entityId: string;
  path: string;
  initialBookmarked: boolean;
  initialNote: string;
}

/** Reusable bookmark + private note controls for muscles, exercises, etc. */
export function BookmarkNote({ entityType, entityId, path, initialBookmarked, initialNote }: Props) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [note, setNote] = useState(initialNote);
  const [saved, setSaved] = useState(false);
  const [pending, start] = useTransition();

  return (
    <div className="space-y-3">
      <button
        onClick={() => start(async () => { const r = await toggleBookmarkAction(entityType, entityId, path); setBookmarked(r.bookmarked); })}
        disabled={pending}
        className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-surface-2"
      >
        {bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
      </button>
      <details className="rounded-lg border border-border bg-surface p-3">
        <summary className="cursor-pointer text-sm font-medium">Your private notes</summary>
        <textarea
          value={note}
          onChange={(e) => { setNote(e.target.value); setSaved(false); }}
          rows={3}
          placeholder="Write a note only you can see…"
          className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary"
        />
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => start(async () => { await saveNoteAction(entityType, entityId, note, path); setSaved(true); })}
            disabled={pending || !note.trim()}
            className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:bg-surface-2 disabled:opacity-60"
          >
            Save note
          </button>
          {saved && <span className="text-xs text-success">Saved.</span>}
        </div>
      </details>
    </div>
  );
}
