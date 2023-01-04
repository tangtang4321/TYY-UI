import {
  es_exports,
  init_es
} from "./chunk-Z66RNKYK.js";
import {
  __commonJS,
  __esm,
  __toCommonJS,
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-PTHHHZNI.js";

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/button/src/button.vue_vue_type_script_setup_true_lang.js
var button_vue_vue_type_script_setup_true_lang_exports = {};
var e, t, r;
var init_button_vue_vue_type_script_setup_true_lang = __esm({
  "node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/button/src/button.vue_vue_type_script_setup_true_lang.js"() {
    "use strict";
    Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    e = (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports));
    t = (init_es(), __toCommonJS(es_exports));
    r = e.defineComponent({ __name: "button", setup(u3) {
      return (o, n) => (e.openBlock(), e.createBlock(e.unref(t.Button), { type: "primary", class: "tyy-button" }, { default: e.withCtx(() => [e.createTextVNode("Primary")]), _: 1 }));
    } });
    exports.default = r;
  }
});

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/_virtual/_plugin-vue_export-helper.js
var plugin_vue_export_helper_exports = {};
var u;
var init_plugin_vue_export_helper = __esm({
  "node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/_virtual/_plugin-vue_export-helper.js"() {
    "use strict";
    Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    u = (e3, o) => {
      const t4 = e3.__vccOpts || e3;
      for (const [r2, s] of o)
        t4[r2] = s;
      return t4;
    };
    exports.default = u;
  }
});

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/button/src/button2.js
var button2_exports = {};
var e2, t2, u2;
var init_button2 = __esm({
  "node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/button/src/button2.js"() {
    "use strict";
    Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    e2 = (init_button_vue_vue_type_script_setup_true_lang(), __toCommonJS(button_vue_vue_type_script_setup_true_lang_exports));
    t2 = (init_plugin_vue_export_helper(), __toCommonJS(plugin_vue_export_helper_exports));
    u2 = t2.default(e2.default, [["__file", "D:/project/tyy-ui/packages/components/button/src/button.vue"]]);
    exports.default = u2;
  }
});

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/button/index.js
var button_exports = {};
var t3;
var init_button = __esm({
  "node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/button/index.js"() {
    "use strict";
    Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    t3 = (init_button2(), __toCommonJS(button2_exports));
    t3.default.install = (e3) => {
      e3.component("TyyButton", t3.default);
    };
    exports.default = t3.default;
  }
});

// node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/tyy-ui@0.0.26/node_modules/tyy-ui/lib/index.js"(exports2) {
    Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    init_button();
    var t4 = (init_button2(), __toCommonJS(button2_exports));
    var o = [t4.default];
    var u3 = function(e3) {
      o.forEach((n) => {
        e3.use(n);
      });
    };
    var s = { install: u3 };
    exports2.TyyButton = t4.default;
    exports2.default = s;
  }
});
export default require_lib();
//# sourceMappingURL=tyy-ui_lib_index.js.map
