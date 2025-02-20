import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "toaster-up";
const pathData = "M0 48q0-7 5-11.5T16 32h480q16 0 16 16t-16 16h-16v224q0 26-18.5 45T416 352v-32q14 0 23-9t9-23V64H64v224q0 14 9.5 23t22.5 9v32q-26 0-45-19t-19-45V64H16q-6 0-11-4.5T0 48zm133 287l102-101q9-10 22-10 14 0 23 10l102 101q6 6 6 12 0 5-6 11-8 5-12 5-3 0-11-5l-87-87v225q0 16-16 16t-16-16V273l-85 85q-5 5-11 5-3 0-11-5-6-6-6-11 0-6 6-12zM112 96h288q16 0 16 16 0 6-4.5 11t-11.5 5H112q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0 64h96q16 0 16 16 0 6-4.5 11t-11.5 5h-96q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/toaster-up";
export { pathData, ltr, accData };