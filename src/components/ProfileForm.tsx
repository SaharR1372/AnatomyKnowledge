"use client";

import { useActionState } from "react";
import { updateProfileAction } from "@/lib/actions/personalization";

interface Props {
  name: string;
  preferredDifficulty: string;
  preferredUnits: string;
  theme: string;
  reduceMotion: boolean;
  largeText: boolean;
}

const field = "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary";

export function ProfileForm(p: Props) {
  const [state, action, pending] = useActionState(updateProfileAction, null as { error?: string; ok?: boolean } | null);

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">Display name</label>
        <input id="name" name="name" defaultValue={p.name} className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="preferredDifficulty" className="mb-1 block text-sm font-medium">Explanation depth</label>
          <select id="preferredDifficulty" name="preferredDifficulty" defaultValue={p.preferredDifficulty} className={field}>
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredUnits" className="mb-1 block text-sm font-medium">Units</label>
          <select id="preferredUnits" name="preferredUnits" defaultValue={p.preferredUnits} className={field}>
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div>
          <label htmlFor="theme" className="mb-1 block text-sm font-medium">Preferred theme</label>
          <select id="theme" name="theme" defaultValue={p.theme} className={field}>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Accessibility</legend>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="reduceMotion" defaultChecked={p.reduceMotion} /> Reduce motion
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="largeText" defaultChecked={p.largeText} /> Prefer larger text
        </label>
      </fieldset>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={pending} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90 disabled:opacity-60">
          {pending ? "Saving…" : "Save changes"}
        </button>
        {state?.ok && <span className="text-sm text-success">Saved.</span>}
        {state?.error && <span className="text-sm text-danger">{state.error}</span>}
      </div>
      <p className="text-xs text-muted">Note: the theme toggle in the top bar changes the theme immediately; this preference is stored on your profile.</p>
    </form>
  );
}
