import { defineConfig } from "vitepress";
import demoblock from "vitepress-demoblock";
export default defineConfig({
  base: "/tyy-ui-doc/",
  title: "tyy-ui",
  description: "玩一玩组件库搭建",
  themeConfig: {
    logo: "/images/logo.jpg",
    socialLinks: [{ icon: "github", link: "https://github.com" }],
    docFooter: { prev: "上一篇", next: "下一篇" },
    lastUpdatedText: "最近更新时间",
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    nav: [
      {
        text: "文档",
        link: "/components/quickstart",
      },
      {
        text: "相关连接",
        items: [
          { text: "vue3", link: "https://cn.vuejs.org/" },
          { text: "arcoDesign", link: "https://arco.design/" },
          { text: "vite", link: "https://cn.vitejs.dev/" },
          { text: "vitepress", link: "https://vitejs.cn/vitepress/" },
          {
            text: "vitepress-demoblock",
            link: "https://1006008051.github.io/vitepress-demoblock/",
          },
        ],
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
  },
  // 省略其他配置
  markdown: {
    config: (md) => {
      md.use(demoblock);
    },
  },
});
