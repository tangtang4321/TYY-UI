# TYY-UI 那些事

## 有关框架

vue + arco-design

## 快速开始

1:全局引入

```main.ts
import { createApp } from "vue";
import "tyy-ui/theme-chunck/index.css";
import TyyUi from "tyy-ui";
const app = createApp(App);
app.use(TyyUi);
app.mount("#app");

```

```
<template>
    <tyy-button type="text">text按钮</tyy-button>
</template>
```

2:按需引入

```方式1
import "tyy-ui/theme-chunck/button.css";
import TyyButton from "tyy-ui/es/button";
//...
```

```方式2
import "tyy-ui/theme-chunck/button.css";
import { TyyButton } from "tyy-ui";
// ...
```

- 坑：不能 treeshake？？？

3. unplugin-vue-components/插件按需引入,不需要再引入组件和样式，也不需要注册

```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
  //...
  plugins: [
    vue(),
    Components({
      resolvers: [
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName.startsWith("Tyy"))
            return {
              name: componentName,
              from: "tyy-ui",
              sideEffects: ["tyy-ui/theme-chunck/index.css"],
            };
        },
      ],
      // generate `components.d.ts` global declarations
      // dts默认为true，自动生成文件components.d.ts 生成的文件在根目录下，
      // 但对于引入的依赖volar类型提示还是会有问题，可把该文件放到src下
      dts: true,
    }),
  ],
})
```

-坑 1：没有 treeshake？

4. cdn 引入,需要额外引入样式文件
   在第一种方式的基础中增加

```html
<script src="https://unpkg.com/tyy-ui"></script>
```

```vite.config.ts
export default defineConfig({
  //...
  build:{
    rollupOptions: {
      // 外部引用tyy-ui，不进行打包
      external: ["tyy-ui"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          "tyy-ui": "tyyUi",
        }
      },
    },
  }
});

```

## 有关组件设计

### button

### message

### model

### input

### select

### form

### table
