"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9253],{83021:(e,t,n)=>{n.d(t,{A:()=>x});n(14041);var a=n(54357),s=n(57473),i=n(5096),l=n(74271),o=n(42436),r=n(49082),c=n(55215),d=n(31085);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_JFrk"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_zCmv"};function p(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,d.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:s,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:s,children:t})}function b(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function x(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(s.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(b,{active:a,index:n,addMicrodata:!!s,children:(0,d.jsx)(p,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},89253:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});n(14041);var a=n(21918),s=n(10457),i=n(31085);function l(){const{metadata:e,frontMatter:t,assets:n}=(0,s.u)();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var o=n(54357),r=n(31187),c=n(24289);function d(){const{metadata:e}=(0,s.u)();return(0,i.jsx)(c.A,{previous:e.previous,next:e.next})}var u=n(81524),m=n(42101),h=n(57473),v=n(49082);function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(v.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function b(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(v.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,i.jsxs)("span",{className:h.G.common.lastUpdated,children:[(0,i.jsx)(v.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(p,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,i.jsx)(b,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var g=n(43145),f=n(95083);const j={lastUpdated:"lastUpdated_T23F"};function A(e){return(0,i.jsx)("div",{className:(0,o.A)(h.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(f.A,{...e})})})}function L(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s}=e;return(0,i.jsxs)("div",{className:(0,o.A)(h.G.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(g.A,{editUrl:t})}),(0,i.jsx)("div",{className:(0,o.A)("col",j.lastUpdated),children:(n||a)&&(0,i.jsx)(x,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function N(){const{metadata:e}=(0,s.u)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:l,tags:r}=e,c=r.length>0,d=!!(t||n||l);return c||d?(0,i.jsxs)("footer",{className:(0,o.A)(h.G.docs.docFooter,"docusaurus-mt-lg"),children:[c&&(0,i.jsx)(A,{tags:r}),d&&(0,i.jsx)(L,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:a})]}):null}var C=n(16476),_=n(79969);const T={tocCollapsibleButton:"tocCollapsibleButton_htYj",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_pAh7"};function k(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,o.A)("clean-btn",T.tocCollapsibleButton,!t&&T.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const U={tocCollapsible:"tocCollapsible_O_Qc",tocCollapsibleContent:"tocCollapsibleContent_SlnY",tocCollapsibleExpanded:"tocCollapsibleExpanded_klrc"};function H(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:l,toggleCollapsed:r}=(0,C.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,o.A)(U.tocCollapsible,!l&&U.tocCollapsibleExpanded,n),children:[(0,i.jsx)(k,{collapsed:l,onClick:r}),(0,i.jsx)(C.N,{lazy:!0,className:U.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(_.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const y={tocMobile:"tocMobile_tjDr"};function w(){const{toc:e,frontMatter:t}=(0,s.u)();return(0,i.jsx)(H,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.A)(h.G.docs.docTocMobile,y.tocMobile)})}var B=n(91017);function M(){const{toc:e,frontMatter:t}=(0,s.u)();return(0,i.jsx)(B.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.G.docs.docTocDesktop})}var E=n(83240),I=n(83021),O=n(57262);const S={docItemContainer:"docItemContainer_Rv5Z",docItemCol:"docItemCol_YAwJ"};function R(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,s.u)(),n=(0,r.l)(),a=e.hide_table_of_contents,l=!a&&t.length>0;return{hidden:a,mobile:l?(0,i.jsx)(w,{}):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(M,{})}}(),{metadata:{unlisted:a}}=(0,s.u)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,o.A)("col",!n.hidden&&S.docItemCol),children:[a&&(0,i.jsx)(O.A,{}),(0,i.jsx)(u.A,{}),(0,i.jsxs)("div",{className:S.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(I.A,{}),(0,i.jsx)(m.A,{}),n.mobile,(0,i.jsx)(E.A,{children:t}),(0,i.jsx)(N,{})]}),(0,i.jsx)(d,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function V(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(s._,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(l,{}),(0,i.jsx)(R,{children:(0,i.jsx)(n,{})})]})})}},24289:(e,t,n)=>{n.d(t,{A:()=>l});n(14041);var a=n(49082),s=n(20056),i=n(31085);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.A,{...t,subLabel:(0,i.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(s.A,{...n,subLabel:(0,i.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},42101:(e,t,n)=>{n.d(t,{A:()=>r});n(14041);var a=n(54357),s=n(49082),i=n(57473),l=n(96738),o=n(31085);function r(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},81524:(e,t,n)=>{n.d(t,{A:()=>b});n(14041);var a=n(54357),s=n(10396),i=n(42436),l=n(49082),o=n(68016),r=n(57473),c=n(9599),d=n(96738),u=n(31085);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:n,onClick:a,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,s.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.HW)(l),b=m??(x=p).docs.find((e=>e.id===x.mainDocId));var x;return(0,u.jsxs)("div",{className:(0,a.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:p.label,to:b.path,onClick:()=>d(p.name)})})]})}function b(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}},43145:(e,t,n)=>{n.d(t,{A:()=>d});n(14041);var a=n(49082),s=n(57473),i=n(42436),l=n(54357);const o={iconEdit:"iconEdit_UohW"};var r=n(31085);function c(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(o.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(i.A,{to:t,className:s.G.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},20056:(e,t,n)=>{n.d(t,{A:()=>l});n(14041);var a=n(54357),s=n(42436),i=n(31085);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},91017:(e,t,n)=>{n.d(t,{A:()=>c});n(14041);var a=n(54357),s=n(79969);const i={tableOfContents:"tableOfContents_TN1Q",docItemContainer:"docItemContainer_JtJJ"};var l=n(31085);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.A,{...n,linkClassName:o,linkActiveClassName:r})})}},79969:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(14041),s=n(2520);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(42436),m=n(31085);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const v=a.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,s.p)(),b=c??p.tableOfContents.minHeadingLevel,x=u??p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:x}}),[o,r,b,x])),(0,m.jsx)(v,{toc:g,className:n,linkClassName:o,...h})}},52247:(e,t,n)=>{n.d(t,{A:()=>o});n(14041);var a=n(54357),s=n(42436);const i={tag:"tag_qE9H",tagRegular:"tagRegular_aHXt",tagWithCount:"tagWithCount_UC8q"};var l=n(31085);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(s.A,{href:t,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},95083:(e,t,n)=>{n.d(t,{A:()=>r});n(14041);var a=n(54357),s=n(49082),i=n(52247);const l={tags:"tags_q74f",tag:"tag_lSC7"};var o=n(31085);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},57262:(e,t,n)=>{n.d(t,{A:()=>h});n(14041);var a=n(54357),s=n(49082),i=n(9058),l=n(31085);function o(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(57473),u=n(18759);function m(e){let{className:t}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},10457:(e,t,n)=>{n.d(t,{_:()=>o,u:()=>r});var a=n(14041),s=n(51786),i=n(31085);const l=a.createContext(null);function o(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:s,children:t})}function r(){const e=(0,a.useContext)(l);if(null===e)throw new s.dV("DocProvider");return e}}}]);