"use strict";(self.webpackChunkcaso_02=self.webpackChunkcaso_02||[]).push([[162],{6434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(4848),r=t(8453);const i={sidebar_position:2},s="Instalaci\xf3n del Facturador",o={id:"Listado/Instalaci\xf3n del Facturador",title:"Instalaci\xf3n del Facturador",description:"Docker | Linux | SSL Externo",source:"@site/docs/Listado/Instalaci\xf3n del Facturador.md",sourceDirName:"Listado",slug:"/Listado/Instalaci\xf3n del Facturador",permalink:"/Caso02/docs/Listado/Instalaci\xf3n del Facturador",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manual para Script de Instalaci\xf3n",permalink:"/Caso02/docs/Listado/Manual para Script de Instalaci\xf3n"},next:{title:"Manual de Instalaci\xf3n",permalink:"/Caso02/docs/Listado/Manual de instalaci\xf3n Docker GitLab SSL"}},d={},l=[{value:"<em>Pasos</em>",id:"pasos",level:2}];function c(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"instalaci\xf3n-del-facturador",children:"Instalaci\xf3n del Facturador"}),"\n",(0,a.jsx)(n.p,{children:"Docker | Linux | SSL Externo"}),"\n",(0,a.jsx)(n.h2,{id:"pasos",children:(0,a.jsx)(n.em,{children:"Pasos"})}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)("li",{children:'Para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "n".'}),"\r\n",(0,a.jsx)("li",{children:"Finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n"}),"\r\ncd /root/facturadorpro31/\r\n",(0,a.jsxs)("li",{children:["Debe editar el archivo ",(0,a.jsx)(n.strong,{children:".env"})]}),"\r\nnano .env\r\n",(0,a.jsx)("li",{children:"Dentro del editor ubicar los par\xe1metros y cambiarlos"})]}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"antes"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"despu\xe9s"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"APP_URL=http://${APP_URL_BASE}"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"APP_URL=https://${APP_URL_BASE"}),"}"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"FORCE_HTTPS=false"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"FORCE_HTTPS=true"})})]})]})]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)("li",{children:"Una vez finalizado, guarde y salga del editor."}),"\r\n",(0,a.jsx)("li",{children:"Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n"}),"\r\nphp artisan config",":Cache","\r\n",(0,a.jsx)("li",{children:"Con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta."})]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.strong,{children:"Importante"})}),(0,a.jsx)("li",{children:"Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta."})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);