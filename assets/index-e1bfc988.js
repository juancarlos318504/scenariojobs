import{r as a,h as j,i as H,s as T,a2 as pe,l as D,m as W,n as z,a8 as ge,a as x,j as t,o as N,q as O,aF as fe,ac as he,T as q,t as xe,d as ae,_ as Q,C as P,A as B,u as E,as as K,I as X,b as be,aB as Ce,M as ee,G as w,S as Y,B as ye,O as ve,p as F,aD as Ae,F as Se,at as we,au as De}from"./index-f9bb7ea9.js";import{I as Z,F as Me,c as _e,a as se,b as J}from"./formik.esm-14770be2.js";import{A as re}from"./ActionDelete-ad353abc.js";import{D as ie}from"./DeleteOutlined-7b477e57.js";import{S as $e,M as Re}from"./Select-460c312c.js";import{L as V}from"./LoadingButton-32646a69.js";import{c as Te,g as Ee,D as Le,a as qe,b as ke}from"./DialogContent-3610012d.js";import{P as ce}from"./PlusOutlined-b5d56ac2.js";import{O as ne}from"./OutlinedInput-2363943f.js";import{S as Ie}from"./SaveOutlined-03b01562.js";const Ne=a.createContext({}),de=Ne;function We(e){return H("MuiAccordion",e)}const ze=j("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),G=ze,Oe=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Pe=e=>{const{classes:o,square:s,expanded:r,disabled:d,disableGutters:m}=e;return O({root:["root",!s&&"rounded",r&&"expanded",d&&"disabled",!m&&"gutters"],region:["region"]},We,o)},Be=T(pe,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${G.region}`]:o.region},o.root,!s.square&&o.rounded,!s.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${G.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${G.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>D({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${G.expanded}`]:{margin:"16px 0"}})),Ue=a.forwardRef(function(o,s){const r=W({props:o,name:"MuiAccordion"}),{children:d,className:m,defaultExpanded:c=!1,disabled:p=!1,disableGutters:u=!1,expanded:g,onChange:y,square:v=!1,TransitionComponent:A=fe,TransitionProps:b}=r,f=z(r,Oe),[l,C]=ge({controlled:g,default:c,name:"Accordion",state:"expanded"}),R=a.useCallback(n=>{C(!l),y&&y(n,!l)},[l,y,C]),[h,...S]=a.Children.toArray(d),M=a.useMemo(()=>({expanded:l,disabled:p,disableGutters:u,toggle:R}),[l,p,u,R]),L=D({},r,{square:v,disabled:p,disableGutters:u,expanded:l}),i=Pe(L);return x(Be,D({className:N(i.root,m),ref:s,ownerState:L,square:v},f,{children:[t(de.Provider,{value:M,children:h}),t(A,D({in:l,timeout:"auto"},b,{children:t("div",{"aria-labelledby":h.props.id,id:h.props["aria-controls"],role:"region",className:i.region,children:S})}))]}))}),Fe=Ue;function Ge(e){return H("MuiAccordionDetails",e)}j("MuiAccordionDetails",["root"]);const Qe=["className"],Ve=e=>{const{classes:o}=e;return O({root:["root"]},Ge,o)},je=T("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),He=a.forwardRef(function(o,s){const r=W({props:o,name:"MuiAccordionDetails"}),{className:d}=r,m=z(r,Qe),c=r,p=Ve(c);return t(je,D({className:N(p.root,d),ref:s,ownerState:c},m))}),Je=He;function Ke(e){return H("MuiAccordionSummary",e)}const Xe=j("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),I=Xe,Ye=["children","className","expandIcon","focusVisibleClassName","onClick"],Ze=e=>{const{classes:o,expanded:s,disabled:r,disableGutters:d}=e;return O({root:["root",s&&"expanded",r&&"disabled",!d&&"gutters"],focusVisible:["focusVisible"],content:["content",s&&"expanded",!d&&"contentGutters"],expandIconWrapper:["expandIconWrapper",s&&"expanded"]},Ke,o)},et=T(he,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const s={duration:e.transitions.duration.shortest};return D({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],s),[`&.${I.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${I.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${I.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${I.expanded}`]:{minHeight:64}})}),tt=T("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>D({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${I.expanded}`]:{margin:"20px 0"}})),ot=T("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${I.expanded}`]:{transform:"rotate(180deg)"}})),st=a.forwardRef(function(o,s){const r=W({props:o,name:"MuiAccordionSummary"}),{children:d,className:m,expandIcon:c,focusVisibleClassName:p,onClick:u}=r,g=z(r,Ye),{disabled:y=!1,disableGutters:v,expanded:A,toggle:b}=a.useContext(de),f=R=>{b&&b(R),u&&u(R)},l=D({},r,{expanded:A,disabled:y,disableGutters:v}),C=Ze(l);return x(et,D({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":A,className:N(C.root,m),focusVisibleClassName:N(C.focusVisible,p),onClick:f,ref:s,ownerState:l},g,{children:[t(tt,{className:C.content,ownerState:l,children:d}),c&&t(ot,{className:C.expandIconWrapper,ownerState:l,children:c})]}))}),nt=st;function at(e){return H("MuiDialogContentText",e)}j("MuiDialogContentText",["root"]);const rt=["children","className"],it=e=>{const{classes:o}=e,r=O({root:["root"]},at,o);return D({},o,r)},ct=T(q,{shouldForwardProp:e=>xe(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,o)=>o.root})({}),dt=a.forwardRef(function(o,s){const r=W({props:o,name:"MuiDialogContentText"}),{className:d}=r,m=z(r,rt),c=it(m);return t(ct,D({component:"p",variant:"body1",color:"text.secondary",ref:s,ownerState:m,className:N(c.root,d)},r,{classes:c}))}),lt=dt,ut=["className","id"],mt=e=>{const{classes:o}=e;return O({root:["root"]},Ee,o)},pt=T(q,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),gt=a.forwardRef(function(o,s){const r=W({props:o,name:"MuiDialogTitle"}),{className:d,id:m}=r,c=z(r,ut),p=r,u=mt(p),{titleId:g=m}=a.useContext(Te);return t(pt,D({component:"h2",className:N(u.root,d),ownerState:p,ref:s,variant:"h6",id:g},c))}),ft=gt;var ht={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"};const xt=ht;var le=function(o,s){return a.createElement(ae,Q(Q({},o),{},{ref:s,icon:xt}))};le.displayName="CaretDownOutlined";const bt=a.forwardRef(le);var Ct={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]},name:"caret-up",theme:"outlined"};const yt=Ct;var ue=function(o,s){return a.createElement(ae,Q(Q({},o),{},{ref:s,icon:yt}))};ue.displayName="CaretUpOutlined";const vt=a.forwardRef(ue),At=({idQuestion:e,question:o,onFinish:s,urlDelete:r,actionDelete:d,dataDelete:m})=>{const{openAlert:c}=a.useContext(P),{token:p}=a.useContext(B),{data:u,isLoading:g,hasError:y,postAWS:v}=E(),A=()=>{c("Por favor confirma que deseas eliminar la pregunta: "+o,"warning",t(re,{callback:b}))},b=async()=>{const f=await v(r,d,m,p);f.success?c(f.message,"success"):c(`${f.message}: ${f.error}`,"error"),s()};return x("div",{style:{display:"flex",justifyContent:"flex-end"},children:[t(K,{title:"Configurar pregunta",children:t(X,{"aria-label":"delete",color:"primary",component:be,to:"pregunta/"+e,children:t(Ce,{})})}),t(K,{title:"Eliminar pregunta",children:t(X,{"aria-label":"delete",color:"error",onClick:A,children:t(ie,{})})})]})},St=({questionID:e,question:o,onEndAction:s})=>t(ee,{sx:{my:1,height:"100%"},children:x(w,{container:!0,spacing:{md:2,xs:1},sx:{width:"100%"},children:[t(w,{item:!0,xs:12,md:8,children:t(q,{variant:"h6",sx:{fontWeight:"bold"},children:o})}),t(w,{item:!0,xs:12,md:4,children:t(At,{idQuestion:e,question:o,onFinish:s,urlDelete:"https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments",actionDelete:"delete_question",dataDelete:{id:e}})})]})}),wt=({updateQuestionType:e})=>{const{postAWS:o}=E(),[s,r]=a.useState(null),[d,m]=a.useState([]),c=async()=>{var g;const u=await o("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/usuarios","get_by_name_parameters",{nombre_tipo_parametro:"tipo_de_pregunta"},null);u.success&&m((g=u.data)==null?void 0:g.parametros)},p=u=>{r(u.target.value),e&&e(u.target.value)};return a.useEffect(()=>{c()},[]),x(Y,{spacing:1,children:[t(Z,{htmlFor:"question-type-select",children:"Tipo de pregunta"}),t($e,{id:"question-type-select",value:s||"",onChange:p,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:d.map(u=>t(Re,{value:u.id,children:u.descripcion},u.id))})]})};function Dt({momentID:e}){a.useState(!1);const[o,s]=a.useState([]),[r,d]=a.useState(!1),[m,c]=a.useState(null),{token:p,userData:u}=a.useContext(B),{openAlert:g}=a.useContext(P),{data:y,isLoading:v,hasError:A,postAWS:b}=E(),{data:f,isLoading:l,hasError:C,postAWS:R}=E(),h=()=>{d(!0)},S=()=>{d(!1)},M=async()=>{const i=await b("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","get_all_questions_of_moment",{id_momento:e},p);if(!i){g("Lo sentimos, ha ocurrido un error al intentar obtener las preguntas pertenecientes a este momento","error");return}if(i.success){if(i.data&&i.data.preguntas){const n=i.data.preguntas;n.length>0?s(n):s([])}}else i.message&&g(`${i.message}: ${i.error}`,"error")},L=async()=>{const n=await R("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","add_question",{id_momento:e,id_parametro_tipo_de_pregunta:m},p);if(!n){g("Lo sentimos, ha ocurrido un error al intentar agregar la pregunta","error"),S();return}n.success?(g(n.message,"success"),M()):g(`${n.message}: ${n.error}`,"error"),S()};return a.useEffect(()=>{M()},[]),x(w,{item:!0,xs:12,md:12,children:[t(ee,{title:`Preguntas (${o.length})`,secondary:t(V,{disableElevation:!0,disabled:v||l,fullWidth:!0,size:"medium",variant:"outlined",color:"primary",onClick:h,loading:l,loadingPosition:"start",startIcon:t(ce,{}),children:"Agregar pregunta"}),children:o.length<=0?t(q,{variant:"h6",color:"textSecondary",children:"Aún no se han agregado preguntas..."}):o.map((i,n)=>t(St,{questionID:i.id,question:i.pregunta,onEndAction:M},n))}),t(Le,{open:r,onClose:S,children:x(ye,{sx:{p:1,py:1.5},children:[t(ft,{children:"Agregar Pregunta"}),x(qe,{children:[t(lt,{sx:{mb:2},children:'Selecciona el tipo de pregunta que quieres agregar y presiona sobre "Crear Pregunta".'}),t(wt,{updateQuestionType:c})]}),x(ke,{children:[t(ve,{color:"error",onClick:S,disabled:v||l,children:"Cancelar"}),t(V,{disableElevation:!0,disabled:v||l||!m,size:"medium",variant:"contained",color:"primary",onClick:L,loading:l,children:"Crear pregunta"})]})]})})]})}const Mt=({idMomento:e,nombreMomento:o,onFinish:s,urlDelete:r,actionDelete:d,dataDelete:m})=>{const{openAlert:c}=a.useContext(P),{token:p}=a.useContext(B),{data:u,isLoading:g,hasError:y,postAWS:v}=E(),A=()=>{c("Por favor confirma que deseas eliminar el momento: "+o,"warning",t(re,{callback:b}))},b=async()=>{const f=await v(r,d,m,p);f.success?c(f.message,"success"):c(`${f.message}: ${f.error}`,"error"),s()};return t("div",{style:{display:"flex",justifyContent:"flex-end"},children:t(K,{title:"Eliminar momento",children:t(X,{"aria-label":"delete",color:"error",onClick:A,children:t(ie,{})})})})},_t=T(e=>t(Fe,{disableGutters:!0,elevation:0,square:!0,...e}))(({theme:e})=>({border:`1px solid ${e.palette.divider}`,"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}})),$t=T(e=>t(nt,{expandIcon:t(vt,{sx:{fontSize:"0.9rem"}}),...e}))(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(-90deg)"},"& .MuiAccordionSummary-content":{marginLeft:e.spacing(1)}})),Rt=T(Je)(({theme:e})=>({padding:e.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"})),me=({momentID:e,momentName:o,expandedAccordion:s,handleChange:r,onDelete:d})=>{const{data:m,isLoading:c,hasError:p,postAWS:u}=E(),{data:g,isLoading:y,hasError:v,postAWS:A}=E(),{token:b,userData:f}=a.useContext(B),{openAlert:l}=a.useContext(P),[C,R]=a.useState(e),[h,S]=a.useState(null),M=async()=>{const n=await u("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","get_moment",{id:e},b);if(!n){l("Lo sentimos, ha ocurrido un error al intentar obtener los datos de este momento","error");return}if(!n.success){l(`${n.message}: ${n.error}`,"error"),S({error:"Lo sentimos, no se ha podido acceder a la información de este momento"});return}const _=n.data;S({nombre:_.nombre,descripcion:_.descripcion})},L=async n=>{const _={...n,id:e},$=await A("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","update_moment",_,b);if(!$){l("Lo sentimos, ha ocurrido un error al intentar actualizar los datos","error");return}$.success?(l($.message,"success"),S(n)):l(`${$.message}: ${$.error}`,"error")},i=async(n,{setErrors:_,setStatus:$,setSubmitting:U})=>{try{$({success:!1}),U(!1)}catch(k){console.error(k),$({success:!1}),_({submit:k.message}),U(!1)}const te={nombre:n.momentname,descripcion:n.momentdescription};L(te)};return a.useEffect(()=>{s===C&&M()},[s]),x(_t,{expanded:s===C,onChange:r(C),sx:{width:"100%"},children:[t($t,{expandIcon:t(bt,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:x("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(q,{sx:{width:"33%",flexShrink:0,color:"primary.light"},children:h!=null&&h.nombre?h.nombre:o}),t(Mt,{idMomento:e,nombreMomento:o,onFinish:d,urlDelete:"https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments",actionDelete:"delete_moment",dataDelete:{id:e}})]})}),t(Rt,{children:c||!h?t(q,{sx:{width:"100%",textAlign:"left",fontWeight:"medium"},children:"Cargando..."}):t(Me,{initialValues:{momentname:h.nombre||"",momentdescription:h.descripcion||"",submit:null},validationSchema:_e().shape({momentname:se().max(255).required("El nombre del momento es requerido"),momentdescription:se().max(255)}),onSubmit:i,children:({errors:n,handleBlur:_,handleChange:$,handleSubmit:U,isSubmitting:te,touched:k,values:oe})=>t("form",{noValidate:!0,onSubmit:U,children:x(w,{container:!0,spacing:3,children:[t(w,{item:!0,xs:12,md:12,children:x(Y,{spacing:1,children:[t(Z,{htmlFor:"momentname-form",children:"Nombre del Momento*"}),t(ne,{id:"job-name",type:"text",value:oe.momentname,name:"momentname",onBlur:_,onChange:$,placeholder:"Momento 1...",fullWidth:!0,error:Boolean(k.momentname&&n.momentname)}),k.momentname&&n.momentname&&t(J,{error:!0,id:"helper-text-momentname-form",children:n.momentname})]})}),t(w,{item:!0,xs:12,md:12,children:x(Y,{spacing:1,children:[t(Z,{htmlFor:"momentdescription-form",children:"Descripción"}),t(ne,{fullWidth:!0,multiline:!0,maxRows:2,minRows:2,error:Boolean(k.momentdescription&&n.momentdescription),id:"momentdescription-form",value:oe.momentdescription,name:"momentdescription",onBlur:_,onChange:$,placeholder:"...",inputProps:{}}),k.momentdescription&&n.momentdescription&&t(J,{error:!0,id:"helper-text-company-signup",children:n.momentdescription})]})}),n.submit&&t(w,{item:!0,xs:12,children:t(J,{error:!0,children:n.submit})}),t(w,{item:!0,xs:12,md:12,sx:{display:"flex",justifyContent:"flex-end"},children:t(V,{type:"submit",disableElevation:!0,disabled:y,size:"large",variant:"contained",color:"primary",loading:y,loadingPosition:"start",startIcon:t(Ie,{}),children:"Guardar"})}),t(w,{item:!0,xs:12,md:12,children:t(q,{variant:"body1",children:"Configura las preguntas para evaluar a tus candidatos"})}),t(w,{item:!0,xs:12,md:12,children:t(Dt,{momentID:e})})]})})})})]})};me.prototypes={momentID:F.string.isRequired,momentName:F.string.isRequired,expandedAccordion:F.string.isRequired,handleChange:F.func.isRequired};const Tt=me;function Bt(){const{token:e,userData:o}=a.useContext(B),{openAlert:s}=a.useContext(P),{data:r,isLoading:d,hasError:m,postAWS:c}=E(),{data:p,isLoading:u,hasError:g,postAWS:y}=E();let{assessment_id:v,competencia_id:A}=Ae();const[b,f]=a.useState(!1),[l,C]=a.useState([]),[R,h]=a.useState("No se han encontrado registros"),S=i=>(n,_)=>{f(_?i:!1)},M=async()=>{const i=await c("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","get_all_moments_of_skill",{id_competencia_assessment:A},e);if(!i){s("Lo sentimos, ha ocurrido un error al intentar obtener los momentos de esta competencia","error");return}if(i.success){if(i.data&&i.data.momentos){const n=i.data.momentos;n.length>0?C(n):(C([]),h(i.message))}}else i.message&&(s(`${i.message}: ${i.error}`,"error"),h(i.message))},L=async()=>{const n=await y("https://aivx2bpza7.execute-api.us-east-1.amazonaws.com/prod/assessments","add_moment",{nombre:"Momento Nuevo",descripcion:"",id_competencia_assessment:A},e);n.success?(s(n.message,"success"),M()):s(`${n.message}: ${n.error}`,"error")};return a.useEffect(()=>{M()},[]),x(ee,{title:"Momentos del Assessment",returnButton:!0,children:[d?x(Se,{children:[t(we,{}),t(q,{sx:{width:"100%",textAlign:"left",fontWeight:"medium"},children:"Cargando..."})]}):l.length>0?l.map((i,n)=>t(Tt,{expandedAccordion:b,momentID:i.id,momentName:i.nombre,handleChange:S,onDelete:M},n)):t(De,{severity:"info",children:R}),t(w,{item:!0,xs:12,md:12,sx:{my:3},children:t(V,{disableElevation:!0,disabled:d||u,fullWidth:!0,size:"large",variant:"contained",color:"primary",onClick:L,loading:u,loadingPosition:"start",startIcon:t(ce,{}),children:"Agregar Momento"})})]})}export{Bt as default};
