import{r as a,R as k}from"./index-P88wRiLI.js";const w=["light","dark"],x="(prefers-color-scheme: dark)",K=typeof window>"u",L=a.createContext(void 0),N={setTheme:e=>{},themes:[]},j=()=>{var e;return(e=a.useContext(L))!==null&&e!==void 0?e:N},H=e=>a.useContext(L)?k.createElement(a.Fragment,null,e.children):k.createElement(R,e),J=["light","dark"],R=({forcedTheme:e,disableTransitionOnChange:m=!1,enableSystem:t=!0,enableColorScheme:$=!0,storageKey:d="theme",themes:r=J,defaultTheme:n=t?"system":"light",attribute:f="data-theme",value:h,children:b,nonce:S})=>{const[c,i]=a.useState(()=>M(d,n)),[p,l]=a.useState(()=>M(d)),v=h?Object.values(h):r,C=a.useCallback(s=>{let o=s;if(!o)return;s==="system"&&t&&(o=O());const E=h?h[o]:o,I=m?D():null,T=document.documentElement;if(f==="class"?(T.classList.remove(...v),E&&T.classList.add(E)):E?T.setAttribute(f,E):T.removeAttribute(f),$){const A=w.includes(n)?n:null,_=w.includes(o)?o:A;T.style.colorScheme=_}I==null||I()},[]),u=a.useCallback(s=>{i(s);try{localStorage.setItem(d,s)}catch{}},[e]),y=a.useCallback(s=>{const o=O(s);l(o),c==="system"&&t&&!e&&C("system")},[c,e]);a.useEffect(()=>{const s=window.matchMedia(x);return s.addListener(y),y(s),()=>s.removeListener(y)},[y]),a.useEffect(()=>{const s=o=>{o.key===d&&u(o.newValue||n)};return window.addEventListener("storage",s),()=>window.removeEventListener("storage",s)},[u]),a.useEffect(()=>{C(e??c)},[e,c]);const g=a.useMemo(()=>({theme:c,setTheme:u,forcedTheme:e,resolvedTheme:c==="system"?p:c,themes:t?[...r,"system"]:r,systemTheme:t?p:void 0}),[c,u,e,p,t,r]);return k.createElement(L.Provider,{value:g},k.createElement(z,{forcedTheme:e,disableTransitionOnChange:m,enableSystem:t,enableColorScheme:$,storageKey:d,themes:r,defaultTheme:n,attribute:f,value:h,children:b,attrs:v,nonce:S}),b)},z=a.memo(({forcedTheme:e,storageKey:m,attribute:t,enableSystem:$,enableColorScheme:d,defaultTheme:r,value:n,attrs:f,nonce:h})=>{const b=r==="system",S=t==="class"?`var d=document.documentElement,c=d.classList;c.remove(${f.map(l=>`'${l}'`).join(",")});`:`var d=document.documentElement,n='${t}',s='setAttribute';`,c=d?w.includes(r)&&r?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${r}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",i=(l,v=!1,C=!0)=>{const u=n?n[l]:l,y=v?l+"|| ''":`'${u}'`;let g="";return d&&C&&!v&&w.includes(l)&&(g+=`d.style.colorScheme = '${l}';`),t==="class"?g+=v||u?`c.add(${y})`:"null":u&&(g+=`d[s](n,${y})`),g},p=e?`!function(){${S}${i(e)}}()`:$?`!function(){try{${S}var e=localStorage.getItem('${m}');if('system'===e||(!e&&${b})){var t='${x}',m=window.matchMedia(t);if(m.media!==t||m.matches){${i("dark")}}else{${i("light")}}}else if(e){${n?`var x=${JSON.stringify(n)};`:""}${i(n?"x[e]":"e",!0)}}${b?"":"else{"+i(r,!1,!1)+"}"}${c}}catch(e){}}()`:`!function(){try{${S}var e=localStorage.getItem('${m}');if(e){${n?`var x=${JSON.stringify(n)};`:""}${i(n?"x[e]":"e",!0)}}else{${i(r,!1,!1)};}${c}}catch(t){}}();`;return k.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:p}})},()=>!0),M=(e,m)=>{if(K)return;let t;try{t=localStorage.getItem(e)||void 0}catch{}return t||m},D=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},O=e=>(e||(e=window.matchMedia(x)),e.matches?"dark":"light"),P=()=>{const{theme:e,systemTheme:m}=j();return e==="dark"||e==="system"&&m==="dark"};export{H as $,P as u};
