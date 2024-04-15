import{j as e}from"./jsx-runtime-670e1be8.js";import{M as l}from"./index-a0d29ec6.js";import{F as r}from"./Footer-059739ae.js";import{u as i}from"./index-bd2d4f36.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-89d7f65d.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function s(d){const n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",ul:"ul",li:"li",pre:"pre",p:"p",h3:"h3"},i(),d.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Migrating to version 2.0 guide"}),`
`,e.jsx(n.h1,{id:"ui5-web-components-20-migration-guide",children:"UI5 Web Components 2.0 migration guide"}),`
`,e.jsx(n.h2,{id:"general-and-framework",children:"General and Framework"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Method"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UI5Element#render"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"UI5Element#renderer"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Method"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Device#isIE"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"N/A"})," (removed)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Module"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CSP.js"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"N/A"})," (removed)"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"npm init"})," Option"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"JavaScript"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"N/A"})," (removed)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Code Documentation"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"API.json"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"custom-elements-manifest.json"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Assets file"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Assets-static.js"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Assets.js"})," (dynamic)"]})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removed ",e.jsx(n.code,{children:"UI5Element#render"})," method in favour of ",e.jsx(n.code,{children:"UI5Element#renderer"}),'. If you previously used "render"']}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`class MyClass extends UI5Element {
    static get render() {
        return litRenderer;
    }
}
`})}),`
`,e.jsx(n.p,{children:'start using "renderer"'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`class MyClass extends UI5Element {
    static get renderer() {
        return litRenderer;
    }
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Device#isIE"})," method has been removed and no longer available"]}),`
`,e.jsxs(n.li,{children:["Removed the ",e.jsx(n.code,{children:"CSP.js"})," module and the creation of ",e.jsx(n.code,{children:"<style>"})," and ",e.jsx(n.code,{children:"<link>"})," tags, as all browsers now support adoptedStyleSheets. The following APIs are not available any more and should not be used:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { setUseLinks } from "@ui5/webcomponents-base/dist/CSP.js"
import { setPackageCSSRoot } from "@ui5/webcomponents-base/dist/CSP.js"
import { setPreloadLinks } from "@ui5/webcomponents-base/dist/CSP.js"
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`Removed the JavaScript template option from @ui5/create-webcomponents-package
Previously `,e.jsx(n.code,{children:"npm init @ui5/webcomponents-package"}),` used to create JS-based project, however now it will be TypeScript-based project.
If you previously used `,e.jsx(n.code,{children:"npm init @ui5/webcomponents-package --enable-typescript"})," to create  TypeScript-based project, now it's by default, e.g ",e.jsx(n.code,{children:"npm init @ui5/webcomponents-package"})," and ",e.jsx(n.code,{children:"--enable-typescript"})," is removed."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The JSDoc plugin has been removed, and the generation of ",e.jsx(n.code,{children:"api.json"})," has stopped. If you previously relied on the ",e.jsx(n.code,{children:"ui5-package/dist/api.json file"}),", you can now use ",e.jsx(n.code,{children:"ui5-package/dist/custom-elements.json"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"Assets-static.js"})," modules are removed. If you previously imported any ",e.jsx(n.code,{children:"Assets-static.js"})," module from any package:"]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import "@ui5/webcomponents/dist/Assets-static.js";
import "@ui5/webcomponents-icons/dist/Assets-static.js"
`})}),`
`,e.jsx(n.p,{children:"use the dynamic equivalent of it:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/Assets.js"
`})}),`
`,e.jsx(n.h2,{id:"main-package-ui5webcomponents",children:"Main package (@ui5/webcomponents)"}),`
`,e.jsx(n.h3,{id:"ui5-breadcrumbs",children:"ui5-breadcrumbs"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"separator-style"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"separators"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"separators"})," type enumeration"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"BreadcrumbsSeparatorStyle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"BreadcrumbsSeparator"})})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"separator-style"})," property is renamed to  ",e.jsx(n.code,{children:"separators"})," and the ",e.jsx(n.code,{children:"BreadcrumbsSeparatorStyle"})," enum is renamed to ",e.jsx(n.code,{children:"BreadcrumbsSeparator"}),`.
If you have previously used the `,e.jsx(n.code,{children:"separator-style"})," property:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-breadcrumbs separator-style="Slash">
`})}),`
`,e.jsxs(n.p,{children:["Now use  ",e.jsx(n.code,{children:"separators"}),"  instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-breadcrumbs separators="Slash">
`})}),`
`,e.jsx(n.h3,{id:"ui5-busy-indicator",children:"ui5-busy-indicator"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"size"})}),e.jsxs(n.td,{children:["values have changed, f.e. ",e.jsx(n.code,{children:"Small"})," to ",e.jsx(n.code,{children:"S"})]})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"size"})," property now accepts different values. If you previously used it like:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-busy-indicator size="Small"></ui5-busy-indicator>
`})}),`
`,e.jsx(n.p,{children:"Now use the new values instead:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-busy-indicator size="S"></ui5-busy-indicator>
`})}),`
`,e.jsx(n.h3,{id:"ui5-calendar",children:"ui5-calendar"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Event"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"selected-dates-change"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"selection-change"})})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The event ",e.jsx(n.code,{children:"selected-dates-change "})," is renamed to ",e.jsx(n.code,{children:"selection-change"}),`. In addition the event details
`,e.jsx(n.code,{children:"values"})," and ",e.jsx(n.code,{children:"dates"})," are renamed to ",e.jsx(n.code,{children:"selectedValues"})," and ",e.jsx(n.code,{children:"selectedDateValues"}),". If you previously used the Calendar event as follows:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`myCalendar.addEventListener("selected-dates-change", () => {
    const values = e.detail.values;
    const dates = e.detail.dates;
})
`})}),`
`,e.jsx(n.p,{children:"Now you have to use the new event name and details:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`myCalendar.addEventListener("selection-change", () => {
   const values = event.detail.selectedValues;
   const dates = event.detail.selectedDateValues;
})
`})}),`
`,e.jsx(n.h3,{id:"ui5-card",children:"ui5-card"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TS Interface"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ICardHeader"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"CardHeader"})," type"]})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removed the ",e.jsx(n.code,{children:"ICardHeader"})," interface. If you previously used the interface"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type { ICardHeader } from "@ui5/webcomponents-base/dist/Card.js"
`})}),`
`,e.jsx(n.p,{children:"Use the CardHeader type instead:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import type CardHeader from "@ui5/webcomponents-base/dist/CardHeader.js"
`})}),`
`,e.jsx(n.h3,{id:"ui5-card-header",children:"ui5-card-header"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"status"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"additional-text"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"CSS Shadow part"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"status"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"additional-text"})})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"status"})," property and its shadow part have been renamed. If you previously used them:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
    .cardHeader::part(status) { ... }
</style>
<ui5-card-header status="3 of 10"></ui5-popover>
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"additionalText"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
       .cardHeader::part(additional-text) { ... }
</style>
<ui5-card-header class="cardHeader" additional-text="3 of 10"></ui5-card-header>
`})}),`
`,e.jsx(n.h3,{id:"ui5-carousel",children:"ui5-carousel"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"pageIndicatorStyle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"pageIndicatorType"})})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"pageIndicatorStyle"})," no longer exists. If you previously used it like:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-carousel page-indicator-style="Numeric"></ui5-carousel>
`})}),`
`,e.jsxs(n.p,{children:["Now you should use ",e.jsx(n.code,{children:"pageIndicatorType"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-carousel page-indicator-type="Numeric"></ui5-carousel>
`})}),`
`,e.jsx(n.h3,{id:"ui5-color-palette-popover",children:"ui5-color-palette-popover"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Method"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"openPopover"})}),e.jsx(n.td,{children:"N/A (removed)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Method"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"showAt"})}),e.jsx(n.td,{children:"N/A (removed)"})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"openPopover"})," and ",e.jsx(n.code,{children:"showAt"})," methods are removed in favor of ",e.jsx(n.code,{children:"open"}),"  and ",e.jsx(n.code,{children:"opener"})," properties. If you previously used the imperative API:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`button.addEventListener("click", function(event) {
	colorPalettePopover.showAt(this);
});
`})}),`
`,e.jsx(n.p,{children:"Now the declarative API should be used instead:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-button id="opener">Open</ui5-button>
<ui5-color-palette-popover opener="opener">
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`button.addEventListener("click", function(event) {
	colorPalettePopover.open = !colorPalettePopover.open;
});
`})}),`
`,e.jsx(n.h3,{id:"ui5-color-picker",children:"ui5-color-picker"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"color"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The property ",e.jsx(n.code,{children:"color"}),"  is renamed to ",e.jsx(n.code,{children:"value"}),". If you previously used the change event of the ColorPicker as follows:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-color-picker color="red"></ui5-color-picker>
`})}),`
`,e.jsx(n.p,{children:"Now you have to use it like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-color-picker value="red"></ui5-color-picker>
`})}),`
`,e.jsx(n.h3,{id:"ui5-list",children:"ui5-list"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"busy"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"loading"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"busyDelay"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"loadingDelay"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"mode"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"selectionMode"})," + additionally the values of ",e.jsx(n.code,{children:"ListMode"})," have changed"]})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you have previously used the ",e.jsx(n.code,{children:"busy"}),", ",e.jsx(n.code,{children:"busyDelay"})," properties:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-list busy busy-delay="500"></ui5-list>
`})}),`
`,e.jsxs(n.p,{children:["now you must use  ",e.jsx(n.code,{children:"loading"})," and ",e.jsx(n.code,{children:"loadingDelay"})," properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-list loading loading-delay="500"></ui5-list>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you have previously used the ",e.jsx(n.code,{children:"mode"})," property and the ",e.jsx(n.code,{children:"ListMode"})," values:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-list mode="SingleSelect">
<ui5-list mode="MultiSelect">
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"selectionMode"}),"  and ",e.jsx(n.code,{children:"Single"}),", ",e.jsx(n.code,{children:"Multiple"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-list selection-mode="Single">
<ui5-list selection-mode="Multiple">
`})}),`
`,e.jsx(n.h3,{id:"ui5-option",children:"ui5-option"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"disabled"})}),e.jsx(n.td,{children:"N/A (removed)"})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"disabled"})," property of the ",e.jsx(n.code,{children:"ui5-option"}),` is removed.
If you have previously used the `,e.jsx(n.code,{children:"disabled"})," property:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-option disabled>Option</ui5-option>
`})}),`
`,e.jsx(n.p,{children:"it will no longer work for the component. Instead, do not render disabled options in the first place."}),`
`,e.jsx(n.h3,{id:"ui5-popover",children:"ui5-popover"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"horizontalAlign"})}),e.jsxs(n.td,{children:["values have changed, f.e. ",e.jsx(n.code,{children:"Left"})," to ",e.jsx(n.code,{children:"Start"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"placementType"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"placement"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"placement"})," type enumeration"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PopoverPlacementType"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PopoverPlacement"})})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Left"})," and ",e.jsx(n.code,{children:"Right"})," options have been renamed. If you previously used them to set the placement or the alignment of the popover:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-popover horizontal-align="Left" placement-type="Left"></ui5-popover>
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"Start"})," or ",e.jsx(n.code,{children:"End"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-popover horizontal-align="Start" placement-type="Start"></ui5-popover>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"placementType"})," property and the ",e.jsx(n.code,{children:"PopoverPlacementType"}),` enum have been renamed.
If you have previously used the `,e.jsx(n.code,{children:"placementType"})," property and the ",e.jsx(n.code,{children:"PopoverPlacementType"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-popover placement-type="Bottom"></ui5-popover>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import PopoverPlacementType from "@ui5/webcomponents/dist/types/PopoverPlacementType.js";
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"placement"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-placement="Bottom"></ui5-popover>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import PopoverPlacement from "@ui5/webcomponents/dist/types/PopoverPlacement.js";
`})}),`
`,e.jsx(n.h3,{id:"ui5-progress-indicator",children:"ui5-progress-indicator"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"disabled"})}),e.jsx(n.td,{children:"N/A"})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"disabled"})," property of the ",e.jsx(n.code,{children:"ui5-progress-indicator"}),` is removed.
If you have previously used the `,e.jsx(n.code,{children:"disabled"})," property, it won't take effect:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-progress-indicator disabled value="60"></ui5-progress-indicator>
`})}),`
`,e.jsx(n.h3,{id:"ui5-tab-container",children:"ui5-tab-container"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"fixed"})}),e.jsx(n.td,{children:"N/A (removed)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tabsOverflowMode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"overflowMode"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Type for ",e.jsx(n.code,{children:"backgroundDesign"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"TabContainerBackgroundDesign"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"BackgroundDesign"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"showOverflow"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"overflowButton"})," slot"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TS interface"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ITab"})}),e.jsx(n.td,{children:"N/A (removed)"})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'Property "fixed" is removed and there is no alternative provided. The TabContainer is no longer expandable/collapsible via use interaction. You can still show the TabContainer collapsed via the "collapsed" property.'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"If you have previously used:"}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tabcontainer tabs-overflow-mode="StartAndEnd"></ui5-tabcontainer>
`})}),`
`,e.jsx(n.p,{children:"Now use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tabcontainer overflow-mode="StartAndEnd"></ui5-tabcontainer>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["If you previously imported ",e.jsx(n.code,{children:"TabContainerBackgroundDesign"}),", use ",e.jsx(n.code,{children:"BackgroundDesign"})," instead."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"showOverflow"})," property is removed. If previously you have used:"]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tabcontainer show-overflow></ui5-tabcontainer>
`})}),`
`,e.jsxs(n.p,{children:["now use the ",e.jsx(n.code,{children:"overflowButton"})," slot:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tabcontainer>
	<ui5-button slot="startOverflowButton" id="startOverflowButton">Start</ui5-button>
	<ui5-button slot="overflowButton" id="endOverflowButton">End</ui5-button>
</ui5-tabcontainer>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You can no longer import and implement the ",e.jsx(n.code,{children:"ITab"})," interface. TabContainer is designed to work only with Tab and TabSeparator classes, so the interface was obsolete."]}),`
`]}),`
`,e.jsx(n.h3,{id:"ui5-tab",children:"ui5-tab"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Public method"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"getTabInStripDomRef"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"getDomRefInStrip"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Slot"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"subTabs"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"items"})})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If previously you have used:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`someTab.getTabInStripDomRef();
`})}),`
`,e.jsx(n.p,{children:"Now use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`someTab.getDomRefInStrip();
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If you have previously used:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tab id="nestedTab" slot="subTabs"></ui5-tab>
`})}),`
`,e.jsx(n.p,{children:"Now use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tab id="nestedTab" slot="items"></ui5-tab>
`})}),`
`,e.jsx(n.h3,{id:"ui5-tab-separator",children:"ui5-tab-separator"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Public method"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"getTabInStripDomRef"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"getDomRefInStrip"})})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If previously you have used:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`someTabSeparator.getTabInStripDomRef();
`})}),`
`,e.jsx(n.p,{children:"Now use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`someTabSeparator.getDomRefInStrip();
`})}),`
`,e.jsx(n.h3,{id:"ui5-tree",children:"ui5-tree"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"mode"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"selectionMode"})," + additionally the values of ",e.jsx(n.code,{children:"ListMode"})," have changed"]})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you have previously used the ",e.jsx(n.code,{children:"mode"})," property and the ",e.jsx(n.code,{children:"ListMode"})," values:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tree mode="SingleSelect">
<ui5-tree mode="MultiSelect">
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"selectionMode"}),"  and ",e.jsx(n.code,{children:"Single"}),", ",e.jsx(n.code,{children:"Multiple"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-tree selection-mode="Single">
<ui5-tree selection-mode="Multiple">

`})}),`
`,e.jsx(n.h2,{id:"fiori-package-ui5webcomponents-fiori",children:"Fiori package (@ui5/webcomponents-fiori)"}),`
`,e.jsx(n.h3,{id:"ui5-bar",children:"ui5-bar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"ui5-bar"})," component is now in ",e.jsx(n.code,{children:"main"})," library. If you previously imported  the ",e.jsx(n.code,{children:"ui5-bar"})," from ",e.jsx(n.code,{children:"fiori"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import "@ui5/webcomponents-fiori/dist/Bar.js;
`})}),`
`,e.jsxs(n.p,{children:["Now, import the ",e.jsx(n.code,{children:"ui5-bar"})," from ",e.jsx(n.code,{children:"main"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import "@ui5/webcomponents/dist/Bar.js";
`})}),`
`,e.jsx(n.h3,{id:"ui5-illustrated-message",children:"ui5-illustrated-message"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"size"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"design"})})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"size"})," property of the ",e.jsx(n.code,{children:"ui5-illustrated-message"})," is renamed to ",e.jsx(n.code,{children:"design"}),`.
If you have previously used the `,e.jsx(n.code,{children:"size"})," property:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-illustrated-message size="Dialog">
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"design"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-illustrated-message design="Dialog">
`})}),`
`,e.jsx(n.h3,{id:"ui5-upload-collection",children:"ui5-upload-collection"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"mode"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"selectionMode"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"mode"})," type enumeration"]}),e.jsxs(n.td,{children:["values: ",e.jsx(n.code,{children:"SingleSelect"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", etc."]}),e.jsxs(n.td,{children:["values: ",e.jsx(n.code,{children:"Single"}),", ",e.jsx(n.code,{children:"Multiple"}),", etc."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Property"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"selectionMode"})}),e.jsxs(n.td,{children:["no longer accepts ",e.jsx(n.code,{children:"Delete"})," as value in favor of ",e.jsx(n.code,{children:"hide-delete-button"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TS Interface"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"IUploadCollectionItem"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"UploadCollectionItem"})," type"]})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you have previously used the ",e.jsx(n.code,{children:"mode"})," property and the ",e.jsx(n.code,{children:"ListMode"})," values:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-upload-collection mode="SingleSelect">
<ui5-upload-collection mode="MultiSelect">
`})}),`
`,e.jsxs(n.p,{children:["Now use ",e.jsx(n.code,{children:"selectionMode"}),"  and ",e.jsx(n.code,{children:"Single"}),", ",e.jsx(n.code,{children:"Multiple"})," instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-upload-collection selection-mode="Single">
<ui5-upload-collection selection-mode="Multiple">

`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"selectionMode"}),` property no longer accepts "Delete" as value.
If you have previously used it:`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-upload-collection selection-mode="Delete"></ui5-upload-collection>
`})}),`
`,e.jsxs(n.p,{children:["Now omit it completely and use ",e.jsx(n.code,{children:"hide-delete-button"})," onto the ui5-upload-collection:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-upload-collection>
   <ui5-upload-collection-item hide-delete-button>  </ui5-upload-collection-item>
</ui5-upload-collection>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removed the ",e.jsx(n.code,{children:"IUploadCollectionItem"})," interface. If you previously used the interface:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import type { IUploadCollectionItem} from "@ui5/webcomponents-fiori/dist/UploadCollection.js"
`})}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"UploadCollectionItem"})," type instead:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import type UploadCollectionItem from "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js"
`})}),`
`,e.jsx(n.h2,{id:"icons-packages",children:"Icons packages"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Changed item"}),e.jsx(n.th,{children:"Old"}),e.jsx(n.th,{children:"New"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Icon"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"soccor"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"soccer"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Icon"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"add-polygone"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"add-polygon"})})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removed ",e.jsx(n.code,{children:"soccor"})," icon. Use ",e.jsx(n.code,{children:"soccer"})," instead."]}),`
`,e.jsxs(n.li,{children:["Removed ",e.jsx(n.code,{children:"add-polygone"})," icon. Use ",e.jsx(n.code,{children:"add-polygon"})," instead."]}),`
`]}),`
`,e.jsx(r,{})]})}function y(d={}){const{wrapper:n}=Object.assign({},i(),d.components);return n?e.jsx(n,Object.assign({},d,{children:e.jsx(s,d)})):s(d)}export{y as default};
