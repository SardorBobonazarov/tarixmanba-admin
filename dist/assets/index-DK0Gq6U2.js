import{r,j as t,B as x}from"./index-DT-Q6kAP.js";import{u as m}from"./useFetchGetAllDatas-DTjlX0yT.js";import{u as h,g,T as j,U as D,D as S}from"./getFilteredData-Dvs7rvCR.js";import{U}from"./index-BZ0kZQl5.js";import"./apiGetCalls-C5kV7Ldm.js";import"./settings-NaXnANWD.js";const f=[{text:"Title",space:17},{text:"Created",space:3},{text:"Updated",space:3},{text:"",space:1}],C=()=>{const[s,c]=r.useState(1),[o,d]=r.useState(""),p=h(o),{data:a,loading:i,count:n}=m("province",s,p),l=a&&a.length>0&&a.map(e=>{const u=g({data:e,keys:["title","created_time","updated_time"]});return t.jsx(j,{filtered:u,info:e,deleteText:"province"},e.id)});return t.jsxs(x,{children:[t.jsx(D,{updateSearch:e=>d(e)}),t.jsx(S,{count:n,headersDisplay:t.jsx(U,{headers:f}),loading:i,data:a||[],result:l,page:s,updatePage:e=>c(e)})]})};export{C as default};