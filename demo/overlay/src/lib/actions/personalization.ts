// DEMO OVERLAY — replaces src/lib/actions/personalization.ts in the static build.
// Bookmarks, notes, and saved terms all belong to a user account, which the
// demo does not have. These stubs no-op so the client components still compile.

export async function toggleBookmarkAction(
  _entityType: string,
  _entityId: string,
  _path?: string,
): Promise<{ bookmarked: boolean }> {
  return { bookmarked: false };
}

export async function saveNoteAction(
  _entityType: string,
  _entityId: string,
  _body: string,
  _path?: string,
): Promise<void> {}

export async function saveVocabAction(_termId: string, _path?: string): Promise<void> {}

export interface ProfileFormState {
  ok?: boolean;
  error?: string;
}

export async function updateProfileAction(
  _prev: unknown,
  _formData: FormData,
): Promise<ProfileFormState> {
  return { error: "Profiles are not available in the static demo." };
}
