import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "aggregation";
const pathData = "M304 32h160c11 0 16 5 16 16v160c0 11-5 16-16 16s-16-5-16-16V86L255 280c1 5 2 9 2 10 0 2 0 4-1 6l-23 133c-2 17-11 26-28 28-135 24-137 23-139 23-20 0-34-18-34-35v-5l23-133c2-16 11-26 28-29l133-22h8c4 0 7 0 8 1L425 64H304c-11 0-16-5-16-16s5-16 16-16zM202 424l22-134c0-1-1-2-3-2L88 310c-1 0-2 1-2 2L64 445c0 2 1 3 2 3l134-22c1 0 2-1 2-2z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/aggregation";
export { pathData, ltr, accData };