import type { Metadata } from "next";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Saved" };

export default function Page() {
  return (
    <DemoUnavailable
      title="Saved items"
      feature="Bookmarks and notes"
      why="Bookmarks, private notes, and your saved vocabulary list are personal data tied to an account."
    />
  );
}
