import Button from "./button";
const components = [Button];
const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.use(component);
  });
};
export default {
  install,
  ...components,
};
