import{q as ye,r as n,j as i,B as R,T as d,S as k,n as S}from"./index-BBG2Og9a.js";import{U as C}from"./select-LVQkeg-d.js";import{U as a}from"./input-BYqJndx-.js";import{U as O}from"./file-B-FegUKS.js";import{U as Ce}from"./switch-epE7by1u.js";import{u as G}from"./useFetchGetAllDatas-CmaUik0_.js";import{g as w}from"./getFilteredList-CAX_eyoo.js";import{u as be,c as Fe}from"./apiUpdateCalls-BQROgRcf.js";import{g as ke}from"./getImage-CkJD2VpG.js";const x=({data:j,key:t})=>{const f=[];return j.map(o=>{if(t==="file"&&!o[t])return f;o[t]!==""&&o[t]!==null&&(f.push(o[t]),console.log(o[t],j,t))}),f},we=j=>new Promise((t,f)=>{const o=new FileReader;o.onloadend=()=>{const p=o.result;p&&typeof p=="string"?t(p.split(",")[1]):f(new Error("Failed to convert file to Base64."))},o.onerror=p=>{f(p)},o.readAsDataURL(j)}),Ee=({isEdit:j,data:t})=>{const f=ye(),o=[{id:"0",value:"Gallery"},{id:"1",value:"Audio"},{id:"2",value:"File"},{id:"3",value:"Virtual_reality"},{id:"4",value:"Video"},{id:"5",value:"Location"}],p={Gallery:"file",Audio:"file",File:"file",Virtual_reality:"file",Video:"link",Location:"location"},[c,Q]=n.useState({id:t==null?void 0:t.category,value:t==null?void 0:t.cat_name}),[g,N]=n.useState({id:t==null?void 0:t.filter_category,value:t==null?void 0:t.filter_category_name}),[b,D]=n.useState({id:t==null?void 0:t.filters,value:t==null?void 0:t.filters_name}),[F,X]=n.useState({id:t==null?void 0:t.period_filter,value:t==null?void 0:t.period_filter_name}),[q,Y]=n.useState((t==null?void 0:t.title)||""),[z,H]=n.useState(null),[J,Z]=n.useState((t==null?void 0:t.content)||""),[K,$]=n.useState((t==null?void 0:t.statehood)||!1),[L,ee]=n.useState({id:t==null?void 0:t.province,value:t==null?void 0:t.province_name}),[h,I]=n.useState((t==null?void 0:t.attributes_list)||[{id:Date.now(),attributes_title:"",attributes_description:"",sequence:1}]),[m,B]=n.useState((t==null?void 0:t.contents_list)||[{id:Date.now(),contents_title:"",sequence:1,contents_description:""}]),[r,U]=n.useState((t==null?void 0:t.interive_list)||[{id:Date.now(),item:"file",title:"",sequence:1,file:null,link:"",latitude:"",longitude:""}]);n.useEffect(()=>{async function e(){const l=await ke(t==null?void 0:t.image,t==null?void 0:t.image);H(l)}e()},[t]);const[te,P]=n.useState(!1),ie=()=>{let e=[...h,{id:Date.now(),attributes_title:"",attributes_description:"",sequence:1}];I(e)},E=(e,l,s)=>{const u=[...h];u[e]={...h[e],[l]:s},I(u)},le=e=>{const l=[...h];l.splice(e,1),I(l)},se=()=>{let e=[...m,{id:Date.now(),contents_title:"",sequence:1,contents_description:""}];B(e)},W=(e,l,s)=>{const u=[...m];u[e]={...m[e],[l]:s},B(u)},ne=e=>{const l=[...m];l.splice(e,1),B(l)},oe=()=>{let e=[...r,{id:Date.now(),interive_item:"file",interive_title:"",interive_sequence:1,interive_file:null,interive_link:"",interive_latitude:"",interive_longitude:""}];U(e)},v=(e,l,s)=>{const u=[...r];if(l==="file"&&s instanceof FileList){const y=new FileReader;y.onloadend=()=>{u[e]={...r[e],[l]:y.result}},console.log(s),y.readAsDataURL(s[0]),console.log("go",y.result)}l==="item"&&typeof s=="string"?u[e]={...r[e],[l]:p[s],status:s}:u[e]={...r[e],[l]:s},console.log(l,s,u),U(u)},re=e=>{const l=[...r];l.splice(e,1),U(l)},[T,ce]=n.useState([]),[ue,ae]=n.useState([]),{data:A}=G("category"),{data:pe}=G("period_filter"),{data:de}=G("province");n.useEffect(()=>{A==null||A.map(e=>{e.id===(c==null?void 0:c.id)&&ce(e.categories)})},[c]),n.useEffect(()=>{T==null||T.map(e=>{g&&e.id===g.id&&ae(e.filters_category)})},[g]);const xe=w({data:A}),fe=w({data:T}),ge=w({data:ue}),he=w({data:pe}),me=w({data:de}),_e=async()=>{if(!c||!g||!b||!F||!q)return;P(!0);const e=x({data:h,key:"attributes_title"}),l=x({data:h,key:"attributes_description"}),s=x({data:m,key:"contents_title"}),u=x({data:m,key:"contents_description"}),y=x({data:r,key:"title"}),je=x({data:r,key:"status"}),M=x({data:r,key:"file"}),ve=x({data:r,key:"link"}),Ve=x({data:r,key:"latitude"}),Se=x({data:r,key:"longitude"}),_={category:(c==null?void 0:c.id)+"",filter_category:(g==null?void 0:g.id)+"",filters:(b==null?void 0:b.id)+"",period_filter:(F==null?void 0:F.id)+"",title:q,image:null,content:J,statehood:K,province:(L==null?void 0:L.id)+"",attributes_title_list:e,attributes_description_list:l,contents_title_list:s,contents_description_list:u,interive_title_list:y,status_list:je,interive_file_list:[],link_list:ve,latitude_list:Ve,longitude_list:Se};M.length>0&&(_.interive_file_list=M),j?(_.image=z&&await we(z),be("resource",t==null?void 0:t.id,_).then(V=>(f("/sources",{replace:!0}),V)).catch(V=>console.log(V,_)).finally(()=>{P(!1)})):Fe("resource",_).then(V=>{f("/sources",{replace:!0}),console.log(V,_)}).catch(V=>console.log(V,_)).finally(()=>{console.log("it should be working",_),P(!1)})};return i.jsxs(R,{children:[i.jsxs(d,{sx:{marginBottom:"10px"},children:["Filter ",c&&c.value]}),i.jsx(C,{options:xe,placeholder:"Select a category",defaultValue:c,updateValue:e=>{Q(e),N({id:"",value:""}),D({id:"",value:""})}}),i.jsxs(k,{direction:"row",gap:5,sx:{margin:"20px 0"},children:[i.jsx(C,{disabled:!!c,options:fe,defaultValue:g,placeholder:"Select a filter category",updateValue:e=>{N(e),D({id:"",value:""})}}),i.jsx(C,{disabled:!!c&&!!g,options:ge,defaultValue:b,placeholder:"Select a filter",updateValue:e=>D(e)})]}),i.jsxs(d,{sx:{margin:"15px 0 5px"},children:[i.jsx("span",{style:{color:"red"},children:"*"})," Select period filter"]}),i.jsx(C,{options:he,defaultValue:F,placeholder:"",updateValue:e=>X(e)}),i.jsxs(d,{sx:{margin:"15px 0 5px"},children:[i.jsx("span",{style:{color:"red"},children:"*"})," Title"]}),i.jsx(a,{updateValue:e=>Y(e),defaultValue:q}),i.jsx(d,{sx:{margin:"20px 0 10px"},children:"Click to upload an image"}),i.jsx(O,{fileChange:e=>e&&H(e[0]),defaultFile:t==null?void 0:t.image,id:"one"}),i.jsx(d,{sx:{margin:"20px 0 10px"},children:"Content"}),i.jsx(a,{updateValue:e=>Z(e),defaultValue:J}),i.jsx(d,{sx:{margin:"20px 0 10px"},children:"Statehood"}),i.jsx(Ce,{value:K,changeValue:e=>$(e)}),i.jsxs(d,{sx:{margin:"15px 0 5px"},children:[i.jsx("span",{style:{color:"red"},children:"*"})," Select Province"]}),i.jsx(C,{options:me,defaultValue:L,placeholder:"",updateValue:e=>ee(e)}),i.jsxs(d,{sx:{margin:"15px 0 5px"},children:[i.jsx("span",{style:{color:"red"},children:"*"})," Attributes"]}),h.map((e,l)=>i.jsxs(k,{direction:"row",gap:2,sx:{marginBottom:"10px"},children:[i.jsx(a,{updateValue:s=>E(l,"attributes_title",s),defaultValue:e.attributes_title,placeholder:"Title"}),i.jsx(a,{updateValue:s=>E(l,"attributes_description",s),defaultValue:e.attributes_description,placeholder:"Description"}),i.jsx(a,{type:"number",fullWidth:!1,updateValue:s=>E(l,"sequence",s),placeholder:"Sequence",defaultValue:e.sequence}),h.length>1&&i.jsx(S,{variant:"contained",onClick:()=>le(l),children:"Delete"})]},e.id)),i.jsx(S,{variant:"outlined",fullWidth:!0,sx:{marginTop:"10px"},onClick:ie,children:"Add Attribute"}),i.jsxs(d,{sx:{margin:"15px 0 5px"},children:[i.jsx("span",{style:{color:"red"},children:"*"})," Contents"]}),m.map((e,l)=>i.jsxs(R,{children:[i.jsxs(k,{direction:"row",gap:2,sx:{marginBottom:"10px"},children:[i.jsx(a,{updateValue:s=>W(l,"contents_title",s),defaultValue:e.contents_title,placeholder:"Title"}),i.jsx(a,{type:"number",fullWidth:!1,updateValue:s=>W(l,"sequence",s),placeholder:"Sequence",defaultValue:e.sequence})]}),i.jsx(a,{updateValue:s=>W(l,"contents_description",s),defaultValue:e.contents_description,placeholder:""}),m.length>1&&i.jsx(S,{variant:"contained",onClick:()=>ne(l),children:"Delete"})]},e.id)),i.jsx(S,{variant:"outlined",fullWidth:!0,sx:{marginTop:"10px"},onClick:se,children:"Add Content"}),i.jsxs(d,{sx:{margin:"15px 0 5px"},children:[i.jsx("span",{style:{color:"red"},children:"*"})," Interactive Content"]}),r.map((e,l)=>i.jsxs(R,{children:[i.jsxs(k,{direction:"row",gap:2,sx:{margin:"10px 0"},children:[i.jsx(C,{options:o,defaultValue:{id:o[0].id||"0",value:e.status||o[0].value},placeholder:"Select type",updateValue:s=>v(l,"interive_item",s.value)}),i.jsx(a,{updateValue:s=>v(l,"interive_title",s),defaultValue:e.title,placeholder:"Title"}),i.jsx(a,{type:"number",fullWidth:!1,updateValue:s=>v(l,"interive_sequence",s),placeholder:"Sequence",defaultValue:e.sequence})]}),(p[e.status]==="file"||e.interive_item==="file")&&i.jsx(O,{id:l+"",defaultFile:e.file,fileChange:s=>v(l,"interive_file",s)}),(p[e.status]==="link"||e.interive_item==="link")&&i.jsx(a,{updateValue:s=>v(l,"interive_link",s),defaultValue:e.link,placeholder:"Link"}),(p[e.status]==="location"||e.interive_item==="location")&&i.jsxs(k,{direction:"row",gap:2,children:[i.jsx(a,{updateValue:s=>v(l,"interive_latitude",s),defaultValue:e.latitude,placeholder:"Latitude"}),i.jsx(a,{updateValue:s=>v(l,"interive_longitude",s),defaultValue:e.longitude,placeholder:"Longitude"})]}),r.length>1&&i.jsx(S,{variant:"contained",sx:{margin:"10px 0"},onClick:()=>re(l),children:"Delete"})]},e.id)),i.jsx(S,{variant:"outlined",fullWidth:!0,sx:{marginTop:"10px"},onClick:oe,children:"Add Interactive Content"}),i.jsx(S,{variant:"contained",disabled:te,onClick:_e,sx:{marginTop:"20px"},children:j?"Edit":"Create"})]})};export{Ee as C};
