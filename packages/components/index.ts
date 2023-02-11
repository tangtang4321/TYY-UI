import TyyButton from "./button";
import TyySpace from "./space";
import TyyTableLayout from "./table-layout";
export { TyyButton, TyySpace, TyyTableLayout };
const components = [TyyButton, TyySpace, TyyTableLayout];
const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.use(component);
  });
};
export default {
  install,
};
