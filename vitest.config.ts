import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    // include: ["src/**/*.{test,spec}.ts"],
    setupFiles: ["./setupTest.js"],
    coverage: {
      provider: "v8",
      include: ["src/**"],
      reporter: ["lcov", "clover", "text-summary"],
      reportsDirectory: "coverage",
    },
  },
});
