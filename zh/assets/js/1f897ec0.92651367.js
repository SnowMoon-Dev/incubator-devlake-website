"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,v=p["".concat(c,".").concat(h)]||p[h]||u[h]||n;return r?a.createElement(v,i(i({ref:t},d),{},{components:r})):a.createElement(v,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},i=void 0,s={unversionedId:"Overview/Introduction",id:"version-v0.13/Overview/Introduction",title:"Introduction",description:"General introduction of Apache DevLake",source:"@site/versioned_docs/version-v0.13/Overview/Introduction.md",sourceDirName:"Overview",slug:"/Overview/Introduction",permalink:"/zh/docs/v0.13/Overview/Introduction",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Overview/Introduction.md",tags:[],version:"v0.13",sidebarPosition:1,frontMatter:{title:"Introduction",description:"General introduction of Apache DevLake",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/zh/docs/v0.13/Overview"},next:{title:"Architecture",permalink:"/zh/docs/v0.13/Overview/Architecture"}},c={},l=[{value:"What is Apache DevLake?",id:"what-is-apache-devlake",level:2},{value:"What can be accomplished with DevLake?",id:"what-can-be-accomplished-with-devlake",level:2},{value:"How do I use DevLake?",id:"how-do-i-use-devlake",level:2},{value:"1. Set up DevLake",id:"1-set-up-devlake",level:3},{value:"2. Create a Blueprint",id:"2-create-a-blueprint",level:3},{value:"3. Track the Blueprint&#39;s progress",id:"3-track-the-blueprints-progress",level:3},{value:"4. View the pre-built dashboards",id:"4-view-the-pre-built-dashboards",level:3},{value:"5. Customize the dashboards with SQL",id:"5-customize-the-dashboards-with-sql",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-apache-devlake"},"What is Apache DevLake?"),(0,o.kt)("p",null,"Apache DevLake is an open-source dev data platform that ingests, analyzes, and visualizes the fragmented data from DevOps tools to distill insights for engineering productivity."),(0,o.kt)("p",null,"Apache DevLake is designed for developer teams looking to make better sense of their development process and to bring a more data-driven approach to their own practices. You can ask Apache DevLake many questions regarding your development process. Just connect and query."),(0,o.kt)("h2",{id:"what-can-be-accomplished-with-devlake"},"What can be accomplished with DevLake?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Collect DevOps data across the entire Software Development Life Cycle (SDLC) and connect the siloed data with a standard ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.13/DataModels/DevLakeDomainLayerSchema"},"data model"),"."),(0,o.kt)("li",{parentName:"ol"},"Visualize out-of-the-box ",(0,o.kt)("a",{parentName:"li",href:"../Metrics"},"engineering metrics")," in a series of use-case driven dashboards"),(0,o.kt)("li",{parentName:"ol"},"Easily extend DevLake to support your data sources, metrics, and dashboards with a flexible ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.13/Overview/Architecture"},"framework")," for data collection and ETL (Extract, Transform, Load).")),(0,o.kt)("h2",{id:"how-do-i-use-devlake"},"How do I use DevLake?"),(0,o.kt)("h3",{id:"1-set-up-devlake"},"1. Set up DevLake"),(0,o.kt)("p",null,"You can easily set up Apache DevLake by following our step-by step instructions for ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.13/GettingStarted/DockerComposeSetup"},"Docker Compose setup")," or ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v0.13/GettingStarted/KubernetesSetup"},"Kubernetes setup"),"."),(0,o.kt)("h3",{id:"2-create-a-blueprint"},"2. Create a Blueprint"),(0,o.kt)("p",null,"The DevLake Configuration UI will guide you through the process (a Blueprint) to define the data connections, data scope, transformation and sync frequency of the data you wish to collect."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(36111).Z,width:"2000",height:"1362"})),(0,o.kt)("h3",{id:"3-track-the-blueprints-progress"},"3. Track the Blueprint's progress"),(0,o.kt)("p",null,"You can track the progress of the Blueprint you have just set up."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(42982).Z,width:"1568",height:"803"})),(0,o.kt)("h3",{id:"4-view-the-pre-built-dashboards"},"4. View the pre-built dashboards"),(0,o.kt)("p",null,"Once the first run of the Blueprint is completed, you can view the corresponding dashboards."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(29173).Z,width:"3222",height:"1860"})),(0,o.kt)("h3",{id:"5-customize-the-dashboards-with-sql"},"5. Customize the dashboards with SQL"),(0,o.kt)("p",null,"If the pre-built dashboards are limited for your use cases, you can always customize or create your own metrics or dashboards with SQL."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(47334).Z,width:"3348",height:"1874"})))}u.isMDXComponent=!0},36111:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/userflow1-3f961fd21c6512bc04afcba5762117b6.svg"},42982:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/userflow2-14c72819bb475cdef5152129d6b3f5db.svg"},29173:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/userflow3-0d673e4c7005bff5f852f182f765f9ca.png"},47334:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/userflow4-f50ef92ac22e35d8c572f0d64fb0fec9.png"}}]);