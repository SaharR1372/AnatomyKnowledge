import type { Metadata } from "next";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Sign up" };

export default function Page() {
  return (
    <DemoUnavailable
      title="Create an account"
      feature="Registration"
      why="New accounts are written to a database with a hashed password — there is no database attached to this demo."
    />
  );
}
