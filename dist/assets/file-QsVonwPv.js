import{r as p,j as e,B as o,n as x,T as c}from"./index-ByFb1g0N.js";const f=({fileChange:a,defaultFile:n,id:t})=>{const[i,l]=p.useState(n&&n.split("/")[n.split("/").length-1]||""),r=s=>{s.target.files&&(a(s.target.files),l(s.target.files[0].name))};return e.jsxs(o,{sx:{width:"100%"},children:[e.jsx("input",{accept:"image/*",type:"file",onChange:r,id:t?`input-file-${t}`:"input-file",style:{display:"none"}}),e.jsxs("label",{htmlFor:t?`input-file-${t}`:"input-file",style:{display:"flex"},children:[e.jsx(x,{variant:"contained",component:"span",children:"Upload File"}),e.jsx(c,{sx:{display:"flex",alignItems:"center",paddingLeft:"10px",flexGrow:1,backgroundColor:"primary.contrastText",padding:"0 10px"},children:i})]})]})};export{f as U};