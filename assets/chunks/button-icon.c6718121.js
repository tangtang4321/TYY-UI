import{I as z,a as S,b as L}from"./index.db79dffb.js";import{g as _,i as h}from"./is.7d3a216c.js";import{_ as y}from"./plugin-vue_export-helper.9e799c11.js";import{f as d,g as c,o as k,c as v,n as $,h as C,b as g,r as b,i as j,w as l,a as r,u as a,d as w}from"../app.da8bc592.js";const I=d({name:"IconCaretLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=_("icon"),i=c(()=>[n,`${n}-caret-left`,{[`${n}-spin`]:e.spin}]),s=c(()=>{const o={};return e.size&&(o.fontSize=h(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:i,innerStyle:s,onClick:o=>{t("click",o)}}}}),N=["stroke-width","stroke-linecap","stroke-linejoin"],B=g("path",{d:"M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",fill:"currentColor",stroke:"none"},null,-1),x=[B];function P(e,t,n,i,s,u){return k(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:$(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},x,14,N)}var m=y(I,[["render",P]]);const V=Object.assign(m,{install:(e,t)=>{var n;const i=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(i+m.name,m)}}),W=d({name:"IconCaretRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=_("icon"),i=c(()=>[n,`${n}-caret-right`,{[`${n}-spin`]:e.spin}]),s=c(()=>{const o={};return e.size&&(o.fontSize=h(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:i,innerStyle:s,onClick:o=>{t("click",o)}}}}),D=["stroke-width","stroke-linecap","stroke-linejoin"],M=g("path",{d:"M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",fill:"currentColor",stroke:"none"},null,-1),q=[M];function H(e,t,n,i,s,u){return k(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:$(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},q,14,D)}var f=y(W,[["render",H]]);const O=Object.assign(f,{install:(e,t)=>{var n;const i=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(i+f.name,f)}}),R=d({name:"IconDelete",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=_("icon"),i=c(()=>[n,`${n}-delete`,{[`${n}-spin`]:e.spin}]),s=c(()=>{const o={};return e.size&&(o.fontSize=h(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:i,innerStyle:s,onClick:o=>{t("click",o)}}}}),Z=["stroke-width","stroke-linecap","stroke-linejoin"],E=g("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"},null,-1),F=[E];function T(e,t,n,i,s,u){return k(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:$(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},F,14,Z)}var p=y(R,[["render",T]]);const A=Object.assign(p,{install:(e,t)=>{var n;const i=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(i+p.name,p)}}),U=d({__name:"button-icon",setup(e){return(t,n)=>{const i=b("tyy-button"),s=b("tyy-space");return k(),j(s,null,{default:l(()=>[r(i,null,{icon:l(()=>[r(a(z))]),_:1}),r(i,{shape:"round"},{icon:l(()=>[r(a(A))]),_:1}),r(i,{type:"outline"},{default:l(()=>[r(a(V)),w("上一页 ")]),_:1}),r(i,{type:"outline",shape:"round"},{default:l(()=>[w(" 下一页 "),r(a(O))]),_:1}),r(i,{type:"text"},{icon:l(()=>[r(a(S))]),_:1}),r(i,{type:"text"},{icon:l(()=>[r(a(L))]),_:1})]),_:1})}}});export{U as default};