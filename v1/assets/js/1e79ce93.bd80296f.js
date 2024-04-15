"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4189],{3462:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var i=s(1085),n=s(1184);const d={slug:"../../CustomListItem"},l=void 0,r={id:"components/main/List/CustomListItem",title:"CustomListItem",description:"A component to be used as custom list item within the ui5-list",source:"@site/docs/components/main/List/CustomListItem.mdx",sourceDirName:"components/main/List",slug:"/components/CustomListItem",permalink:"/ui5-webcomponents/v1/components/CustomListItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../CustomListItem"},sidebar:"componentsSidebar",previous:{title:"Link",permalink:"/ui5-webcomponents/v1/components/Link"},next:{title:"GroupHeaderListItem",permalink:"/ui5-webcomponents/v1/components/GroupHeaderListItem"}},c={},h=[{value:"Properties",id:"properties",level:2},{value:"accessibleName",id:"accessiblename",level:3},{value:"type",id:"type",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"navigated",id:"navigated",level:3},{value:"tooltip",id:"tooltip",level:3},{value:"highlight",id:"highlight",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"deleteButton",id:"deletebutton",level:3},{value:"Events",id:"events",level:2},{value:"detail-click",id:"detail-click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A component to be used as custom list item within the ",(0,i.jsx)(t.code,{children:"ui5-list"}),"\nthe same way as the standard ",(0,i.jsx)(t.code,{children:"ui5-li"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The component accepts arbitrary HTML content to allow full customization."}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the text alternative of the component.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note"}),": If not provided a default text alternative will be set, if present."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"type",children:"type"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the visual indication and behavior of the list items. Available options are ",(0,i.jsx)(t.code,{children:"Active"})," (by default), ",(0,i.jsx)(t.code,{children:"Inactive"}),", ",(0,i.jsx)(t.code,{children:"Detail"})," and ",(0,i.jsx)(t.code,{children:"Navigation"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," When set to ",(0,i.jsx)(t.code,{children:"Active"})," or ",(0,i.jsx)(t.code,{children:"Navigation"}),", the item will provide visual response upon press and hover, while with type ",(0,i.jsx)(t.code,{children:"Inactive"})," and ",(0,i.jsx)(t.code,{children:"Detail"})," - will not."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Inactive" | "Active" | "Detail" | "Navigation"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"Active"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["An object of strings that defines several additional accessibility attribute values for customization depending on the use case.",(0,i.jsx)("br",{})," It supports the following fields:",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"ariaSetsize"}),": Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM. \tThe value of each ",(0,i.jsx)(t.code,{children:"aria-setsize"})," is an integer reflecting number of items in the complete set.",(0,i.jsx)("br",{}),"\t",(0,i.jsx)(t.strong,{children:"Note:"})," If the size of the entire set is unknown, set ",(0,i.jsx)(t.code,{children:'aria-setsize="-1"'}),".",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"ariaPosinset"}),": Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM. \tThe value of each ",(0,i.jsx)(t.code,{children:"aria-posinset"})," is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"AccessibilityAttributes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.15.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"navigated",children:"navigated"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["The navigated state of the list item. If set to ",(0,i.jsx)(t.code,{children:"true"}),", a navigation indicator is displayed at the end of the list item."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"tooltip",children:"tooltip"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the text of the tooltip that would be displayed for the list item."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.23.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"highlight",children:"highlight"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the highlight state of the list items. Available options are: ",(0,i.jsx)(t.code,{children:'"None"'})," (by default), ",(0,i.jsx)(t.code,{children:'"Success"'}),", ",(0,i.jsx)(t.code,{children:'"Warning"'}),", ",(0,i.jsx)(t.code,{children:'"Information"'})," and ",(0,i.jsx)(t.code,{children:'"Error"'}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"None" | "Success" | "Warning" | "Error" | "Information"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"None"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.24"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the selected state of the ",(0,i.jsx)(t.code,{children:"ListItem"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the content of the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"deletebutton",children:"deleteButton"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:['Defines the delete button, displayed in "Delete" mode. ',(0,i.jsx)(t.strong,{children:"Note:"})," While the slot allows custom buttons, to match design guidelines, please use the ",(0,i.jsx)(t.code,{children:"ui5-button"})," component. ",(0,i.jsx)(t.strong,{children:"Note:"})," When the slot is not present, a built-in delete button will be displayed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<IButton>"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.9.0"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h3,{id:"detail-click",children:"detail-click"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the user clicks on the detail button when type is ",(0,i.jsx)(t.code,{children:"Detail"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"native-li"}),(0,i.jsx)(t.td,{children:"Used to style the main li tag of the list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"content"}),(0,i.jsx)(t.td,{children:"Used to style the content area of the list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"detail-button"}),(0,i.jsx)(t.td,{children:"Used to style the button rendered when the list item is of type detail"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"delete-button"}),(0,i.jsx)(t.td,{children:"Used to style the button rendered when the list item is in delete mode"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"radio"}),(0,i.jsx)(t.td,{children:"Used to style the radio button rendered when the list item is in single selection mode"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"checkbox"}),(0,i.jsx)(t.td,{children:"Used to style the checkbox rendered when the list item is in multiple selection mode"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1184:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var i=s(4041);const n={},d=i.createContext(n);function l(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);