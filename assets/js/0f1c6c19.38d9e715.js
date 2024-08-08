"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[3994],{6650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(4848),s=n(8453);const r={slug:"mvvm",title:"MVVM Architecture",sidebar_position:7},a="Model-View-View-Model (MVVM) Architecture",o={id:"system-design/architecture/mvvm",title:"MVVM Architecture",description:"Somewhat similar to MVC arch, but now the Model is completely abstracted away from the View through the ViewModel. The functionality of the 3 parts now is:",source:"@site/docs/system-design/architecture/mvvm.md",sourceDirName:"system-design/architecture",slug:"/system-design/architecture/mvvm",permalink:"/system-design/architecture/mvvm",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"mvvm",title:"MVVM Architecture",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"MVC Architecture",permalink:"/system-design/architecture/mvc"},next:{title:"Client-Server Architecture",permalink:"/system-design/architecture/client-server"}},c={},d=[{value:"Advanteages of MVVM",id:"advanteages-of-mvvm",level:2},{value:"Disadvantages of MVVM",id:"disadvantages-of-mvvm",level:2}];function l(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"model-view-view-model-mvvm-architecture",children:"Model-View-View-Model (MVVM) Architecture"}),"\n",(0,i.jsx)(t.p,{children:"Somewhat similar to MVC arch, but now the Model is completely abstracted away from the View through the ViewModel. The functionality of the 3 parts now is:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"View"}),": UI functionality for the end user. Sends user requests to the ViewModel."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ViewModel"}),": Takes requests from the views and passes onto the model, and takes data from the model and passes it to the view. Also passes on model events and passes on the same to the view."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Model"}),": Represents the data and the business logic of the application."]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"img-center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MVVM Arch Diagram",src:n(8745).A+"",width:"962",height:"390"})})}),"\n",(0,i.jsx)(t.h2,{id:"advanteages-of-mvvm",children:"Advanteages of MVVM"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Better seperation of concerns than MVC hence better extensibility, code reuse and testability."}),"\n",(0,i.jsx)(t.li,{children:"Better support for applications that automatically update when data changes (this is called data-binding)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"disadvantages-of-mvvm",children:"Disadvantages of MVVM"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"More code is needed for defining data binding and data change event communication, reducing maintainability."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8745:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/mvvvm-a992a40b03d7e36ddc0111cf5fde8846.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);