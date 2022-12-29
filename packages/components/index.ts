import TyyButton from "./button";

export { TyyButton };
const components = [TyyButton];
const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.use(component);
  });
};
export default {
  install,
};
