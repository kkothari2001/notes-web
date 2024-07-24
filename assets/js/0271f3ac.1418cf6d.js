"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[476],{302:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(4848),i=s(8453);const o={sidebar_position:1,slug:"csr-vs-ssr"},r="Then vs Now: CSR vs SSR",a={id:"ssr/then-vs-now",title:"Then vs Now: CSR vs SSR",description:"When rendering a single-page application (SPA), how it has always worked is that the HTML file sent over the network has been mostly empty. Along with it there was usually a large javascript file (bundle) sent.",source:"@site/docs/ssr/then-vs-now.md",sourceDirName:"ssr",slug:"/ssr/csr-vs-ssr",permalink:"/ssr/csr-vs-ssr",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"csr-vs-ssr"},sidebar:"tutorialSidebar",previous:{title:"Server Side Rendering",permalink:"/ssr"}},h={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"then-vs-now-csr-vs-ssr",children:"Then vs Now: CSR vs SSR"}),"\n",(0,t.jsx)(n.p,{children:"When rendering a single-page application (SPA), how it has always worked is that the HTML file sent over the network has been mostly empty. Along with it there was usually a large javascript file (bundle) sent."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <body>\n    <div id="root"></div>\n    <script src="/index.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once both the HTML and JS have been downloaded and parsed, React starts rendering the DOM nodes inside the empty ",(0,t.jsx)(n.code,{children:"div"}),' with the id "root". All while this happens the user is staring at a blank screen.']}),"\n",(0,t.jsx)(n.p,{children:"As the app grows, every few kbs you add to the bundle increases the time before which the user sees something tangible on the screen."}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"Always remember, one of the most taxing work done on the browser is the rendering and manipulation of the DOM. If we can avoid that, it almost always leads to a boost in performance. This is the reason React uses a virtual DOM to track changes required before actually changing the real DOM."})}),"\n",(0,t.jsx)(n.p,{children:"SSR aims to avoid exactly this. If we are able to directly send some html (with CSS obviously) to the browser:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Not only is the work of rendering all the new DOM nodes no longer needed (which saves a lot of time)"}),"\n",(0,t.jsx)(n.li,{children:"But also the user no longer has to look at a blank screen while the JS is downloaded and parsed."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"One of the ways in which SSR can work:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SSR Flow",src:s(9756).A+"",width:"912",height:"374"})}),"\n",(0,t.jsxs)(n.p,{children:["Here the HTML (and hence DOM nodes) will already be present. But then when the attached JS bundle is downloaded and parsed, the code assumes control of the nodes. This process of adding interactivity and event handlers to HTML is called ",(0,t.jsx)(n.code,{children:"hydration"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"There are other ways of conducting SSR too, one of them is to create the HTML files when the project is built in the first place. This is called Static Site Generation (SSG) and that is what makes this website possible!"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9756:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ssr-flow-016e2e77b75d432acd8c4fc23f2250ba.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);