import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "uuid";
const pathData = "M15 335C5 319 0 296 0 266V122h37v144c0 19 2 31 6 38 4 8 10 12 18 12 9 0 15-4 20-12 5-9 8-22 8-40V122h35v142c0 32-6 55-17 69-11 15-27 23-46 23s-34-7-46-21zm156 0c-10-16-15-39-15-69V122h37v144c0 19 2 31 6 38 3 8 9 12 18 12s15-4 20-12c4-7 6-20 6-40V122h37v142c0 31-6 54-17 69s-27 23-46 23-34-7-46-21zm143 18V122h36v231h-36zm71 0V122h56c13 0 25 4 36 12s19 21 26 38c6 17 9 38 9 63s-3 46-9 64c-6 17-14 31-23 40-11 9-22 14-33 14h-62zm37-40h19c7 0 13-3 18-9 7-7 9-14 12-26 3-13 5-28 5-43 0-24-3-43-11-55-6-12-15-18-28-18h-15v151z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/uuid";
export { pathData, ltr, accData };