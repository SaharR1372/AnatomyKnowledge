import Link from "next/link";
import { Card, LinkButton, Badge } from "@/components/ui";
import { getCurrentUser } from "@/lib/session";

const features = [
  { icon: "📚", title: "Evidence-based", text: "Every lesson, muscle, and quiz answer links to authoritative sources — OpenStax, MedlinePlus, CDC, and official guidelines." },
  { icon: "🧠", title: "Understand, don't memorize", text: "Concepts are taught through reasoning and connections, in clear simple English, with pronunciation help for technical terms." },
  { icon: "🎯", title: "Quizzes & mastery", text: "Original questions with full explanations. Spaced repetition resurfaces what you get wrong until you truly master it." },
  { icon: "📈", title: "Personal progress", text: "Your own account, learning path, and private history. Track completion, accuracy, and certification-domain readiness." },
  { icon: "🦴", title: "Anatomy & exercises", text: "Muscle detail pages and an exercise library that shows primary, secondary, and stabilizing muscles — never oversimplified." },
  { icon: "🛡️", title: "Safety-first", text: "Clear guidance on a trainer's scope of practice and when to refer to a healthcare professional." },
];

export default async function HomePage() {
  const user = await getCurrentUser();
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center">
        <Badge tone="teal">Beginner → Certification prep</Badge>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Learn anatomy, movement, and personal training — the evidence-based way.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          A structured path from the absolute basics to certification-ready understanding.
          Built for careful learners who want to know <em>why</em>, not just <em>what</em>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {user ? (
            <LinkButton href="/dashboard">Go to your dashboard</LinkButton>
          ) : (
            <>
              <LinkButton href="/register">Create your free account</LinkButton>
              <LinkButton href="/learn" variant="ghost">Preview the curriculum</LinkButton>
            </>
          )}
        </div>
        <p className="mt-3 text-sm text-muted">
          Preview lessons without an account. Sign up to save progress, notes, and quiz history.
        </p>
      </section>

      {/* Features */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <div className="text-2xl" aria-hidden>{f.icon}</div>
              <h2 className="mt-2 font-semibold">{f.title}</h2>
              <p className="mt-1 text-sm text-muted">{f.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-center text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", t: "Follow the path", d: "Start with anatomical language and movement, then a complete body region — the shoulder." },
            { n: "2", t: "See the evidence", d: "Read clear explanations with citations and original diagrams, plus a vocabulary helper." },
            { n: "3", t: "Prove it", d: "Take quizzes, review what you miss, and watch your mastery and readiness grow." },
          ].map((s) => (
            <Card key={s.n}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-fg">{s.n}</div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted">{s.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust / safety */}
      <section className="rounded-2xl border border-border bg-surface-2 p-6 text-center">
        <h2 className="text-xl font-bold">Educational, careful, and honest</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
          This is a learning tool, not medical advice. Content is labelled by review status, disagreements
          between sources are shown rather than hidden, and no proprietary certification questions are ever used.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/sources" className="text-primary hover:underline">See all sources →</Link>
          <Link href="/about" className="text-primary hover:underline">Read the safety policy →</Link>
        </div>
      </section>
    </div>
  );
}
