import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "write-new-document";
const pathData = "M51 189v272h19q11 0 18.5 7t7.5 18-7.5 18.5T70 512H26q-11 0-18.5-7.5T0 486V179q0-10 7-17L149 8q8-8 19-8h190q11 0 18.5 7.5T384 26v76q0 11-7.5 18.5T358 128t-18-7.5-7-18.5V51H179l-3 4v73q0 21-15 36t-35 15H61zm378 100q8 8 8 18t-8 18L254 504q-8 8-18 8h-50q-11 0-18.5-7.5T160 486v-51q0-9 7-18l176-179q8-8 18-8 12 0 18 8zm76-77q7 7 7 18t-7 18l-25 26q-8 8-19 8-10 0-18-8l-50-51q-7-7-7-18t7-18l25-26q7-7 18-7 12 0 19 7zm-130 95l-14-14-150 153v15h14z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/write-new-document";
export { pathData, ltr, accData };