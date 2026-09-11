// DEMO OVERLAY — replaces src/lib/actions/auth.ts in the static build.
// No "use server": Server Actions cannot exist in an exported site. These are
// inert client-side stubs that keep the imports in SiteNav/AuthForms valid.

export interface FormState {
  error?: string;
  fieldErrors?: Record<string, string>;
}

const DEMO_MESSAGE =
  "Accounts are disabled in this read-only demo. Run the full app locally to sign up.";

export async function registerAction(_prev: FormState, _formData: FormData): Promise<FormState> {
  return { error: DEMO_MESSAGE };
}

export async function authenticateAction(_prev: FormState, _formData: FormData): Promise<FormState> {
  return { error: DEMO_MESSAGE };
}

export async function logoutAction(): Promise<void> {}
