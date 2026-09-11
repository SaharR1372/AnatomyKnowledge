import type { Metadata } from "next";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Profile" };

export default function Page() {
  return (
    <DemoUnavailable
      title="Profile & settings"
      feature="Profile settings"
      why="Profile settings control your learning level, goals, and display preferences, and are stored against your account."
    />
  );
}
