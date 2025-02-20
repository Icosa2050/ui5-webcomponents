import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "source";
const pathData = "M457 329c15 0 26 10 26 25v50c0 43-32 76-75 76H105c-43 0-76-33-76-76v-50c0-15 10-25 25-25s26 10 26 25v50c0 15 10 25 25 25h303c15 0 24-10 24-25v-50c0-15 10-25 25-25zM231 87l-59 57c-11 12-23 12-35 0-11-12-11-24 0-35l99-97c7-7 10-11 21-11s13 2 18 9l99 99c12 11 12 23 0 35-11 11-23 11-34 0l-59-57v242c0 15-9 25-24 25s-26-10-26-25V87z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/source";
export { pathData, ltr, accData };