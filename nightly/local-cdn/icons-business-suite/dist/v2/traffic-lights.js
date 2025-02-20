import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "traffic-lights";
const pathData = "M96.5 287c-32-19-53-49-53-89h53v-43c-32-19-53-51-53-91h59c11-32 38-53 73-53h161c35 0 62 21 73 53h59c0 39-21 72-53 91v43h53c0 40-21 70-53 89v43h53c0 40-21 75-53 94-8 37-39 65-79 65h-161c-43 0-72-25-79-65-32-19-53-54-53-94h53v-43zm54-196v319c0 18 8 27 25 27h161c16 0 27-10 27-27V91c0-16-11-27-27-27h-161c-16 0-25 11-25 27zm65 279c0-21 18-40 41-40 21 0 40 19 40 40 0 23-19 40-40 40-23 0-41-17-41-40zm0-239c0-21 18-40 41-40 21 0 40 19 40 40s-19 40-40 40c-23 0-41-19-41-40zm0 119c0-21 18-39 41-39 21 0 40 18 40 39s-19 40-40 40c-23 0-41-19-41-40z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/traffic-lights";
export { pathData, ltr, accData };