import{r,j as t,T as g,B as D}from"./index-ByFb1g0N.js";import{u as j,a as y,g as T,T as f,U as S,D as C}from"./getFilteredData-Bt6cKq-B.js";import{u as _}from"./useFetchGetAllDatas-CmuUVgEz.js";import"./settings-hemabYwP.js";import"./apiGetCalls-ci890QmT.js";const c=[{text:"Category",space:5},{text:"Filter Category",space:5},{text:"Title",space:5},{text:"Created Date",space:2},{text:"Updated Date",space:2},{text:"",space:1}],P=()=>{const[o,l]=r.useState(1),[p,d]=r.useState(""),i=j(p),{data:a,loading:n,count:u}=_("filters",o,i),x=r.useMemo(()=>c.reduce((e,s)=>e+s.space,1),[c]),m=c.map(e=>t.jsx(y,{sx:{width:`${e.space/x*90}%`},children:t.jsx(g,{children:e.text})},e.text)),h=a&&a.length>0&&a.map(e=>{const s=T({data:e,keys:["cat_title","filter_categories_name","title","created_time","updated_time"]});return t.jsx(f,{filtered:s,info:e,deleteText:"filters"},e.id)});return t.jsxs(D,{children:[t.jsx(S,{updateSearch:e=>d(e)}),t.jsx(C,{count:u,headersDisplay:m,loading:n,data:a||[],result:h,page:o,updatePage:e=>l(e)})]})};export{P as default};
