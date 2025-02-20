import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "trailer";
const pathData = "M17 0h31v224h112v80h112v64h80v-96h144v208H17V0zm31 256v192h416V304h-80v96H240v-64H128v-80H48zm352-88l-96-96h48l24 24V0h48v96l24-24h48z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/trailer";
export { pathData, ltr, accData };