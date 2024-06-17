import{g as I,a as P,s as g,d as J,b as l,V as K,r as C,_ as N,u as Q,j as n,h as U,i as h,k as T,e as j,l as Y,m as Z}from"./index-ByFb1g0N.js";import{a as tt}from"./settings-hemabYwP.js";import{c as et}from"./index-BXwMNocD.js";function at(t){return I("PrivateSwitchBase",t)}P("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ot=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],st=t=>{const{classes:e,checked:a,disabled:s,edge:i}=t,r={root:["root",a&&"checked",s&&"disabled",i&&`edge${h(i)}`],input:["input"]};return T(r,at,e)},it=g(J)(({ownerState:t})=>l({padding:9,borderRadius:"50%"},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12})),rt=g("input",{shouldForwardProp:K})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ct=C.forwardRef(function(e,a){const{autoFocus:s,checked:i,checkedIcon:r,className:b,defaultChecked:w,disabled:k,disableFocusRipple:v=!1,edge:u=!1,icon:p,id:S,inputProps:_,inputRef:O,name:E,onBlur:$,onChange:y,onFocus:B,readOnly:L,required:X=!1,tabIndex:D,type:m,value:R}=e,q=N(e,ot),[z,A]=Q({controlled:i,default:!!w,name:"SwitchBase",state:"checked"}),d=tt(),V=c=>{B&&B(c),d&&d.onFocus&&d.onFocus(c)},W=c=>{$&&$(c),d&&d.onBlur&&d.onBlur(c)},G=c=>{if(c.nativeEvent.defaultPrevented)return;const M=c.target.checked;A(M),y&&y(c,M)};let f=k;d&&typeof f>"u"&&(f=d.disabled);const H=m==="checkbox"||m==="radio",x=l({},e,{checked:z,disabled:f,disableFocusRipple:v,edge:u}),F=st(x);return n.jsxs(it,l({component:"span",className:U(F.root,b),centerRipple:!0,focusRipple:!v,disabled:f,tabIndex:null,role:void 0,onFocus:V,onBlur:W,ownerState:x,ref:a},q,{children:[n.jsx(rt,l({autoFocus:s,checked:i,defaultChecked:w,className:F.input,disabled:f,id:H?S:void 0,name:E,onChange:G,readOnly:L,ref:O,required:X,ownerState:x,tabIndex:D,type:m},m==="checkbox"&&R===void 0?{}:{value:R},_)),z?r:p]}))}),nt=ct;function dt(t){return I("MuiSwitch",t)}const o=P("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),lt=["className","color","edge","size","sx"],ut=et(),pt=t=>{const{classes:e,edge:a,size:s,color:i,checked:r,disabled:b}=t,w={root:["root",a&&`edge${h(a)}`,`size${h(s)}`],switchBase:["switchBase",`color${h(i)}`,r&&"checked",b&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},k=T(w,dt,e);return l({},e,k)},ht=g("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,a.edge&&e[`edge${h(a.edge)}`],e[`size${h(a.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),gt=g(nt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.switchBase,{[`& .${o.input}`]:e.input},a.color!=="default"&&e[`color${h(a.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:j(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,e])=>e.main&&e.light).map(([e])=>({props:{color:e},style:{[`&.${o.checked}`]:{color:(t.vars||t).palette[e].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:j(t.palette[e].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${e}DisabledColor`]:`${t.palette.mode==="light"?Y(t.palette[e].main,.62):Z(t.palette[e].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(t.vars||t).palette[e].main}}}))]})),wt=g("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,e)=>e.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),bt=g("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,e)=>e.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),kt=C.forwardRef(function(e,a){const s=ut({props:e,name:"MuiSwitch"}),{className:i,color:r="primary",edge:b=!1,size:w="medium",sx:k}=s,v=N(s,lt),u=l({},s,{color:r,edge:b,size:w}),p=pt(u),S=n.jsx(bt,{className:p.thumb,ownerState:u});return n.jsxs(ht,{className:U(p.root,i),sx:k,ownerState:u,children:[n.jsx(gt,l({type:"checkbox",icon:S,checkedIcon:S,ref:a,ownerState:u},v,{classes:l({},p,{root:p.switchBase})})),n.jsx(wt,{className:p.track,ownerState:u})]})}),ft=kt,vt=g(ft)(({theme:t})=>({width:35,height:20,padding:0,display:"flex","&:active":{"& .MuiSwitch-thumb":{width:19},"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(11px)"}},"& .MuiSwitch-switchBase":{padding:2.5,"&.Mui-checked":{transform:"translateX(15px)",color:"#fff","& + .MuiSwitch-track":{opacity:1,backgroundColor:"#1890ff"}}},"& .MuiSwitch-thumb":{boxShadow:"0 2px 4px 0 rgb(0 35 11 / 20%)",width:15,height:15,borderRadius:20,transition:t.transitions.create(["width"],{duration:200})},"& .MuiSwitch-track":{borderRadius:10,opacity:1,backgroundColor:"rgba(0,0,0,.25)",boxSizing:"border-box"}})),Ct=({value:t,changeValue:e})=>{const[a,s]=C.useState(t||!1),i=r=>{s(r.target.value),e(r.target.value)};return n.jsx(n.Fragment,{children:n.jsx(vt,{value:a,defaultChecked:a,onChange:i})})};export{Ct as U};