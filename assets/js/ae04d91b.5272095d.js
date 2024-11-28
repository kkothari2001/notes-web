"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[6769],{4400:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"system-design/architecture/pipe-and-filter","title":"Pipe and Filter Architecture","description":"Sometimes it can be advantageous to think of a system as a series of transformations on data one after the other. Each transformation can be understood as a standalone and reusable component. These transformations can be combined in whatever order is required. The pipe and filter architecture is a simple architecture useful for representing data pipelines where each filter performs a specific transformation on its input data and passes along the output to the next filter through a pipe.","source":"@site/docs/system-design/architecture/pipe-and-filter.md","sourceDirName":"system-design/architecture","slug":"/system-design/architecture/pipe-and-filter","permalink":"/system-design/architecture/pipe-and-filter","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"slug":"pipe-and-filter","title":"Pipe and Filter Architecture","sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Broker Architecture","permalink":"/system-design/architecture/broker"},"next":{"title":"Event Driven Architecture","permalink":"/system-design/architecture/event-driven"}}');var a=i(4848),r=i(8453);const s={slug:"pipe-and-filter",title:"Pipe and Filter Architecture",sidebar_position:11},o="Pipe and Filter Architecture",l={},d=[{value:"Shared Data Pattern",id:"shared-data-pattern",level:2},{value:"Applications of Pipe and Filter",id:"applications-of-pipe-and-filter",level:2},{value:"Advantages of Pipe and Filter",id:"advantages-of-pipe-and-filter",level:2},{value:"Disadvantages of Pipe and Filter",id:"disadvantages-of-pipe-and-filter",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"pipe-and-filter-architecture",children:"Pipe and Filter Architecture"})}),"\n",(0,a.jsx)(t.p,{children:"Sometimes it can be advantageous to think of a system as a series of transformations on data one after the other. Each transformation can be understood as a standalone and reusable component. These transformations can be combined in whatever order is required. The pipe and filter architecture is a simple architecture useful for representing data pipelines where each filter performs a specific transformation on its input data and passes along the output to the next filter through a pipe."}),"\n",(0,a.jsx)(t.mermaid,{value:'flowchart LR\n    start(("Input Data"))\n    filter1[Filter 1]\n    filter2[Filter 2]\n    filter3[Filter 3]\n    filter4[Filter 4]\n    out1(("Output Sink 1"))\n    out2(("Output Sink 2"))\n    start--\x3efilter1\n    filter1--\x3efilter2\n    filter2--\x3efilter3\n    filter2--\x3efilter4\n    filter3--\x3eout1\n    filter4--\x3eout1\n    filter4--\x3eout2'}),"\n",(0,a.jsx)(t.h2,{id:"shared-data-pattern",children:"Shared Data Pattern"}),"\n",(0,a.jsx)(t.p,{children:"The shared data pattern is a variant of pipe and filter which involves a single shared central repository of data that is accessed by many services. This is often used in security and configuration management scenarios."}),"\n",(0,a.jsx)("div",{class:"img-center",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Shared data Arch",src:i(3495).A+"",width:"781",height:"518"})})}),"\n",(0,a.jsx)(t.h2,{id:"applications-of-pipe-and-filter",children:"Applications of Pipe and Filter"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Large scale data pipelines"}),"\n",(0,a.jsx)(t.li,{children:"Streaming data pipelines"}),"\n",(0,a.jsx)(t.li,{children:"Image editing software"}),"\n",(0,a.jsx)(t.li,{children:"IoT"}),"\n",(0,a.jsx)(t.li,{children:"Text processing (spell-check and grammar-check)"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"advantages-of-pipe-and-filter",children:"Advantages of Pipe and Filter"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Modularity"}),": Individual modules can be changed and swapped easily"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Scalability"}),": Allows for parallel computation of data"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Maintainability"}),": Easier to troubleshoot if we maintain a good logging system"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"disadvantages-of-pipe-and-filter",children:"Disadvantages of Pipe and Filter"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Overhead"}),": These pipe and filter abstractions may cause greater overhead due to serialization and communication protocols used."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Complexity"}),": A lot of initial setup may be required to get modularize the code into seperate components"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Lack of adaptability"}),": Error handlling may be difficult for many static pipelines, especially if it is an unexpected error."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},3495:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/shared-data-8270f7dedc2816cea41783a5ed71fd03.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(6540);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);