import type { Metadata } from "next";
import { DemoUnavailable } from "@/components/DemoNotice";

export const metadata: Metadata = { title: "Quizzes" };

export default function Page() {
  return (
    <DemoUnavailable
      title="Quizzes"
      feature="The quiz engine"
      why="Answers are graded on the server so that correct options are never exposed to the browser, and each result updates a spaced-repetition schedule stored per user. Shipping the answer key to a static page would defeat both."
    />
  );
}
