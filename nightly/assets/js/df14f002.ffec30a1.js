"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[5414],{2316:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>P,contentTitle:()=>f,default:()=>C,frontMatter:()=>v,metadata:()=>b,toc:()=>w});var l=o(1085),n=o(1184);const r='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 300px">\n    \x3c!-- playground-fold-end --\x3e\n\n\n    <ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>\n    <ui5-color-palette-popover id="colorPalettePopover" opener="colorPaletteBtn">\n        <ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>\n        <ui5-color-palette-item value="lightpink"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>\n        <ui5-color-palette-item value="powderblue"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="orange"></ui5-color-palette-item>\n    </ui5-color-palette-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',i='import "@ui5/webcomponents/dist/ColorPalettePopover.js";\nimport "@ui5/webcomponents/dist/ColorPaletteItem.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\ncolorPaletteBtn.addEventListener("click", () => {\n\tcolorPalettePopover.open = !colorPalettePopover.open;\n});';function s(e){const{Editor:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,l.jsx)(t,{html:r,js:i})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 400px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>\n    <ui5-color-palette-popover\n        id="colorPalettePopover"\n        opener="colorPaletteBtn"\n        show-default-color\n        default-color="orange"\n    >\n        <ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>\n        <ui5-color-palette-item value="lightpink"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>\n        <ui5-color-palette-item value="powderblue"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="orange"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#ef3054"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#ff6f59"></ui5-color-palette-item>\n        <ui5-color-palette-item value="moccasin"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#07A0C3"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(8,103,136)"></ui5-color-palette-item>\n    </ui5-color-palette-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/ColorPalettePopover.js";\nimport "@ui5/webcomponents/dist/ColorPaletteItem.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"\n\ncolorPaletteBtn.addEventListener("click", () => {\n\tcolorPalettePopover.open = !colorPalettePopover.open;\n});';function h(e){const{Editor:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,l.jsx)(t,{html:d,js:a})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}const u='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 400px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>\n\n    <ui5-color-palette-popover id="colorPalettePopover"\n        opener="colorPaletteBtn"\n        show-recent-colors\n        show-more-colors\n        show-default-color\n        default-color="orange"\n    >\n        <ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>\n        <ui5-color-palette-item value="lightpink"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>\n        <ui5-color-palette-item value="powderblue"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>\n        <ui5-color-palette-item value="orange"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#ef3054"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#ff6f59"></ui5-color-palette-item>\n        <ui5-color-palette-item value="moccasin"></ui5-color-palette-item>\n        <ui5-color-palette-item value="#07A0C3"></ui5-color-palette-item>\n        <ui5-color-palette-item value="rgb(8,103,136)"></ui5-color-palette-item>\n    </ui5-color-palette-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',m='import "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js";\nimport "@ui5/webcomponents/dist/ColorPalettePopover.js";\nimport "@ui5/webcomponents/dist/ColorPaletteItem.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"\n\ncolorPaletteBtn.addEventListener("click", () => {\n\tcolorPalettePopover.open = !colorPalettePopover.open;\n});';function x(e){const{Editor:t}={...(0,n.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,l.jsx)(t,{html:u,js:m})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}const v={slug:"../ColorPalettePopover"},f=void 0,b={id:"components/main/ColorPalettePopover",title:"ColorPalettePopover",description:"Represents a predefined range of colors for easier selection.",source:"@site/docs/components/main/ColorPalettePopover.mdx",sourceDirName:"components/main",slug:"/components/ColorPalettePopover",permalink:"/ui5-webcomponents/nightly/components/ColorPalettePopover",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../ColorPalettePopover"},sidebar:"componentsSidebar",previous:{title:"ColorPaletteItem",permalink:"/ui5-webcomponents/nightly/components/ColorPaletteItem"},next:{title:"ColorPicker",permalink:"/ui5-webcomponents/nightly/components/ColorPicker"}},P={},w=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"showRecentColors",id:"showrecentcolors",level:3},{value:"showMoreColors",id:"showmorecolors",level:3},{value:"showDefaultColor",id:"showdefaultcolor",level:3},{value:"defaultColor",id:"defaultcolor",level:3},{value:"open",id:"open",level:3},{value:"opener",id:"opener",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"item-click",id:"item-click",level:3},{value:"close",id:"close",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Show Default Color",id:"show-default-color",level:3},{value:"Show More&amp;Recent Colors",id:"show-morerecent-colors",level:3}];function g(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Represents a predefined range of colors for easier selection."}),"\n",(0,l.jsx)(t.p,{children:"Overview\nThe ColorPalettePopover provides the users with a slot to predefine colors."}),"\n",(0,l.jsx)(t.p,{children:'You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.\nYou can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.'}),"\n",(0,l.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t.p,{children:"The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker."}),"\n",(0,l.jsxs)(t.p,{children:["For the ",(0,l.jsx)(t.code,{children:"ui5-color-palette-popover"})]}),"\n",(0,l.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:'import @ui5/webcomponents/dist/ColorPalettePopover.js";'})}),"\n",(0,l.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(t.h3,{id:"showrecentcolors",children:"showRecentColors"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsx)(t.td,{children:"Defines whether the user can see the last used colors in the bottom of the component"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"boolean"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Default"}),(0,l.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"showmorecolors",children:"showMoreColors"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsxs)(t.td,{children:["Defines whether the user can choose a custom color from a component.",(0,l.jsx)("br",{}),(0,l.jsx)(t.strong,{children:"Note:"})," In order to use this property you need to import the following module: ",(0,l.jsx)(t.code,{children:'"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"'})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"boolean"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Default"}),(0,l.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"showdefaultcolor",children:"showDefaultColor"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsx)(t.td,{children:"Defines whether the user can choose the default color from a button."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"boolean"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Default"}),(0,l.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"defaultcolor",children:"defaultColor"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsxs)(t.td,{children:["Defines the default color of the component.",(0,l.jsx)("br",{}),(0,l.jsx)(t.strong,{children:"Note:"})," The default color should be a part of the ColorPalette colors`"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"string | undefined"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Default"}),(0,l.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"open",children:"open"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsx)(t.td,{children:"Defines the open"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"boolean"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Default"}),(0,l.jsx)(t.td,{children:"false"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Since"}),(0,l.jsx)(t.td,{children:"1.21.0"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"opener",children:"opener"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsx)(t.td,{children:"Defines the ID or DOM Reference of the element that the popover is shown at."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"HTMLElement | string | undefined"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Default"}),(0,l.jsx)(t.td,{children:"undefined"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Since"}),(0,l.jsx)(t.td,{children:"1.21.0"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,l.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsx)(t.td,{children:"Defines the content of the component."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"Array<IColorPaletteItem>"})})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,l.jsx)(t.h3,{id:"item-click",children:"item-click"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsx)(t.td,{children:"Fired when the user selects a color."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CustomEvent<ColorPalettePopoverItemClickEventDetail>"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Parameters"}),(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.strong,{children:"color"}),": ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)("br",{}),"the selected color"]})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"close",children:"close"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Description"}),(0,l.jsxs)(t.td,{children:["Fired when the ",(0,l.jsx)(t.code,{children:"ui5-color-palette-popover"})," is closed due to user interaction."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Type"}),(0,l.jsx)(t.td,{children:(0,l.jsx)(t.code,{children:"CustomEvent"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Since"}),(0,l.jsx)(t.td,{children:"1.21.0"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,l.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,l.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,l.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,l.jsx)(t.h3,{id:"show-default-color",children:"Show Default Color"}),"\n",(0,l.jsx)(p,{}),"\n",(0,l.jsx)(t.h3,{id:"show-morerecent-colors",children:"Show More&Recent Colors"}),"\n",(0,l.jsx)(t.p,{children:"Recent colors shows the last five colors that have been selected.\nMore colors opens a dialog to manually choose a color from a ColorPicker."}),"\n",(0,l.jsx)(j,{})]})}function C(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},1184:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var l=o(4041);const n={},r=l.createContext(n);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);