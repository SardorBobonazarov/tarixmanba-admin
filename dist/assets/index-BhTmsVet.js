import{r,j as t,T as g,B as D}from"./index-BBG2Og9a.js";import{u as j,a as T,g as b,T as S,U as y,D as f}from"./getFilteredData-uO8wGSNX.js";import{u as C}from"./useFetchGetAllDatas-CmaUik0_.js";import"./settings-YpfnS1Ri.js";import"./apiGetCalls-DxGRh-56.js";const c=[{text:"Title",space:10},{text:"Created Date",space:2},{text:"Updated Date",space:2},{text:"",space:1}],_=()=>{const[o,d]=r.useState(1),[p,l]=r.useState(""),u=j(p),{data:a,loading:n,count:i}=C("about",o,u),x=r.useMemo(()=>c.reduce((e,s)=>e+s.space,1),[c]),m=c.map(e=>t.jsx(T,{sx:{width:`${e.space/x*90}%`},children:t.jsx(g,{children:e.text})},e.text)),h=a&&a.length>0&&a.map(e=>{const s=b({data:e,keys:["title","created_time","updated_time"]});return t.jsx(S,{filtered:s,info:e,deleteText:"about"},e.id)});return t.jsxs(D,{children:[t.jsx(y,{updateSearch:e=>l(e),isCreate:!1}),t.jsx(f,{count:i,headersDisplay:m,loading:n,data:a||[],result:h,page:o,updatePage:e=>d(e)})]})};export{_ as default};
