import { defineConfig } from "vitepress";
import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";
export default defineConfig({
  title: "tyy-ui",
  description: "玩一玩组件库搭建",
  themeConfig: {
    logo: "/images/logo.jpg",
    socialLinks: [{ icon: "github", link: "https://github.com" }],
    docFooter: { prev: "上一篇", next: "下一篇" },
    lastUpdatedText: "最近更新时间",
    nav: [
      {
        text: "文档",
        link: "/components/quickstart",
      },
      {
        text: "下拉选择框",
        items: [{ text: "baidu", link: "http://www.baidu.com" }],
      },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [{ text: "快速开始", link: "/components/quickstart" }],
      },
      {
        text: "基础组件",
        items: [{ text: "button", link: "/components/base/button" }],
        collapsible: true,
        collapsed: true,
      },
    ],
    markdown: {
      config(md) {
        md.use(containerPreview);
        md.use(componentPreview);
      },
    },
  },
});
