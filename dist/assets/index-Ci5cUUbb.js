import{r,j as t,T as g,B as j}from"./index-ByFb1g0N.js";import{u as D,a as T,g as S,T as f,U as y,D as b}from"./getFilteredData-Bt6cKq-B.js";import{u as _}from"./useFetchGetAllDatas-CmuUVgEz.js";import"./settings-hemabYwP.js";import"./apiGetCalls-ci890QmT.js";const c=[{text:"Title",space:12},{text:"Create",space:2},{text:"Updated",space:2},{text:"",space:1}],E=()=>{const[o,d]=r.useState(1),[p,l]=r.useState(""),i=D(p),{data:a,loading:n,count:u}=_("period_filter",o,i),x=r.useMemo(()=>c.reduce((e,s)=>e+s.space,1),[c]),m=c.map(e=>t.jsx(T,{sx:{width:`${e.space/x*90}%`},children:t.jsx(g,{children:e.text})},e.text)),h=a&&a.length>0&&a.map(e=>{const s=S({data:e,keys:["title","created_time","updated_time"]});return t.jsx(f,{filtered:s,info:e,deleteText:"period_filter"},e.id)});return t.jsxs(j,{children:[t.jsx(y,{updateSearch:e=>l(e)}),t.jsx(b,{count:u,headersDisplay:m,loading:n,data:a||[],result:h,page:o,updatePage:e=>d(e)})]})};export{E as default};