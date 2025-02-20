import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "lead";
const pathData = "M243 205q-5 0-9 4t-4 9 4 8.5 9 3.5h26q26 0 45 19t19 45q0 23-15 40.5T282 357v34q0 11-7.5 18.5T256 417t-18.5-7.5T230 391v-33h-25q-11 0-18.5-7t-7.5-18 7.5-18.5T205 307h64q5 0 9-4t4-9-4-8.5-9-3.5h-26q-26 0-45-19t-19-45q0-23 15-40.5t36-22.5v-33q0-11 7.5-18.5T256 96t18.5 7.5T282 122v32h25q11 0 18.5 7t7.5 18-7.5 18.5T307 205h-64zM256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/lead";
export { pathData, ltr, accData };