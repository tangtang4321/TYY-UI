import{j as f,k as p}from"../app.da8bc592.js";const P=Symbol("ArcoConfigProvider");var _=Object.defineProperty,g=Object.defineProperties,v=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(r,e,t)=>e in r?_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,O=(r,e)=>{for(var t in e||(e={}))b.call(e,t)&&u(r,t,e[t]);if(l)for(var t of l(e))d.call(e,t)&&u(r,t,e[t]);return r},j=(r,e)=>g(r,v(e));const y="A",m="arco",o="$arco",I=r=>{var e;return(e=r==null?void 0:r.componentPrefix)!=null?e:y},N=(r,e)=>{var t;e&&e.classPrefix&&(r.config.globalProperties[o]=j(O({},(t=r.config.globalProperties[o])!=null?t:{}),{classPrefix:e.classPrefix}))},S=r=>{var e,t,c;const i=p(),s=f(P,void 0),a=(c=(t=s==null?void 0:s.prefixCls)!=null?t:(e=i==null?void 0:i.appContext.config.globalProperties[o])==null?void 0:e.classPrefix)!=null?c:m;return r?`${a}-${r}`:a},n=Object.prototype.toString;function w(r){return n.call(r)==="[object Array]"}function A(r){return n.call(r)==="[object Null]"}function E(r){return n.call(r)==="[object Boolean]"}function x(r){return n.call(r)==="[object Object]"}function h(r){return n.call(r)==="[object String]"}function F(r){return n.call(r)==="[object Number]"&&r===r}function $(r){return r===void 0}function B(r){return typeof r=="function"}function G(r){return x(r)&&Object.keys(r).length===0}const L=r=>(r==null?void 0:r.$)!==void 0;export{h as a,L as b,P as c,$ as d,A as e,x as f,S as g,B as h,F as i,I as j,w as k,E as l,G as m,N as s};
