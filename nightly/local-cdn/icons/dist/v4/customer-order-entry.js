import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "customer-order-entry";
const pathData = "M416 32H96v448h320V32zM173 293l-37-37 18-18 19 17 54-55 18 19zm0-128l-37-35 18-19 19 17 54-55 18 19zM416 0q14 0 23 9t9 23v448q0 13-9 22.5t-23 9.5H96q-13 0-22.5-9.5T64 480V32q0-14 9.5-23T96 0h320zM216 448q-11 0-11-10 0-13 11-37.5t25-40.5q9-9 14-10t6-1q5 0 9.5 3.5t6 8.5 1.5 9v4q0 3-.5 7.5t-.5 9.5q0 2-.5 4t-.5 4v4l3-3q6-8 17.5-17t24.5-9q7 0 18 2.5t21 7 17 9.5 7 9q0 12-11 12-5 0-11.5-2.5t-14-6-14.5-6-12-2.5q-1 0-6 5.5T302 414t-17.5 11.5T266 431q-6-2-7-4l-4-3q-2-7-2.5-10.5t-.5-8.5q0-6 1-12.5t1-12.5l-2 3q-11 14-15.5 26t-6.5 20.5-4.5 13.5-9.5 5zM368 96q16 0 16 16 0 6-4.5 11t-11.5 5h-64q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h64zm0 128q16 0 16 16 0 6-4.5 11t-11.5 5h-64q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h64z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/customer-order-entry";
export { pathData, ltr, accData };