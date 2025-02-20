import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-calendar";
const pathData = "M230 461q11 0 18.5 7t7.5 18-7.5 18.5T230 512H90q-38 0-64-26T0 422V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T122 0t18 7.5 7 18.5v38h154V26q0-11 7-18.5T326 0t18.5 7.5T352 26v38h6q38 0 64 26t26 64v76q0 11-7.5 18.5T422 256H51v166q0 17 11 28t28 11h140zm256-87q11 0 18.5 7.5T512 400t-7.5 18.5T486 426h-60v60q0 11-7.5 18.5T400 512t-18.5-7.5T374 486v-60h-60q-11 0-18.5-7.5T288 400t7.5-18.5T314 374h60v-60q0-11 7.5-18.5T400 288t18.5 7.5T426 314v60h60zM51 205h346v-51q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T326 160t-18-7.5-7-18.5v-19H147v19q0 11-7 18.5t-18 7.5-18.5-7.5T96 134v-19h-6q-17 0-28 11t-11 28v51z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/add-calendar";
export { pathData, ltr, accData };