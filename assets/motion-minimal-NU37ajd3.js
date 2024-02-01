import{r as l}from"./index-P88wRiLI.js";const X=l.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),T=l.createContext({}),Y=l.createContext(null),Z=typeof document<"u",ft=Z?l.useLayoutEffect:l.useEffect,N=l.createContext({strict:!1}),U=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),dt="framerAppearId",mt="data-"+U(dt);class H{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function gt(t){let e=new H,n=new H,r=0,s=!1,a=!1;const c=new WeakSet,u={schedule:(g,d=!1,m=!1)=>{const o=m&&s,f=o?e:n;return d&&c.add(g),f.add(g)&&o&&s&&(r=e.order.length),g},cancel:g=>{n.remove(g),c.delete(g)},process:g=>{if(s){a=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let d=0;d<r;d++){const m=e.order[d];c.has(m)&&(u.schedule(m),t()),m(g)}s=!1,a&&(a=!1,u.process(g))}};return u}const v=["prepare","read","update","preRender","render","postRender"],ht=40;function q(t,e){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=v.reduce((o,f)=>(o[f]=gt(()=>n=!0),o),{}),c=o=>{a[o].process(s)},u=()=>{const o=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(o-s.timestamp,ht),1),s.timestamp=o,s.isProcessing=!0,v.forEach(c),s.isProcessing=!1,n&&e&&(r=!1,t(u))},g=()=>{n=!0,r=!0,s.isProcessing||t(u)};return{schedule:v.reduce((o,f)=>{const h=a[f];return o[f]=(y,p=!1,W=!1)=>(n||g(),h.schedule(y,p,W)),o},{}),cancel:o=>v.forEach(f=>a[f].cancel(o)),state:s,steps:a}}const{schedule:yt,cancel:he}=q(queueMicrotask,!1);function pt(t,e,n,r){const{visualElement:s}=l.useContext(T),a=l.useContext(N),c=l.useContext(Y),u=l.useContext(X).reducedMotion,g=l.useRef();r=r||a.renderer,!g.current&&r&&(g.current=r(t,{visualState:e,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=g.current;l.useInsertionEffect(()=>{d&&d.update(n,c)});const m=l.useRef(!!(n[mt]&&!window.HandoffComplete));return ft(()=>{d&&(yt.postRender(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),l.useEffect(()=>{d&&(d.updateFeatures(),!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),d}function wt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function xt(t,e,n){return l.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):wt(n)&&(n.current=r))},[e])}function E(t){return typeof t=="string"||Array.isArray(t)}function K(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ct=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bt=["initial",...Ct];function L(t){return K(t.animate)||bt.some(e=>E(t[e]))}function St(t){return!!(L(t)||t.variants)}function vt(t,e){if(L(t)){const{initial:n,animate:r}=t;return{initial:n===!1||E(n)?n:void 0,animate:E(r)?r:void 0}}return t.inherit!==!1?e:{}}function Pt(t){const{initial:e,animate:n}=vt(t,l.useContext(T));return l.useMemo(()=>({initial:e,animate:n}),[D(e),D(n)])}function D(t){return Array.isArray(t)?t.join(" "):t}const $={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},k={};for(const t in $)k[t]={isEnabled:e=>$[t].some(n=>!!e[n])};function Vt(t){for(const e in t)k[e]={...k[e],...t[e]}}const Tt=l.createContext({}),Mt=l.createContext({}),At=Symbol.for("motionComponentSymbol");function Rt({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:s}){t&&Vt(t);function a(u,g){let d;const m={...l.useContext(X),...u,layoutId:Et(u)},{isStatic:o}=m,f=Pt(u),h=r(u,o);if(!o&&Z){f.visualElement=pt(s,h,m,e);const y=l.useContext(Mt),p=l.useContext(N).strict;f.visualElement&&(d=f.visualElement.loadFeatures(m,p,t,y))}return l.createElement(T.Provider,{value:f},d&&f.visualElement?l.createElement(d,{visualElement:f.visualElement,...m}):null,n(s,u,xt(h,f.visualElement,g),h,o,f.visualElement))}const c=l.forwardRef(a);return c[At]=s,c}function Et({layoutId:t}){const e=l.useContext(Tt).id;return e&&t!==void 0?e+"-"+t:t}function kt(t){function e(r,s={}){return Rt(t(r,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const Lt=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _(t){return typeof t!="string"||t.includes("-")?!1:!!(Lt.indexOf(t)>-1||/[A-Z]/.test(t))}const Q={};function ye(t){Object.assign(Q,t)}const M=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],J=new Set(M);function tt(t,{layout:e,layoutId:n}){return J.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Q[t]||t==="opacity")}const x=t=>!!(t&&t.getVelocity),Ot={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ft=M.length;function Wt(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let a="";for(let c=0;c<Ft;c++){const u=M[c];if(t[u]!==void 0){const g=Ot[u]||u;a+=`${g}(${t[u]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,r?"":a):n&&r&&(a="none"),a}const et=t=>e=>typeof e=="string"&&e.startsWith(t),Bt=et("--"),pe=et("var(--"),we=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Ht=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Dt=(t,e,n)=>Math.min(Math.max(n,t),e),O={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},A={...O,transform:t=>Dt(0,1,t)},P={...O,default:1},xe=t=>Math.round(t*1e5)/1e5,Ce=/(-)?([\d]*\.?[\d])+/g,be=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Se=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function $t(t){return typeof t=="string"}const S=t=>({test:e=>$t(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),w=S("deg"),R=S("%"),i=S("px"),ve=S("vh"),Pe=S("vw"),I={...R,parse:t=>R.parse(t)/100,transform:t=>R.transform(t*100)},j={...O,transform:Math.round},It={borderWidth:i,borderTopWidth:i,borderRightWidth:i,borderBottomWidth:i,borderLeftWidth:i,borderRadius:i,radius:i,borderTopLeftRadius:i,borderTopRightRadius:i,borderBottomRightRadius:i,borderBottomLeftRadius:i,width:i,maxWidth:i,height:i,maxHeight:i,size:i,top:i,right:i,bottom:i,left:i,padding:i,paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i,margin:i,marginTop:i,marginRight:i,marginBottom:i,marginLeft:i,rotate:w,rotateX:w,rotateY:w,rotateZ:w,scale:P,scaleX:P,scaleY:P,scaleZ:P,skew:w,skewX:w,skewY:w,distance:i,translateX:i,translateY:i,translateZ:i,x:i,y:i,z:i,perspective:i,transformPerspective:i,opacity:A,originX:I,originY:I,originZ:i,zIndex:j,fillOpacity:A,strokeOpacity:A,numOctaves:j};function nt(t,e,n,r){const{style:s,vars:a,transform:c,transformOrigin:u}=t;let g=!1,d=!1,m=!0;for(const o in e){const f=e[o];if(Bt(o)){a[o]=f;continue}const h=It[o],y=Ht(f,h);if(J.has(o)){if(g=!0,c[o]=y,!m)continue;f!==(h.default||0)&&(m=!1)}else o.startsWith("origin")?(d=!0,u[o]=y):s[o]=y}if(e.transform||(g||r?s.transform=Wt(t.transform,n,m,r):s.transform&&(s.transform="none")),d){const{originX:o="50%",originY:f="50%",originZ:h=0}=u;s.transformOrigin=`${o} ${f} ${h}`}}const F=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function st(t,e,n){for(const r in e)!x(e[r])&&!tt(r,n)&&(t[r]=e[r])}function jt({transformTemplate:t},e,n){return l.useMemo(()=>{const r=F();return nt(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function zt(t,e,n){const r=t.style||{},s={};return st(s,r,t),Object.assign(s,jt(t,e,n)),s}function Gt(t,e,n){const r={},s=zt(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const Xt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function V(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Xt.has(t)}let rt=t=>!V(t);function Yt(t){t&&(rt=e=>e.startsWith("on")?!V(e):t(e))}try{Yt(require("@emotion/is-prop-valid").default)}catch{}function Zt(t,e,n){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||(rt(s)||n===!0&&V(s)||!e&&!V(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}function z(t,e,n){return typeof t=="string"?t:i.transform(e+n*t)}function Nt(t,e,n){const r=z(e,t.x,t.width),s=z(n,t.y,t.height);return`${r} ${s}`}const Ut={offset:"stroke-dashoffset",array:"stroke-dasharray"},qt={offset:"strokeDashoffset",array:"strokeDasharray"};function Kt(t,e,n=1,r=0,s=!0){t.pathLength=1;const a=s?Ut:qt;t[a.offset]=i.transform(-r);const c=i.transform(e),u=i.transform(n);t[a.array]=`${c} ${u}`}function at(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:g=0,...d},m,o,f){if(nt(t,d,m,f),o){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:y,dimensions:p}=t;h.transform&&(p&&(y.transform=h.transform),delete h.transform),p&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=Nt(p,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),c!==void 0&&Kt(h,c,u,g,!1)}const ot=()=>({...F(),attrs:{}}),it=t=>typeof t=="string"&&t.toLowerCase()==="svg";function _t(t,e,n,r){const s=l.useMemo(()=>{const a=ot();return at(a,e,{enableHardwareAcceleration:!1},it(r),t.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};st(a,t.style,t),s.style={...a,...s.style}}return s}function Qt(t=!1){return(n,r,s,{latestValues:a},c)=>{const g=(_(n)?_t:Gt)(r,a,c,n),m={...Zt(r,typeof n=="string",t),...g,ref:s},{children:o}=r,f=l.useMemo(()=>x(o)?o.get():o,[o]);return l.createElement(n,{...m,children:f})}}function Jt(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const a in n)t.style.setProperty(a,n[a])}const te=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ee(t,e,n,r){Jt(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(te.has(s)?s:U(s),e.attrs[s])}function ct(t,e){const{style:n}=t,r={};for(const s in n)(x(n[s])||e.style&&x(e.style[s])||tt(s,t))&&(r[s]=n[s]);return r}function ne(t,e){const n=ct(t,e);for(const r in t)if(x(t[r])||x(e[r])){const s=M.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function se(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}function re(t){const e=l.useRef(null);return e.current===null&&(e.current=t()),e.current}const ae=t=>Array.isArray(t),oe=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Ve=t=>ae(t)?t[t.length-1]||0:t;function ie(t){const e=x(t)?t.get():t;return oe(e)?e.toValue():e}function ce({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,s,a){const c={latestValues:ue(r,s,a,t),renderState:e()};return n&&(c.mount=u=>n(r,u,c)),c}const ut=t=>(e,n)=>{const r=l.useContext(T),s=l.useContext(Y),a=()=>ce(t,e,r,s);return n?a():re(a)};function ue(t,e,n,r){const s={},a=r(t,{});for(const f in a)s[f]=ie(a[f]);let{initial:c,animate:u}=t;const g=L(t),d=St(t);e&&d&&!g&&t.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=n?n.initial===!1:!1;m=m||c===!1;const o=m?u:c;return o&&typeof o!="boolean"&&!K(o)&&(Array.isArray(o)?o:[o]).forEach(h=>{const y=se(t,h);if(!y)return;const{transitionEnd:p,transition:W,...B}=y;for(const b in B){let C=B[b];if(Array.isArray(C)){const lt=m?C.length-1:0;C=C[lt]}C!==null&&(s[b]=C)}for(const b in p)s[b]=p[b]}),s}const le=t=>t,{schedule:G,cancel:Te,state:Me,steps:Ae}=q(typeof requestAnimationFrame<"u"?requestAnimationFrame:le,!0),fe={useVisualState:ut({scrapeMotionValuesFromProps:ne,createRenderState:ot,onMount:(t,e,{renderState:n,latestValues:r})=>{G.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{at(n,r,{enableHardwareAcceleration:!1},it(e.tagName),t.transformTemplate),ee(e,n)})}})},de={useVisualState:ut({scrapeMotionValuesFromProps:ct,createRenderState:F})};function me(t,{forwardMotionProps:e=!1},n,r){return{..._(t)?fe:de,preloadedFeatures:n,useRender:Qt(e),createVisualElement:r,Component:t}}const Re=kt(me);export{be as $,St as A,J as B,se as C,k as D,bt as E,Bt as F,nt as G,ct as H,Jt as I,te as J,U as K,Tt as L,X as M,ne as N,at as O,Y as P,ee as Q,it as R,Mt as S,_ as T,Vt as U,N as V,$t as W,Se as X,Ce as Y,xe as Z,A as _,re as a,we as a0,It as a1,w as a2,Pe as a3,ve as a4,Ve as a5,mt as a6,K as b,Te as c,ae as d,E as e,G as f,Me as g,Dt as h,x as i,wt as j,i as k,ye as l,Re as m,le as n,yt as o,R as p,Q as q,ie as r,Ae as s,pe as t,ft as u,Ct as v,M as w,Z as x,O as y,L as z};
