"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4333],{8644:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(1085),s=n(1184);const r={},c="Using the Framework",a={id:"docs/advanced/other-framework-level-APIs",title:"Using the Framework",description:"This section mentions framework-level APIs that do not have a dedicated section.",source:"@site/docs/docs/2-advanced/05-other-framework-level-APIs.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/other-framework-level-APIs",permalink:"/ui5-webcomponents/v1/docs/advanced/other-framework-level-APIs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"OpenUI5 Integration",permalink:"/ui5-webcomponents/v1/docs/advanced/OpenUI5-integration"},next:{title:"UI5 Web Components i18n for Apps",permalink:"/ui5-webcomponents/v1/docs/advanced/using-i18n-for-apps"}},i={},d=[];function l(e){const o={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"using-the-framework",children:"Using the Framework"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"This section mentions framework-level APIs that do not have a dedicated section."})}),"\n",(0,t.jsx)(o.p,{children:"Most of the time you'll be using the UI5 Web Components' APIs to do your job. However, there are also certain framework-level\nAPIs you should be aware of."}),"\n",(0,t.jsx)(o.h1,{id:"executing-code-on-boot",children:"Executing Code on Boot"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'import { attachBoot } from "@ui5/webcomponents-base/dist/Boot.js";\n'})}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"attachBoot"})," function allows you to execute custom code when the framework has finished booting."]}),"\n",(0,t.jsx)(o.p,{children:"Example:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'attachBoot(() => {\n\tconsole.log("Framework booted");\n});\n'})})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1184:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>a});var t=n(4041);const s={},r=t.createContext(s);function c(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);