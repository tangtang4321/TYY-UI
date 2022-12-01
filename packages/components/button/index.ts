import TyyButton from "./src/button.vue";

TyyButton.install = (Vue: any) => {
  Vue.component("TyyButton", TyyButton);
};
export default TyyButton;
