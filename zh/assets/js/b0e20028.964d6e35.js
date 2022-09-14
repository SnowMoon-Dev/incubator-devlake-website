"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(v,i(i({ref:t},u),{},{components:r})):o.createElement(v,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={title:"Temporal Setup",sidebar_position:5,description:"The steps to install DevLake in Temporal mode.\n"},i=void 0,l={unversionedId:"UserManuals/TemporalSetup",id:"version-v0.11/UserManuals/TemporalSetup",title:"Temporal Setup",description:"The steps to install DevLake in Temporal mode.\n",source:"@site/versioned_docs/version-v0.11/UserManuals/TemporalSetup.md",sourceDirName:"UserManuals",slug:"/UserManuals/TemporalSetup",permalink:"/zh/docs/v0.11/UserManuals/TemporalSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/UserManuals/TemporalSetup.md",tags:[],version:"v0.11",sidebarPosition:5,frontMatter:{title:"Temporal Setup",sidebar_position:5,description:"The steps to install DevLake in Temporal mode.\n"},sidebar:"docsSidebar",previous:{title:"GitHub User Guide",permalink:"/zh/docs/v0.11/UserManuals/GitHubUserGuide"},next:{title:"Developer Setup",permalink:"/zh/docs/v0.11/DeveloperManuals/DeveloperSetup"}},p={},s=[{value:"How it works",id:"how-it-works",level:2},{value:"Temporal Demo",id:"temporal-demo",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to setup",id:"how-to-setup",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Normally, DevLake would execute pipelines on a local machine (we call it ",(0,n.kt)("inlineCode",{parentName:"p"},"local mode"),"), it is sufficient most of the time. However, when you have too many pipelines that need to be executed in parallel, it can be problematic, as the horsepower and throughput of a single machine is limited."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"temporal mode")," was added to support distributed pipeline execution, you can fire up arbitrary workers on multiple machines to carry out those pipelines in parallel to overcome the limitations of a single machine."),(0,n.kt)("p",null,"But, be careful, many API services like JIRA/GITHUB have a request rate limit mechanism. Collecting data in parallel against the same API service with the same identity would most likely hit such limit."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"DevLake Server and Workers connect to the same temporal server by setting up ",(0,n.kt)("inlineCode",{parentName:"li"},"TEMPORAL_URL")),(0,n.kt)("li",{parentName:"ol"},"DevLake Server sends a ",(0,n.kt)("inlineCode",{parentName:"li"},"pipeline")," to the temporal server, and one of the Workers pick it up and execute it")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"IMPORTANT: This feature is in early stage of development. Please use with caution")),(0,n.kt)("h2",{id:"temporal-demo"},"Temporal Demo"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio"))),(0,n.kt)("h3",{id:"how-to-setup"},"How to setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Clone and fire up  ",(0,n.kt)("a",{parentName:"li",href:"https://temporal.io/"},"temporalio")," services"),(0,n.kt)("li",{parentName:"ol"},"Clone this repo, and fire up DevLake with command ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose -f docker-compose-temporal.yml up -d"))))}c.isMDXComponent=!0}}]);