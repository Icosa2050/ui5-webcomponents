"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[325],{4230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var o=t(1085),s=t(1184);const i={},a="Understanding UI5 Web Components APIs",d={id:"docs/getting-started/understanding-components-APIs",title:"Understanding UI5 Web Components APIs",description:"UI5 Web Components are just HTML. Therefore, their usage is identical",source:"@site/docs/docs/1-getting-started/03-understanding-components-APIs.md",sourceDirName:"docs/1-getting-started",slug:"/docs/getting-started/understanding-components-APIs",permalink:"/ui5-webcomponents/nightly/docs/getting-started/understanding-components-APIs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Importing UI5 Web Components",permalink:"/ui5-webcomponents/nightly/docs/getting-started/importing-components"},next:{title:"Using Icons",permalink:"/ui5-webcomponents/nightly/docs/getting-started/using-icons"}},c={},r=[{value:"1. How do I create a UI5 Web Component instance?",id:"1-how-do-i-create-a-ui5-web-component-instance",level:2},{value:"2. How do I set the properties/attributes of UI5 Web Components?",id:"2-how-do-i-set-the-propertiesattributes-of-ui5-web-components",level:2},{value:"3. How do I set the content of UI5 Web Components?",id:"3-how-do-i-set-the-content-of-ui5-web-components",level:2},{value:"4. How do I listen for events?",id:"4-how-do-i-listen-for-events",level:2},{value:"5. How do I call public methods?",id:"5-how-do-i-call-public-methods",level:2},{value:"6. Conclusion",id:"6-conclusion",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"understanding-ui5-web-components-apis",children:"Understanding UI5 Web Components APIs"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"UI5 Web Components are just HTML."})," Therefore, their usage is identical\nto the usage of standard HTML elements. Usually, Web Components creation and manipulation\nwill be done internally by your framework of choice."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"This section explains UI5 Web Components APIs and usage in general terms."})}),"\n",(0,o.jsx)(n.p,{children:"UI5 Web Components provide the following kinds of APIs:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"API Category"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#properties",children:"properties / attributes"})}),(0,o.jsx)(n.td,{children:"Define the look and behavior of the component"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#content",children:"slots"})}),(0,o.jsx)(n.td,{children:"Define whether you can put text or other HTML elements (and if yes, what kind) as DOM children of the component"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#events",children:"events"})}),(0,o.jsx)(n.td,{children:"Define what events the component fires due to user interaction"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#methods",children:"public methods"})}),(0,o.jsx)(n.td,{children:"Methods you can call on the component"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"1-how-do-i-create-a-ui5-web-component-instance",children:"1. How do I create a UI5 Web Component instance?"}),"\n",(0,o.jsx)("a",{name:"create"}),"\n",(0,o.jsxs)(n.p,{children:["The simplest way is to just add it somewhere in the ",(0,o.jsx)(n.code,{children:"<body>"})," of your HTML page."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<ui5-button>Click me</ui5-button>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.code,{children:"document.createElement"})," and then manually add\nthe element to the HTML document."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myButton = document.createElement("ui5-button");\ndocument.body.appendChild(myButton);\n'})}),"\n",(0,o.jsx)(n.p,{children:"In most real-world scenarios, the above will be done by your framework of choice."}),"\n",(0,o.jsx)(n.h2,{id:"2-how-do-i-set-the-propertiesattributes-of-ui5-web-components",children:"2. How do I set the properties/attributes of UI5 Web Components?"}),"\n",(0,o.jsx)("a",{name:"properties"}),"\n",(0,o.jsxs)(n.p,{children:['You can use attributes and properties to the same effect. Keep in mind that attribute\nnames are "kebab-case" (e.g. ',(0,o.jsx)(n.code,{children:"value-state"}),') while property names are "camelCase" (e.g. ',(0,o.jsx)(n.code,{children:"valueState"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"Attributes can be set directly on the web component in HTML."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-checkbox id="cb" value-state="Error"></ui5-checkbox>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Properties can only be set programmatically."}),"\n",(0,o.jsx)(n.p,{children:"To set a property:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myCb = document.getElementById("cb");\nmyCb.valueState = "Error";\n'})}),"\n",(0,o.jsx)(n.p,{children:"To set an attribute:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myCb = document.getElementById("cb");\nmyCb.setAttribute("value-state", "Error");\n'})}),"\n",(0,o.jsx)(n.p,{children:'A note on Boolean attributes: in HTML Boolean attributes may have no value\nor any value (most commonly same as their name). In any case, the presence of the attribute\nmeans it is "true" and its absence - "false".'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myCb = document.getElementById("cb");\nmyCb.setAttribute("checked", ""); // same as myCB.checked = true;\nmyCb.removeAttribute("checked"); // same as myCB.checked = false;\n'})}),"\n",(0,o.jsx)(n.h2,{id:"3-how-do-i-set-the-content-of-ui5-web-components",children:"3. How do I set the content of UI5 Web Components?"}),"\n",(0,o.jsx)("a",{name:"content"}),"\n",(0,o.jsx)(n.p,{children:"Some UI5 Web Components do not accept children or text. They are only modified by\nproperties and attributes."}),"\n",(0,o.jsxs)(n.p,{children:["An example of such a Web Component is the ",(0,o.jsx)(n.code,{children:"ui5-icon"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-icon name="add"></ui5-icon>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The icon accepts no text or other HTML elements inside its opening and closing tags.\nTherefore, in the next example, the text inside the ",(0,o.jsx)(n.code,{children:"<ui5-icon>"})," will be ignored."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-icon name="add">This is an icon</ui5-icon>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Other UI5 Web Components, such as ",(0,o.jsx)(n.code,{children:"<ui5-button>"})," accept text (and in addition HTML elements that make sense when writing text)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-button id="btn">This is the content of the button</ui5-button>\n<ui5-button>This is the <strong>content<content> of the button</ui5-button>\n<ui5-button>This is the <span class="myClass">content<span> of the button</ui5-button>\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can change the content of these elements with any suitable DOM API."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myButton = document.getElementById("btn");\nmyButton.textContent = "New text";\nmyButton.innerHTML = "New text"; // same effect as above\nmyButton.childNodes[0].nodeValue = "New text" // same result again\n'})}),"\n",(0,o.jsx)(n.p,{children:"Usually, you'll never have to do this manually either, as you'll bind the content of the button via the means\nprovided by the framework you're using, and the framework will be the one updating it for you."}),"\n",(0,o.jsx)(n.p,{children:"Finally, there are UI5 Web Components that only accept other HTML elements."}),"\n",(0,o.jsxs)(n.p,{children:["For example ",(0,o.jsx)(n.code,{children:"<ui5-popover>"})," may contain any HTML element - standard elements and other custom elements alike."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<ui5-popover>\n\t<div>This is my content</div>\n\t<p>This is some more content</p>\n\t<ui5-button>Button on a popover</ui5-button>\n</ui5-popover>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Manipulating the content of such Web Components is done again with the standard DOM APIs."}),"\n",(0,o.jsx)(n.p,{children:"For example, to add something else to the popover above:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const popover = document.getElementsByTagName("ui5-popover")[0];\nconst newChild = document.createElement("div");\npopover.appendChild(newChild);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Again, normally you won't need to do this manually, but your framework will do it for you."}),"\n",(0,o.jsx)(n.p,{children:"Now, let's have a look at a Web Component that is intended to have only certain children:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-tabcontainer id="tc1">\n\t<ui5-tab text="Laptops" additional-text="125"></ui5-tab>\n\t<ui5-tab-separator></ui5-tab-separator>\n\t<ui5-tab text="Phones" design="Positive" additional-text="25"></ui5-tab>\n\t<ui5-tab text="Tablets" design="Negative" additional-text="40"></ui5-tab>\n</ui5-tabcontainer>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"<ui5-tabcontainer>"})," should only contain ",(0,o.jsx)(n.code,{children:"<ui5-tab>"})," and ",(0,o.jsx)(n.code,{children:"<ui5-tab-separator>"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The manipulation is exactly the same as with the other Web Components. For example, to add a new tab:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const tc = document.getElementById("tc1");\nconst newTab = document.createElement("ui5-tab");\nnewTab.text = "Smart Watches";\nnewTab.design = "Positive";\ntc.appendChild(newTab);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And finally, some UI5 Web Components may render their children in different places, depending on the purpose\nof each child."}),"\n",(0,o.jsxs)(n.p,{children:["Let's have a look at the ",(0,o.jsx)(n.code,{children:"<ui5-popover>"})," again. After consulting the documentation, we can see that this particular\nWeb Component accepts three categories of children: ",(0,o.jsx)(n.code,{children:"default, footer, header"}),". For ",(0,o.jsx)(n.code,{children:"footer"})," and ",(0,o.jsx)(n.code,{children:"header"}),"\nthe children can be any type of HTML Element (hence ",(0,o.jsx)(n.code,{children:"HTMLElement"}),"), while for ",(0,o.jsx)(n.code,{children:"default"})," they can be both\nHTML Elements and text (hence ",(0,o.jsx)(n.code,{children:"Node"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["To tell the ",(0,o.jsx)(n.code,{children:"<ui5-popover>"})," which child goes where, use the ",(0,o.jsx)(n.code,{children:"slot"})," attribute on it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<ui5-popover>\n\t<div slot="header">This will be used as a header</div>\n\n\t<div>Some popover content</div>\n\t<div>Some more content</div>\n\tThis text will also go to the default slot.\n\n\t<div slot="footer">\n\t\t<ui5-button>Do some action</ui5-button>\n\t</div>\n</ui5-popover>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You do not have to supply the ",(0,o.jsx)(n.code,{children:"slot"})," attribute for the ",(0,o.jsx)(n.code,{children:"default"})," slot of any Web Component."]}),"\n",(0,o.jsxs)(n.p,{children:["Also, since text nodes cannot have attributes in HTML, this also means that only the ",(0,o.jsx)(n.code,{children:"default"})," slot can\naccept text (can be of type ",(0,o.jsx)(n.code,{children:"Node"}),") and all text nodes go there. Every UI5 Web Component that has slots,\nhas at least a default slot."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's a summary of ",(0,o.jsx)(n.code,{children:"slot"})," types:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Slot Type"}),(0,o.jsx)(n.th,{children:"Allowed Children"}),(0,o.jsx)(n.th,{children:"Example"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Node"})}),(0,o.jsx)(n.td,{children:"All HTML elements and text"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"ui5-button"})," default slot"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"HTMLElement"})}),(0,o.jsx)(n.td,{children:"HTML elements only (no text)"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"ui5-popover"})," ",(0,o.jsx)(n.code,{children:"header"})," slot"]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"4-how-do-i-listen-for-events",children:"4. How do I listen for events?"}),"\n",(0,o.jsx)("a",{name:"events"}),"\n",(0,o.jsx)(n.p,{children:"For this task, you can again use standard DOM methods:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myMessage = document.getElementsByTagName("ui5-message-strip")[0];\nmyMessage.addEventListener("close", () => {\n\tconsole.log("The user dismissed the message");\n});\n\nconst myButton = document.getElementsByTagName("ui5-button")[0];\nmyButton.addEventListener("click", () => {\n\tconsole.log("The user clicked the button");\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"For the events fired by each UI5 Web Component, consult the documentation."}),"\n",(0,o.jsxs)(n.p,{children:["Like with most other tasks, you'll use your framework's syntax to bind to events, and you'll rarely,\nif ever, need to call ",(0,o.jsx)(n.code,{children:"addEventListener"})," yourself."]}),"\n",(0,o.jsxs)(n.p,{children:["Please, note, however that some frameworks (e.g. React) cannot use their standard syntax\nfor binding to custom events (such as ",(0,o.jsx)(n.code,{children:"close"}),"), but only for standard ones (such as ",(0,o.jsx)(n.code,{children:"click"}),").\nSo, for custom events in React you'd have to get a reference to the element and call ",(0,o.jsx)(n.code,{children:"addEventListener"})," manually."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information, please check our ",(0,o.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/frameworks/React",children:"React tutorial"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"5-how-do-i-call-public-methods",children:"5. How do I call public methods?"}),"\n",(0,o.jsx)("a",{name:"methods"}),"\n",(0,o.jsx)(n.p,{children:"Get a reference to the UI5 Web Component and call the method on it, as you would with any other HTML element."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const myDialog = document.getElementsByTagName("ui5-dialog")[0];\nmyDialog.show();\n'})}),"\n",(0,o.jsx)(n.p,{children:"Consult the documentation for the available public methods for each UI5 Web Component."}),"\n",(0,o.jsx)(n.h2,{id:"6-conclusion",children:"6. Conclusion"}),"\n",(0,o.jsx)("a",{name:"conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["As you can see from this article, UI5 Web Components, being HTML elements in the first place,\ncomply with the same rules. There are some novelties that come with the Web Components standard,\nsuch as ",(0,o.jsx)(n.code,{children:"slot"}),", but otherwise everything else is what you already know and use from HTML."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var o=t(4041);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);