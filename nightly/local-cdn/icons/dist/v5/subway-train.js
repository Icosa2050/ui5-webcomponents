import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "subway-train";
const pathData = "M165 246q14 0 25.5 11.5T202 283q0 15-11.5 26T165 320q-15 0-26-11t-11-26q0-14 11-25.5t26-11.5zm315 48q0 37-19 66.5T411 404l62 65q7 7 7 17 0 11-7.5 18.5T454 512q-10 0-18-8l-85-88H161l-85 88q-8 8-18 8-11 0-18.5-7.5T32 486q0-10 7-17l62-65q-31-14-50-43.5T32 294V122q0-25 9.5-47.5t26-39 39-26T154 0h204q25 0 47.5 9.5t39 26 26 39T480 122v172zm-133-48q15 0 26 11.5t11 25.5q0 15-11 26t-26 11q-14 0-25.5-11T310 283q0-14 11.5-25.5T347 246zM154 51q-29 0-50 21t-21 50v19h147V51h-76zm204 314q29 0 50-21t21-50V192H83v102q0 29 21 50t50 21h204zm71-243q0-29-21-50t-50-21h-76v90h147v-19z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/subway-train";
export { pathData, ltr, accData };