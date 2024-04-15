import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "pipeline";
const pathData = "M436 250h26c29 0 50 21 50 50v128c0 29-21 52-50 52h-26c-19 0-35-10-44-25H122c-10 15-27 25-45 25H52c-29 0-52-23-52-52V300c0-29 23-50 52-50h25c28 0 51 21 51 50h52v-77c0-14 11-25 25-25h25v-26h-25c-14 0-25-12-25-26 0-13 11-25 25-25h25V95c0-14 13-25 27-25s25 11 25 25v26h25c14 0 27 12 27 25 0 14-13 27-27 27h-25v25h25c14 0 27 11 27 25v77h51c0-29 22-50 51-50zM128 403h257v-51h-77c-13 0-26-12-26-26v-76h-52v76c0 14-11 26-25 26h-77v51zm334 25V300h-26v128h26zm-410 0h25V300H52v128z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/pipeline";
export { pathData, ltr, accData };