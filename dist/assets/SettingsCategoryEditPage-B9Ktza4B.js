import{v as i,j as t,L as a,B as s}from"./index-ByFb1g0N.js";import{u as n}from"./useFetchGetSingleData-Dh2E5k2A.js";import d from"./SettingsCategoryCreatePage-SVadxCwa.js";import"./settings-hemabYwP.js";import"./input-BR8-LU8Y.js";import"./apiUpdateCalls-PhMy7Bxd.js";const f=()=>{const{id:r}=i();if(!r)return t.jsx("h2",{children:"Nothing Found"});const{data:e,loading:o}=n("connection_category",r);return o?t.jsx(a,{}):!e&&!o?t.jsx("h2",{children:"No data"}):t.jsx(s,{children:t.jsx(d,{isEdit:!0,data:e})})};export{f as default};