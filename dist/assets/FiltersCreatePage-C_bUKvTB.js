import{q as j,r as l,j as s,B as v,T as u,n as C}from"./index-ByFb1g0N.js";import{U as d}from"./input-BR8-LU8Y.js";import{U as S}from"./select-C-B-2nPO.js";import{u as _,c as T}from"./apiUpdateCalls-PhMy7Bxd.js";import{g as U}from"./apiGetCalls-ci890QmT.js";import"./settings-hemabYwP.js";import"./index-BXwMNocD.js";import"./IconButton-IqneyjV1.js";const b=({isEdit:p,data:t})=>{const c=j(),[i,f]=l.useState({id:t==null?void 0:t.filter_cat_id,value:t==null?void 0:t.filter_categories_name}),[o,m]=l.useState((t==null?void 0:t.title)||""),[a,g]=l.useState([]),[x,n]=l.useState(!1);l.useEffect(()=>{U("filter_category").then(e=>{g(e.results)}).catch(e=>e)},[]);const h=l.useMemo(()=>{const e=[];return a.map(r=>{e.push({id:r.id,value:r.title})}),e},[a]),y=()=>{if(!o||!i)return;n(!0);const e={title:o,filter_category:i.id};p?_("filters",t==null?void 0:t.id,e).then(r=>(c("/filters",{replace:!0}),r)).catch(r=>console.log(r)).finally(()=>n(!1)):T("filters",e).then(r=>(c("/filters",{replace:!0}),r)).catch(r=>r).finally(()=>n(!1))};return s.jsxs(v,{children:[s.jsxs(u,{sx:{margin:"20px 0 10px"},children:[s.jsx("span",{style:{color:"red"},children:"*"})," Select Filter Category"]}),s.jsx(S,{options:h,defaultValue:i,placeholder:"",updateValue:e=>{const r={id:e.id,value:e.value};f(r)}}),s.jsxs(u,{sx:{margin:"20px 0 10px"},children:[s.jsx("span",{style:{color:"red"},children:"*"})," Title"]}),s.jsx(d,{updateValue:e=>m(e),defaultValue:o,fullWidth:!0}),s.jsx(C,{variant:"contained",disabled:x,sx:{marginTop:"20px"},onClick:y,children:"Create"})]})};export{b as default};
