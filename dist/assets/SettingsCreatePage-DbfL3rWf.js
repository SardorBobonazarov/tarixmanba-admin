import{q as j,r as i,j as t,B as l,S as y,T as p,n as v}from"./index-ByFb1g0N.js";import{U as C}from"./input-BR8-LU8Y.js";import{u as S,c as B}from"./apiUpdateCalls-PhMy7Bxd.js";import{U as V}from"./select-C-B-2nPO.js";import{u as _}from"./useFetchGetAllDatas-CmuUVgEz.js";import{g as T}from"./getFilteredList-BQgp6SHS.js";import"./settings-hemabYwP.js";import"./index-BXwMNocD.js";import"./IconButton-IqneyjV1.js";import"./apiGetCalls-ci890QmT.js";const G=({isEdit:c,data:e})=>{const a=j(),[n,m]=i.useState({id:e==null?void 0:e.connection_category,value:e==null?void 0:e.connection_title}),[u,x]=i.useState((e==null?void 0:e.value)||""),[g,r]=i.useState(!1),{data:h}=_("connection_category"),f=T({data:h}),d=()=>{if(!n)return;r(!0);const o={connection_category:(n==null?void 0:n.id)+"",value:u};c?S("connection_value",e==null?void 0:e.id,o).then(s=>(a("/settings",{replace:!0}),s)).catch(s=>console.log(s)).finally(()=>r(!1)):B("connection_value",o).then(s=>(a("/settings",{replace:!0}),s)).catch(s=>console.log(s)).finally(()=>r(!1))};return t.jsxs(l,{children:[t.jsxs(y,{direction:"row",gap:2,sx:{marginBottom:"20px"},children:[t.jsxs(l,{sx:{width:"100%"},children:[t.jsxs(p,{sx:{marginBottom:"10px"},children:[t.jsx("span",{style:{color:"red"},children:"*"})," Category"]}),t.jsx(V,{options:f,defaultValue:n||{id:"",value:""},updateValue:o=>m(o),placeholder:"Category"})]}),t.jsxs(l,{sx:{width:"100%"},children:[t.jsxs(p,{sx:{marginBottom:"10px"},children:[t.jsx("span",{style:{color:"red"},children:"*"})," Value"]}),t.jsx(C,{updateValue:o=>x(o),defaultValue:u,fullWidth:!0})]})]}),t.jsx(v,{variant:"contained",disabled:g,sx:{marginTop:"20px"},onClick:d,children:c?"Edit":"Create"})]})};export{G as default};