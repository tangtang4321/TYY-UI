import { createApp } from "vue";
// import "@/packages/theme-chunck/index";
// import TyyUi from "@/packages/components/index";
import "tyy-ui/theme-chunck/index.css";
import TyyUi from "tyy-ui";
(async () => {
  const apps = import.meta.glob("./src/*.vue");
  const name = location.pathname.replace(/^\//, "") || "App";
  const file = apps[`./src/${name}.vue`];
  if (!file) {
    location.pathname = "App";
    return;
  }
  const App = ((await file()) as any).default;
  const app = createApp(App);
  app.use(TyyUi);
  app.mount("#app");
})();
