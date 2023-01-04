import theme from "vitepress/dist/client/theme-default/index";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "tyy-ui/theme-chunck/index.css";
import TyyUi from "tyy-ui/es/index";
export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(TyyUi);
    app.component("demo-preview", AntDesignContainer);
  },
};
