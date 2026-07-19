import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Card, PageHeader, Badge, LinkButton } from "@/components/ui";

export const metadata: Metadata = { title: "Certification Prep" };

export default async function CertificationPage() {
  const certs = await prisma.certification.findMany({
    include: {
      domains: { orderBy: { order: "asc" }, include: { _count: { select: { questions: true } } } },
    },
  });

  return (
    <div>
      <PageHeader title="Certification Preparation" subtitle="Study by exam domain with original, reasoning-focused questions." />

      <div className="mb-6 rounded-lg border border-warning/40 bg-warning/10 p-3 text-sm">
        <strong>Honesty note:</strong> All practice questions are original and grounded in this app's cited content.
        No confidential ACE, NASM, ACSM, or NSCA exam questions are used or reconstructed. Domains are organized
        from public exam content outlines — confirm the latest official outline before relying on it.
      </div>

      {certs.map((cert) => (
        <section key={cert.id} className="mb-8">
          <h2 className="text-xl font-bold">{cert.name}</h2>
          <p className="mb-1 text-sm text-muted">{cert.description}</p>
          <p className="mb-4 text-xs text-muted">
            Organized from: <a href={cert.outlineUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">public exam outline</a> · outline last checked {cert.outlineCheckedDate}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {cert.domains.map((d) => (
              <Card key={d.id}>
                <div className="mb-2 flex items-center gap-2">
                  <Badge tone="blue">{d.code}</Badge>
                  <Badge tone="gray">{d._count.questions} questions</Badge>
                </div>
                <h3 className="font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted">{d.description}</p>
                {d._count.questions > 0 && (
                  <div className="mt-3">
                    <LinkButton href={`/quiz/domain/${d.code}`} variant="ghost">Practice this domain</LinkButton>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>
      ))}

      <p className="text-sm text-muted">
        Timed full practice exams are planned for Phase 2. See <Link href="/about" className="text-primary hover:underline">the roadmap</Link>.
      </p>
    </div>
  );
}
