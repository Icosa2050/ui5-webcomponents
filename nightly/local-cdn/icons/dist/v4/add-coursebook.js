import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-coursebook";
const pathData = "M0 416v-32h96v-96h32v96h96v32h-96v96H96v-96H0zm96-192V73q0-18 16-22L241 2l8-2h1q4 0 5 1l238 59q19 4 19 24v344q0 7-1 8-2 8-6 11-1 1-5 1-2 0-5-.5t-8-1.5q-4-2-7-3V110q0-19-18-23L256 34q-1 0-2-1h-4l-8 2-88 34 244 61q18 4 18 24v334q0 11-7 17.5t-17 6.5h-4l-132-38v-33l128 37V160L128 96v128H96z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/add-coursebook";
export { pathData, ltr, accData };