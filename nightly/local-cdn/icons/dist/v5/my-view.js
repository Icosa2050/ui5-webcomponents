import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "my-view";
const pathData = "M422 0q38 0 64 26t26 64v236q0 38-26 64t-64 26h-81l11 45h38q11 0 18.5 7t7.5 18-7.5 18.5T390 512H122q-11 0-18.5-7.5T96 486t7.5-18 18.5-7h38l9-45H90q-38 0-64-26T0 326V90q0-38 26-64T90 0h332zm-70 289q0 15-7.5 23t-18.5 8H186q-11 0-18.5-8t-7.5-23q0-25 20.5-45t49.5-20h52q29 0 49.5 20t20.5 45zM208 144q0-22 13-35t35-13 35 13 13 35-13 35-35 13-35-13-13-35zm81 272h-68l-9 45h87zM461 90q0-17-11-28t-28-11H90q-17 0-28 11T51 90v236q0 17 11 28t28 11h332q17 0 28-11t11-28V90z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/my-view";
export { pathData, ltr, accData };