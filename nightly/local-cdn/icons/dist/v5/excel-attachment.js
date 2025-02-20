import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "excel-attachment";
const pathData = "M374 461q11 0 18.5 7t7.5 18-7.5 18.5T374 512H42q-11 0-18.5-7.5T16 486V179q0-10 7-17L165 8q8-8 19-8h190q11 0 18.5 7.5T400 26v44q0 11-7.5 18.5T374 96t-18-7.5-7-18.5V51H195l-19 21v53q0 21-15 36t-36 15H80l-13 13v272h307zm96-301q11 0 18.5 7.5T496 186v204q0 11-7.5 18.5T470 416H234q-11 0-18.5-7.5T208 390V186q0-11 7.5-18.5T234 160h236zM259 365h67v-51h-67v51zm0-154v51h67v-51h-67zm186 154v-51h-67v51h67zm0-154h-67v51h67v-51z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/excel-attachment";
export { pathData, ltr, accData };