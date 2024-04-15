"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[810],{4972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>E,contentTitle:()=>U,default:()=>I,frontMatter:()=>w,metadata:()=>S,toc:()=>T});var i=t(1085),o=t(1184);const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-upload-collection id="uploadCollection" mode="Delete" accessible-name="Uploaded (2)">\n        <div slot="header" class="header">\n            <ui5-title>Uploaded (2)</ui5-title>\n            <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>\n            <ui5-button id="startUploading">Start</ui5-button>\n            <div class="spacer"></div>\n            <ui5-file-uploader id="fileUploader" hide-input multiple>\n                <ui5-button icon="add" design="Transparent"></ui5-button>\n            </ui5-file-uploader>\n        </div>\n\n        <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable upload-state="Complete">\n            Uploaded By: David Keane \xb7 Uploaded On: 2014-07-26 \xb7 File Size: 35 KB\n            <img src="../assets/images/HT-1000.jpg" slot="thumbnail">\n        </ui5-upload-collection-item>\n\n        <ui5-upload-collection-item file-name="Notes.txt" upload-state="Complete">\n            Uploaded By: John Smith \xb7 Uploaded On: 2014-09-02 \xb7 File Size: 226.6 KB\n            <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>\n        </ui5-upload-collection-item>\n    </ui5-upload-collection>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',d='import "@ui5/webcomponents/dist/FileUploader.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/UploadCollection.js";\nimport "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";\n\nimport "@ui5/webcomponents-icons/dist/add.js";\nimport "@ui5/webcomponents-icons/dist/document-text.js";\n\nvar uploadCollection = document.querySelector("ui5-upload-collection");\nvar fileUploader = document.getElementById("fileUploader");\nvar startUploading = document.getElementById("startUploading");\n\nfileUploader.addEventListener("change", e => {\n    var files = e.detail.files;\n    for (var i = 0; i < files.length; i++) {\n        uploadCollection.appendChild(createUCI(files[i]));\n    }\n});\n\nfunction createUCI(file) {\n    var uci = document.createElement("ui5-upload-collection-item");\n    var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);\n\n    uci.appendChild(createThumbnail(file.name));\n    uci.appendChild(description);\n    uci.file = file;\n    uci.fileName = file.name;\n    return uci;\n}\n\nfunction createThumbnail(fileName) {\n    var icon = document.createElement("ui5-icon");\n    icon.name = "document";\n    icon.slot = "thumbnail";\n    return icon;\n}\n\nstartUploading.addEventListener("click", e => {\n    uploadCollection.items\n        .filter(item => item.uploadState === "Ready" && item.file)\n        .forEach(item => {\n            item.uploadState = "Uploading";\n\n            fetch("/upload", {\n                method: "POST",\n                body: item.file\n            }).then(res => {\n                item.uploadState = res.status === 200 ? "Complete" : "Error";\n            });\n        });\n});\n\nvar uploadCollection = document.querySelector("ui5-upload-collection");\nuploadCollection.addEventListener("ui5-item-delete", e => {\n    uploadCollection.removeChild(e.detail.item);\n});',s=".header {\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    flex-wrap: wrap;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n\n.header > * {\n    margin: 0.25rem;\n}";function r(e){const{Editor:n}={...(0,o.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:l,js:d,css:s})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-upload-collection>\n        <div slot="header" class="header">\n            <ui5-title>Attachments (2)</ui5-title>\n        </div>\n\n        <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable upload-state="Complete" type="Detail">\n            Uploaded By: David Keane \xb7 Uploaded On: 2014-07-26 \xb7 File Size: 35 KB\n            <img src="../assets/images/HT-1000.jpg" slot="thumbnail">\n        </ui5-upload-collection-item>\n\n        <ui5-upload-collection-item file-name="Notes.txt" upload-state="Complete" type="Detail">\n            Uploaded By: John Smith \xb7 Uploaded On: 2014-09-02 \xb7 File Size: 226.6 KB\n            <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>\n        </ui5-upload-collection-item>\n    </ui5-upload-collection>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',p='import "@ui5/webcomponents/dist/Title.js";\n\nimport "@ui5/webcomponents-fiori/dist/UploadCollection.js";\nimport "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";\n\nimport "@ui5/webcomponents-icons/dist/document-text.js";\n\nvar uploadCollection = document.querySelector("ui5-upload-collection");\nuploadCollection.addEventListener("rename", e => {\n    alert("Rename event: " + e.target.fileName);\n});\n\nvar uploadCollection = document.querySelector("ui5-upload-collection");\nuploadCollection.addEventListener("ui5-item-delete", e => {\n    uploadCollection.removeChild(e.detail.item);\n});';function h(e){const{Editor:n}={...(0,o.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:a,js:p})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}const m='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-upload-collection>\n        <div slot="header" class="header">\n            <ui5-title>Attachments (2)</ui5-title>\n        </div>\n\n        <ui5-upload-collection-item file-name="LaptopHT-1000.jpg" upload-state="Complete">\n            uploadState="Complete"\n            <img src="../assets/images/HT-1000.jpg" slot="thumbnail">\n        </ui5-upload-collection-item>\n\n        <ui5-upload-collection-item file-name="Laptop.jpg" upload-state="Uploading" type="Active" progress="37">\n            uploadState="Uploading"\n            <img src="../assets/images/HT-1000.jpg" slot="thumbnail">\n        </ui5-upload-collection-item>\n\n        <ui5-upload-collection-item file-name="latest-reports.pdf" upload-state="Error" type="Active" progress="59">\n            uploadState="Error"\n            <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>\n        </ui5-upload-collection-item>\n\n        <ui5-upload-collection-item file-name="Notes.txt" upload-state="Ready">\n            uploadState="Ready" (default)\n            <ui5-icon name="document-text" slot="thumbnail"></ui5-icon>\n        </ui5-upload-collection-item>\n    </ui5-upload-collection>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',x='import "@ui5/webcomponents/dist/Title.js";\n\nimport "@ui5/webcomponents-fiori/dist/UploadCollection.js";\nimport "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";\n\nimport "@ui5/webcomponents-icons/dist/document-text.js";\n\nvar uploadCollection = document.querySelector("ui5-upload-collection");\n\nuploadCollection.addEventListener("retry", e => {\n    alert("Retry uploading: " + e.target.fileName);\n});\nuploadCollection.addEventListener("terminate", e => {\n    alert("Terminate uploading of: " + e.target.fileName);\n});\n\nuploadCollection.addEventListener("ui5-item-delete", e => {\n    uploadCollection.removeChild(e.detail.item);\n});';function j(e){const{Editor:n}={...(0,o.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:m,js:x})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}const v='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-upload-collection>\n        <div slot="header" class="header">\n            <ui5-title>Attachments</ui5-title>\n            <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>\n            <ui5-button id="startUploading">Start</ui5-button>\n            <div class="spacer"></div>\n            <ui5-file-uploader id="fileUploader" hide-input multiple>\n                <ui5-button icon="add" design="Transparent"></ui5-button>\n            </ui5-file-uploader>\n        </div>\n    </ui5-upload-collection>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',b='import "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/FileUploader.js";\n\nimport "@ui5/webcomponents-fiori/dist/UploadCollection.js";\nimport "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";\n\nimport "@ui5/webcomponents-icons/dist/document-text.js";\nimport "@ui5/webcomponents-icons/dist/add.js";\n\nvar uploadCollection = document.querySelector("ui5-upload-collection");\nvar fileUploader = document.getElementById("fileUploader");\nvar startUploading = document.getElementById("startUploading");\n\nfileUploader.addEventListener("change", e => {\n    var files = e.detail.files;\n    for (var i = 0; i < files.length; i++) {\n        uploadCollection.appendChild(createUCI(files[i]));\n    }\n});\n\nfunction createUCI(file) {\n    var uci = document.createElement("ui5-upload-collection-item");\n    var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);\n\n    uci.appendChild(createThumbnail(file.name));\n    uci.appendChild(description);\n    uci.file = file;\n    uci.fileName = file.name;\n    return uci;\n}\n\nfunction createThumbnail() {\n    var icon = document.createElement("ui5-icon");\n    icon.name = "document";\n    icon.slot = "thumbnail";\n    return icon;\n}\n\nstartUploading.addEventListener("click", e => {\n    uploadCollection.items\n        .filter(item => item.uploadState === "Ready" && item.file)\n        .forEach(item => {\n            item.uploadState = "Uploading";\n\n            fetch("/upload", {\n                method: "POST",\n                body: item.file\n            }).then(res => {\n                item.uploadState = res.status === 200 ? "Complete" : "Error";\n            });\n        });\n});\n\nuploadCollection.addEventListener("drop", e => {\n    e.preventDefault();\n\n    var files = e.dataTransfer.files;\n    // Take the files from the drop event and create <ui5-upload-collection-item> from them\n    for (var i = 0; i < files.length; i++) {\n        uploadCollection.appendChild(createUCI(files[i]));\n    }\n});\n\nuploadCollection.addEventListener("ui5-item-delete", e => {\n    uploadCollection.removeChild(e.detail.item);\n});',g=".header {\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    flex-wrap: wrap;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n\n.header > * {\n    margin: 0.25rem;\n}";function y(e){const{Editor:n}={...(0,o.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:v,js:b,css:g})}function C(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}const w={},U=void 0,S={id:"components/fiori/UploadCollection/UploadCollection",title:"UploadCollection",description:"This component allows you to represent files before uploading them to a server, with the help of ui5-upload-collection-item.",source:"@site/docs/components/fiori/UploadCollection/UploadCollection.mdx",sourceDirName:"components/fiori/UploadCollection",slug:"/components/fiori/UploadCollection/",permalink:"/ui5-webcomponents/components/fiori/UploadCollection/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"TimelineItem",permalink:"/ui5-webcomponents/components/fiori/Timeline/TimelineItem"},next:{title:"UploadCollectionItem",permalink:"/ui5-webcomponents/components/fiori/UploadCollection/UploadCollectionItem"}},E={},T=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"mode",id:"mode",level:3},{value:"noDataDescription",id:"nodatadescription",level:3},{value:"noDataText",id:"nodatatext",level:3},{value:"hideDragOverlay",id:"hidedragoverlay",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"header",id:"header",level:3},{value:"Events",id:"events",level:2},{value:"drop",id:"drop",level:3},{value:"item-delete",id:"item-delete",level:3},{value:"selection-change",id:"selection-change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Renaming Files",id:"renaming-files",level:3},{value:"Upload States",id:"upload-states",level:3},{value:"Drag and Drop",id:"drag-and-drop",level:3}];function D(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This component allows you to represent files before uploading them to a server, with the help of ",(0,i.jsx)(n.code,{children:"ui5-upload-collection-item"}),".\nIt also allows you to show already uploaded files."]}),"\n",(0,i.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents-fiori/dist/UploadCollection.js";'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";'})," (for ",(0,i.jsx)(n.code,{children:"ui5-upload-collection-item"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"mode",children:"mode"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the mode of the ",(0,i.jsx)(n.code,{children:"ui5-upload-collection"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"}),' Mode "Delete" has no effect. The delete button is controlled by the ',(0,i.jsx)(n.code,{children:"hideDeleteButton"})," property of UploadCollectionItem"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"None" | "SingleSelect" | "SingleSelectBegin" | "SingleSelectEnd" | "SingleSelectAuto" | "MultiSelect" | "Delete"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'"None"'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"nodatadescription",children:"noDataDescription"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Allows you to set your own text for the 'No data' description."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"nodatatext",children:"noDataText"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Allows you to set your own text for the 'No data' text."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"hidedragoverlay",children:"hideDragOverlay"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["By default there will be drag and drop overlay shown over the ",(0,i.jsx)(n.code,{children:"ui5-upload-collection"})," when files are dragged. If you don't intend to use drag and drop, set this property.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," It is up to the application developer to add handler for ",(0,i.jsx)(n.code,{children:"drop"})," event and handle it. ",(0,i.jsx)(n.code,{children:"ui5-upload-collection"})," only displays an overlay."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the accessible ARIA name of the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the items of the ",(0,i.jsx)(n.code,{children:"ui5-upload-collection"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Use ",(0,i.jsx)(n.code,{children:"ui5-upload-collection-item"})," for the intended design."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<IUploadCollectionItem>"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"header"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the ",(0,i.jsx)(n.code,{children:"ui5-upload-collection"})," header.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:"header"})," slot is provided, the labelling of the ",(0,i.jsx)(n.code,{children:"UploadCollection"})," is a responsibility of the application developer. ",(0,i.jsx)(n.code,{children:"accessibleName"})," should be used."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"drop",children:"drop"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired when an element is dropped inside the drag and drop overlay.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The ",(0,i.jsx)(n.code,{children:"drop"})," event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the ",(0,i.jsx)(n.code,{children:"ui5-upload-collection"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Event"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"item-delete",children:"item-delete"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Fired when the delete button of any item is pressed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<UploadCollectionItemDeleteEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"item"}),": ",(0,i.jsx)(n.code,{children:"HTMLElement"}),(0,i.jsx)("br",{}),"The ",(0,i.jsx)(n.code,{children:"ui5-upload-collection-item"})," which was deleted."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"selection-change",children:"selection-change"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired when selection is changed by user interaction in ",(0,i.jsx)(n.code,{children:"SingleSelect"})," and ",(0,i.jsx)(n.code,{children:"MultiSelect"})," modes."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<UploadCollectionSelectionChangeEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"selectedItems"}),": ",(0,i.jsx)(n.code,{children:"Array"}),(0,i.jsx)("br",{}),"An array of the selected items."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(n.p,{children:"No CSS parts available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,i.jsx)(n.h3,{id:"renaming-files",children:"Renaming Files"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.h3,{id:"upload-states",children:"Upload States"}),"\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(n.h3,{id:"drag-and-drop",children:"Drag and Drop"}),"\n",(0,i.jsx)(C,{})]})}function I(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var i=t(4041);const o={},l=i.createContext(o);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);