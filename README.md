# TYY-UI 那些事

## 有关框架

vue-cli + arco-design + typescript + vite + vitepress

## 有关目录设计

|——docs
|——examples --测试目录
| |——assets --测试需要的静态资源
| |——src --具体组件测试页面
| |——main.ts --入口文件
|——packages --组件目录
| |——components  
| | |——button --按钮组件
| | | |——index.ts --按钮组件入口
| | | |——src  
| | | | |——button.vue
| | | | |——button.ts
| | | | |——button.scss
| | |——index.ts --全部组件集成的入口
| |——theme-chunck --样式文件
| | |——var.scss --样式变量
| | |——minxin.scss
| | |——base.scss --集成 var、minxin、arco-design 的基础样式文件
| | |——index.scss --所以组件样式集成入口
| | |——components
| | | |——button.scss

- 支持所有组件集成引入，也支持单个组件引入
- 每个组件都携带 install 方法，支持 component 注册组件，也支持 use 注册插件的方式
- 样式文件和业务组件分离，且样式文件也支持单个引入和集成引入
- base.scss 集成 var.scss、minxin.scss、arco-design 的基础样式文件
- 各组件样式具体代码在 theme-chunk 下的 components 内，各组件引入了 arco-design 对应组件的样式
- theme-chunck 下的 index.scss 引入了 base.scss 和所有组件的样式,以便支持集成引入
- packages>components>具体组件(如 button)>样式文件(如 button.scss) 仅引入了 base.scss 和 theme-chunck 下的对应组件样式，没有具体代码，以便支持单个组件样式引入

## 都有哪些 lint[(参考链接)](https://zhuanlan.zhihu.com/p/100427908)

1. eslint 规范并校验 ECMAScript/JavaScript code 的编写

   - 坑 1：js 文件里报 modules 没定义？
     解决：eslint 配置文件增加配置：

     ```eslintrc.cjs
     module.exports = {
      // ...
      env: {
        node: true,
      }
     }

     ```

- 坑 2：package.json 里的 type 啥作用
  type:'module'表示根目录下的.js 文件夹或者没有后缀的文件当做 es 模块处理
  type:'commonjs'表示根目录下的.js 文件夹或者没有后缀的文件当做 commonjs 模块处理
  不指明时，按 commonjs 处理
  无论 package.json 中的 type 字段为何值，.mjs 的文件都按照 es 模块来处理，.cjs 的文件都按照 commonJs 模块来处理

2. tsc 规范并校验 TypeScript code 的编写

   - 基于 Vite 的配置中，开发服务器和打包器将只会对 TypeScript 文件执行语法转译，而不会执行任何类型检查，这保证了 Vite 开发服务器在使用 TypeScript 时也能始终保持飞快的速度。
   - 在开发阶段，可以依赖 vscode 的 volar 插件进行类型智能提示，默认只对单文件组件生效(vue3 中不要使用 Vetur)
   - 对于单文件组件，你可以使用工具 vue-tsc 在命令行检查类型和生成类型声明文件。
   - 因此推荐 vue-tsc + volar 联合校验 typescript
   - Volar Takeover 模式：默认情况下，volar 将其用于 Vue 单文件组件。同时，普通的 TS 文件依然由 VSCode 内置的 TS 语言服务来处理。这也是为什么我们需要安装 TypeScript Vue Plugin 插件 来支持在 TS 文件中引入 Vue 单文件组件。大项目中可能会带来一些性能问题。“Takeover 模式”能让 volar 同时作用于单文件组件和 ts 文件,也就是禁用 VSCode 的内置 TS 语言服务。
     方式一: vscode 插件里搜索@builtin typescript，选择“TypeScript and JavaScript Language Features”禁用。
     方式二: vscode 设置里配置"typescript.validate.enable": false,

   - 坑 1 volar 对于全局注册组件无法智能提示
     解决：you need to define GlobalComponents interface，见 volar readme 文件

3. stylelint 规范并校验 css/scss/less code 的编写

   - 坑 1：sass 文件报分号错误？
     解决：把文件改成 scss 格式
   - 坑 2：html,vue 文件里报样式 Syntax 语法错误；less 文件报同样错误
     解决：stylelint 配置文件 overrides 里增加配置：

     ```.stylelintrc.json
     {
      // ...
      "overrides": [
        {
          "files": ["*.html", "**/*.html", "*.vue", "**/*.vue"],
          "customSyntax": "postcss-html"
        },
        {
          "files": ["*.less", "**/*.less"],
          "customSyntax": "postcss-less"
        }
      ]
     }

     ```

4. commitlint 负责校验 commit msg 是否符合规范

   - type 表示操作类型，scope 影响范围，subject 是主题描述
   - 0 表示不使用规则，1 表示警告，2 表示错误
   - always 与 never：always 表示应该这样操作，never 表示恰好相反的意思，不要这样做的意思

   - lint-staged 负责 hard lint，在 pre commit 时执行 eslint，stylelint
   - husky 监听 git hooks，执行一些业务操作，commit 限制需要配合 husky 进行
   - 坑 1：lint-staged 不同版本使用方式不同
   - 坑 2：git commit -m 'feat(init):初始化'总是报错？
     解决：冒号需要英文，且后面要有一个**空格**

5. prettier 或 beautifyjs 统一代码排版格式
   - eslint，stylelint 都有 prettier 配套插件，辅助完成代码格式化
   - 另外编辑器也可以安装这 3 个插件，不需要进行规则配置，会自动读取 node_modules 下.bin 里对应的插件脚本， 实现编辑时的自动格式化和错误检验以及修复.
   - 配置 vscode setting.json 文件：
   ```
    {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    "stylelint.validate": ["css", "sass", "css", "less", "scss","vue"],
     }
   ```

## 聊聊打包

### 打包

1. vite 自带 lib 配置,详见 build/vite.config.ts
   注：rollupOptions 配置 preserveModules: true,就可以按照组件原有目录结构单独打包，而不会全量打包成一个 js
   - 坑 1：Top-level await is currently not supported with the "cjs" output format
     方式 1：把 ts 文件改为 mts 文件结尾
     方式 2：package.json 指定 type:"module"
2. 打包 css 文件
   通过 glob 获取所有样式文件，详见 build/css.config.ts

- 怎么给单独组件打包样式文件？

3. 生成.d.ts 类型申明文件

- vue-tsc 可以检查并生成类型申明文件。-p 指定要检查的目录,如组件库目录 vue-tsc -p packages
- 组件库目录下需要有 tsconfig.json 文件：vue-tsc --init
- 要生成类型申明文件，tsconfig.json 需要增加以下配置

```
{
  "extends": "../../tsconfig.base.json",
  "include": ["**/*", "**/*.vue"],
  "compilerOptions": {
    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,
    "emitDeclarationOnly": true /* Only output d.ts files and not JavaScript files. */,
    "declarationDir": "../../tyy-ui/types" /* Specify the output directory for generated declaration files. */
  }
}


```

- 复制类型申明文件到各组件文件夹下，否则手动按需引入组件时会报错
  fs-extra 提供了 copy 方法,options.recursive 配置表示是否递归复制

```
const { copy } = require("fs-extra");
copy(src, dest, { recursive: true });
```

#### 发布组件库

- 1. 在打包后需要发布的文件夹下初始化 package.json 文件： npm init
- 2. 增加相关配置

```
{
   // ...

    "files": [
      "lib",
      "dist",
      "es",
      "types",
      "theme-chunck"
    ], // 需要发布的文件
    "main": "./lib/index.js",   // 入口文件,一般是commonjs规范的文件
    "module": "./es/index.mjs",  // 入口文件,基于 ES6 模块规范
    "types": "./types/index.d.ts",  // 类型申明文件入口
    "unpkg": "./dist/index.min.js",  // cdn引入文件入口，可通过<script src="https://unpkg.com/tyy-ui"></script>引入
    "dependencies": {   // 依赖的第三方包
        "@arco-design/web-vue": "^2.39.1",
        "vue": "^3.2.25"
    }
}
```

- 3. 增加 readme.md 文件
- 4. npm 注册账号并发布：npm publish

#### treeShake

#### 引入组件库

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

- 坑 1：单独的组件下也需要有类型申明文件，所以需要把 types 下的申明文件再复制到单个组件文件夹下

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
  plugins: [vue(),Components(
    {
      resolvers: [
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName.startsWith('Tyy'))
            return { name: componentName, from: 'tyy-ui',sideEffects: 'tyy-ui/style' }
        }
      ],
      // generate `components.d.ts` global declarations
      // 默认为true，生成的文件在根目录下，对于引入的依赖volar类型提示还是会有问题，把它放到src下可解决
      dts: "./src/components.d.ts",
    }
  )],
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

## doc 文档 vitepress

- 坑 1.乱码问题
  编码格式不对，删掉重建即可
- 坑 2.自动生成目录失效
  在配置文件里配置，[参考](https://juejin.cn/post/7164276166084263972)

- doc 插件[vitepress-demoblock](https://1006008051.github.io/vitepress-demoblock/)

  1. tips:<demo src="../.."></demo> src 只能是相对路径，相对当前.md 文件
  2. 坑：在 pnpm 下会有路径问题？目前只能修改依赖包的源码，获取换成 npm

  ```
  //demo.vue
  const modules = import.meta.glob("../../../../../**/*.vue");
  ```

- 部署,[参考](https://vitejs.cn/vitepress/guide/deploy.html#github-pages)

  1. tips:通过 git bash 执行 deploy.sh 脚本：sh deploy.sh

- github 持续集成

  1. actions 配置，[参考](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
  2. 坑：github 持续集成的构建结果跟本地构建结果有出入，导致组件无法显示？暂时放弃

- algolia 搜索

## pnpm 多工程
