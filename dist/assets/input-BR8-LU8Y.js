import{r as x,j as p}from"./index-ByFb1g0N.js";import{T as l}from"./settings-hemabYwP.js";const c=({updateValue:a,type:r="text",fullWidth:t=!0,placeholder:s,defaultValue:n})=>{const[i,o]=x.useState(n||""),u=e=>{o(e.target.value),a(e.target.value)};return p.jsx(l,{type:r,required:!0,placeholder:s,id:"outlined-basic",variant:"outlined",onChange:u,value:i,size:"small",sx:{width:t?"100%":"80px",minWidth:"80px"},fullWidth:t})};export{c as U};