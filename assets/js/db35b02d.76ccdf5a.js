"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[5545],{6255:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>j});var t=s(1085),r=s(1184);const i='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 400px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n\n    <ui5-button id="btnScan" icon="camera" tooltip="Start Camera">Scan</ui5-button>\n    <div>\n        <ui5-label id="scanResult"></ui5-label>\n        <ui5-label id="scanError"></ui5-label>\n    </div>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',c='import "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js";\nimport "@ui5/webcomponents-icons/dist/camera.js"\n\nconst btnScan = document.getElementById("btnScan");\nconst dlgScan = document.getElementById("dlgScan");\nconst scanResult = document.getElementById("scanResult");\nconst scanError = document.getElementById("scanError");\n\nbtnScan.addEventListener("click", (event) => {\n    dlgScan.show();\n});\n\ndlgScan.addEventListener("scan-success", (event) => {\n    scanResult.innerHTML = event.detail.text;\n    dlgScan.close();\n});\n\ndlgScan.addEventListener("scan-error", (event) => {\n    scanError.innerHTML = event.detail.message;\n    dlgScan.close();\n});';function d(e){const{Editor:n}={...(0,r.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(n,{html:i,js:c})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const l={},a=void 0,h={id:"components/fiori/BarcodeScannerDialog",title:"BarcodeScannerDialog",description:"The BarcodeScannerDialog component provides barcode scanning functionality for all devices that support the MediaDevices.getUserMedia() native API.",source:"@site/docs/components/fiori/BarcodeScannerDialog.mdx",sourceDirName:"components/fiori",slug:"/components/fiori/BarcodeScannerDialog",permalink:"/ui5-webcomponents/components/fiori/BarcodeScannerDialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Bar",permalink:"/ui5-webcomponents/components/fiori/Bar"},next:{title:"DynamicSideContent",permalink:"/ui5-webcomponents/components/fiori/DynamicSideContent"}},x={},j=[{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"open",id:"open",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"scan-success",id:"scan-success",level:3},{value:"scan-error",id:"scan-error",level:3},{value:"Methods",id:"methods",level:2},{value:"show",id:"show",level:3},{value:"close",id:"close",level:3},{value:"CSS Parts",id:"css-parts",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"BarcodeScannerDialog"})," component provides barcode scanning functionality for all devices that support the ",(0,t.jsx)(n.code,{children:"MediaDevices.getUserMedia()"})," native API.\nOpening the dialog launches the device camera and scans for known barcode formats."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"scanSuccess"})," event fires whenever a barcode is identified\nand a ",(0,t.jsx)(n.code,{children:"scanError"})," event fires when the scan failed (for example, due to missing permisions)."]}),"\n",(0,t.jsx)(n.p,{children:"Internally, the component  uses the zxing-js/library third party OSS."}),"\n",(0,t.jsxs)(n.p,{children:["For a list of supported barcode formats, see the ",(0,t.jsx)(n.a,{href:"https://github.com/zxing-js/library",children:"zxing-js/library"})," documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"open",children:"open"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Indicates whether the dialog is open."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Default"}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Since"}),(0,t.jsx)(n.td,{children:"1.24.0"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsx)(n.p,{children:"No slots available for this component."}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.h3,{id:"scan-success",children:"scan-success"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Fires when the scan is completed successfuuly."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustomEvent<BarcodeScannerDialogScanSuccessEventDetail>"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Parameters"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"text"}),": ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)("br",{}),"the scan result as string",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"rawBytes"}),": ",(0,t.jsx)(n.code,{children:"Object"}),(0,t.jsx)("br",{}),"the scan result as a Uint8Array"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"scan-error",children:"scan-error"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Fires when the scan fails with error."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustomEvent<BarcodeScannerDialogScanErrorEventDetail>"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Parameters"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"message"}),": ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)("br",{}),"the error message"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"show",children:"show"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Shows a dialog with the camera videostream. Starts a scan session."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Return type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"void"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deprecated"}),(0,t.jsxs)(n.td,{children:["The method is deprecated in favour of ",(0,t.jsx)("code",{children:"open"})," property."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"Closes the dialog and the scan session."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Return type"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"void"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deprecated"}),(0,t.jsxs)(n.td,{children:["The method is deprecated in favour of ",(0,t.jsx)("code",{children:"open"})," property."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,t.jsx)(n.p,{children:"No CSS parts available for this component."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var t=s(4041);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);