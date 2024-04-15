import{j as e}from"./jsx-runtime-670e1be8.js";import{M as r}from"./index-a0d29ec6.js";import{F as o}from"./Footer-059739ae.js";import{u as i}from"./index-bd2d4f36.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-89d7f65d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function t(n){const s=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Getting started/Using assets"}),`
`,e.jsx(s.h1,{id:"using-additional-assets",children:"Using Additional Assets"}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["Most UI5 Web Components packages offer ",e.jsx(s.strong,{children:"additional assets"}),". This section explains what these are and how to use them."]})}),`
`,e.jsx(s.h2,{id:"what-are-additional-assets",children:"What Are Additional Assets"}),`
`,e.jsxs(s.p,{children:["These are ",e.jsx(s.strong,{children:"themes"}),", ",e.jsx(s.strong,{children:"text translations"}),", ",e.jsx(s.strong,{children:"locale data"})," etc. that are not shipped as part of the components/icons themselves, but can be loaded separately, if needed."]}),`
`,e.jsxs(s.p,{children:["These assets are important for ",e.jsx(s.strong,{children:"accessibility"})," and ",e.jsx(s.strong,{children:"globalization"}),"."]}),`
`,e.jsx(s.h2,{id:"importing-additional-assets",children:"Importing Additional Assets"}),`
`,e.jsxs(s.p,{children:["Import the ",e.jsx(s.code,{children:"dist/Assets.js"})," file of the respective NPM package:"]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:'import "@ui5/<PACKAGE-NAME>/dist/Assets.js'})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Project"}),e.jsx(s.th,{children:"NPM Package"}),e.jsx(s.th,{children:"Assets"}),e.jsx(s.th,{children:"Module"}),e.jsx(s.th,{children:"Notes"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"main"})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"i18n"}),", ",e.jsx(s.code,{children:"themes"})]}),e.jsx(s.td,{children:e.jsx(s.code,{children:"@ui5/webcomponents/dist/Assets.js"})}),e.jsxs(s.td,{children:["Theming parameters and translations for the components  ",e.jsx("br",{}),e.jsx("br",{})," ",e.jsxs(s.em,{children:["Automatically imports also:",e.jsx("br",{})," ",e.jsx(s.code,{children:"@ui5/webcomponents-localization/dist/Assets.js"})," ",e.jsx("br",{})," and ",e.jsx("br",{})," ",e.jsx(s.code,{children:"@ui5/webcomponents-theming/dist/Assets.js"})]})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"fiori"})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-fiori",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-fiori"})}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"i18n"}),", ",e.jsx(s.code,{children:"themes"})]}),e.jsx(s.td,{children:e.jsx(s.code,{children:"@ui5/webcomponents-fiori/dist/Assets.js"})}),e.jsxs(s.td,{children:["Theming parameters and translations for the components  ",e.jsx("br",{}),e.jsx("br",{})," ",e.jsxs(s.em,{children:["Automatically imports also:",e.jsx("br",{})," ",e.jsx(s.code,{children:"@ui5/webcomponents/dist/Assets.js"})]})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"icons"})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-icons"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"i18n"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"@ui5/webcomponents-icons/dist/Assets.js"})}),e.jsx(s.td,{children:'Translations for the tooltips / "aria labels" of several icons'})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"icons-tnt"})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-icons-tnt"})}),e.jsx(s.td,{children:"N/A"}),e.jsx(s.td,{children:"N/A"}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"icons-business-suite"})}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-icons-business-suite"})}),e.jsx(s.td,{children:"N/A"}),e.jsx(s.td,{children:"N/A"}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"localization"})," *"]}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-localization",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-localization"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"CLDR"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"@ui5/webcomponents-localization/dist/Assets.js"})}),e.jsxs(s.td,{children:["Locale data, needed for date/time/currency-related components ",e.jsx("br",{}),e.jsx("br",{})," ",e.jsx(s.em,{children:"You don't need to import the assets of this package directly."})]})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.code,{children:"theming"})," *"]}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://www.npmjs.com/package/@ui5/webcomponents-theming",target:"_blank",rel:"nofollow noopener noreferrer",children:"@ui5/webcomponents-theming"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"themes"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"@ui5/webcomponents-theming/dist/Assets.js"})}),e.jsxs(s.td,{children:["Additional themes' base parameters ",e.jsx("br",{}),e.jsx("br",{})," ",e.jsx(s.em,{children:"You don't need to import the assets of this package directly."})]})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"*"})," Only listed for completeness, included automatically by other packages."]}),`
`,e.jsx(s.p,{children:"For example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import "@ui5/webcomponents/dist/Assets.js";
`})}),`
`,e.jsx(s.p,{children:"and use:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<ui5-date-picker></ui5-date-picker>
`})}),`
`,e.jsx(s.p,{children:"with another language and another theme:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

setLanguage("es");
setTheme("sap_fiori_3_hcb");
`})}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"ui5-date-picker"})," component will have all translatable texts in Spanish, and the Spanish format settings (e.g. date format) will be used, and will be rendered with the ",e.jsx(s.code,{children:"sap_fiori_3_hcb"})," accessibility theme instead of the default theme."]}),`
`,e.jsx(s.h2,{id:"technical-aspects",children:"Technical Aspects"}),`
`,e.jsxs(s.p,{children:["Additional assets are ",e.jsx(s.code,{children:".json"})," files with the respective data. When you import the ",e.jsx(s.code,{children:"dist/Assets.js"})," file of a given package, assets are only ",e.jsx(s.strong,{children:"registered"}),`, but not yet fetched.
When they are needed, they are loaded on the fly with `,e.jsx(s.strong,{children:"dymamic imports"}),", and then used."]}),`
`,e.jsx(o,{})]})}function u(n={}){const{wrapper:s}=Object.assign({},i(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{u as default};
