import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "jam";
const pathData = "M103 435c-43-5-76-43-76-89s33-82 76-90c18-30 51-51 90-51 48 0 87 34 99 77 39 5 67 36 67 77 0 43-33 76-77 76h-43l-95 72c-4 3-10 5-15 5-12 0-26-14-26-26v-51zm166-255c-35 0-63-28-63-64s28-64 63-64h5c11-30 39-51 72-51 43 0 77 33 77 77h12c28 0 51 23 51 51s-23 51-51 51v25c0 15-12 26-26 26-5 0-10-1-15-5l-61-46h-64zM78 346c0 20 18 38 38 38h13c14 0 25 12 25 26v25l62-46c5-2 10-5 15-5h51c15 0 26-10 26-25 0-16-11-26-26-26h-13c-15 0-25-10-25-25 0-29-23-52-51-52-13 0-23 6-33 13 10 5 20 16 28 26 7 10 5 28-5 36-4 3-10 4-15 4-8 0-17-3-21-10-8-12-18-17-31-17-20 0-38 17-38 38z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/jam";
export { pathData, ltr, accData };