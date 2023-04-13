import{_ as p,c as t,b as o,a as n,w as a,e,r as c,o as i,d as l}from"./app.da8bc592.js";const v=JSON.parse('{"title":"TYY-UI 那些事","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"有关框架","slug":"有关框架","link":"#有关框架","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[{"level":3,"title":"1:全局引入","slug":"_1-全局引入","link":"#_1-全局引入","children":[]},{"level":3,"title":"2:按需引入","slug":"_2-按需引入","link":"#_2-按需引入","children":[]},{"level":3,"title":"3. unplugin-vue-components 插件按需引入","slug":"_3-unplugin-vue-components-插件按需引入","link":"#_3-unplugin-vue-components-插件按需引入","children":[]},{"level":3,"title":"4. cdn 引入","slug":"_4-cdn-引入","link":"#_4-cdn-引入","children":[]}]}],"relativePath":"components/quickstart.md"}'),r={name:"components/quickstart.md"},C=e(`<h1 id="tyy-ui-那些事" tabindex="-1">TYY-UI 那些事 <a class="header-anchor" href="#tyy-ui-那些事" aria-hidden="true">#</a></h1><h2 id="有关框架" tabindex="-1">有关框架 <a class="header-anchor" href="#有关框架" aria-hidden="true">#</a></h2><p>vue3 + arco-design + typescript + vite</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add tyy-ui --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h2>`,6),u=e(`<h3 id="_1-全局引入" tabindex="-1">1:全局引入 <a class="header-anchor" href="#_1-全局引入" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;tyy-ui/theme-chunck/index.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import TyyUi from &quot;tyy-ui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(TyyUi);</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&quot;#app&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;tyy-button type=&quot;text&quot;&gt;text按钮&lt;/tyy-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-按需引入" tabindex="-1">2:按需引入 <a class="header-anchor" href="#_2-按需引入" aria-hidden="true">#</a></h3><p>方式 1：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &quot;tyy-ui/theme-chunck/button.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import TyyButton from &quot;tyy-ui/es/button&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>方式 2：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &quot;tyy-ui/theme-chunck/button.css&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { TyyButton } from &quot;tyy-ui&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>坑：不能 treeshake？？？</li></ul><h3 id="_3-unplugin-vue-components-插件按需引入" tabindex="-1">3. unplugin-vue-components 插件按需引入 <a class="header-anchor" href="#_3-unplugin-vue-components-插件按需引入" aria-hidden="true">#</a></h3><p>不需要再引入组件和样式，也不需要注册</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &quot;vite&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import vue from &quot;@vitejs/plugin-vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Components from &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  //...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    vue(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    Components({</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolvers: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        (componentName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // where \`componentName\` is always CapitalCase</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (componentName.startsWith(&quot;Tyy&quot;))</span></span>
<span class="line"><span style="color:#A6ACCD;">            return {</span></span>
<span class="line"><span style="color:#A6ACCD;">              name: componentName,</span></span>
<span class="line"><span style="color:#A6ACCD;">              from: &quot;tyy-ui&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              sideEffects: [&quot;tyy-ui/theme-chunck/index.css&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">            };</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      // generate \`components.d.ts\` global declarations</span></span>
<span class="line"><span style="color:#A6ACCD;">      // dts默认为true，自动生成文件components.d.ts 生成的文件在根目录下，</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 但对于引入的依赖volar类型提示还是会有问题，可把该文件放到src下</span></span>
<span class="line"><span style="color:#A6ACCD;">      dts: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>-坑 1：没有 treeshake？</p><h3 id="_4-cdn-引入" tabindex="-1">4. cdn 引入 <a class="header-anchor" href="#_4-cdn-引入" aria-hidden="true">#</a></h3><p>需要额外引入样式文件 在第一种方式的基础中增加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script src=&quot;https://unpkg.com/tyy-ui&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  //...</span></span>
<span class="line"><span style="color:#A6ACCD;">  build:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 外部引用tyy-ui，不进行打包</span></span>
<span class="line"><span style="color:#A6ACCD;">      external: [&quot;tyy-ui&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">        globals: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;tyy-ui&quot;: &quot;tyyUi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17);function A(y,d,h,D,m,g){const s=c("xl-button");return i(),t("div",null,[C,o("template",null,[n(s,null,{default:a(()=>[l("默认按钮")]),_:1}),n(s,{type:"primary"},{default:a(()=>[l("主要按钮")]),_:1}),n(s,{type:"success"},{default:a(()=>[l("成功按钮")]),_:1}),n(s,{type:"info"},{default:a(()=>[l("信息按钮")]),_:1}),n(s,{type:"warning"},{default:a(()=>[l("警告按钮")]),_:1}),n(s,{type:"danger"},{default:a(()=>[l("危险按钮")]),_:1})]),u])}const f=p(r,[["render",A]]);export{v as __pageData,f as default};
