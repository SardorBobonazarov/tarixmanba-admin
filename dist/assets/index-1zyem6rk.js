import{r as c,j as t,T as m,B as j}from"./index-ByFb1g0N.js";import{u as y,g as D,T,a as S,U as b,D as f}from"./getFilteredData-Bt6cKq-B.js";import{u as C}from"./useFetchGetAllDatas-CmuUVgEz.js";import"./settings-hemabYwP.js";import"./apiGetCalls-ci890QmT.js";const o=[{text:"#",space:1},{text:"Icon",space:1},{text:"Title",space:14},{text:"",space:1}],U=()=>{const[p,d]=c.useState(""),u=y(p),[l,i]=c.useState(1),{data:a,loading:s,count:n}=C("category",l,u);console.log(a,s,n);const x=c.useMemo(()=>o.reduce((e,r)=>e+r.space,1),[o]),g=a&&!s&&a.length>0&&a.map(e=>{const r=D({data:e,keys:["id","icon","title"]});return t.jsx(T,{info:e,filtered:r,deleteText:"category"},e.id)}),h=o.map(e=>t.jsx(S,{sx:{width:`${e.space/x*100}%`},children:t.jsx(m,{children:e.text})},e.text));return t.jsxs(j,{children:[t.jsx(b,{updateSearch:e=>d(e)}),t.jsx(f,{count:n,headersDisplay:h,loading:s,data:a||[],result:g,page:l,updatePage:e=>i(e)})]})};export{U as default};