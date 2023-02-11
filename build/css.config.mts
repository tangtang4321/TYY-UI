import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { resolve } from "path";
import glob from "fast-glob";
const files = await glob("**/*.{less,css}", {
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
    extensions: [".less", ".css"],
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
