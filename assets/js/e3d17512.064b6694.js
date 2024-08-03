"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[5479],{797:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=t(4848),i=t(8453);const o={slug:"broker",title:"Broker Architecture",sidebar_position:10},s="Broker Architecture",a={id:"system-design/architecture/broker",title:"Broker Architecture",description:"A large software architecture with many running parts often is divided into sections offering a specific service. Now, how would the consumer of a service figure out the location of the service provider in order to communicate with them? You could write their locations in the code itself, but every time you the service provider, you will have to update the code of each and every consumer which is a headache!",source:"@site/docs/system-design/architecture/broker.md",sourceDirName:"system-design/architecture",slug:"/system-design/architecture/broker",permalink:"/system-design/architecture/broker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"broker",title:"Broker Architecture",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Peer to Peer Architecture",permalink:"/system-design/architecture/p2p"},next:{title:"Pipe and Filter Architecture",permalink:"/system-design/architecture/pipe-and-filter"}},c={},h=[{value:"Advantages of Broker Architecture",id:"advantages-of-broker-architecture",level:2},{value:"Disadvantages of Broker Architecture",id:"disadvantages-of-broker-architecture",level:2}];function d(e){const r={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"broker-architecture",children:"Broker Architecture"}),"\n",(0,n.jsx)(r.p,{children:"A large software architecture with many running parts often is divided into sections offering a specific service. Now, how would the consumer of a service figure out the location of the service provider in order to communicate with them? You could write their locations in the code itself, but every time you the service provider, you will have to update the code of each and every consumer which is a headache!"}),"\n",(0,n.jsx)(r.p,{children:"So the main question is how can we design an architectural pattern that abstracts out inter-service communcation between the consumers and the providers? One solution to this is the broker architecture which introduces an intermediary which accepts requests from the client and forwards them to a server, and in turn forwards responses from the server to the client. So when we make changes to say the number of server nodes handling a particular type of request, we only need to change some configuration on the broker and now all client nodes will be able to send requests to the new server node (through the broker)."}),"\n",(0,n.jsx)("div",{class:"img-center",children:(0,n.jsx)(r.mermaid,{value:'block-beta\n    columns 5\n    space:1 a["Client 1"]:1 space:1 b["Client 2"]:1 space:1\n    space:10\n    broker["Broker"]:5\n    space:10\n    p["Server 1"] q["Server 2"] r["Server 3"] s["Server 4"] t["Server 5"]\n    a--\x3ebroker\n    b--\x3ebroker\n    broker--\x3ea\n    broker--\x3eb\n    broker--\x3ep\n    broker--\x3es\n    p--\x3ebroker\n    s--\x3ebroker'})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.p,{children:"Brokers were first implemented in CORBA(Common Object Request Broker Architecture ). Today, brokers form an integral part of any service-oriented architecture. The broker design was also used in Enterprise Java Beans (EJB) and Microsoft .NET framework."}),"\n",(0,n.jsx)(r.h2,{id:"advantages-of-broker-architecture",children:"Advantages of Broker Architecture"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Decoupling between service providers and consumers helps ensure that changes can be made to these components more independently."}),"\n",(0,n.jsx)(r.li,{children:"Flexibility is also increased as now altering some broker code can help make changes to the flow of requests and data."}),"\n",(0,n.jsx)(r.li,{children:"Brokers can also act as firewalls and prevent unauthorized access of resources by consumers thus increasing security."}),"\n",(0,n.jsx)(r.li,{children:"Brokers can act as load-balancers thus making the system more reliable and scalable."}),"\n",(0,n.jsx)(r.li,{children:"Brokers may improve performance of the system as the individual functional systems of the application do not have to focus on communication."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"disadvantages-of-broker-architecture",children:"Disadvantages of Broker Architecture"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Development and implementation of a broker can be complex. (One can use existing broker implementations)."}),"\n",(0,n.jsx)(r.li,{children:"The intermediate communication and routing through a broker does have a performance overhead."}),"\n",(0,n.jsx)(r.li,{children:"Broker might be point of failure for the application, if the broker is down the services become inaccessible."}),"\n",(0,n.jsx)(r.li,{children:"Due to the additional layer of abstraction, troubleshooting issues might be more difficult especially when we have to trace out the path of a particular request."}),"\n"]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(6540);const i={},o=n.createContext(i);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);