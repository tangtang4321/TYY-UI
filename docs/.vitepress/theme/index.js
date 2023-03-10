import DefaultTheme from "vitepress/theme";
import "tyy-ui/theme-chunck/index.css";
import TyyUi from "tyy-ui/es/index";
// import "packages/theme-chunck/index";
// import TyyUi from "packages/components";
import demo from "vitepress-demoblock/demo.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(TyyUi);
    app.component("demo", demo);
  },
};
