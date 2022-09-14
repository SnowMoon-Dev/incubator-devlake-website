"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Notifications",description:"Notifications\n",sidebar_position:4},i=void 0,l={unversionedId:"DeveloperManuals/Notifications",id:"DeveloperManuals/Notifications",title:"Notifications",description:"Notifications\n",source:"@site/docs/DeveloperManuals/Notifications.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Notifications",permalink:"/docs/DeveloperManuals/Notifications",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/DeveloperManuals/Notifications.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Notifications",description:"Notifications\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"DB Migration",permalink:"/docs/DeveloperManuals/DBMigration"},next:{title:"Dal",permalink:"/docs/DeveloperManuals/Dal"}},c={},u=[{value:"Request",id:"request",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Signature",id:"signature",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,"Example request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /lake/notify?nouce=3-FDXxIootApWxEVtz&sign=424c2f6159bd9e9828924a53f9911059433dc14328a031e91f9802f062b495d5\n\n{"TaskID":39,"PluginName":"jenkins","CreatedAt":"2021-09-30T15:28:00.389+08:00","UpdatedAt":"2021-09-30T15:28:00.785+08:00"}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"If you want to use the notification feature, you should add two configuration key to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# .env\n# notification request url, e.g.: http://example.com/lake/notify\nNOTIFICATION_ENDPOINT=\n# secret is used to calculate signature\nNOTIFICATION_SECRET=\n")),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,"You should check the signature before accepting the notification request. We use sha256 algorithm to calculate the checksum."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// calculate checksum\nsum := sha256.Sum256([]byte(requestBody + NOTIFICATION_SECRET + nouce))\nreturn hex.EncodeToString(sum[:])\n")))}p.isMDXComponent=!0}}]);