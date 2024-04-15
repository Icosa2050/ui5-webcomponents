import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "empty-trailer";
const pathData = "M39 141h433c14 0 25 10 25 24v144c0 14-11 25-25 25H347c3 8 5 15 5 24 0 40-32 72-72 72s-72-32-72-72c0-9 2-16 4-24h-33c3 8 4 15 4 24 0 40-32 72-72 72s-72-32-72-72c0-9 2-16 5-24h-5c-14 0-24-11-24-25V165c0-14 10-24 24-24zm24 145h385v-96H63v96zm217 96c14 0 24-11 24-24 0-14-10-24-24-24-13 0-25 10-25 24 0 13 12 24 25 24zm-169 0c14 0 25-11 25-24 0-14-11-24-25-24s-24 10-24 24c0 13 10 24 24 24z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/empty-trailer";
export { pathData, ltr, accData };