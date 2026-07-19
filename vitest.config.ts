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
    testTimeout: 30000,
    fileParallelism: false,
    globalSetup: ["./tests/global-setup.ts"],
    env: {
      DATABASE_URL: "file:./test.db",
      AUTH_SECRET: "test-secret-not-for-production",
      NEXT_PUBLIC_APP_URL: "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
