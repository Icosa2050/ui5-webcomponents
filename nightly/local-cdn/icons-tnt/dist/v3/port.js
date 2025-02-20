import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "port";
const pathData = "M485 512H27c-15 0-27-12-27-27V26C0 11 12 0 27 0h458c15 0 27 11 27 26v459c0 15-12 27-27 27zM53 53v405h406V53H53zm251 328c-7 0-14-2-19-8-10-11-9-27 0-37l87-87-87-88c-10-10-10-26 0-37 6-5 12-8 19-8s13 3 18 8l107 106c10 9 10 28 0 37L322 373c-5 5-12 8-18 8zm-93 0c-7 0-13-2-19-8L87 267c-11-10-11-27 0-37l105-106c6-5 13-8 19-8 7 0 14 3 19 8 10 10 11 27 0 37l-87 88 87 87c10 10 10 26 0 37-6 6-12 8-19 8z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/port";
export { pathData, ltr, accData };