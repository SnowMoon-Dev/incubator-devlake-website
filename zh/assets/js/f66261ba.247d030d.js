"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[886],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||r;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const r={title:"Configuring Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},a=void 0,s={unversionedId:"UserManuals/ConfigUI/Jenkins",id:"version-v0.13/UserManuals/ConfigUI/Jenkins",title:"Configuring Jenkins",description:"Config UI instruction for Jenkins",source:"@site/versioned_docs/version-v0.13/UserManuals/ConfigUI/Jenkins.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/Jenkins",permalink:"/zh/docs/v0.13/UserManuals/ConfigUI/Jenkins",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/UserManuals/ConfigUI/Jenkins.md",tags:[],version:"v0.13",sidebarPosition:5,frontMatter:{title:"Configuring Jenkins",sidebar_position:5,description:"Config UI instruction for Jenkins"},sidebar:"docsSidebar",previous:{title:"Configuring Jira",permalink:"/zh/docs/v0.13/UserManuals/ConfigUI/Jira"},next:{title:"Using Advanced Mode",permalink:"/zh/docs/v0.13/UserManuals/ConfigUI/AdvancedMode"}},c={},l=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username (E-mail)",id:"username-e-mail",level:4},{value:"Password",id:"password",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3}],d={toc:l};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit config-ui: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"jenkins-add-data-connections",src:t(88085).Z,width:"1806",height:"816"})),(0,o.kt)("h4",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Name your connection."),(0,o.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("p",null,"This should be a valid REST API endpoint. Eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ci.jenkins.io/"),". The endpoint url should end with ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("h4",{id:"username-e-mail"},"Username (E-mail)"),(0,o.kt)("p",null,"Your User ID for the Jenkins Instance."),(0,o.kt)("h4",{id:"password"},"Password"),(0,o.kt)("p",null,"For help on Username and Password, please see Jenkins docs on ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/using-credentials/"},"using credentials"),'. You can also use "API Access Token" for this field, which can be generated at ',(0,o.kt)("inlineCode",{parentName:"p"},"User")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Configure")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"API Token")," section on Jenkins."),(0,o.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,o.kt)("p",null,"There is no data cope setting for Jenkins."),(0,o.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,o.kt)("p",null,"There are no transformation rules for Jenkins."),(0,o.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,o.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."))}p.isMDXComponent=!0},88085:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins-add-data-connections-4b19f9d274515055e7abcad83a7fce75.png"}}]);