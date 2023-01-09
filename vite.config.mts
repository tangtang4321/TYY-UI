import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@/examples": fileURLToPath(new URL("./examples", import.meta.url)),
      "@/packages": fileURLToPath(new URL("./packages", import.meta.url)),
      "@/public": fileURLToPath(new URL("./public", import.meta.url)),
    },
    extensions: [".ts", ".mts", ".json", ".js", ".less", ".css"],
  },
  define: {
    "process.env": process.env,
  },
});
