import { redirect } from "next/navigation";
import { auth } from "./auth";

export interface SessionUser {
  id: string;
  email: string;
  name?: string | null;
  role: string;
}

/** Return the current user or null. Safe to call in any Server Component. */
export async function getCurrentUser(): Promise<SessionUser | null> {
  const session = await auth();
  if (!session?.user?.id) return null;
  return {
    id: session.user.id,
    email: session.user.email ?? "",
    name: session.user.name,
    role: session.user.role,
  };
}

/**
 * Require an authenticated user. Redirects to /login (preserving where the user
 * was headed) if there is no session. Use at the top of protected pages/actions.
 */
export async function requireUser(callbackPath?: string): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) {
    const suffix = callbackPath ? `?callbackUrl=${encodeURIComponent(callbackPath)}` : "";
    redirect(`/login${suffix}`);
  }
  return user;
}

/** Require an editor or admin. Redirects learners to the dashboard. */
export async function requireEditor(): Promise<SessionUser> {
  const user = await requireUser();
  if (user.role !== "editor" && user.role !== "admin") {
    redirect("/dashboard");
  }
  return user;
}
