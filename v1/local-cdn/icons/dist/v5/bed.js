import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "bed";
const pathData = "M512 454q0 11-7.5 18.5T486 480t-18-7.5-7-18.5v-51H51v51q0 11-7 18.5T26 480t-18.5-7.5T0 454V186q0-11 7.5-18.5T26 160t18 7.5 7 18.5v166h173V218q0-11 7.5-18.5T250 192h140q26 0 48 9.5t38.5 26 26 38.5 9.5 48v140zM112 320q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm163 32h186v-38q0-29-21-50t-50-21H275v109z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/bed";
export { pathData, ltr, accData };