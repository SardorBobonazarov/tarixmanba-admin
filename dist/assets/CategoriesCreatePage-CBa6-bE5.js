import{r as i,q as S,j as t,B as I,T as o,n as U}from"./index-DxToOhWZ.js";import{U as m}from"./input-C_9GwNBk.js";import{U as C,g as T}from"./getImage-BTCROlbj.js";import{U as V}from"./switch-5wEKsCqv.js";import{u as B,c as F}from"./apiUpdateCalls-c3S0mrRd.js";import"./settings-DvgpDYXI.js";import"./index-Cgmb0aMc.js";const E=({isEdit:c,data:e})=>{const[n,g]=i.useState(null),[l,f]=i.useState((e==null?void 0:e.title)||""),[p,h]=i.useState((e==null?void 0:e.order)||0),[x,j]=i.useState((e==null?void 0:e.interactive)||!1),[v,u]=i.useState(!1),a=S(),y=async()=>{if(!c&&!n||!l||!p)return;u(!0);const r=new FormData;if(n&&n[0])r.append("icon",n[0],n[0].name);else{const s=await T(e==null?void 0:e.icon,e==null?void 0:e.icon);r.append("icon",s)}r.append("title",l),r.append("order",p.toString()),r.append("interactive",x.toString()),c?B("category",e==null?void 0:e.id,r,!0).then(s=>(a("/categories",{replace:!0}),s)).catch(s=>s).finally(()=>{u(!1)}):F("category",r,!0).then(s=>(a("/categories",{replace:!0}),s)).catch(s=>s).finally(()=>{u(!1)})};return t.jsxs(I,{children:[t.jsxs(o,{sx:{margin:"10px 0"},children:[t.jsx("span",{style:{color:"red"},children:"*"})," Title"]}),t.jsx(m,{updateValue:r=>f(r),defaultValue:l}),t.jsx(o,{sx:{marginBottom:"20px"}}),t.jsx(C,{fileChange:r=>g(r),defaultFile:e==null?void 0:e.icon}),t.jsxs(o,{sx:{margin:"20px 0 10px"},children:[t.jsx("span",{style:{color:"red"},children:"*"})," Order"]}),t.jsx(m,{updateValue:r=>h(r),type:"number",defaultValue:p}),t.jsx(o,{sx:{margin:"10px 0"},children:"Interactive Map"}),t.jsx(V,{value:x,changeValue:r=>j(r)}),t.jsx(U,{variant:"contained",disabled:v,onClick:y,sx:{marginTop:"20px"},children:c?"Edit":"Create"})]})};export{E as default};
