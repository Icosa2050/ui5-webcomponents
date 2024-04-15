import{x as r}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";const c={default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}}},g={package:"@ui5/webcomponents",tagName:"ui5-option",showDefaultStoryOnly:!0},l={title:"Main/Select/Option",component:"Option",argTypes:c},d=t=>r`<ui5-select>
   <ui5-option
   additional-text="${o(t.additionalText)}"
   icon="${o(t.icon)}"
   ?selected="${o(t.selected)}"
   value="${o(t.value)}"
   >${s(t.default)}</ui5-option>
</ui5-select> `,e=d.bind({});e.tags=["_hidden_"];e.args={icon:"laptop",default:"Desktop",selected:!0};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`<ui5-select>
   <ui5-option
   additional-text="\${ifDefined(args.additionalText)}"
   icon="\${ifDefined(args.icon)}"
   ?selected="\${ifDefined(args.selected)}"
   value="\${ifDefined(args.value)}"
   >\${unsafeHTML(args.default)}</ui5-option>
</ui5-select> \`;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const u=["Basic"],$=Object.freeze(Object.defineProperty({__proto__:null,Basic:e,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{$ as C,g as c};
