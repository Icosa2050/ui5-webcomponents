import{a}from"./chunk-FJPRWHXQ-79fdcd43.js";const{global:o}=__STORYBOOK_MODULE_GLOBAL__,{start:i}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:_}=o;_.STORYBOOK_ENV="web-components";var n=i(a);n.forceReRender;n.clientApi.raw;function l(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function u(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function c(e){o.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__=e}function E(){return o.__STORYBOOK_CUSTOM_ELEMENTS__||o.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:s,EventSource:d}=o,t;typeof module<"u"&&((t=module==null?void 0:module.hot)!=null&&t.decline)&&(module.hot.decline(),new d("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&s.location.reload()}catch{}}));export{u as a,E as g,l as i,c as s};
