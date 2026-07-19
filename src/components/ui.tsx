import Link from "next/link";
import type { ReactNode } from "react";
import { statusLabel } from "@/lib/enums";

// Small set of reusable presentational components used across pages. Keeping them
// here enforces a consistent look and keeps pages readable.

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-surface p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-1 max-w-prose text-muted">{subtitle}</p>}
    </div>
  );
}

type BadgeTone = "gray" | "blue" | "green" | "amber" | "red" | "teal";
const toneClasses: Record<BadgeTone, string> = {
  gray: "bg-surface-2 text-muted",
  blue: "bg-primary/10 text-primary",
  green: "bg-success/15 text-success",
  amber: "bg-warning/15 text-warning",
  red: "bg-danger/15 text-danger",
  teal: "bg-accent/15 text-accent",
};

export function Badge({ children, tone = "gray" }: { children: ReactNode; tone?: BadgeTone }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}

/** Content-review status shown honestly next to lessons/muscles/exercises. */
export function StatusBadge({ status }: { status: string }) {
  const tone: BadgeTone =
    status === "expert_reviewed" ? "green" : status === "source_checked" ? "teal" : status === "published" ? "blue" : "amber";
  return <Badge tone={tone}>{statusLabel(status)}</Badge>;
}

export function LevelBadge({ level }: { level: string }) {
  const tone: BadgeTone = level === "advanced" ? "red" : level === "intermediate" ? "amber" : "green";
  return <Badge tone={tone}>{level}</Badge>;
}

export function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-fg hover:opacity-90"
      : "border border-border hover:bg-surface-2";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/** A reusable empty state for lists with no data yet. */
export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <Card className="text-center">
      <p className="font-medium">{title}</p>
      {hint && <p className="mt-1 text-sm text-muted">{hint}</p>}
    </Card>
  );
}

/** Prominent, consistent safety callout (spec §16). */
export function SafetyNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border-l-4 border-warning bg-warning/10 p-4 text-sm">
      <p className="mb-1 font-semibold text-warning">⚠ Safety note</p>
      <div className="text-text/90">{children}</div>
    </div>
  );
}

/** Shown when content is not yet source-checked / needs review. */
export function ReviewWarning({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-warning bg-warning/5 p-3 text-sm text-warning">
      🚧 {children}
    </div>
  );
}
