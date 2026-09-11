// DEMO OVERLAY — replaces src/lib/session.ts in the static GitHub Pages build.
//
// The real implementation reads an Auth.js session from request cookies, which
// is a dynamic API and therefore impossible in a statically exported site.
// Here every visitor is anonymous, so each page renders its logged-out branch.

export interface SessionUser {
  id: string;
  email: string;
  name?: string | null;
  role: string;
}

/** Always null in the demo: the static build has no sessions. */
export async function getCurrentUser(): Promise<SessionUser | null> {
  return null;
}

/**
 * Unreachable in the demo — every page that required a user is replaced by a
 * "not in the demo" page (see demo/overlay/src/app/). Throwing keeps the type
 * contract without pulling `redirect()` into a statically prerendered page.
 */
export async function requireUser(_callbackPath?: string): Promise<SessionUser> {
  throw new Error("requireUser() is not available in the static demo build");
}

export async function requireEditor(): Promise<SessionUser> {
  return requireUser();
}
