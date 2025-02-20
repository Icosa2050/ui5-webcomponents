import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "newspaper";
const pathData = "M166 365q11 0 18.5 7t7.5 18-7.5 18.5T166 416h-44q-11 0-18.5-7.5T96 390t7.5-18 18.5-7h44zm-44-205q-11 0-18.5-7.5T96 134v-12q0-11 7.5-18.5T122 96h12q11 0 18.5 7.5T160 122v12q0 11-7.5 18.5T134 160h-12zm294 192q0 11-8 19L275 505q-9 7-18 7H26q-11 0-18.5-7.5T0 486V26Q0 15 7.5 7.5T26 0h364q11 0 18.5 7.5T416 26v326zM122 240q-11 0-18.5-7.5T96 214t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T294 240H122zm0 84q-11 0-18.5-7.5T96 298t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T294 324H122zm96-164q-11 0-18.5-7.5T192 134v-12q0-11 7.5-18.5T218 96h76q11 0 18.5 7.5T320 122v12q0 11-7.5 18.5T294 160h-76zM486 0q11 0 18.5 7.5T512 26v460q0 11-7.5 18.5T486 512h-77q-11 0-18.5-7.5T383 486t7.5-18 18.5-7h52V26q0-11 7-18.5T486 0zM246 461l10-10v-55q0-18 13-31t31-13h56l10-10V51H51v410h195z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/newspaper";
export { pathData, ltr, accData };