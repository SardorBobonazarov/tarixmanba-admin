import{r,j as t,T as g,B as y}from"./index-Cdtoa1kp.js";import{u as j,g as b,T as D,a as T,U as S,D as C}from"./getFilteredData-D8rv1D_c.js";import{u as _}from"./useFetchGetAllDatas-2fggoB_m.js";import"./settings-flPglppH.js";import"./apiGetCalls-BoMOjHbT.js";const c=[{text:"Title",space:14},{text:"Created",space:4},{text:"Updated",space:4},{text:"",space:1}],P=()=>{const[o,l]=r.useState(1),[p,i]=r.useState(""),n=j(p),{data:a,loading:d,count:u}=_("library_category",o,n),x=r.useMemo(()=>c.reduce((e,s)=>e+s.space,1),[c]),m=a&&!d&&a.length>0&&a.map(e=>{const s=b({data:e,keys:["title","created_time","updated_time"]});return t.jsx(D,{info:e,filtered:s,deleteText:"library_category"},e.id)}),h=c.map(e=>t.jsx(T,{sx:{width:`${e.space/x*100}%`},children:t.jsx(g,{children:e.text})},e.text));return t.jsxs(y,{children:[t.jsx(S,{updateSearch:e=>i(e)}),t.jsx(C,{count:u,headersDisplay:h,loading:d,data:a||[],result:m,page:o,updatePage:e=>l(e)})]})};export{P as default};