"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1763],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(o),m=r,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return o?n.createElement(d,a(a({ref:t},c),{},{components:o})):n.createElement(d,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},80588:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:2,title:"Contributing to Issues"},a=void 0,s={unversionedId:"make-contribution/fix-or-create-issues",id:"make-contribution/fix-or-create-issues",title:"Contributing to Issues",description:"Last week(2022-05-12), we had 2 designated Good First Issues listed out for everyone",source:"@site/community/make-contribution/fix-or-create-issues.md",sourceDirName:"make-contribution",slug:"/make-contribution/fix-or-create-issues",permalink:"/zh/community/make-contribution/fix-or-create-issues",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Contributing to Issues"},sidebar:"communitySidebar",previous:{title:"Blog Submission",permalink:"/zh/community/make-contribution/BlogSubmission"},next:{title:"Development Workflow",permalink:"/zh/community/make-contribution/development-workflow"}},u={},l=[],c={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last week(2022-05-12), we had 2 designated Good First Issues listed out for everyone\nin a First Come, First Served manner, which was fun, and they were taken almost instantly...\nbut not so fun for those who were interested and failed to get one."),(0,r.kt)("p",null,"So, we decided, no more competition, you can pick whatever\nyou like from our github issue pages, or even create your own one if no more left!\nWe are community after all!"),(0,r.kt)("p",null,"Now, how do we proceed? It's simple! Go to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"},"issues page"),", and then click here. all our Good First Issue are listed out here.\n",(0,r.kt)("img",{alt:"good first issue",src:o(18005).Z,width:"1320",height:"266"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Firstly, go for existing issues if any, find one that you like,\nyou can claim it by sending comment like "I\'ll take it",\nyou can choose to write a Plan of Attack to show your understanding of the problem and\nwhat steps would you take to solve the problem, and then start working on PR for the issue. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secondly, what if there are no more GFIs left? Yes, that is the most important part.\nCreate your own issues! Now, by looking into our code base,\nyou can definitely find many problem, like documentation, unit-test, even typo.\nFile issues for things you don't feel right, and we will verify if it is valid,\nand then you can work on it. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, you may ask, why do I go through all these troubles to write code for you?\nNo, you don't code for us, you code for everyone in the community, you code for yourself,\nfor your skills, to learn how to cooperate with others. And for those who made significant contribution,\nwe offer you a seat of Apache Committer, or even PPMC."))),(0,r.kt)("p",null,"That's all, feel free to ask any questions. And Happy Coding!"))}p.isMDXComponent=!0},18005:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/issue_page_screenshot-4aa3f48811d5bc6aa1a36ce71727344c.png"}}]);