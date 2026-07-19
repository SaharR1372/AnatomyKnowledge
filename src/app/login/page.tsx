import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui";
import { LoginForm } from "@/components/AuthForms";
import { getCurrentUser } from "@/lib/session";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  if (await getCurrentUser()) redirect("/dashboard");
  const { callbackUrl } = await searchParams;

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-2 text-2xl font-bold">Welcome back</h1>
      <p className="mb-6 text-sm text-muted">Log in to continue your learning path.</p>
      <Card>
        <LoginForm callbackUrl={callbackUrl ?? "/dashboard"} />
      </Card>
      <p className="mt-4 text-center text-xs text-muted">
        Demo account: <code>learner@demo.local</code> / <code>password123</code>
      </p>
    </div>
  );
}
