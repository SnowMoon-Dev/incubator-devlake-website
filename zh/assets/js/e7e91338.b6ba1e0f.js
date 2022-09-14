(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2754],{67186:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),o=a(93456);const l={title:"Plugin Implementation",sidebar_position:2,description:"Plugin Implementation\n"},r=void 0,p={unversionedId:"DeveloperManuals/PluginImplementation",id:"version-v0.11/DeveloperManuals/PluginImplementation",title:"Plugin Implementation",description:"Plugin Implementation\n",source:"@site/versioned_docs/version-v0.11/DeveloperManuals/PluginImplementation.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/PluginImplementation",permalink:"/zh/docs/v0.11/DeveloperManuals/PluginImplementation",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/DeveloperManuals/PluginImplementation.md",tags:[],version:"v0.11",sidebarPosition:2,frontMatter:{title:"Plugin Implementation",sidebar_position:2,description:"Plugin Implementation\n"},sidebar:"docsSidebar",previous:{title:"Developer Setup",permalink:"/zh/docs/v0.11/DeveloperManuals/DeveloperSetup"},next:{title:"DB Migration",permalink:"/zh/docs/v0.11/DeveloperManuals/DBMigration"}},s={},c=[{value:"How to Implement a DevLake plugin?",id:"how-to-implement-a-devlake-plugin",level:2},{value:"What is a plugin?",id:"what-is-a-plugin",level:2},{value:"How do plugins work?",id:"how-do-plugins-work",level:2},{value:"A step-by-step guide towards your first plugin",id:"a-step-by-step-guide-towards-your-first-plugin",level:2},{value:"Step 1: Bootstrap the new plugin",id:"step-1-bootstrap-the-new-plugin",level:3},{value:"Step 2: Create a sub-task for data collection",id:"step-2-create-a-sub-task-for-data-collection",level:3},{value:"Step 2.1 Create a sub-task(Collector) for data collection",id:"step-21-create-a-sub-taskcollector-for-data-collection",level:4},{value:"Step 2.2 Create a sub-task(Extractor) to extract data from the raw layer",id:"step-22-create-a-sub-taskextractor-to-extract-data-from-the-raw-layer",level:4},{value:"Step 2.3 Convertor",id:"step-23-convertor",level:4},{value:"Step 2.4 Let&#39;s try it",id:"step-24-lets-try-it",level:4},{value:"Final step: Submit the code as open source code",id:"final-step-submit-the-code-as-open-source-code",level:4},{value:"Done!",id:"done",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-implement-a-devlake-plugin"},"How to Implement a DevLake plugin?"),(0,i.kt)("p",null,"If your favorite DevOps tool is not yet supported by DevLake, don't worry. It's not difficult to implement a DevLake plugin. In this post, we'll go through the basics of DevLake plugins and build an example plugin from scratch together."),(0,i.kt)("h2",{id:"what-is-a-plugin"},"What is a plugin?"),(0,i.kt)("p",null,"A DevLake plugin is a shared library built with Go's ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," package that hooks up to DevLake core at run-time."),(0,i.kt)("p",null,"A plugin may extend DevLake's capability in three ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Integrating with new data sources"),(0,i.kt)("li",{parentName:"ol"},"Transforming/enriching existing data"),(0,i.kt)("li",{parentName:"ol"},"Exporting DevLake data to other data systems")),(0,i.kt)("h2",{id:"how-do-plugins-work"},"How do plugins work?"),(0,i.kt)("p",null,"A plugin mainly consists of a collection of subtasks that can be executed by DevLake core. For data source plugins, a subtask may be collecting a single entity from the data source (e.g., issues from Jira). Besides the subtasks, there're hooks that a plugin can implement to customize its initialization, migration, and more. See below for a list of the most important interfaces:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_meta.go"},"PluginMeta")," contains the minimal interface that a plugin should implement, with only two functions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description() returns the description of a plugin"),(0,i.kt)("li",{parentName:"ul"},"RootPkgPath() returns the root package path of a plugin"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_init.go"},"PluginInit")," allows a plugin to customize its initialization"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_task.go"},"PluginTask")," enables a plugin to prepare data prior to subtask execution"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_api.go"},"PluginApi")," lets a plugin exposes some self-defined APIs"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/plugins/core/plugin_db_migration.go"},"Migratable")," is where a plugin manages its database migrations")),(0,i.kt)("p",null,"The diagram below shows the control flow of executing a plugin:"),(0,i.kt)(o.Mermaid,{config:{theme:{light:"neutral",dark:"forest"}},chart:'flowchart TD;\n    subgraph S4[Step4 sub-task extractor running process];\n    direction LR;\n    D4[DevLake];\n    D4 -- "Step4.1 create a new\n ApiExtractor\n and execute it" --\x3e E["ExtractXXXMeta.\nEntryPoint"];\n    E <-- "Step4.2 read from\n raw table" --\x3e E2["RawDataSubTaskArgs\n.Table"];\n    E -- "Step4.3 call with RawData" --\x3e ApiExtractor.Extract;\n    ApiExtractor.Extract -- "decode and return gorm models" --\x3e E\n    end\n    subgraph S3[Step3 sub-task collector running process]\n    direction LR\n    D3[DevLake]\n    D3 -- "Step3.1 create a new\n ApiCollector\n and execute it" --\x3e C["CollectXXXMeta.\nEntryPoint"];\n    C <-- "Step3.2 create\n raw table" --\x3e C2["RawDataSubTaskArgs\n.RAW_BBB_TABLE"];\n    C <-- "Step3.3 build query\n before sending requests" --\x3e ApiCollectorArgs.\nQuery/UrlTemplate;\n    C <-. "Step3.4 send requests by ApiClient \n and return HTTP response" .-> A1["HTTP APIs"];\n    C <-- "Step3.5 call and \nreturn decoded data \nfrom HTTP response" --\x3e ResponseParser;\n    end\n    subgraph S2[Step2 DevLake register custom plugin]\n    direction LR\n    D2[DevLake]\n    D2 <-- "Step2.1 function `Init` \nneed to do init jobs" --\x3e plugin.Init;\n    D2 <-- "Step2.2 (Optional) call \nand return migration scripts" --\x3e plugin.MigrationScripts;\n    D2 <-- "Step2.3 (Optional) call \nand return taskCtx" --\x3e plugin.PrepareTaskData;\n    D2 <-- "Step2.4 call and \nreturn subTasks for execting" --\x3e plugin.SubTaskContext;\n    end\n    subgraph S1[Step1 Run DevLake]\n    direction LR\n    main -- "Transfer of control \nby `runner.DirectRun`" --\x3e D1[DevLake];\n    end\n    S1--\x3eS2--\x3eS3--\x3eS4',mdxType:"Mermaid"}),(0,i.kt)("p",null,"There's a lot of information in the diagram but we don't expect you to digest it right away, simply use it as a reference when you go through the example below."),(0,i.kt)("h2",{id:"a-step-by-step-guide-towards-your-first-plugin"},"A step-by-step guide towards your first plugin"),(0,i.kt)("p",null,"In this guide, we'll walk through how to create a data source plugin from scratch."),(0,i.kt)("p",null,"The example in this tutorial comes from DevLake's own needs of managing ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Contributor_License_Agreement"},"CLAs"),". Whenever DevLake receives a new PR on GitHub, we need to check if the author has signed a CLA by referencing ",(0,i.kt)("inlineCode",{parentName:"p"},"https://people.apache.org/public/icla-info.json"),". This guide will demonstrate how to collect the ICLA info from Apache API, cache the raw response, and extract the raw data into a relational table ready to be queried."),(0,i.kt)("h3",{id:"step-1-bootstrap-the-new-plugin"},"Step 1: Bootstrap the new plugin"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Please make sure you have DevLake up and running before proceeding."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More info about plugin:\nGenerally, we need these folders in plugin folders: ",(0,i.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"models")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"api")," interacts with ",(0,i.kt)("inlineCode",{parentName:"p"},"config-ui")," for test/get/save connection of data source"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"  - connection [example](https://github.com/apache/incubator-devlake/blob/main/plugins/gitlab/api/connection.go)\n  - connection model [example](https://github.com/apache/incubator-devlake/blob/main/plugins/gitlab/models/connection.go)\n")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"models")," stores all ",(0,i.kt)("inlineCode",{parentName:"p"},"data entities")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"data migration scripts"),"."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"  - entity\n  - data migrations [template](https://github.com/apache/incubator-devlake/tree/main/generator/template/migrationscripts)\n")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"tasks")," contains all of our ",(0,i.kt)("inlineCode",{parentName:"p"},"sub tasks")," for a plugin"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"  - task data [template](https://github.com/apache/incubator-devlake/blob/main/generator/template/plugin/tasks/task_data.go-template)\n  - api client [template](https://github.com/apache/incubator-devlake/blob/main/generator/template/plugin/tasks/task_data_with_api_client.go-template)\n"))),(0,i.kt)("p",null,"Don't worry if you cannot figure out what these concepts mean immediately. We'll explain them one by one later."),(0,i.kt)("p",null,"DevLake provides a generator to create a plugin conveniently. Let's scaffold our new plugin by running ",(0,i.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-plugin icla"),", which would ask for ",(0,i.kt)("inlineCode",{parentName:"p"},"with_api_client")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"with_api_client")," is used for choosing if we need to request HTTP APIs by api_client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Endpoint")," use in which site we will request, in our case, it should be ",(0,i.kt)("inlineCode",{parentName:"li"},"https://people.apache.org/"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/itzlFg7.png",alt:"create plugin"})),(0,i.kt)("p",null,"Now we have three files in our plugin. ",(0,i.kt)("inlineCode",{parentName:"p"},"api_client.go")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"task_data.go")," are in subfolder ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks/"),".\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/zon5waf.png",alt:"plugin files"})),(0,i.kt)("p",null,"Have a try to run this plugin by function ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_main.go"),". When you see result like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$go run plugins/icla/plugin_main.go\n[2022-06-02 18:07:30]  INFO failed to create dir logs: mkdir logs: file exists\npress `c` to send cancel signal\n[2022-06-02 18:07:30]  INFO  [icla] start plugin\ninvalid ICLA_TOKEN, but ignore this error now\n[2022-06-02 18:07:30]  INFO  [icla] scheduler for api https://people.apache.org/ worker: 25, request: 18000, duration: 1h0m0s\n[2022-06-02 18:07:30]  INFO  [icla] total step: 0\n")),(0,i.kt)("p",null,"How exciting. It works! The plugin defined and initiated in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_main.go")," use some options in ",(0,i.kt)("inlineCode",{parentName:"p"},"task_data.go"),". They are made up as the most straightforward plugin in Apache DevLake, and ",(0,i.kt)("inlineCode",{parentName:"p"},"api_client.go")," will be used in the next step to request HTTP APIs."),(0,i.kt)("h3",{id:"step-2-create-a-sub-task-for-data-collection"},"Step 2: Create a sub-task for data collection"),(0,i.kt)("p",null,"Before we start, it is helpful to know how collection task is executed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, Apache DevLake would call ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin_main.PrepareTaskData()")," to prepare needed data before any sub-tasks. We need to create an API client here."),(0,i.kt)("li",{parentName:"ol"},"Then Apache DevLake will call the sub-tasks returned by ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin_main.SubTaskMetas()"),". Sub-task is an independent task to do some job, like requesting API, processing data, etc.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Each sub-task must be defined as a SubTaskMeta, and implement SubTaskEntryPoint of SubTaskMeta. SubTaskEntryPoint is defined as"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type SubTaskEntryPoint func(c SubTaskContext) error\n")),(0,i.kt)("p",{parentName:"blockquote"},"More info at: ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/blog/how-apache-devlake-runs/"},"https://devlake.apache.org/blog/how-apache-devlake-runs/"))),(0,i.kt)("h4",{id:"step-21-create-a-sub-taskcollector-for-data-collection"},"Step 2.1 Create a sub-task(Collector) for data collection"),(0,i.kt)("p",null,"Let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-collector icla committer")," and confirm it. This sub-task is activated by registering in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_main.go/SubTaskMetas")," automatically."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/tkDuofi.png",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Collector will collect data from HTTP or other data sources, and save the data into the raw layer."),(0,i.kt)("li",{parentName:"ul"},"Inside the func ",(0,i.kt)("inlineCode",{parentName:"li"},"SubTaskEntryPoint")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"Collector"),", we use ",(0,i.kt)("inlineCode",{parentName:"li"},"helper.NewApiCollector")," to create an object of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/generator/template/plugin/tasks/api_collector.go-template"},"ApiCollector"),", then call ",(0,i.kt)("inlineCode",{parentName:"li"},"execute()")," to do the job."))),(0,i.kt)("p",null,"Now you can notice ",(0,i.kt)("inlineCode",{parentName:"p"},"data.ApiClient")," is inited in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_main.go/PrepareTaskData.ApiClient"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareTaskData")," create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiClient"),", and it's a tool Apache DevLake suggests to request data from HTTP Apis. This tool support some valuable features for HttpApi, like rateLimit, proxy and retry. Of course, if you like, you may use the lib ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," instead, but it will be more tedious."),(0,i.kt)("p",null,"Let's move forward to use it."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To collect data from ",(0,i.kt)("inlineCode",{parentName:"li"},"https://people.apache.org/public/icla-info.json"),",\nwe have filled ",(0,i.kt)("inlineCode",{parentName:"li"},"https://people.apache.org/")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"tasks/api_client.go/ENDPOINT")," in Step 1.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/q8Zltnl.png",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"And fill ",(0,i.kt)("inlineCode",{parentName:"li"},"public/icla-info.json")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"UrlTemplate"),", delete unnecessary iterator and add ",(0,i.kt)("inlineCode",{parentName:"li"},'println("receive data:", res)')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"ResponseParser")," to see if collection was successful.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ToLMclH.png",alt:null})),(0,i.kt)("p",null,"Ok, now the collector sub-task has been added to the plugin, and we can kick it off by running ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," again. If everything goes smoothly, the output should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[2022-06-06 12:24:52]  INFO  [icla] start plugin\ninvalid ICLA_TOKEN, but ignore this error now\n[2022-06-06 12:24:52]  INFO  [icla] scheduler for api https://people.apache.org/ worker: 25, request: 18000, duration: 1h0m0s\n[2022-06-06 12:24:52]  INFO  [icla] total step: 1\n[2022-06-06 12:24:52]  INFO  [icla] executing subtask CollectCommitter\n[2022-06-06 12:24:52]  INFO  [icla] [CollectCommitter] start api collection\nreceive data: 0x140005763f0\n[2022-06-06 12:24:55]  INFO  [icla] [CollectCommitter] finished records: 1\n[2022-06-06 12:24:55]  INFO  [icla] [CollectCommitter] end api collection\n[2022-06-06 12:24:55]  INFO  [icla] finished step: 1 / 1\n")),(0,i.kt)("p",null,"Great! Now we can see data pulled from the server without any problem. The last step is to decode the response body in ",(0,i.kt)("inlineCode",{parentName:"p"},"ResponseParser")," and return it to the framework, so it can be stored in the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'ResponseParser: func(res *http.Response) ([]json.RawMessage, error) {\n    body := &struct {\n        LastUpdated string          `json:"last_updated"`\n        Committers  json.RawMessage `json:"committers"`\n    }{}\n    err := helper.UnmarshalResponse(res, body)\n    if err != nil {\n        return nil, err\n    }\n    println("receive data:", len(body.Committers))\n    return []json.RawMessage{body.Committers}, nil\n},\n\n')),(0,i.kt)("p",null,"Ok, run the function ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," once again, then it turned out like this, and we should be able see some records show up in the table ",(0,i.kt)("inlineCode",{parentName:"p"},"_raw_icla_committer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u2026\u2026\nreceive data: 272956 /* <- the number means 272956 models received */\n[2022-06-06 13:46:57]  INFO  [icla] [CollectCommitter] finished records: 1\n[2022-06-06 13:46:57]  INFO  [icla] [CollectCommitter] end api collection\n[2022-06-06 13:46:57]  INFO  [icla] finished step: 1 / 1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/aVYNMRr.png",alt:null})),(0,i.kt)("h4",{id:"step-22-create-a-sub-taskextractor-to-extract-data-from-the-raw-layer"},"Step 2.2 Create a sub-task(Extractor) to extract data from the raw layer"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Extractor will extract data from raw layer and save it into tool db table."),(0,i.kt)("li",{parentName:"ul"},"Except for some pre-processing, the main flow is similar to the collector."))),(0,i.kt)("p",null,"We have already collected data from HTTP API and saved them into the DB table ",(0,i.kt)("inlineCode",{parentName:"p"},"_raw_XXXX"),". In this step, we will extract the names of committers from the raw data. As you may infer from the name, raw tables are temporary and not easy to use directly."),(0,i.kt)("p",null,"Now Apache DevLake suggests to save data by ",(0,i.kt)("a",{parentName:"p",href:"https://gorm.io/docs/index.html"},"gorm"),", so we will create a model by gorm and add it into ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin_main.go/AutoSchemas.Up()"),"."),(0,i.kt)("p",null,"plugins/icla/models/committer.go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package models\n\nimport (\n    "github.com/apache/incubator-devlake/models/common"\n)\n\ntype IclaCommitter struct {\n    UserName     string `gorm:"primaryKey;type:varchar(255)"`\n    Name         string `gorm:"primaryKey;type:varchar(255)"`\n    common.NoPKModel\n}\n\nfunc (IclaCommitter) TableName() string {\n    return "_tool_icla_committer"\n}\n')),(0,i.kt)("p",null,"plugins/icla/plugin_main.go\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/4f0zJty.png",alt:null})),(0,i.kt)("p",null,"Ok, run the plugin, and table ",(0,i.kt)("inlineCode",{parentName:"p"},"_tool_icla_committer")," will be created automatically just like the snapshot below:\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/7Z324IX.png",alt:null})),(0,i.kt)("p",null,"Next, let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"go run generator/main.go create-extractor icla committer")," and type in what the command prompt asks for."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/UyDP9Um.png",alt:null})),(0,i.kt)("p",null,"Let's look at the function ",(0,i.kt)("inlineCode",{parentName:"p"},"extract")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"committer_extractor.go")," created just now, and some codes need to be written here. It's obviously ",(0,i.kt)("inlineCode",{parentName:"p"},"resData.data")," is raw data, so we could decode them by json and add new ",(0,i.kt)("inlineCode",{parentName:"p"},"IclaCommitter")," to save them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Extract: func(resData *helper.RawData) ([]interface{}, error) {\n    names := &map[string]string{}\n    err := json.Unmarshal(resData.Data, names)\n    if err != nil {\n        return nil, err\n    }\n    extractedModels := make([]interface{}, 0)\n    for userName, name := range *names {\n        extractedModels = append(extractedModels, &models.IclaCommitter{\n            UserName: userName,\n            Name:     name,\n        })fco\n    }\n    return extractedModels, nil\n},\n")),(0,i.kt)("p",null,"Ok, run it then we get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[2022-06-06 15:39:40]  INFO  [icla] start plugin\ninvalid ICLA_TOKEN, but ignore this error now\n[2022-06-06 15:39:40]  INFO  [icla] scheduler for api https://people.apache.org/ worker: 25, request: 18000, duration: 1h0m0s\n[2022-06-06 15:39:40]  INFO  [icla] total step: 2\n[2022-06-06 15:39:40]  INFO  [icla] executing subtask CollectCommitter\n[2022-06-06 15:39:40]  INFO  [icla] [CollectCommitter] start api collection\nreceive data: 272956\n[2022-06-06 15:39:44]  INFO  [icla] [CollectCommitter] finished records: 1\n[2022-06-06 15:39:44]  INFO  [icla] [CollectCommitter] end api collection\n[2022-06-06 15:39:44]  INFO  [icla] finished step: 1 / 2\n[2022-06-06 15:39:44]  INFO  [icla] executing subtask ExtractCommitter\n[2022-06-06 15:39:46]  INFO  [icla] [ExtractCommitter] finished records: 1\n[2022-06-06 15:39:46]  INFO  [icla] finished step: 2 / 2\n")),(0,i.kt)("p",null,"Now committer data have been saved in _tool_icla_committer.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/6svX0N2.png",alt:null})),(0,i.kt)("h4",{id:"step-23-convertor"},"Step 2.3 Convertor"),(0,i.kt)("p",null,"Notes: There are two ways here (open source or using it yourself). It is unnecessary, but we encourage it because convertors and the domain layer will significantly help build dashboards. More info about the domain layer at: ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema/"},"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema/")),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Convertor will convert data from the tool layer and save it into the domain layer."),(0,i.kt)("li",{parentName:"ul"},"We use ",(0,i.kt)("inlineCode",{parentName:"li"},"helper.NewDataConverter")," to create an object of ","[DataConvertor]",", then call ",(0,i.kt)("inlineCode",{parentName:"li"},"execute()"),"."))),(0,i.kt)("h4",{id:"step-24-lets-try-it"},"Step 2.4 Let's try it"),(0,i.kt)("p",null,"Sometimes OpenApi will be protected by token or other auth types, and we need to log in to gain a token to visit it. For example, only after logging in ",(0,i.kt)("inlineCode",{parentName:"p"},"private@apahce.com")," could we gather the data about contributors signing ICLA. Here we briefly introduce how to authorize DevLake to collect data."),(0,i.kt)("p",null,"Let's look at ",(0,i.kt)("inlineCode",{parentName:"p"},"api_client.go"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"NewIclaApiClient")," load config ",(0,i.kt)("inlineCode",{parentName:"p"},"ICLA_TOKEN")," by ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),", so we can add ",(0,i.kt)("inlineCode",{parentName:"p"},"ICLA_TOKEN=XXXXXX")," in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," and use it in ",(0,i.kt)("inlineCode",{parentName:"p"},"apiClient.SetHeaders()")," to mock the login status. Code as below:\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/dPxooAx.png",alt:null})),(0,i.kt)("p",null,"Of course, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"username/password")," to get a token after login mockery. Just try and adjust according to the actual situation."),(0,i.kt)("p",null,"Look for more related details at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake")),(0,i.kt)("h4",{id:"final-step-submit-the-code-as-open-source-code"},"Final step: Submit the code as open source code"),(0,i.kt)("p",null,"Good ideas and we encourage contributions~ Let's learn about migration scripts and domain layers to write normative and platform-neutral codes. More info at ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema"},"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema")," or contact us for ebullient help."),(0,i.kt)("h2",{id:"done"},"Done!"),(0,i.kt)("p",null,"Congratulations! The first plugin has been created! \ud83c\udf96"))}m.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=11748}}]);