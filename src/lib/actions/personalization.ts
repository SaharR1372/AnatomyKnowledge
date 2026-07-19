"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { bookmarkSchema, noteSchema, profileSchema } from "@/lib/validation";

/** Toggle a bookmark for the current user on any content entity. */
export async function toggleBookmarkAction(entityType: string, entityId: string, path?: string) {
  const user = await requireUser();
  const parsed = bookmarkSchema.parse({ entityType, entityId });
  const existing = await prisma.bookmark.findUnique({
    where: { userId_entityType_entityId: { userId: user.id, entityType: parsed.entityType, entityId: parsed.entityId } },
  });
  if (existing) {
    await prisma.bookmark.delete({ where: { id: existing.id } });
  } else {
    await prisma.bookmark.create({ data: { userId: user.id, ...parsed } });
  }
  if (path) revalidatePath(path);
  return { bookmarked: !existing };
}

/** Create or replace the current user's note on a content entity. */
export async function saveNoteAction(entityType: string, entityId: string, body: string, path?: string) {
  const user = await requireUser();
  const parsed = noteSchema.parse({ entityType, entityId, body });
  // One note per user per entity for the MVP: update if it exists.
  const existing = await prisma.note.findFirst({
    where: { userId: user.id, entityType: parsed.entityType, entityId: parsed.entityId },
  });
  if (existing) {
    await prisma.note.update({ where: { id: existing.id }, data: { body: parsed.body } });
  } else {
    await prisma.note.create({ data: { userId: user.id, ...parsed } });
  }
  if (path) revalidatePath(path);
}

/** Save a vocabulary term to the current user's personal list. */
export async function saveVocabAction(termId: string, path?: string) {
  const user = await requireUser();
  await prisma.userVocabulary.upsert({
    where: { userId_termId: { userId: user.id, termId } },
    create: { userId: user.id, termId },
    update: {},
  });
  if (path) revalidatePath(path);
}

/** Update the current user's profile / preferences. */
export async function updateProfileAction(_prev: unknown, formData: FormData) {
  const user = await requireUser();
  const parsed = profileSchema.safeParse({
    name: formData.get("name") || undefined,
    preferredDifficulty: formData.get("preferredDifficulty") || undefined,
    preferredUnits: formData.get("preferredUnits") || undefined,
    theme: formData.get("theme") || undefined,
    reduceMotion: formData.get("reduceMotion") === "on",
    largeText: formData.get("largeText") === "on",
  });
  if (!parsed.success) return { error: "Please check your input." };

  const { name, preferredDifficulty, preferredUnits, theme, reduceMotion, largeText } = parsed.data;
  if (name) await prisma.user.update({ where: { id: user.id }, data: { name } });
  await prisma.profile.update({
    where: { userId: user.id },
    data: {
      preferredDifficulty,
      preferredUnits,
      theme,
      accessibility: JSON.stringify({ reduceMotion: !!reduceMotion, largeText: !!largeText }),
    },
  });
  revalidatePath("/profile");
  return { ok: true };
}
