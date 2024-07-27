"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[3433],{3417:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=i(4848),s=i(8453);const r={slug:"considerations",sidebar_position:2},a="Architectural Considerations",l={id:"system-design/architecture/architectural-considerations",title:"Architectural Considerations",description:"In this section we look at the guidelines that should drive the architectural decisions we make. They sort of make a checklist of things we should take into consideration when designing software architectures.",source:"@site/docs/system-design/architecture/architectural-considerations.md",sourceDirName:"system-design/architecture",slug:"/system-design/architecture/considerations",permalink:"/system-design/architecture/considerations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"considerations",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Architecture and SDLC",permalink:"/system-design/architecture/sdlc"},next:{title:"Architectural Patterns",permalink:"/system-design/architecture/patterns"}},c={},o=[{value:"Quality Attributes",id:"quality-attributes",level:2},{value:"Architectural Styles",id:"architectural-styles",level:2},{value:"Application Types",id:"application-types",level:2},{value:"Deployment Strategy",id:"deployment-strategy",level:2},{value:"Architectural Hotspots",id:"architectural-hotspots",level:2}];function h(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architectural-considerations",children:"Architectural Considerations"}),"\n",(0,n.jsx)(t.p,{children:"In this section we look at the guidelines that should drive the architectural decisions we make. They sort of make a checklist of things we should take into consideration when designing software architectures."}),"\n",(0,n.jsx)(t.h2,{id:"quality-attributes",children:"Quality Attributes"}),"\n",(0,n.jsx)(t.p,{children:"Quality Attributes (QAs) are testable factors that help quantify how well the software meets the needs of the stakeholders. These don't only mean non-functional requirements but also things present in the service-level agreement."}),"\n",(0,n.jsx)(t.p,{children:"Examples include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Availability"}),"\n",(0,n.jsx)(t.li,{children:"Reliability"}),"\n",(0,n.jsx)(t.li,{children:"Performance"}),"\n",(0,n.jsx)(t.li,{children:"Security"}),"\n",(0,n.jsx)(t.li,{children:"Scalability"}),"\n",(0,n.jsx)(t.li,{children:"Caching... etc."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"One must sit down with the stakeholders and decide what the important QAs are. Our arch design decisions are what translate these QAs into the software we create. Sometimes, these requirements may conflict, like ease-of-access vs security, then it becomes important to define a clear balance of the conflicting requirements. Many times there are also real-life constraints involved like time, budget and developer skillset."}),"\n",(0,n.jsx)(t.h2,{id:"architectural-styles",children:"Architectural Styles"}),"\n",(0,n.jsx)(t.p,{children:"These are sort of patterns that have often been used in system design to create software that adheres to a particular set of QAs. Similar to how we have design patterns in component-level code, architectural patterns solve problems commonly faced while designing software."}),"\n",(0,n.jsx)(t.p,{children:"Examples include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Client Server"}),"\n",(0,n.jsx)(t.li,{children:"Component-based"}),"\n",(0,n.jsx)(t.li,{children:"Layered Architecture"}),"\n",(0,n.jsx)(t.li,{children:"Message Bus"}),"\n",(0,n.jsx)(t.li,{children:"MVC Arch"}),"\n",(0,n.jsx)(t.li,{children:"N-Tier"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each architectural pattern defines some things like:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Required subsystems and components"}),"\n",(0,n.jsx)(t.li,{children:"Relationships between them"}),"\n",(0,n.jsx)(t.li,{children:"Conditions/Limitations on how these systems are combined"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Hence we must choose an arch pattern based on our requirements and constraints."}),"\n",(0,n.jsx)(t.h2,{id:"application-types",children:"Application Types"}),"\n",(0,n.jsx)(t.p,{children:"In a way, application types define exactly what we are building. Is it a mobile app? Or a web app? Or an API? This decision is also important in designing the architecture."}),"\n",(0,n.jsx)(t.p,{children:"Common application types:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Mobile apps: Hardware limitations"}),"\n",(0,n.jsx)(t.li,{children:"Rich Client apps: As a stand-alone application on a device. Use the device's memory and compute resources."}),"\n",(0,n.jsx)(t.li,{children:"Rich Internet apps: Can be deployed to the internet, but also have enough functionality to function on their own. Needs additional security as data is being transferred over the internet."}),"\n",(0,n.jsx)(t.li,{children:"Web apps: Need constant internet connection."}),"\n",(0,n.jsx)(t.li,{children:"Service apps: Used by people as well as other programs."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"deployment-strategy",children:"Deployment Strategy"}),"\n",(0,n.jsx)(t.p,{children:"Another important consideration. We must decide where and how we are deploying the etire software. On the cloud? On personal servers? Is it a monolithic application that requires a single deployment strategy? Or does the software have multiple individual microservices that need to deployed seperately? If deployed seperately what are the security and error handling measures we are taking into account?"}),"\n",(0,n.jsx)(t.h2,{id:"architectural-hotspots",children:"Architectural Hotspots"}),"\n",(0,n.jsx)(t.p,{children:"These are some often used points that can be used to improve your software and build a more effective architecture. Keep them in mind \ud83d\ude42"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Caching"}),"\n",(0,n.jsx)(t.li,{children:"Communication"}),"\n",(0,n.jsx)(t.li,{children:"User Experience"}),"\n",(0,n.jsx)(t.li,{children:"Exception Handling"}),"\n",(0,n.jsx)(t.li,{children:"Concurrency"}),"\n",(0,n.jsx)(t.li,{children:"Logging"}),"\n",(0,n.jsx)(t.li,{children:"Validation"}),"\n",(0,n.jsx)(t.li,{children:"Data Access"}),"\n",(0,n.jsx)(t.li,{children:"Configuration Management"}),"\n",(0,n.jsx)(t.li,{children:"Secret Management"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);