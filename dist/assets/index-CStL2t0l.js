import{a as L,g as S,s as b,b as v,r as c,f as M,_ as z,j as t,h as T,T as p,i as j,k as U,c as P,B as h,q as I,t as A,n as k}from"./index-Cdtoa1kp.js";import{U as F}from"./input-Cf43R17r.js";import{a as $,F as B,i as R,b as N,T as V}from"./settings-flPglppH.js";import{I as _}from"./IconButton-DIlf_nO7.js";function W(s){return S("MuiInputAdornment",s)}const D=L("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),y=D;var w;const O=["children","className","component","disablePointerEvents","disableTypography","position","variant"],q=(s,e)=>{const{ownerState:n}=s;return[e.root,e[`position${j(n.position)}`],n.disablePointerEvents===!0&&e.disablePointerEvents,e[n.variant]]},H=s=>{const{classes:e,disablePointerEvents:n,hiddenLabel:a,position:i,size:d,variant:r}=s,u={root:["root",n&&"disablePointerEvents",i&&`position${j(i)}`,r,a&&"hiddenLabel",d&&`size${j(d)}`]};return U(u,W,e)},G=b("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:q})(({theme:s,ownerState:e})=>v({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(s.vars||s).palette.action.active},e.variant==="filled"&&{[`&.${y.positionStart}&:not(.${y.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),J=c.forwardRef(function(e,n){const a=M({props:e,name:"MuiInputAdornment"}),{children:i,className:d,component:r="div",disablePointerEvents:u=!1,disableTypography:g=!1,position:x,variant:m}=a,f=z(a,O),l=$()||{};let o=m;m&&l.variant,l&&!o&&(o=l.variant);const C=v({},a,{hiddenLabel:l.hiddenLabel,size:l.size,disablePointerEvents:u,position:x,variant:o}),E=H(C);return t.jsx(B.Provider,{value:null,children:t.jsx(G,v({as:r,ownerState:C,className:T(E.root,d),ref:n},f,{children:typeof i=="string"&&!g?t.jsx(p,{color:"text.secondary",children:i}):t.jsxs(c.Fragment,{children:[x==="start"?w||(w=t.jsx("span",{className:"notranslate",children:"​"})):null,i]})}))})}),K=J,Q=P(t.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),X=P(t.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff"),Y=b(h)(({theme:s})=>({backgroundColor:s.palette.action.selected,height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"})),Z=b(h)(()=>({backgroundColor:"#fff",padding:"40px",width:"100%",maxWidth:"512px",textAlign:"center"})),tt=async s=>{try{return(await R.post("user/token/",s,{headers:{"Content-Type":"application/json"}})).data}catch(e){throw e}},et=()=>{const s=I(),{setUser:e}=A(),[n,a]=c.useState(""),[i,d]=c.useState(""),[r,u]=c.useState(!1),[g,x]=c.useState(!1),m=()=>{u(!r)},f=o=>{o.preventDefault()},l=()=>{!n||!i||(x(!0),tt({username:n,password:i}).then(()=>{e({email:n}),localStorage.setItem("user",n),s("/",{replace:!0})}).catch(o=>o).finally(()=>x(!1)))};return t.jsx(Y,{children:t.jsxs(Z,{children:[t.jsx(p,{sx:{fontWeight:"600",fontSize:"30px"},children:"Admin Panel"}),t.jsxs(N,{fullWidth:!0,children:[t.jsxs(h,{sx:{display:"flex",gap:"10px",margin:"20px 0 5px"},children:[t.jsx(p,{sx:{color:"red"},children:"*"}),t.jsx(p,{children:"Login"})]}),t.jsx(F,{updateValue:o=>a(o)}),t.jsxs(h,{sx:{display:"flex",gap:"10px",margin:"20px 0 5px"},children:[t.jsx(p,{sx:{color:"red"},children:"*"}),t.jsx(p,{children:"Password"})]}),t.jsx(V,{onChange:o=>d(o.target.value),size:"small",type:r?"text":"password",InputProps:{endAdornment:t.jsx(K,{position:"end",children:t.jsx(_,{"aria-label":"toggle password visibility",onClick:m,onMouseDown:f,edge:"end",children:r?t.jsx(X,{}):t.jsx(Q,{})})})}}),t.jsx(k,{variant:"contained",disabled:g,sx:{marginTop:"30px"},onClick:l,children:"Login"})]})]})})},at=()=>{const{user:s}=A(),e=I();return c.useEffect(()=>{var n;s.email&&((n=s.email)==null?void 0:n.length)>0&&e("/",{replace:!0})},[]),t.jsx(et,{})};export{at as default};