"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(s,".").concat(d)]||l[d]||p[d]||i;return r?o.createElement(b,a(a({ref:t},m),{},{components:r})):o.createElement(b,a({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},68411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:2,title:"Commit Count by Author",description:"DevLake Live Demo\n"},a="Commit Count by Author",c={unversionedId:"Dashboards/CommitCountByAuthor",id:"version-v0.11/Dashboards/CommitCountByAuthor",title:"Commit Count by Author",description:"DevLake Live Demo\n",source:"@site/versioned_docs/version-v0.11/Dashboards/CommitCountByAuthor.md",sourceDirName:"Dashboards",slug:"/Dashboards/CommitCountByAuthor",permalink:"/docs/v0.11/Dashboards/CommitCountByAuthor",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Dashboards/CommitCountByAuthor.md",tags:[],version:"v0.11",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Commit Count by Author",description:"DevLake Live Demo\n"},sidebar:"docsSidebar",previous:{title:"GitHub Basic Metrics",permalink:"/docs/v0.11/Dashboards/GitHubBasic"},next:{title:"Weekly Bug Retro",permalink:"/docs/v0.11/Dashboards/WeeklyBugRetro"}},s={},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"commit-count-by-author"},"Commit Count by Author"),(0,n.kt)("iframe",{src:"https://grafana-lake.demo.devlake.io/d/F0iYknc7z/demo-commit-count-by-author?orgId=1&from=1634911190615&to=1650635990615",width:"100%",height:"820px"}))}p.isMDXComponent=!0}}]);