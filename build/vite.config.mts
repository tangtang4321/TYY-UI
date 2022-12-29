import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import glob from "fast-glob";
// 打包分析插件
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
type MODE_TYPE = "es" | "cjs" | "umd";
const files = await glob("**/*.{js,ts,vue}", {
  cwd: resolve(__dirname, `../packages/components`),
  absolute: true,
  onlyFiles: true,
});

export default defineConfig(({ mode }) => {
  console.log("mode:::::::::::", mode);
  const outDir = mode === "cjs" ? "lib" : mode === "umd" ? "dist" : "es";
  return {
    plugins: [vue(), visualizer({ open: false })],
    resolve: {
      alias: {
        "@/theme-chunck": resolve(__dirname, `../packages/theme-chunck`),
      },
      extensions: [".ts", ".json", ".mjs", ".js", ".sass", ".scss", ".css"],
    },

    build: {
      outDir: resolve(__dirname, `../tyy-ui/${outDir}`),
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry:
          mode === "umd"
            ? [resolve(__dirname, "../packages/components/index.ts")]
            : files,
        formats: [mode as MODE_TYPE],
        name: "tyyUi", // 暴露的全局变量，并且在 formats 包含 'umd' 或 'iife' 时是必需的。默认 formats 是 ['es', 'umd']，如果使用了多个配置入口，则是 ['es', 'cjs']。
        fileName: (format, entryName) => {
          console.log(":::::::::::::::::", format, entryName);
          return (
            entryName +
            (format === "es" ? ".mjs" : format === "umd" ? ".min.js" : ".js")
          );
        },
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: mode === "umd" ? [] : ["vue", "@arco-design/web-vue"],
        output: {
          inlineDynamicImports: mode === "umd" ? true : false,
          // 为外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
            "@arco-design/web-vue": "ArcoVue",
          },

          // 为true就可以按照组件原有目录结构单独打包，而不会全量打包成一个js
          preserveModules: mode === "umd" ? false : true,
          // 混合使用默认导出和命名导出的模块将会产生警告。你可以通过设置 output.exports: "named"，强制所有文件使用命名导出模式，来避免出现警告。
          exports: "named",
        },
      },
    },
  };
});
