import type { Metadata } from "next";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Log in" };

export default function Page() {
  return (
    <DemoUnavailable
      title="Log in"
      feature="Signing in"
      why="Authentication uses Auth.js with password hashing and server-side sessions, which require a running server."
    />
  );
}
