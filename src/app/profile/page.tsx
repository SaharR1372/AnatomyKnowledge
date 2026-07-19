import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/session";
import { Card, PageHeader, Badge } from "@/components/ui";
import { ProfileForm } from "@/components/ProfileForm";

export const metadata: Metadata = { title: "Profile & Settings" };

export default async function ProfilePage() {
  const user = await requireUser("/profile");
  const profile = await prisma.profile.findUnique({ where: { userId: user.id } });
  const access = JSON.parse(profile?.accessibility ?? "{}") as { reduceMotion?: boolean; largeText?: boolean };

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="Profile & Settings" subtitle="Manage your account and learning preferences." />

      <Card className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted">Signed in as</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <Badge tone={user.role === "learner" ? "gray" : "blue"}>{user.role}</Badge>
        </div>
      </Card>

      <Card>
        <h2 className="mb-4 font-semibold">Preferences</h2>
        <ProfileForm
          name={user.name ?? ""}
          preferredDifficulty={profile?.preferredDifficulty ?? "beginner"}
          preferredUnits={profile?.preferredUnits ?? "metric"}
          theme={profile?.theme ?? "system"}
          reduceMotion={!!access.reduceMotion}
          largeText={!!access.largeText}
        />
      </Card>

      <p className="mt-6 text-xs text-muted">
        Your progress, notes, bookmarks, and quiz history are private to your account and are never shown to other users.
      </p>
    </div>
  );
}
