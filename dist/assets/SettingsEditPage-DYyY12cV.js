import{v as e,j as t,L as s,B as a}from"./index-DTA6hJDe.js";import{u as n}from"./useFetchGetSingleData-Cgt3aLeh.js";import m from"./SettingsCreatePage-CkqqAfU9.js";import"./settings-BayOKyU5.js";import"./input-DmyeKp-P.js";import"./apiUpdateCalls-DoLG4PHq.js";import"./select-C8T4jSUF.js";import"./Close-B2wyvc65.js";import"./IconButton-CmStUBMj.js";import"./useFetchGetAllDatas-B7CRUuyj.js";import"./apiGetCalls-CpJU2P2s.js";import"./getFilteredList-BmJJUTYQ.js";const v=()=>{const{id:r}=e();if(!r)return t.jsx("h2",{children:"Nothing Found"});const{data:i,loading:o}=n("connection_value",r);return o?t.jsx(s,{}):!i&&!o?t.jsx("h2",{children:"No data"}):t.jsx(a,{children:t.jsx(m,{isEdit:!0,data:i})})};export{v as default};