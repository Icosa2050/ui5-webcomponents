import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-activity";
const pathData = "M166 461q11 0 18.5 7t7.5 18-7.5 18.5T166 512H90q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38q24 0 41 17t17 41v44q0 11-7.5 18.5T390 192t-18-7.5-7-18.5v-44q0-7-7-7h-39q-5 20-20.5 32.5T262 160h-76q-21 0-36.5-12.5T129 115H90q-7 0-7 7v332q0 7 7 7h76zm288-87q11 0 18.5 7.5T480 400t-7.5 18.5T454 426h-60v60q0 11-7.5 18.5T368 512t-18.5-7.5T342 486v-60h-60q-11 0-18.5-7.5T256 400t7.5-18.5T282 374h60v-60q0-11 7.5-18.5T368 288t18.5 7.5T394 314v60h60zM179 102q0 7 7 7h76q7 0 7-7V58q0-7-7-7h-76q-7 0-7 7v44z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/add-activity";
export { pathData, ltr, accData };