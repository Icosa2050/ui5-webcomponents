import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "local-process-call";
const pathData = "M431 488H295c-15 0-27-11-27-26s12-27 27-27h136c15 0 27-13 27-28V109H79v190c0 15-12 27-27 27s-28-12-28-27V82c0-45 37-82 82-82h325c45 0 81 37 81 82v325c0 45-36 81-81 81zm-277 13c-5 0-10-2-14-6-8-7-8-20 0-28l32-33H20c-11 0-20-9-20-20 0-12 9-21 20-21h145l-25-26c-8-8-8-20 0-28 4-4 9-6 14-6s10 2 14 6l65 63c7 8 7 21 0 29l-65 64c-3 4-9 6-14 6z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/local-process-call";
export { pathData, ltr, accData };