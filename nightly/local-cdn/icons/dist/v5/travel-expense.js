import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "travel-expense";
const pathData = "M327 420q0 12-8.5 20t-20.5 8q-5 0-8-1l-69-21-69 21q-3 1-8 1-11 0-20-8t-9-20q0-16 13-24l57-37V257L35 292q-2 1-7 1-11 0-19.5-8T0 265v-9q0-16 14-24l171-101V36q0-15 10.5-25.5T221 0t25 10.5T256 36v92l148 86q-5 3-15 11.5t-21 18-20 18-13 12.5l-79-18v103l58 37q13 8 13 24zm123-62q26 0 44 18t18 43q0 23-15.5 40.5T458 479v7q0 11-7.5 18.5T432 512t-18.5-7.5T406 486v-6h-28q-11 0-18.5-7.5T352 454t7.5-18 18.5-7h72q11 0 11-10 0-9-11-9h-36q-26 0-44-18t-18-43q0-23 15.5-40.5T406 289v-7q0-11 7.5-18.5T432 256t18.5 7.5T458 282v6h28q11 0 18.5 7.5T512 314t-7.5 18-18.5 7h-72q-11 0-11 10 0 9 11 9h36z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/travel-expense";
export { pathData, ltr, accData };