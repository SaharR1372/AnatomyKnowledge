import Link from "next/link";
import { Card, PageHeader } from "@/components/ui";

export const REPO_URL = "https://github.com/SaharR1372/AnatomyKnowledge";

/** Thin site-wide strip explaining what this deployment is. */
export function DemoBanner() {
  return (
    <div className="border-b border-border bg-surface-2">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-xs text-muted">
        📖 <strong className="text-text">Read-only demo.</strong> All content is browsable; accounts,
        saved progress, and quizzes need the full app —{" "}
        <a href={REPO_URL} className="text-primary hover:underline" target="_blank" rel="noreferrer">
          run it locally from GitHub
        </a>
        .
      </p>
    </div>
  );
}

/** Stands in for a page whose feature requires a server, database, or account. */
export function DemoUnavailable({
  title,
  feature,
  why,
}: {
  title: string;
  feature: string;
  why: string;
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title={title} subtitle={`${feature} is not part of this static demo.`} />
      <Card>
        <p className="text-sm leading-relaxed">{why}</p>
        <p className="mt-4 text-sm leading-relaxed">
          This site is a static export hosted on GitHub Pages, so there is no server and no database
          behind it. The complete application — with accounts, quizzes, spaced repetition, bookmarks,
          and private notes — runs locally in about two minutes:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-surface-2 p-4 text-xs leading-relaxed">
{`git clone ${REPO_URL}.git
cd AnatomyKnowledge
npm install
cp .env.example .env
npm run setup
npm run dev`}
        </pre>
        <p className="mt-4 text-sm">
          <a href={REPO_URL} className="text-primary hover:underline" target="_blank" rel="noreferrer">
            View the source on GitHub →
          </a>
        </p>
      </Card>
      <p className="mt-6 text-sm text-muted">
        In the meantime, everything that does not need an account is fully browsable:{" "}
        <Link href="/anatomy" className="text-primary hover:underline">Anatomy</Link>,{" "}
        <Link href="/exercises" className="text-primary hover:underline">Exercises</Link>,{" "}
        <Link href="/learn" className="text-primary hover:underline">Lessons</Link>,{" "}
        <Link href="/vocabulary" className="text-primary hover:underline">Vocabulary</Link>, and{" "}
        <Link href="/flashcards" className="text-primary hover:underline">Flashcards</Link>.
      </p>
    </div>
  );
}
