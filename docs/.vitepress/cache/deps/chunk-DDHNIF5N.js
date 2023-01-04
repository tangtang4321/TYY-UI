import {
  Button,
  init_es
} from "./chunk-Z66RNKYK.js";
import {
  createBlock,
  createTextVNode,
  defineComponent,
  init_vue_runtime_esm_bundler,
  openBlock,
  unref,
  withCtx
} from "./chunk-PTHHHZNI.js";

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/es/button/src/button.vue_vue_type_script_setup_true_lang.mjs
init_vue_runtime_esm_bundler();
init_es();
var i = defineComponent({
  __name: "button",
  setup(p) {
    return (m, u) => (openBlock(), createBlock(unref(Button), {
      type: "primary",
      class: "tyy-button"
    }, {
      default: withCtx(() => [
        createTextVNode("Primary")
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/es/_virtual/_plugin-vue_export-helper.mjs
var s = (t, e2) => {
  const o = t.__vccOpts || t;
  for (const [r, c3] of e2)
    o[r] = c3;
  return o;
};

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/es/button/src/button2.mjs
var c = s(i, [["__file", "D:/project/tyy-ui/packages/components/button/src/button.vue"]]);

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/es/button/index.mjs
c.install = (o) => {
  o.component("TyyButton", c);
};

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/es/index.mjs
var s2 = [c];
var e = function(t) {
  s2.forEach((o) => {
    t.use(o);
  });
};
var c2 = {
  install: e
};

export {
  c,
  c2
};
//# sourceMappingURL=chunk-DDHNIF5N.js.map
