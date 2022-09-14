"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[492],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={title:"Feishu",description:"Feishu Plugin\n"},a=void 0,l={unversionedId:"Plugins/feishu",id:"version-v0.13/Plugins/feishu",title:"Feishu",description:"Feishu Plugin\n",source:"@site/versioned_docs/version-v0.13/Plugins/feishu.md",sourceDirName:"Plugins",slug:"/Plugins/feishu",permalink:"/zh/docs/v0.13/Plugins/feishu",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Plugins/feishu.md",tags:[],version:"v0.13",frontMatter:{title:"Feishu",description:"Feishu Plugin\n"},sidebar:"docsSidebar",previous:{title:"DBT",permalink:"/zh/docs/v0.13/Plugins/dbt"},next:{title:"Gitee(WIP)",permalink:"/zh/docs/v0.13/Plugins/gitee"}},u={},p=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect data from Feishu",id:"collect-data-from-feishu",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects Feishu meeting data through ",(0,o.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/home/user-identity-introduction/introduction"},"Feishu Openapi"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app_secret")," from a Feishu administrator (for help on App info, please see ",(0,o.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal"},"official Feishu Docs"),"),"),(0,o.kt)("p",null,"A connection should be created before you can collection any data. Currently, this plugin supports creating connection by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/plugins/feishu/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "feishu",\n    "endpoint": "https://open.feishu.cn/open-apis/vc/v1/",\n    "proxy": "http://localhost:1080",\n    "rateLimitPerHour": 20000,\n    "appId": "<YOUR_APP_ID>",\n    "appSecret": "<YOUR_APP_SECRET>"\n}\n\'\n')),(0,o.kt)("h2",{id:"collect-data-from-feishu"},"Collect data from Feishu"),(0,o.kt)("p",null,"To collect data, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "feishu",\n      "options": {\n        "connectionId": 1,\n        "numOfDaysToCollect" : 80\n      }\n    }\n  ]\n]\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"numOfDaysToCollect"),": The number of days you want to collect")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"rateLimitPerSecond"),": The number of requests to send(Maximum is 8)")),(0,o.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "feishu 20211126",\n    "tasks": [[{\n      "plugin": "feishu",\n      "options": {\n        "connectionId": 1,\n        "numOfDaysToCollect" : 80\n      }\n    }]]\n}\n\'\n')))}s.isMDXComponent=!0}}]);