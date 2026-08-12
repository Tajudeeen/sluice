import { defineConfig } from "vitest/config";
import { resolve } from "path";

// Anchor the test root to this directory (agent/) so the include glob resolves
// against agent/test, not the project root. Running `npm run test:agent` from the
// repo root would otherwise look for <repo>/test/** which does not exist.
export default defineConfig({
  root: resolve(__dirname),
  test: {
    include: ["test/**/*.test.ts"],
    environment: "node",
  },
});
