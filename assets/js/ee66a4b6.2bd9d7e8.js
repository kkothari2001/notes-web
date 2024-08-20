"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[3798],{350:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(4848),r=n(8453);const o={slug:"migrating-monolithic-to-microservices",title:"Migrating Monolithic To Microservices",sidebar_position:18},s="Migrating Monolithic To Microservices",c={id:"system-design/architecture/migrating-monolithic-to-microservices",title:"Migrating Monolithic To Microservices",description:"Migrating monolithic applications to a microservices architecture needs careful planning and execution. One needs to break down a large, complex application into smaller independent components which can be deployed and executed independently.",source:"@site/docs/system-design/architecture/migrating-monolithic-to-microservices.md",sourceDirName:"system-design/architecture",slug:"/system-design/architecture/migrating-monolithic-to-microservices",permalink:"/system-design/architecture/migrating-monolithic-to-microservices",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{slug:"migrating-monolithic-to-microservices",title:"Migrating Monolithic To Microservices",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Microservices Architecture",permalink:"/system-design/architecture/microservices"}},a={},l=[{value:"Steps of migrating from monolithic to microservices",id:"steps-of-migrating-from-monolithic-to-microservices",level:2},{value:"Things to keep in mind when migrating",id:"things-to-keep-in-mind-when-migrating",level:2}];function h(e){const i={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"migrating-monolithic-to-microservices",children:"Migrating Monolithic To Microservices"}),"\n",(0,t.jsx)(i.p,{children:"Migrating monolithic applications to a microservices architecture needs careful planning and execution. One needs to break down a large, complex application into smaller independent components which can be deployed and executed independently."}),"\n",(0,t.jsx)(i.h2,{id:"steps-of-migrating-from-monolithic-to-microservices",children:"Steps of migrating from monolithic to microservices"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Assess the current architecture and understand it well. Only when you understand how the current architecture works, will you be able change its architecture."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Divide the component into smaller and self contaned microservices that can be deployed seperately. White doing this consider the functionality and dependencies of each microservice."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Decide how the micrservices will communicate with each other."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Implement and test the new microservice, as well as set up infrastructure for distributed communication like service registry and API gateway."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Migrate the data from the old architecture to the new one. This might involve splitting up larger databases into smaller ones."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"things-to-keep-in-mind-when-migrating",children:"Things to keep in mind when migrating"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Thorough testing is required once the migration is complete. This is to make sure no functionality is wrong or missing in the new architecture."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Redesigning and reimplementing architectures might be quite costly especially if the old and/or new architectures are complex."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Microservices architecture tend to be more complex because it involves coordinating and communication between multiple microservices. Hence it is important to carefull plan the migration to ensure the new architecture is well designed and easy to maintain."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Migration can be time-consuming especially if the migration is large and complex. Just make sure you're allocating enough time to the same."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var t=n(6540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);