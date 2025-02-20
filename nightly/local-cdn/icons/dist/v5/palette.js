import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "palette";
const pathData = "M128 192q13 0 22.5 9t9.5 23-9 23-23 9-23-9-9-23 9.5-23 22.5-9zm64-96q13 0 22.5 9t9.5 23-9.5 23-22.5 9q-14 0-23-9t-9-23 9-23 23-9zm60-96q51 0 98 19.5T433 72t57.5 76.5T512 240q0 47-22.5 79.5T422 352H313q-21 0-29 10t-8 21q0 2 .5 7.5t3.5 11 9 10 17 4.5q20 0 33 13t13 31q0 14-9 25.5T321 502q-30 10-65 10-53 0-99.5-20.5T75 436t-55-82-20-99q0-53 20-99.5t54.5-81T155 20t97-20zm68 96q13 0 22.5 9t9.5 23-9.5 23-22.5 9q-14 0-23-9t-9-23 9-23 23-9zm64 96q13 0 22.5 9t9.5 23-9 23-23 9-23-9-9-23 9.5-23 22.5-9zm38 109q22 0 31-16.5t9-36.5q0-18-6.5-39t-17-41-22.5-37-24-29q-24-23-59.5-37T257 51q-43 0-80.5 16.5t-65.5 44T66.5 176 50 255t16.5 79.5 45 65.5 66 44.5T256 461l19-1q-26-11-38.5-32T224 384q0-32 22.5-57.5T311 301h111z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/palette";
export { pathData, ltr, accData };