import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { resolve } from "path";
import glob from "fast-glob";
const files = await glob("**/*.{scss,sass,css}", {
  cwd: resolve(__dirname, `../packages`),
  absolute: true,
  onlyFiles: true,
});
export default defineConfig({
  resolve: {
    alias: {
      "@/theme-chunck": fileURLToPath(
        new URL("../packages/theme-chunck", import.meta.url)
      ),
    },
    extensions: [".scss", ".sass", ".css"],
  },

  build: {
    outDir: resolve(__dirname, "../tyy-ui/theme-chunck"),
    rollupOptions: {
      input: files,
      output: {
        assetFileNames: `[name].css`,
      },
    },
  },
});
