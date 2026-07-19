import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui";
import { RegisterForm } from "@/components/AuthForms";
import { getCurrentUser } from "@/lib/session";

export const metadata: Metadata = { title: "Create account" };

export default async function RegisterPage() {
  if (await getCurrentUser()) redirect("/dashboard");
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-2 text-2xl font-bold">Create your account</h1>
      <p className="mb-6 text-sm text-muted">
        Free, private, and yours. Your progress and notes are never shared without your choice.
      </p>
      <Card>
        <RegisterForm />
      </Card>
      <p className="mt-4 max-w-prose text-center text-xs text-muted">
        By creating an account you understand this app is for education only and does not provide
        medical advice.
      </p>
    </div>
  );
}
