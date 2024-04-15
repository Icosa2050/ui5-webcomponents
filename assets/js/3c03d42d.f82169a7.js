"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[6144],{3960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(1085),o=n(1184);const r={},i="Developing Custom UI5 Web Components",a={id:"docs/development/custom-UI5-Web-Components",title:"Developing Custom UI5 Web Components",description:"Note: All examples in this tutorial are taken from the Demo UI5 Web Component (ui5-demo), generated by the package initialization script.",source:"@site/docs/docs/5-development/02-custom-UI5-Web-Components.md",sourceDirName:"docs/5-development",slug:"/docs/development/custom-UI5-Web-Components",permalink:"/ui5-webcomponents/docs/development/custom-UI5-Web-Components",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Creating a Custom UI5 Web Components Package",permalink:"/ui5-webcomponents/docs/development/custom-UI5-Web-Components-Packages"},next:{title:"Understanding UI5 Web Components Metadata",permalink:"/ui5-webcomponents/docs/development/understanding-components-metadata"}},d={},l=[{value:"The Class Definition",id:"the-class-definition",level:3},{value:"The UI5Element Base Class",id:"the-ui5element-base-class",level:3},{value:"The Metadata Object",id:"the-metadata-object",level:3},{value:"The Render Engine",id:"the-render-engine",level:3},{value:"The Template",id:"the-template",level:3},{value:"The CSS Definitions",id:"the-css-definitions",level:3},{value:"The Dependencies",id:"the-dependencies",level:3},{value:"Defining the Web Component",id:"defining-the-web-component",level:3},{value:"Adding i18n Support",id:"adding-i18n-support",level:3},{value:"Adding a Property",id:"adding-a-property",level:2},{value:"The Template File",id:"the-template-file",level:2},{value:"The CSS",id:"the-css",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"developing-custom-ui5-web-components",children:"Developing Custom UI5 Web Components"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," All examples in this tutorial are taken from the Demo UI5 Web Component (",(0,s.jsx)(t.code,{children:"ui5-demo"}),"), generated by the package initialization script.\nFor more information on creating a new package with a demo web component inside, click ",(0,s.jsx)(t.a,{href:"/ui5-webcomponents/docs/development/custom-UI5-Web-Components-Packages",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"the-class-definition",children:"The Class Definition"}),"\n",(0,s.jsx)("a",{name:"classdef"}),"\n",(0,s.jsxs)(t.p,{children:["The main file representing the web component is ",(0,s.jsx)(t.code,{children:"Demo.js"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\n\n// Template\nimport DemoTemplate from "./generated/templates/DemoTemplate.lit.js";\n\n// Styles\nimport DemoCss from "./generated/themes/Demo.css.js";\n\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n\n\tstatic get styles() {\n\t\treturn DemoCss;\n\t}\n\n\n\tstatic get dependencies() {\n\t\treturn []; // array of components used internally\n\t}\n}\n\nDemo.define();\n\nexport default Demo;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"the-ui5element-base-class",children:"The UI5Element Base Class"}),"\n",(0,s.jsxs)(t.p,{children:["Every UI5 Web Component must extend the base class ",(0,s.jsx)(t.code,{children:"UI5Element"}),", provided by the ",(0,s.jsx)(t.code,{children:"@ui5/webcomponents-base"})," package:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\n\nclass Demo extends UI5Element {\n\n}\n\nexport default Demo;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"the-metadata-object",children:"The Metadata Object"}),"\n",(0,s.jsx)(t.p,{children:"Metadata is a JavaScript object, containing information about the public interface of a UI5 Web Component (tag name, properties, slots, events, etc.)."}),"\n",(0,s.jsxs)(t.p,{children:["Metadata is passed via the ",(0,s.jsx)(t.code,{children:"metadata"})," static getter:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n}\n\nexport default Demo;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["So far, we've defined a ",(0,s.jsx)(t.code,{children:"ui5-demo"})," web component with no properties, slots or events."]}),"\n",(0,s.jsxs)(t.p,{children:["For a complete reference to all metadata entities, click ",(0,s.jsx)(t.a,{href:"/ui5-webcomponents/docs/development/understanding-components-metadata",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"the-render-engine",children:"The Render Engine"}),"\n",(0,s.jsxs)(t.p,{children:["UI5 Web Components are agnostic of the DOM render engine used. However, all standard UI5 Web Components (",(0,s.jsx)(t.code,{children:"@ui5/webcomponents"}),", ",(0,s.jsx)(t.code,{children:"@ui5/webcomponents-fiori"}),", etc.)\nuse ",(0,s.jsx)(t.a,{href:"https://github.com/Polymer/lit-html",children:"lit-html"})," as the rendering technology of choice."]}),"\n",(0,s.jsxs)(t.p,{children:["The render engine is defined via the ",(0,s.jsx)(t.code,{children:"render"})," static getter:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n}\n\nexport default Demo;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Here we import ",(0,s.jsx)(t.code,{children:"LitRenderer.js"})," from the ",(0,s.jsx)(t.code,{children:"@ui5/webcomponents-base"})," package which is a very tiny wrapper around ",(0,s.jsx)(t.code,{children:"lit-html"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"the-template",children:"The Template"}),"\n",(0,s.jsx)(t.p,{children:"Now that we've defined the rendering technology of choice, we can pass a template in that technology's syntax."}),"\n",(0,s.jsxs)(t.p,{children:["This is done via the ",(0,s.jsx)(t.code,{children:"template"})," static getter:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\n\n// Template\nimport DemoTemplate from "./generated/templates/DemoTemplate.lit.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n}\n\nexport default Demo;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The standard UI5 Web Components use ",(0,s.jsx)(t.a,{href:"https://github.com/wycats/handlebars.js/",children:"handlebars"})," templates that are automatically converted\nto ",(0,s.jsx)(t.code,{children:"lit-html"})," syntax by the build script."]}),"\n",(0,s.jsxs)(t.p,{children:["If you have a ",(0,s.jsx)(t.code,{children:"Demo.hbs"})," file along with the ",(0,s.jsx)(t.code,{children:"Demo.js"})," file, the build script is going to create for you ",(0,s.jsx)(t.code,{children:"generated/templates/DemoTemplate.lit.js"})," file.\nTherefore, we pass the content of this file to the ",(0,s.jsx)(t.code,{children:"template"})," static getter."]}),"\n",(0,s.jsxs)(t.p,{children:["For more information, see the ",(0,s.jsx)(t.a,{href:"#hbs",children:"next chapter"})," of this tutorial."]}),"\n",(0,s.jsx)(t.h3,{id:"the-css-definitions",children:"The CSS Definitions"}),"\n",(0,s.jsxs)(t.p,{children:["You can pass CSS to be inserted in the shadow root of the UI5 Web Component by using the ",(0,s.jsx)(t.code,{children:"styles"})," static getter:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\n\n// Template\nimport DemoTemplate from "./generated/templates/DemoTemplate.lit.js";\n\n// Styles\nimport DemoCss from "./generated/themes/Demo.css.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n\n\tstatic get styles() {\n\t\treturn DemoCss;\n\t}\n}\n\nexport default Demo;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If you have a ",(0,s.jsx)(t.code,{children:"themes/Demo.css"})," file, the build script will automatically generate for you a ",(0,s.jsx)(t.code,{children:"generated/themes/Demo.css.js"})," file, which\nin addition to your component's CSS, also contains definitions for all CSS variables for the default theme. You can define your own CSS\nvariables for each theme in the respective theme directory in ",(0,s.jsx)(t.code,{children:"themes/"}),":"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"File"}),(0,s.jsx)(t.th,{children:"Descriptions"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_horizon/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_horizon"})," theme."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_horizon_hcb/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_horizon_hcb"})," theme."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_fiori_3/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_fiori_3"})," theme."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_fiori_3_dark/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_fiori_3_dark"})," theme."]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For more information, see the ",(0,s.jsx)(t.a,{href:"#css",children:"CSS"})," chapter of this tutorial."]}),"\n",(0,s.jsx)(t.h3,{id:"the-dependencies",children:"The Dependencies"}),"\n",(0,s.jsxs)(t.p,{children:["You must import all other web components, used inside the ",(0,s.jsx)(t.code,{children:".hbs"})," template file. Otherwise, the internally used web components won't be defined."]}),"\n",(0,s.jsxs)(t.p,{children:["Furthermore, in order to make use of the ",(0,s.jsx)(t.a,{href:"/ui5-webcomponents/docs/advanced/scoping",children:"Scoping"})," feature, you must list all the internally used web components in the ",(0,s.jsx)(t.code,{children:"dependencies"})," static getter,\nas the framework reads the dependencies and scopes the tag names of the listed web components."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("b",{children:"For example:"})," If the ",(0,s.jsx)(t.code,{children:"ui5-icon"})," tag (or any other standard or custom UI5 Web Component) is used inside the template, you must import the ",(0,s.jsx)(t.code,{children:"Icon"})," web component and add it to the ",(0,s.jsx)(t.code,{children:"dependencies"})," static getter as shown below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\n\n// Template\nimport DemoTemplate from "./generated/templates/DemoTemplate.lit.js";\n// Styles\nimport DemoCss from "./generated/themes/Demo.css.js";\n\nimport Icon from "@ui5/webcomponents/dist/Icon.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\t\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n\n\tstatic get styles() {\n\t\treturn DemoCss;\n\t}\n\n\tstatic get dependencies() {\n\t\treturn [Icon]; // array of components used internally\n\t}\n}\n\nexport default Demo;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"defining-the-web-component",children:"Defining the Web Component"}),"\n",(0,s.jsx)(t.p,{children:"Defining a web component is necessary in order to register it in the browser."}),"\n",(0,s.jsxs)(t.p,{children:["This is done by calling the ",(0,s.jsx)(t.code,{children:"UI5Element.define"})," static method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\n\n// Template\nimport DemoTemplate from "./generated/templates/DemoTemplate.lit.js";\n\n// Styles\nimport DemoCss from "./generated/themes/Demo.css.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n\n\tstatic get styles() {\n\t\treturn DemoCss;\n\t}\n\n\tstatic get dependencies() {\n\t\treturn []; // array of components used internally\n\t}\n}\n\nDemo.define();\n\nexport default Demo;\n'})}),"\n",(0,s.jsx)(t.h3,{id:"adding-i18n-support",children:"Adding i18n Support"}),"\n",(0,s.jsx)(t.p,{children:"To do that, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Get and assign an i18n bundle during component definition"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'await Demo.i18nBundle = getI18nBundle("my-ui5-web-components");\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"getI18nBundle"})," method is provided by the ",(0,s.jsx)(t.code,{children:"i18nBundle.js"})," module from the ",(0,s.jsx)(t.code,{children:"@ui5/webcomponents-base"})," package."]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:['Get texts from the bundle (in this case for the "Count" word), according to the currently ',(0,s.jsx)(t.a,{href:"/ui5-webcomponents/docs/advanced/configuration",children:"configured"})," language\n",(0,s.jsx)(t.code,{children:"return Demo.i18nBundle.getText(COUNT);"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Create a simple getter ",(0,s.jsx)(t.code,{children:"get countText()"})," to use it in the template later-on."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"So the final source code is:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";\nimport { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";\n\n// Template\nimport DemoTemplate from "./generated/templates/DemoTemplate.lit.js";\n\n// Styles\nimport DemoCss from "./generated/themes/Demo.css.js";\n\nimport { COUNT } from "./generated/i18n/i18n-defaults.js";\n\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t},\n\tslots: {\n\t},\n\tevents: {\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n\n\tstatic get styles() {\n\t\treturn DemoCss;\n\t}\n\n\tstatic get dependencies() {\n\t\treturn []; // array of components used internally\n\t}\n\n\tstatic async onDefine() {\n\t\tDemo.i18nBundle = await getI18nBundle("my-ui5-web-components");\n\t}\n\n\tget counterText() {\n\t\treturn Demo.i18nBundle.getText(COUNT);\n\t}\n}\n\nDemo.define();\n\nexport default Demo;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Please, note that here we use the ",(0,s.jsx)(t.code,{children:"onDefine"})," method of ",(0,s.jsx)(t.code,{children:"UI5Element"})," in order to ensure that i18n resources have been fetched\nbefore the web component has been defined. The used namespace for resource registration (in this example ",(0,s.jsx)(t.code,{children:"my-ui5-web-components"}),")\nis the ",(0,s.jsx)(t.code,{children:"name"})," property of your ",(0,s.jsx)(t.code,{children:"package.json"})," file."]}),"\n",(0,s.jsx)(t.h2,{id:"adding-a-property",children:"Adding a Property"}),"\n",(0,s.jsxs)(t.p,{children:["To add a property, you need to change the metadata object. In this example, new ",(0,s.jsx)(t.code,{children:"count"})," property has been added with default value ",(0,s.jsx)(t.code,{children:"0"}),". Also, we use a custom type ",(0,s.jsx)(t.code,{children:"Integer"})," as validator for the property."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";\n\nconst metadata = {\n\ttag: "ui5-demo",\n\tproperties: {\n\t\tcounter: {\n\t\t\tvalidator: Integer,\n\t\t\tdefaultValue: 0,\n\t\t}\n\t},\n};\n\nclass Demo extends UI5Element {\n\tstatic get metadata() {\n\t\treturn metadata;\n\t}\n\n\tstatic get render() {\n\t\treturn litRender;\n\t}\n\n\tstatic get template() {\n\t\treturn DemoTemplate;\n\t}\n\n\tstatic get styles() {\n\t\treturn DemoCss;\n\t}\n\n\tstatic get dependencies() {\n\t\treturn []; // array of components used internally\n\t}\n\n\tstatic async onDefine() {\n\t\tDemo.i18nBundle = await getI18nBundle("my-ui5-web-components");\n\t}\n\n\tget countText() {\n\t\treturn Demo.i18nBundle.getText(COUNT);\n\t}\n}\n\nDemo.define();\n\nexport default Demo;\n'})}),"\n",(0,s.jsx)(t.h2,{id:"the-template-file",children:"The Template File"}),"\n",(0,s.jsx)("a",{name:"hbs"}),"\n",(0,s.jsxs)(t.p,{children:["The template of the web component is in the ",(0,s.jsx)(t.code,{children:"Demo.hbs"})," file.\nIn this particular example, it looks like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-handlebars",children:"<div>{{countText}} :: {{count}}</div>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The context in the template is the ",(0,s.jsx)(t.strong,{children:"Web Component instance"}),", therefore you can directly use any properties/getters on the object.\nHere, we see the ",(0,s.jsx)(t.code,{children:"countText"}),' getter that will return the "Count" word, translated into the currently configured language\nand the ',(0,s.jsx)(t.code,{children:"count"}),' property, defined in the previous step (for example, in English we will get "Count :: 0").']}),"\n",(0,s.jsxs)(t.p,{children:["As explained above, the ",(0,s.jsx)(t.code,{children:".hbs"})," file is transformed by the build script to a ",(0,s.jsx)(t.code,{children:".js"})," file in the ",(0,s.jsx)(t.code,{children:"lit-html"})," syntax. More specifically, this file\nis provided to the Web Component class."]}),"\n",(0,s.jsxs)(t.p,{children:["For a full description of the ",(0,s.jsx)(t.code,{children:".hbs"})," template features and syntax, see ",(0,s.jsxs)(t.a,{href:"/ui5-webcomponents/docs/development/understanding-hbs-templates",children:["Understanding the Handlebars (",(0,s.jsx)(t.code,{children:".hbs"}),") templates"]}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"the-css",children:"The CSS"}),"\n",(0,s.jsx)("a",{name:"css"}),"\n",(0,s.jsx)(t.p,{children:"Let's inspect the following files (one with CSS declarations, the others with the values of the CSS variables for the themes)."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"File"}),(0,s.jsx)(t.th,{children:"Purpose"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/Demo.css"})}),(0,s.jsx)(t.td,{children:"All CSS rules for the Web Component, same for all themes; will be inserted in the shadow root."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_horizon/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_horizon"})," theme."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_horizon_hcb/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_horizon_hcb"})," theme."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_fiori_3/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_fiori_3"})," theme."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"themes/sap_fiori_3_dark/parameters-bundle.css"})}),(0,s.jsxs)(t.td,{children:["Values for the component-specific CSS variables for the ",(0,s.jsx)(t.code,{children:"sap_fiori_3_dark"})," theme."]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"Demo.css"})," file, in addition to other selectors, we have:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:":host {\n    border: 2px solid var(--ui5-demo-border-color);\n    background-color: var(--sapBackgroundColor);\n    color: var(--sapTextColor);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The CSS variables starting with ",(0,s.jsx)(t.code,{children:"--sap"})," are standard and provided by the framework.\nAll the rest are custom for the specific web component."]}),"\n",(0,s.jsxs)(t.p,{children:["Respectively, the definitions file for, let's say ",(0,s.jsx)(t.code,{children:"sap_fiori_3"}),", contains:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:":root {\n    --ui5-demo-border-color: green;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["What's important to understand here is that you author all the ",(0,s.jsx)(t.code,{children:".css"})," files listed in the table above, but the build script\ngenerates from them a single ",(0,s.jsx)(t.code,{children:".js"})," file for you, and this is namely the file you pass to the Web Component class: ",(0,s.jsx)(t.code,{children:"generated/themes/Demo.css.js"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(4041);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);