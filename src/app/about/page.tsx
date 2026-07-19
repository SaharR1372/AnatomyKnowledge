import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SafetyNote } from "@/components/ui";

export const metadata: Metadata = { title: "About & Safety" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="About &amp; Safety" subtitle="What this app is, how it handles evidence, and its safety boundaries." />

      <Card className="mb-6">
        <h2 className="mb-2 font-semibold">What this is</h2>
        <p className="text-sm leading-relaxed">
          AnatomyPath is an educational tool for learning human anatomy, movement, and personal-training
          fundamentals — starting from the absolute basics and building toward certification-level understanding.
          It teaches through reasoning and connections, in clear simple English, with every claim tied to an
          authoritative source.
        </p>
      </Card>

      <div className="mb-6">
        <SafetyNote>
          <p className="mb-2">
            <strong>This app is educational only. It does not provide medical diagnosis or treatment.</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Consult a qualified healthcare professional for pain, injury, illness, or medical concerns.</li>
            <li>No exercise here is claimed to cure an injury or disease.</li>
            <li>The app does not diagnose you from symptoms or movement videos, and does not create rehabilitation plans.</li>
            <li>Never ignore pain. Sharp or worsening pain, chest pain, dizziness, numbness, or weakness are warning signs — stop and seek care.</li>
          </ul>
        </SafetyNote>
      </div>

      <Card className="mb-6">
        <h2 className="mb-2 font-semibold">Scope of practice</h2>
        <p className="text-sm leading-relaxed">
          A personal trainer teaches exercise and healthy movement. They do not diagnose injuries, treat disease,
          prescribe rehabilitation, or give medical nutrition prescriptions. Refer to a physician or physical
          therapist for pain and injury, a registered dietitian for medical nutrition needs, and urgent medical
          care for red-flag symptoms.
        </p>
      </Card>

      <Card className="mb-6">
        <h2 className="mb-2 font-semibold">How we handle evidence</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Sources are prioritized: government guidelines and textbooks first; blogs and social media are never the source of truth.</li>
          <li>Content is labelled by review status (draft → source-checked → expert-reviewed).</li>
          <li>When reliable sources disagree, we show the disagreement instead of hiding it.</li>
          <li>Certification practice questions are original and grounded in this app's cited content — no proprietary exam questions are ever used.</li>
        </ul>
        <p className="mt-3 text-sm">
          See <Link href="/sources" className="text-primary hover:underline">all sources</Link> and{" "}
          <Link href="/credits" className="text-primary hover:underline">image credits</Link>.
        </p>
      </Card>

      <Card>
        <h2 className="mb-2 font-semibold">Roadmap (high level)</h2>
        <p className="text-sm text-muted">
          Phase 1 (now): foundations + the shoulder region, quizzes, progress, spaced repetition.
          Phase 2: full interactive body map, more regions, flashcard UI, richer analytics, installable PWA.
          Phase 3: intermediate/advanced paths, biomechanics visualizations, case studies, more certification paths,
          and an expert content-review workflow. Full details live in <code>docs/roadmap.md</code>.
        </p>
      </Card>
    </div>
  );
}
