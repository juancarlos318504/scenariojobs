import{Q as W,l as c,R as k,k as l,U as v,r as R,n as $,j as G,o as S,q as y,i as T,s as M,m as P}from"./index-f9bb7ea9.js";const j=W(),L=j,N=["className","component","disableGutters","fixed","maxWidth","classes"],U=k(),_=L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),w=a=>v({props:a,name:"MuiContainer",defaultTheme:U}),z=(a,e)=>{const o=n=>T(e,n),{classes:u,fixed:p,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,p&&"fixed",x&&"disableGutters"]};return y(s,o,u)};function q(a={}){const{createStyledComponent:e=_,useThemeProps:o=w,componentName:u="MuiContainer"}=a,p=e(({theme:t,ownerState:s})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((n,i)=>{const d=i,r=t.breakpoints.values[d];return r!==0&&(n[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),n},{}),({theme:t,ownerState:s})=>c({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return R.forwardRef(function(s,n){const i=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=i,g=$(i,N),m=c({},i,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=z(m,u);return G(p,c({as:r,ownerState:m,className:S(h.root,d),ref:n},g))})}const D=q({createStyledComponent:M("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>P({props:a,name:"MuiContainer"})}),O=D;export{O as C};
