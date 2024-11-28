"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[6418],{3986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"system-design/architecture/client-server","title":"Client-Server Architecture","description":"Client-Server Architecture is a 2-layered (and usually 2-tiered) architecture. The clients either requests data from the server or uses a service that the server provides. A single server can have many clients connected to it.","source":"@site/docs/system-design/architecture/client-server.md","sourceDirName":"system-design/architecture","slug":"/system-design/architecture/client-server","permalink":"/system-design/architecture/client-server","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"slug":"client-server","title":"Client-Server Architecture","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"MVVM Architecture","permalink":"/system-design/architecture/mvvm"},"next":{"title":"Peer to Peer Architecture","permalink":"/system-design/architecture/p2p"}}');var i=r(4848),s=r(8453);const c={slug:"client-server",title:"Client-Server Architecture",sidebar_position:8},a="Client-Server Architecture",l={},o=[{value:"Advantages of Client-Server Architecture",id:"advantages-of-client-server-architecture",level:2},{value:"Disadvantages of Client-Server Architecture",id:"disadvantages-of-client-server-architecture",level:2}];function h(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"client-server-architecture",children:"Client-Server Architecture"})}),"\n",(0,i.jsx)(t.p,{children:"Client-Server Architecture is a 2-layered (and usually 2-tiered) architecture. The clients either requests data from the server or uses a service that the server provides. A single server can have many clients connected to it."}),"\n",(0,i.jsx)(t.p,{children:"If the server contains most of the business logic, the client can be referred to as a thin client. And if the client contains most of the business logic, the client is called a full-featured client."}),"\n",(0,i.jsx)(t.p,{children:"This arch has been used in multiple places in the technologies that currently surround us:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A majority of the internet relies on client-server architecture to serve websites."}),"\n",(0,i.jsx)(t.li,{children:"Emails rely on SMTP servers to be sent correctly"}),"\n"]}),"\n",(0,i.jsx)("div",{class:"img-center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Client-Server Arch Diagram",src:r(3314).A+"",width:"438",height:"416"})})}),"\n",(0,i.jsx)(t.h2,{id:"advantages-of-client-server-architecture",children:"Advantages of Client-Server Architecture"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Performance"}),": Since the tasks can be divided between the server and the client, if we divide them well we can boost performance of the application greatly."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Scalability"}),": We can add/remove clients as we require."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Security"}),": Since the clients do not have access to all the data, they are more secure from malicious attackers."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Resource management"}),": Since the data and resources are centralized it is much easier to manage, maintain and update them."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"disadvantages-of-client-server-architecture",children:"Disadvantages of Client-Server Architecture"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Central point of failure"}),": The server is a central point of failure, so if the server goes down, the entire application goes down."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network Dependencies"}),": If the network is down, the client can't communicate with the server, hence being affected."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Complexity"}),": Complex as it requires us to maintain seperate client and server logic (especially if the client isn't a thin client!)"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3314:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/centralized-83632e4e7918527e5e9f734191cabfce.png"},8453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var n=r(6540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);