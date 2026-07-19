import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { Card, PageHeader, EmptyState, Badge } from "@/components/ui";

export const metadata: Metadata = { title: "Saved Items" };

// Resolve a bookmarked/noted entity to a display label and link.
async function resolve(entityType: string, entityId: string): Promise<{ label: string; href: string } | null> {
  switch (entityType) {
    case "lesson": {
      const l = await prisma.lesson.findUnique({ where: { id: entityId }, select: { title: true, slug: true } });
      return l ? { label: l.title, href: `/learn/${l.slug}` } : null;
    }
    case "muscle": {
      const m = await prisma.muscle.findUnique({ where: { id: entityId }, select: { commonName: true, slug: true } });
      return m ? { label: m.commonName, href: `/anatomy/${m.slug}` } : null;
    }
    case "exercise": {
      const e = await prisma.exercise.findUnique({ where: { id: entityId }, select: { name: true, slug: true } });
      return e ? { label: e.name, href: `/exercises/${e.slug}` } : null;
    }
    default:
      return null;
  }
}

export default async function SavedPage() {
  const user = await requireUser("/saved");

  const [bookmarks, notes] = await Promise.all([
    prisma.bookmark.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),
    prisma.note.findMany({ where: { userId: user.id }, orderBy: { updatedAt: "desc" } }),
  ]);

  const bookmarkViews = (await Promise.all(bookmarks.map(async (b) => ({ ...b, resolved: await resolve(b.entityType, b.entityId) })))).filter((b) => b.resolved);
  const noteViews = (await Promise.all(notes.map(async (n) => ({ ...n, resolved: await resolve(n.entityType, n.entityId) })))).filter((n) => n.resolved);

  return (
    <div>
      <PageHeader title="Saved Items" subtitle="Your bookmarks and private notes. Only you can see this." />

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">Bookmarks</h2>
        {bookmarkViews.length === 0 ? (
          <EmptyState title="No bookmarks yet." hint="Use the ☆ Bookmark button on lessons, muscles, and exercises." />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {bookmarkViews.map((b) => (
              <Card key={b.id} className="flex items-center justify-between gap-2">
                <Link href={b.resolved!.href} className="font-medium text-primary hover:underline">{b.resolved!.label}</Link>
                <Badge tone="gray">{b.entityType}</Badge>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">Notes</h2>
        {noteViews.length === 0 ? (
          <EmptyState title="No notes yet." hint="Open a lesson or muscle page and use the private notes box." />
        ) : (
          <div className="space-y-3">
            {noteViews.map((n) => (
              <Card key={n.id}>
                <div className="mb-1 flex items-center justify-between">
                  <Link href={n.resolved!.href} className="text-sm font-medium text-primary hover:underline">{n.resolved!.label}</Link>
                  <Badge tone="gray">{n.entityType}</Badge>
                </div>
                <p className="whitespace-pre-wrap text-sm text-text/90">{n.body}</p>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
