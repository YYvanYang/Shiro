import{r as i,j as e}from"./index-P88wRiLI.js";import{A as l,m as c}from"./spring-F8CH3gpN.js";import{c as m}from"./helper-WEVHfaFv.js";import{m as p}from"./motion-minimal-NU37ajd3.js";const h=({isOpened:t,className:r,children:s,withBackground:o=!1})=>{const n=i.useMemo(()=>{const a={open:{opacity:1,height:"auto",transition:c},collapsed:{opacity:0,height:0,overflow:"hidden"}};return o&&(a.open.background="oklch(var(--a) / 10%)",a.collapsed.background="oklch(var(--a) / 0%)"),a},[o]);return e.jsx(e.Fragment,{children:e.jsx(l,{initial:!1,children:t&&e.jsx(p.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:n,className:m(o&&"rounded-lg",r),children:o?e.jsx("div",{className:"p-4",children:s}):s},"content")})})};export{h as C};
