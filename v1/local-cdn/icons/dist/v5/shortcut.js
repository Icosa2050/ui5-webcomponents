import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "shortcut";
const pathData = "M358 160q-11 0-18-7.5t-7-18.5V49L227 153q-23 23-35.5 52T179 267t12.5 62.5T226 381t52 35 64 13h16q11 0 18.5 7t7.5 18-7.5 18.5T358 480h-16q-45 0-84-17t-68-46-45.5-68-16.5-82 16.5-82 46.5-68l99-98h-72q-11 0-18.5-7T192-6t7.5-18.5T218-32h140q11 0 18.5 7.5T384-6v140q0 11-7.5 18.5T358 160z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/shortcut";
export { pathData, ltr, accData };