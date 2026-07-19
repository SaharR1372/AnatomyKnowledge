import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";

// Creates a fresh SQLite schema in prisma/test.db before the test suite runs.
// SQLite relative paths resolve against the schema directory (prisma/), so the
// file lives at prisma/test.db for both the CLI here and the Prisma client.
export default function setup() {
  const dbFile = path.resolve(__dirname, "../prisma/test.db");
  if (existsSync(dbFile)) rmSync(dbFile);

  // The DB file was just deleted, so a plain push creates a fresh schema.
  execSync("npx prisma db push --skip-generate", {
    stdio: "inherit",
    env: { ...process.env, DATABASE_URL: "file:./test.db" },
  });
}
