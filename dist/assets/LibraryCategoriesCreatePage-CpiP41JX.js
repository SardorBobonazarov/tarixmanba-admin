import{r as o,q as f,j as a,B as m,T as x,n as g}from"./index-DTA6hJDe.js";import{U as y}from"./input-DmyeKp-P.js";import{u as h,c as b}from"./apiUpdateCalls-DoLG4PHq.js";import"./settings-BayOKyU5.js";const B=({isEdit:l=!1,data:t})=>{const[s,c]=o.useState((t==null?void 0:t.title)||""),[p,i]=o.useState(!1),n=f(),u=()=>{if(!s)return;i(!0);const r=new FormData;r.append("title",s),l?h("library_category",t==null?void 0:t.id,r).then(e=>(n("/library-categories",{replace:!0}),e)).catch(e=>e).finally(()=>i(!1)):b("library_category",r).then(e=>e).catch(e=>e).finally(()=>{i(!1),n("/library-categories",{replace:!0})})};return a.jsxs(m,{children:[a.jsxs(x,{sx:{marginBottom:"10px"},children:[a.jsx("span",{style:{color:"red"},children:"*"})," Title"]}),a.jsx(y,{updateValue:r=>c(r),defaultValue:s}),a.jsx(g,{variant:"contained",disabled:p,sx:{marginTop:"20px"},onClick:u,children:l?"Edit":"Create"})]})};export{B as default};