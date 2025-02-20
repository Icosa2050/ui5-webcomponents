import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "call-center";
const pathData = "M79 480c0-64 56-94 117-94h54c-13-3-26-7-37-14 24-5 40-27 40-52 0-32-22-54-53-54-23 0-37 11-48 30-7-17-11-30-11-39 0-77 61-141 141-141 77 0 138 64 138 141 0 17-10 41-31 72-21 32-47 51-80 57h55c56 0 99 30 99 94H79zm44-341c0-6 6-15 19-28 35-36 85-57 138-57 54 0 100 19 138 57 9 9 14 18 14 25s-4 12-11 17c-58-61-95-70-141-70-44 0-86 15-118 47-11 11-21 17-28 17-5 0-11-3-11-8zm-64 98c0-32 25-57 57-57v112c-32 0-57-26-57-55zm444 0c0 29-25 55-57 55V180c32 0 57 25 57 57zm-331 87c0-17 14-29 29-29 16 0 28 12 28 29 0 16-12 28-28 28-15 0-29-12-29-28z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/call-center";
export { pathData, ltr, accData };