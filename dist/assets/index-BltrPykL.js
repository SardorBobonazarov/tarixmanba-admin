import{r,j as t,T as g,B as y}from"./index-ByFb1g0N.js";import{u as D,g as b,T as j,a as T,U as S,D as C}from"./getFilteredData-Bt6cKq-B.js";import{u as f}from"./useFetchGetAllDatas-CmuUVgEz.js";import"./settings-hemabYwP.js";import"./apiGetCalls-ci890QmT.js";const c=[{text:"Category",space:4},{text:"Title",space:10},{text:"Created Date",space:2},{text:"Updated Date",space:2},{text:"",space:1}],P=()=>{const[o,l]=r.useState(1),[p,d]=r.useState(""),i=D(p),{data:a,loading:n,count:u}=f("library",o,i),x=r.useMemo(()=>c.reduce((e,s)=>e+s.space,1),[c]),m=a&&a.length>0&&a.map(e=>{const s=b({data:e,keys:["cat_library","title","created_time","updated_time"]});return t.jsx(j,{info:e,filtered:s,deleteText:"library"},e.id)}),h=c.map(e=>t.jsx(T,{sx:{width:`${e.space/x*100}%`},children:t.jsx(g,{children:e.text})},e.text));return t.jsxs(y,{children:[t.jsx(S,{updateSearch:e=>d(e)}),t.jsx(C,{count:u,headersDisplay:h,loading:n,data:a||[],result:m,page:o,updatePage:e=>l(e)})]})};export{P as default};
