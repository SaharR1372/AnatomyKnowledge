import { defineConfig } from "vitest/config";
import path from "node:path";

// Tests run in a Node environment against the Prisma data layer and pure logic
// modules (spaced repetition, mastery, scoring). This keeps them fast and
// deterministic without needing a browser or a running Next.js server.
export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    globals: true,
    testTimeout: 20000,
    fileParallelism: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
