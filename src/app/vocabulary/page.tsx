import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Card, PageHeader, Badge } from "@/components/ui";
import { SaveTermButton } from "@/components/SaveTermButton";

export const metadata: Metadata = { title: "Vocabulary" };

export default async function VocabularyPage() {
  const user = await getCurrentUser();
  const terms = await prisma.vocabularyTerm.findMany({ orderBy: { term: "asc" } });

  const savedIds = new Set<string>();
  if (user) {
    const saved = await prisma.userVocabulary.findMany({ where: { userId: user.id }, select: { termId: true } });
    saved.forEach((s) => savedIds.add(s.termId));
  }

  return (
    <div>
      <PageHeader title="Vocabulary" subtitle="Technical terms with plain-English definitions, pronunciation, and examples — support for learning in an additional language." />
      {!user && (
        <p className="mb-6 text-sm text-muted"><Link href="/register" className="text-primary hover:underline">Sign in</Link> to build a personal vocabulary list.</p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {terms.map((t) => (
          <Card key={t.id}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold">{t.term}</h2>
                {t.pronunciation && <p className="text-xs text-muted">/{t.pronunciation}/{t.partOfSpeech ? ` · ${t.partOfSpeech}` : ""}</p>}
              </div>
              {user && <SaveTermButton termId={t.id} initialSaved={savedIds.has(t.id)} />}
            </div>
            <p className="mt-2 text-sm">{t.simpleDefinition}</p>
            {t.technicalDefinition && <p className="mt-1 text-xs text-muted"><span className="font-medium">Technical:</span> {t.technicalDefinition}</p>}
            {t.exampleSentence && <p className="mt-2 text-sm italic text-muted">“{t.exampleSentence}”</p>}
            {t.confusedTerms && <p className="mt-2 text-xs"><Badge tone="amber">Don&apos;t confuse with</Badge> {t.confusedTerms}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
}
