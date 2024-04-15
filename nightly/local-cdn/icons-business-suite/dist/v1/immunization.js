import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "immunization";
const pathData = "M503.375 136c11 10 11 25 0 36-10 10-25 10-35 0l-34-34-53 54 20 20 26 26c10 10 10 26 0 36-11 10-26 10-36 0l-8-8-161 161c-5 5-10 8-18 8h-92l-69 69c-10 10-25 10-35 0-11-10-11-26 0-36l69-69v-92c0-8 2-13 7-18l161-161-7-8c-11-10-11-25 0-35 10-10 25-10 35 0l26 25 20 21 54-54-33-33c-10-10-10-26 0-36s25-10 36 0l51 51 25 26zm-155 94l-67-66-28 28 20 20c11 11 11 26 0 36-10 10-25 10-35 0l-21-20-15 15 20 21c11 10 11 25 0 35-10 11-25 11-35 0l-21-20-38 38v67h66z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/immunization";
export { pathData, ltr, accData };