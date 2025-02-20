import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "status-positive";
const pathData = "M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-118-87q2-4 2-7t-3-6l-36-36q-3-4-8-4t-8 5L237 294h-4l-70-52q-4-3-7-3t-4.5 2-2.5 3l-29 41q-3 3-3 6 0 5 5 8l113 95q2 2 7 2t8-4z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/status-positive";
export { pathData, ltr, accData };