import{v as a,j as r,L as e,B as s}from"./index-DTA6hJDe.js";import{u as m}from"./useFetchGetSingleData-Cgt3aLeh.js";import n from"./LibrariesCreatePage-8gYA6UNm.js";import"./settings-BayOKyU5.js";import"./select-C8T4jSUF.js";import"./Close-B2wyvc65.js";import"./IconButton-CmStUBMj.js";import"./input-DmyeKp-P.js";import"./getImage-Yq4tvNbF.js";import"./apiUpdateCalls-DoLG4PHq.js";import"./useFetchGetAllDatas-B7CRUuyj.js";import"./apiGetCalls-CpJU2P2s.js";import"./getFilteredList-BmJJUTYQ.js";const P=()=>{const{id:i}=a();if(!i)return r.jsx("h2",{children:"Nothing Found"});const{data:t,loading:o}=m("libraries",i);return o?r.jsx(e,{}):!t&&!o?r.jsx("h2",{children:"No data"}):r.jsx(s,{children:r.jsx(n,{isEdit:!0,data:t})})};export{P as default};