import{r,j as t,B as x}from"./index-ByFb1g0N.js";import{u as m,g as h,T as g,U as j,D}from"./getFilteredData-Bt6cKq-B.js";import{u as S}from"./useFetchGetAllDatas-CmuUVgEz.js";import{U}from"./index-D-MBleOw.js";import"./settings-hemabYwP.js";import"./apiGetCalls-ci890QmT.js";const f=[{text:"Title",space:17},{text:"Created",space:3},{text:"Updated",space:3},{text:"",space:1}],C=()=>{const[s,c]=r.useState(1),[o,d]=r.useState(""),p=m(o),{data:a,loading:l,count:i}=S("news",s,p),n=a&&a.length>0&&a.map(e=>{const u=h({data:e,keys:["title","created_time","updated_time"]});return t.jsx(g,{filtered:u,info:e,deleteText:"news"},e.id)});return t.jsxs(x,{children:[t.jsx(j,{updateSearch:e=>d(e)}),t.jsx(D,{count:i,headersDisplay:t.jsx(U,{headers:f}),loading:l,data:a||[],result:n,page:s,updatePage:e=>c(e)})]})};export{C as default};