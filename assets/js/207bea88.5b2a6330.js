"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8656],{129:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var n=t(1085),i=t(1184);const d={slug:"../../MenuItem"},r=void 0,l={id:"components/main/Menu/MenuItem",title:"MenuItem",description:"ui5-menu-item is the item to use inside a ui5-menu.",source:"@site/docs/components/main/Menu/MenuItem.mdx",sourceDirName:"components/main/Menu",slug:"/components/MenuItem",permalink:"/ui5-webcomponents/components/MenuItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../MenuItem"},sidebar:"componentsSidebar",previous:{title:"Menu",permalink:"/ui5-webcomponents/components/Menu"},next:{title:"MessageStrip",permalink:"/ui5-webcomponents/components/MessageStrip"}},c={},h=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"text",id:"text",level:3},{value:"additionalText",id:"additionaltext",level:3},{value:"icon",id:"icon",level:3},{value:"startsSection",id:"startssection",level:3},{value:"disabled",id:"disabled",level:3},{value:"busy",id:"busy",level:3},{value:"busyDelay",id:"busydelay",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"tooltip",id:"tooltip",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is the item to use inside a ",(0,n.jsx)(s.code,{children:"ui5-menu"}),".\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items."]}),"\n",(0,n.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is an abstract element, representing a node in a ",(0,n.jsx)(s.code,{children:"ui5-menu"}),". The menu itself is rendered as a list,\nand each ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is represented by a list item (",(0,n.jsx)(s.code,{children:"ui5-li"}),") in that list. Therefore, you should only use\n",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," directly in your apps. The ",(0,n.jsx)(s.code,{children:"ui5-li"})," list item is internal for the list, and not intended for public use."]}),"\n",(0,n.jsx)(s.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'import "@ui5/webcomponents/dist/MenuItem.js";'})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"text",children:"text"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the text of the tree item."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"additionaltext",children:"additionalText"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the ",(0,n.jsx)(s.code,{children:"additionalText"}),", displayed in the end of the menu item.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," The additional text would not be displayed if the item has a submenu."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'""'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.8.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"icon",children:"icon"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Example:"}),(0,n.jsx)("br",{}),"See all the available icons in the ",(0,n.jsx)(s.a,{href:"https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html",children:"Icon Explorer"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'""'})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"startssection",children:"startsSection"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines whether a visual separator should be rendered before the item."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"disabled",children:"disabled"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines whether ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is in disabled state.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," A disabled ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is noninteractive."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"busy",children:"busy"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," If set to ",(0,n.jsx)(s.code,{children:"true"})," a ",(0,n.jsx)(s.code,{children:"ui5-busy-indicator"})," component will be displayed into the related one to the current ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," sub-menu popover."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.13.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"busydelay",children:"busyDelay"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"1000"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.13.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the accessible ARIA name of the component."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'""'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.7.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"tooltip",children:"tooltip"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the text of the tooltip for the menu item."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'""'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.23.0"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(s.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the items of this component."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Array<MenuItem>"})})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(s.p,{children:"No events available for this component."}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(s.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(s.p,{children:"No CSS parts available for this component."})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1184:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(4041);const i={},d=n.createContext(i);function r(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);