import { Pronounce } from "./Pronounce";

export interface PronunciationItem {
  term: string;
  say: string;
}

// "How to say it" helper shown in a region overview. Each hard word gets a
// simple phonetic respelling plus a tap-to-hear audio button.
export function PronunciationGuide({ items }: { items: PronunciationItem[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden>🗣️</span> How to say it
      </h3>
      <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.term} className="flex items-center gap-2 text-sm">
            <Pronounce term={it.term} />
            <span className="font-medium">{it.term}</span>
            <span className="text-muted">/{it.say}/</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
