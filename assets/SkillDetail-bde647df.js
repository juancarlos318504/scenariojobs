import{r as i,A as y,C,aD as W,u as m,ag as w,a as g,M as f,j as e,at as z,T as _,au as $,G as h}from"./index-5c44cf89.js";import{S as I}from"./index-c8069d00.js";import{A as P}from"./ActionDelete-f7563e5d.js";import{L as S}from"./LoadingButton-35a5f9c8.js";import{S as j}from"./SaveOutlined-e7d4d93f.js";import{D as q}from"./DeleteOutlined-75a90ccf.js";import"./formik.esm-659644ab.js";import"./OutlinedInput-acc43fe5.js";const V=()=>{const{token:l}=i.useContext(y),{openAlert:r}=i.useContext(C);let{skill_id:d}=W();const{data:t,isLoading:x,hasError:B,postAWS:k}=m(),{data:G,isLoading:c,hasError:H,postAWS:A}=m(),{data:F,isLoading:u,hasError:M,postAWS:b}=m(),[a,p]=i.useState(null),v=w(),D=async s=>{await k("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","get_skill",{id:d},l)},E=async()=>{const s=async()=>{const o=await b("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","delete_skill",{id:d},l);o.success?(r(o.message,"success"),v("/competencias")):r(`${o.message}: ${o.error}`,"error")};r("Por favor confirma que deseas eliminar la competencia: "+t.data.nombre,"warning",e(P,{callback:s}))},L=async s=>{const o={...s,id:d},n=await A("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","update_skill",o,l);n.success?r(n.message,"success"):r(`${n.message}: ${n.error}`,"error")};return i.useEffect(()=>{if(!t)return;if(!t.success){r(`${t.message}: ${t.error}`,"error"),p({error:"Lo sentimos, no se ha podido acceder a la información de esta competencia"});return}const s=t.data;p({skillname:s.nombre,skilldescription:s.descripcion})},[t]),i.useEffect(()=>{D()},[]),x||!a?g(f,{title:"Detalles del cargo",returnButton:!0,children:[e(z,{}),e(_,{sx:{width:"100%",textAlign:"left",fontWeight:"medium"},children:"Cargando..."})]}):e(f,{title:a.error?"Sin información para la competencia":`Detalles del cargo: ${a==null?void 0:a.skillname}`,returnButton:!0,children:a.error?e($,{severity:"info",children:a.error}):g(I,{...a,handleSubmitParent:L,children:[e(h,{item:!0,xs:12,md:6,children:e(S,{type:"submit",disableElevation:!0,disabled:c||u,fullWidth:!0,size:"large",variant:"contained",color:"primary",loading:c,loadingPosition:"start",startIcon:e(j,{}),children:"Guardar"})}),e(h,{item:!0,xs:12,md:6,children:e(S,{disableElevation:!0,disabled:c||u,fullWidth:!0,size:"large",variant:"contained",color:"error",onClick:E,loading:u,loadingPosition:"start",startIcon:e(q,{}),children:"Eliminar"})})]})})};export{V as default};
