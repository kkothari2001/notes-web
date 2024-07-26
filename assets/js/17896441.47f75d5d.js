"use strict";(self.webpackChunknotes_web=self.webpackChunknotes_web||[]).push([[8401],{1243:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var s=n(4164),a=n(7559),i=n(1754),o=n(9169),l=n(8774),r=n(1312),c=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function p(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function v(){const e=(0,i.OF)(),t=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},3652:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var s=n(6540),a=n(1003),i=n(9532),o=n(4848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(6929);function b(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var x=n(1878),p=n(4267),v=n(7559),g=n(1312),j=n(8774);const f={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function A(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,o.jsxs)(j.A,{href:t,title:a,className:(0,u.A)(f.tag,s?f.tagWithCount:f.tagRegular),children:[n,s&&(0,o.jsx)("span",{children:s})]})}const _={tags:"tags_jXut",tag:"tag_QGVx"};function N(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,u.A)(_.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:_.tag,children:(0,o.jsx)(A,{...e})},e.permalink)))})]})}var C=n(2153);function L(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(N,{tags:a})})}),l&&(0,o.jsx)(C.A,{className:(0,u.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var T=n(1422),k=n(5195);const M={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function w(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",M.tocCollapsibleButton,!t&&M.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const B={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function I(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,T.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(B.tocCollapsible,!i&&B.tocCollapsibleExpanded,n),children:[(0,o.jsx)(w,{collapsed:i,onClick:l}),(0,o.jsx)(T.N,{lazy:!0,className:B.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(k.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const V={tocMobile:"tocMobile_ITEo"};function H(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(I,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,V.tocMobile)})}var y=n(7763);function E(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var G=n(1107),P=n(1544);function F(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(G.A,{as:"h1",children:n})}),(0,o.jsx)(P.A,{children:t})]})}var R=n(1243),D=n(996);const S={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function U(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(H,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(E,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&S.docItemCol),children:[s&&(0,o.jsx)(D.A,{}),(0,o.jsx)(x.A,{}),(0,o.jsxs)("div",{className:S.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(R.A,{}),(0,o.jsx)(p.A,{}),n.mobile,(0,o.jsx)(F,{children:t}),(0,o.jsx)(L,{})]}),(0,o.jsx)(b,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function O(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(U,{children:(0,o.jsx)(n,{})})]})})}},6929:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(1312),a=n(4164),i=n(8774),o=n(4848);function l(e){const{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,o.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(l,{...t,subLabel:(0,o.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(l,{...n,subLabel:(0,o.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(1312),i=n(7559),o=n(2252),l=n(4848);function r(e){let{className:t}=e;const n=(0,o.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{n.d(t,{A:()=>p});n(6540);var s=n(4164),a=n(4586),i=n(8774),o=n(1312),l=n(4070),r=n(7559),c=n(5597),d=n(2252),u=n(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:s,children:(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.HW)(o),p=m??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}}}]);