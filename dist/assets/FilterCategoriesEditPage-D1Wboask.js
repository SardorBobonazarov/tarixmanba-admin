import{v as o,j as t,L as a,B as s}from"./index-DT-Q6kAP.js";import{u as n}from"./useFetchGetSingleData-BXAglfqZ.js";import m from"./FilterCategoriesCreatePage-BPmxgekO.js";import"./settings-NaXnANWD.js";import"./input-DnatyFKj.js";import"./select-_MLwrEpR.js";import"./index-1V4nhdya.js";import"./IconButton-Dp_Z0XkK.js";import"./apiUpdateCalls-CBTCy7tK.js";import"./apiGetCalls-C5kV7Ldm.js";const F=()=>{const{id:r}=o();if(!r)return t.jsx("h2",{children:"Nothing Found"});const{data:i,loading:e}=n("filter_category",r);return e?t.jsx(a,{}):!i&&!e?t.jsx("h2",{children:"No data"}):t.jsx(s,{children:t.jsx(m,{isEdit:!0,data:i})})};export{F as default};
