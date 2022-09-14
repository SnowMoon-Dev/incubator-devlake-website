"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={title:"GitHub User Guide",sidebar_position:4,description:"GitHub User Guide\n"},o=void 0,l={unversionedId:"UserManuals/GitHubUserGuide",id:"version-v0.11/UserManuals/GitHubUserGuide",title:"GitHub User Guide",description:"GitHub User Guide\n",source:"@site/versioned_docs/version-v0.11/UserManuals/GitHubUserGuide.md",sourceDirName:"UserManuals",slug:"/UserManuals/GitHubUserGuide",permalink:"/docs/v0.11/UserManuals/GitHubUserGuide",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/UserManuals/GitHubUserGuide.md",tags:[],version:"v0.11",sidebarPosition:4,frontMatter:{title:"GitHub User Guide",sidebar_position:4,description:"GitHub User Guide\n"},sidebar:"docsSidebar",previous:{title:"Recurring Pipelines",permalink:"/docs/v0.11/UserManuals/RecurringPipelines"},next:{title:"Temporal Setup",permalink:"/docs/v0.11/UserManuals/TemporalSetup"}},p={},s=[{value:"Summary",id:"summary",level:2},{value:"GitHub Data Collection Procedure",id:"github-data-collection-procedure",level:2},{value:"Step 1 - Configure GitHub connection",id:"step-1---configure-github-connection",level:3},{value:"Step 2 - Create a pipeline to collect GitHub data",id:"step-2---create-a-pipeline-to-collect-github-data",level:3},{value:"Step 3 - Create a pipeline to run GitExtractor plugin",id:"step-3---create-a-pipeline-to-run-gitextractor-plugin",level:3},{value:"Step 4 - Optional Set up a recurring pipeline to keep data fresh",id:"step-4---optional-set-up-a-recurring-pipeline-to-keep-data-fresh",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"GitHub has a rate limit of 5,000 API calls per hour for their REST API.\nAs a result, it may take hours to collect commits data from GitHub API for a repo that has 10,000+ commits.\nTo accelerate the process, DevLake introduces GitExtractor, a new plugin that collects git data by cloning the git repo instead of by calling GitHub APIs."),(0,a.kt)("p",null,"Starting from v0.10.0, DevLake will collect GitHub data in 2 separate plugins:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub plugin (via GitHub API): collect repos, issues, pull requests"),(0,a.kt)("li",{parentName:"ul"},"GitExtractor (via cloning repos):  collect commits, refs")),(0,a.kt)("p",null,"Note that GitLab plugin still collects commits via API by default since GitLab has a much higher API rate limit."),(0,a.kt)("p",null,"This doc details the process of collecting GitHub data in v0.10.0. We're working on simplifying this process in the next releases."),(0,a.kt)("p",null,"Before start, please make sure all services are started."),(0,a.kt)("h2",{id:"github-data-collection-procedure"},"GitHub Data Collection Procedure"),(0,a.kt)("p",null,"There're 3 steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure GitHub connection"),(0,a.kt)("li",{parentName:"ol"},"Create a pipeline to run GitHub plugin"),(0,a.kt)("li",{parentName:"ol"},"Create a pipeline to run GitExtractor plugin"),(0,a.kt)("li",{parentName:"ol"},"[Optional]"," Set up a recurring pipeline to keep data fresh")),(0,a.kt)("h3",{id:"step-1---configure-github-connection"},"Step 1 - Configure GitHub connection"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit ",(0,a.kt)("inlineCode",{parentName:"p"},"config-ui")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000")," and click the GitHub icon")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the default connection 'Github' in the list\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163591959-11d83216-057b-429f-bb35-a9d845b3de5a.png",alt:"image"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure connection by providing your GitHub API endpoint URL and your personal access token(s).\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163592015-b3294437-ce39-45d6-adf6-293e620d3942.png",alt:"image"})))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Endpoint URL: Leave this unchanged if you're using github.com. Otherwise replace it with your own GitHub instance's REST API endpoint URL. This URL should end with '/'."),(0,a.kt)("li",{parentName:"ul"},"Auth Token(s): Fill in your personal access tokens(s). For how to generate personal access tokens, please see GitHub's ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"official documentation"),".\nYou can provide multiple tokens to speed up the data collection process, simply concatenating tokens with commas."),(0,a.kt)("li",{parentName:"ul"},"GitHub Proxy URL: This is optional. Enter a valid proxy server address on your Network, e.g. ",(0,a.kt)("a",{parentName:"li",href:"http://your-proxy-server.com:1080"},"http://your-proxy-server.com:1080"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Test Connection' and see it's working, then click 'Save Connection'.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"[Optional]"," Help DevLake understand your GitHub data by customizing data enrichment rules shown below.\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163592506-1873bdd1-53cb-413b-a528-7bda440d07c5.png",alt:"image"})),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pull Request Enrichment Options"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Type"),": PRs with label that matches given Regular Expression, their properties ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," will be set to the value of first sub match. For example, with Type being set to ",(0,a.kt)("inlineCode",{parentName:"li"},"type/(.*)$"),", a PR with label ",(0,a.kt)("inlineCode",{parentName:"li"},"type/bug"),", its ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," would be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"bug"),", with label ",(0,a.kt)("inlineCode",{parentName:"li"},"type/doc"),", it would be ",(0,a.kt)("inlineCode",{parentName:"li"},"doc"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Component"),": Same as above, but for ",(0,a.kt)("inlineCode",{parentName:"li"},"component")," property."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Issue Enrichment Options"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Severity"),": Same as above, but for ",(0,a.kt)("inlineCode",{parentName:"p"},"issue.severity")," of course.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Component"),": Same as above.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Priority"),": Same as above.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Requirement")," : Issues with label that matches given Regular Expression, their properties ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," will be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUIREMENT"),". Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"PR.type"),", submatch does nothing,    because for Issue Management Analysis, people tend to focus on 3 kinds of types (Requirement/Bug/Incident), however, the concrete naming varies from repo to repo, time to time, so we decided to standardize them to help analysts make general purpose metrics.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Bug"),": Same as above, with ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," setting to ",(0,a.kt)("inlineCode",{parentName:"p"},"BUG"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Incident"),": Same as above, with ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," setting to ",(0,a.kt)("inlineCode",{parentName:"p"},"INCIDENT"))))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Save Settings'"))),(0,a.kt)("h3",{id:"step-2---create-a-pipeline-to-collect-github-data"},"Step 2 - Create a pipeline to collect GitHub data"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select 'Pipelines > Create Pipeline Run' from ",(0,a.kt)("inlineCode",{parentName:"li"},"config-ui"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163592542-8b9d86ae-4f16-492c-8f90-12f1e90c5772.png",alt:"image"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Toggle on GitHub plugin, enter the repo you'd like to collect data from.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163592606-92141c7e-e820-4644-b2c9-49aa44f10871.png",alt:"image"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click 'Run Pipeline'")),(0,a.kt)("p",null,"You'll be redirected to newly created pipeline:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163592677-268e6b77-db3f-4eec-8a0e-ced282f5a361.png",alt:"image"})),(0,a.kt)("p",null,"See the pipeline finishes (progress 100%):"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163592709-cce0d502-92e9-4c19-8504-6eb521b76169.png",alt:"image"})),(0,a.kt)("h3",{id:"step-3---create-a-pipeline-to-run-gitextractor-plugin"},"Step 3 - Create a pipeline to run GitExtractor plugin"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable the ",(0,a.kt)("inlineCode",{parentName:"li"},"GitExtractor")," plugin, and enter your ",(0,a.kt)("inlineCode",{parentName:"li"},"Git URL")," and, select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Repository ID")," from dropdown menu.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2908155/164125950-37822d7f-6ee3-425d-8523-6f6b6213cb89.png",alt:"image"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Run Pipeline' and wait until it's finished.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"View Dashboards")," on the top left corner of ",(0,a.kt)("inlineCode",{parentName:"p"},"config-ui"),", the default username and password of Grafana are ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61080/163666814-e48ac68d-a0cc-4413-bed7-ba123dd291c8.png",alt:"image"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"See dashboards populated with GitHub data.")),(0,a.kt)("h3",{id:"step-4---optional-set-up-a-recurring-pipeline-to-keep-data-fresh"},"Step 4 - ","[Optional]"," Set up a recurring pipeline to keep data fresh"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.11/UserManuals/RecurringPipelines"},"How to create recurring pipelines")," for details."))}c.isMDXComponent=!0}}]);