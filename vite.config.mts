import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "dynamic-grid-card.js",
    },
    outDir: "dist",
    rolldownOptions: {
      output: {
        codeSplitting: false,
      },
    },
  },
});
