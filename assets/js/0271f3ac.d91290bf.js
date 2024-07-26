"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[6476],{302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(4848),s=t(8453);const i={sidebar_position:1,slug:"csr-vs-ssr"},r="Then vs Now: CSR vs SSR",o={id:"ssr/then-vs-now",title:"Then vs Now: CSR vs SSR",description:"When rendering a single-page application (SPA), how it has always worked is that the HTML file sent over the network has been mostly empty. Along with it there was usually a large javascript file (bundle) sent.",source:"@site/docs/ssr/then-vs-now.md",sourceDirName:"ssr",slug:"/ssr/csr-vs-ssr",permalink:"/ssr/csr-vs-ssr",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"csr-vs-ssr"},sidebar:"tutorialSidebar",previous:{title:"Server Side Rendering",permalink:"/ssr"},next:{title:"Next.js",permalink:"/next"}},h={},l=[{value:"Data fetching in React",id:"data-fetching-in-react",level:2},{value:"Optional notes",id:"optional-notes",level:3},{value:"New architecture",id:"new-architecture",level:4}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"then-vs-now-csr-vs-ssr",children:"Then vs Now: CSR vs SSR"}),"\n",(0,a.jsx)(n.p,{children:"When rendering a single-page application (SPA), how it has always worked is that the HTML file sent over the network has been mostly empty. Along with it there was usually a large javascript file (bundle) sent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <body>\n    <div id="root"></div>\n    <script src="/index.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Once both the HTML and JS have been downloaded and parsed, React starts rendering the DOM nodes inside the empty ",(0,a.jsx)(n.code,{children:"div"}),' with the id "root". All while this happens the user is staring at a blank screen.']}),"\n",(0,a.jsx)(n.p,{children:"As the app grows, every few kbs you add to the bundle increases the time before which the user sees something tangible on the screen."}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsx)(n.p,{children:"Always remember, one of the most taxing work done on the browser is the rendering and manipulation of the DOM using JS. If we can avoid that, it almost always leads to a boost in performance. This is the reason React uses a virtual DOM to track changes required before actually changing the real DOM."})}),"\n",(0,a.jsx)(n.p,{children:"SSR aims to avoid exactly this. If we are able to directly send some html (with CSS obviously) to the browser:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Not only is the work of rendering all the new DOM nodes no longer needed (which saves a lot of time)"}),"\n",(0,a.jsx)(n.li,{children:"But also the user no longer has to look at a blank screen while the JS is downloaded and parsed."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"One of the ways in which SSR can work:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"SSR Flow",src:t(9756).A+"",width:"912",height:"374"})}),"\n",(0,a.jsxs)(n.p,{children:["Here the HTML (and hence DOM nodes) will already be present. But then when the attached JS bundle is downloaded and parsed, the code assumes control of the nodes. This process of adding interactivity and event handlers to HTML is called ",(0,a.jsx)(n.code,{children:"hydration"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"There are other ways of conducting SSR too, one of them is to create the HTML files when the project is built in the first place. This is called Static Site Generation (SSG) and that is what makes this website possible!"})}),"\n",(0,a.jsx)(n.h2,{id:"data-fetching-in-react",children:"Data fetching in React"}),"\n",(0,a.jsx)(n.p,{children:"This is how we normally fetch data in most React SPAs:"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant B as Browser\n  participant S as Server\n  participant D as Database\n  B->>S: Request for website\n  S->>B: Sends large JS file\n  B->>B: Renders shell\n  Note over B: First Paint\n  Note over B: Page Interactive\n  B->>S: Requests data\n  S->>D: Database Query\n  D->>S: Data\n  S->>B: Data\n  B->>B: Renders content\n  Note over B: Content painted"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Note: For context, shell is that empty loader boxes you see when data is yet to be fetched. I mean it's somewhat better to stare at a shell rather than an empty page, isn't it?"})}),"\n",(0,a.jsx)(n.p,{children:"Now... how can we improve this? One way would be to push off the simple task of rendering the shell to the server, or render it during build time!"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant B as Browser\n  participant S as Server\n  participant D as Database\n  S->>S: (Option A) Shell already rendered at build time\n  B->>S: Request for website\n  S->>S: (Option B) Shell rendered at request time\n  S->>B: Sends smaller JS file, and rendered HTML\n  Note over B: First Paint\n  B->>B: Hydration\n  Note over B: Page Interactive\n  B->>S: Requests data\n  S->>D: Database Query\n  D->>S: Data\n  S->>B: Data\n  B->>B: Renders content\n  Note over B: Content painted"}),"\n",(0,a.jsx)(n.p,{children:"The advantages of this are numerous:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The user sees the first paint as soon as it receives the HTML doc."}),"\n",(0,a.jsx)(n.li,{children:'The user is able to interact with the page faster. Hydration is faster than first rendering! While one might say, "What interactivity? There\'s no content!", sometimes having semantic HTML tags provides enough interactivity, especially if the user is looking to navigate immediately to another page.'}),"\n",(0,a.jsx)(n.li,{children:"The JS file size is smaller because the code required to render the shell no longer needs to reach the browser."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In fact, we can go one step further...\nWhy not just call the database when we get the request and render the page with full content on the server itself! This might take a little more time on the server for the first call, with numerous advantages again:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Now, you might not have to put in the content-fetching logic in the bundle either. So even smaller bundle sizes!"}),"\n",(0,a.jsx)(n.li,{children:"The user can get started with working on the page extremely quickly, which means an amazing user experience."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"There are caveats to this last approach, and is a decision to be made by the stakeholders involved."})}),"\n",(0,a.jsx)(n.p,{children:"A potential flow for the same:"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant B as Browser\n  participant S as Server\n  participant D as Database\n  B->>S: Request for website\n  S->>D: Database Query\n  D->>S: Data\n  S->>S: Renders content\n  S->>B: Server sends rendered HTML and JS\n  Note over B: Full Content painted\n  B->>B: Hydration\n  Note over B: Page Interactive"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Note: Hydration might still be required for any client-side interactivity needed in the application"})}),"\n",(0,a.jsx)(n.h3,{id:"optional-notes",children:"Optional notes"}),"\n",(0,a.jsx)(n.h4,{id:"new-architecture",children:"New architecture"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The proposed architecture in this section needs a few new features/paradigms in order to be implemented like React Server Components, Suspense and Streaming SSR architecture."})}),"\n",(0,a.jsx)(n.p,{children:"There can be many interesting ways to solve the above problem, modern features even allow you to implement the following:"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant B as Browser\n  participant S as Server\n  participant D as Database\n  B->>S: Request for website\n  S->>S: Shell rendered\n  S->>B: Sends JS bundle, and rendered HTML\n  S->>D: Database Query\n  Note over B: First Paint\n  B->>B: Hydration\n  D->>S: Data\n  Note over B: Page Interactive\n  S--\x3e>B: Data (asynchronous)\n  B->>B: Renders content\n  Note over B: Content painted"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9756:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/ssr-flow-016e2e77b75d432acd8c4fc23f2250ba.png"}}]);