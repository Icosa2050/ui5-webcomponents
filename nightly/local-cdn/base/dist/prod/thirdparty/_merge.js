"use strict";import g from"./isPlainObject.js";var c=Object.create(null),u=function(p,m,A,d){var n,t,e,a,o,i,r=arguments[2]||{},f=3,l=arguments.length,s=arguments[0]||!1,y=arguments[1]?void 0:c;for(typeof r!="object"&&typeof r!="function"&&(r={});f<l;f++)if((o=arguments[f])!=null)for(a in o)n=r[a],e=o[a],!(a==="__proto__"||r===e)&&(s&&e&&(g(e)||(t=Array.isArray(e)))?(t?(t=!1,i=n&&Array.isArray(n)?n:[]):i=n&&g(n)?n:{},r[a]=u(s,arguments[1],i,e)):e!==y&&(r[a]=e));return r};export default u;
//# sourceMappingURL=_merge.js.map
