import{j as a,c as h,B as g,L as d,R as b,a as p,b as B,d as F}from"./vendor.ff204c97.js";const v=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}};v();const e=a.exports.jsx,r=a.exports.jsxs,u=c=>{const{size:i="medium",type:o="default",shape:l="rectangle",outline:n,loading:t,disabled:s,children:y,className:E,onClick:m}=c,f=h("youngs-button",{className:E,"youngs-button--outline":n,"youngs-button--disabled":s,[`youngs-button--type-${o}`]:!!o&&o!=="default",[`youngs-button--size-${i}`]:!!i&&i!=="medium",[`youngs-button--shape-${l}`]:!!l&&l!=="rectangle"}),A=h("youngs-button__container");return e("button",{className:f,onClick:m,children:e("div",{className:A,children:y})})};const x=()=>r("div",{children:[r("div",{className:"line",children:[e("h3",{children:"Type: "}),e(u,{children:"\u9ED8\u8BA4\u6309\u94AE"}),e(u,{type:"primary",children:"\u4E3B\u8981\u6309\u94AE"}),e(u,{type:"success",children:"\u6210\u529F\u6309\u94AE"}),e(u,{type:"warning",children:"\u4FE1\u606F\u6309\u94AE"}),e(u,{type:"danger",children:"\u8B66\u544A\u6309\u94AE"}),e(u,{type:"info",children:"\u4FE1\u606F\u6309\u94AE"})]}),r("div",{className:"line",children:[e("h3",{children:"Outline: "}),e(u,{outline:!0,children:"\u9ED8\u8BA4\u6309\u94AE"}),e(u,{type:"primary",outline:!0,children:"\u4E3B\u8981\u6309\u94AE"}),e(u,{type:"success",outline:!0,children:"\u6210\u529F\u6309\u94AE"}),e(u,{type:"warning",outline:!0,children:"\u4FE1\u606F\u6309\u94AE"}),e(u,{type:"danger",outline:!0,children:"\u8B66\u544A\u6309\u94AE"}),e(u,{type:"info",outline:!0,children:"\u4FE1\u606F\u6309\u94AE"})]}),r("div",{className:"line",children:[e("h3",{children:"Disabled: "}),e(u,{disabled:!0,children:"\u9ED8\u8BA4\u6309\u94AE"}),e(u,{type:"primary",disabled:!0,children:"\u4E3B\u8981\u6309\u94AE"}),e(u,{type:"success",disabled:!0,children:"\u6210\u529F\u6309\u94AE"}),e(u,{type:"warning",disabled:!0,children:"\u4FE1\u606F\u6309\u94AE"}),e(u,{type:"danger",disabled:!0,children:"\u8B66\u544A\u6309\u94AE"}),e(u,{type:"info",disabled:!0,children:"\u4FE1\u606F\u6309\u94AE"})]}),r("div",{className:"line",children:[e("h3",{children:"Size: "}),e(u,{size:"large",children:"\u5927\u578B\u6309\u94AE"}),e(u,{children:"\u4E2D\u7B49\u6309\u94AE"}),e(u,{size:"small",children:"\u5C0F\u578B\u6309\u94AE"})]}),r("div",{className:"line",children:[e("h3",{children:"Shape: "}),e(u,{children:"\u957F\u578B\u6309\u94AE"}),e(u,{shape:"round",children:"\u534A\u5706\u6309\u94AE"})]})]});const N=()=>e("div",{}),L=()=>e(g,{children:r("nav",{children:[r("ul",{children:[e("li",{children:e(d,{to:"/button",children:"Button"})}),e("li",{children:e(d,{to:"/loading",children:"Loading"})}),e("li",{children:e(d,{to:"/users",children:"Users"})})]}),r(b,{children:[e(p,{path:"/button",element:e(x,{})}),e(p,{path:"/loading",element:e(N,{})})]})]})});function R(){return e(L,{})}B.render(e(F.StrictMode,{children:e(R,{})}),document.getElementById("root"));