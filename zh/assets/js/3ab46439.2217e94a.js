"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[8433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),v=n,h=p["".concat(l,".").concat(v)]||p[v]||d[v]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Architecture",description:"Understand the architecture of Apache DevLake\n",sidebar_position:2},i=void 0,s={unversionedId:"Overview/Architecture",id:"version-v0.11/Overview/Architecture",title:"Architecture",description:"Understand the architecture of Apache DevLake\n",source:"@site/versioned_docs/version-v0.11/Overview/Architecture.md",sourceDirName:"Overview",slug:"/Overview/Architecture",permalink:"/zh/docs/v0.11/Overview/Architecture",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Overview/Architecture.md",tags:[],version:"v0.11",sidebarPosition:2,frontMatter:{title:"Architecture",description:"Understand the architecture of Apache DevLake\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/zh/docs/v0.11/Overview/Introduction"},next:{title:"Roadmap",permalink:"/zh/docs/v0.11/Overview/Roadmap"}},l={},c=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Dataflow",id:"dataflow",level:2},{value:"Principles",id:"principles",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/Architecture/arch-component.svg"})),(0,n.kt)("p",{align:"center"},"DevLake Components"),(0,n.kt)("p",null,"A DevLake installation typically consists of the following components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Config UI: A handy user interface to create, trigger, and debug data pipelines."),(0,n.kt)("li",{parentName:"ul"},"API Server: The main programmatic interface of DevLake."),(0,n.kt)("li",{parentName:"ul"},"Runner: The runner does all the heavy-lifting for executing tasks. In the default DevLake installation, it runs within the API Server, but DevLake provides a temporal-based runner (beta) for production environments."),(0,n.kt)("li",{parentName:"ul"},"Database: The database stores both DevLake's metadata and user data collected by data pipelines. DevLake supports MySQL and PostgreSQL as of v0.11."),(0,n.kt)("li",{parentName:"ul"},"Plugins: Plugins enable DevLake to collect and analyze dev data from any DevOps tools with an accessible API. DevLake community is actively adding plugins for popular DevOps tools, but if your preferred tool is not covered yet, feel free to open a GitHub issue to let us know or check out our doc on how to build a new plugin by yourself."),(0,n.kt)("li",{parentName:"ul"},"Dashboards: Dashboards deliver data and insights to DevLake users. A dashboard is simply a collection of SQL queries along with corresponding visualization configurations. DevLake's official dashboard tool is Grafana and pre-built dashboards are shipped in Grafana's JSON format. Users are welcome to swap for their own choice of dashboard/BI tool if desired.")),(0,n.kt)("h2",{id:"dataflow"},"Dataflow"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/Architecture/arch-dataflow.svg"})),(0,n.kt)("p",{align:"center"},"DevLake Dataflow"),(0,n.kt)("p",null,"A typical plugin's dataflow is illustrated below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Raw layer stores the API responses from data sources (DevOps tools) in JSON. This saves developers' time if the raw data is to be transformed differently later on. Please note that communicating with data sources' APIs is usually the most time-consuming step."),(0,n.kt)("li",{parentName:"ol"},"The Tool layer extracts raw data from JSONs into a relational schema that's easier to consume by analytical tasks. Each DevOps tool would have a schema that's tailored to their data structure, hence the name, the Tool layer."),(0,n.kt)("li",{parentName:"ol"},"The Domain layer attempts to build a layer of abstraction on top of the Tool layer so that analytics logics can be re-used across different tools. For example, GitHub's Pull Request (PR) and GitLab's Merge Request (MR) are similar entities. They each have their own table name and schema in the Tool layer, but they're consolidated into a single entity in the Domain layer, so that developers only need to implement metrics like Cycle Time and Code Review Rounds once against the domain layer schema.")),(0,n.kt)("h2",{id:"principles"},"Principles"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Extensible: DevLake's plugin system allows users to integrate with any DevOps tool. DevLake also provides a dbt plugin that enables users to define their own data transformation and analysis workflows."),(0,n.kt)("li",{parentName:"ol"},"Portable: DevLake has a modular design and provides multiple options for each module. Users of different setups can freely choose the right configuration for themselves."),(0,n.kt)("li",{parentName:"ol"},"Robust: DevLake provides an SDK to help plugins efficiently and reliably collect data from data sources while respecting their API rate limits and constraints.")),(0,n.kt)("br",null))}d.isMDXComponent=!0}}]);