const { copy } = require("fs-extra");
const { resolve } = require("path");
const copyTypesDefinitions = () => {
  const src = resolve(__dirname, `../tyy-ui/types`);
  const desLib = resolve(__dirname, `../tyy-ui/lib`);
  const destEs = resolve(__dirname, `../tyy-ui/es`);
  copy(src, desLib, { recursive: true });
  copy(src, destEs, { recursive: true });
};
copyTypesDefinitions();
