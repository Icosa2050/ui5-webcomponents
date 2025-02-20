import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "use-case-diagram";
const pathData = "M339 187c8 13 13 28 17 43h28v-13c0-14 12-25 26-25h77c14 0 25 11 25 25v77c0 14-11 26-25 26h-77c-14 0-26-12-26-26v-13h-28c-4 16-9 30-17 44l78 58h70c14 0 25 12 25 26v77c0 14-11 26-25 26h-77c-14 0-26-12-26-26v-63l-78-59c-32 28-77 45-127 45C80 409 0 340 0 255c0-84 80-153 179-153 50 0 95 17 127 45l78-58V25c0-14 12-25 26-25h77c14 0 25 11 25 25v77c0 14-11 26-25 26h-69zm96-136v26h26V51h-26zM51 255c0 57 57 103 128 103s128-46 128-103c0-56-57-102-128-102S51 199 51 255zm384-12v25h26v-25h-26zm26 217v-26h-26v26h26z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/use-case-diagram";
export { pathData, ltr, accData };