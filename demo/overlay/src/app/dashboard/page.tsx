import type { Metadata } from "next";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Dashboard" };

export default function Page() {
  return (
    <DemoUnavailable
      title="Your dashboard"
      feature="The personal dashboard"
      why="The dashboard summarises your lesson completion, quiz accuracy, and certification-domain readiness, all of which are per-user data."
    />
  );
}
