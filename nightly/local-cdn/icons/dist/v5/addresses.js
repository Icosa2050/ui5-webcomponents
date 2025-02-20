import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "addresses";
const pathData = "M182 128q37 0 62 25t25 61q0 37-25 62t-62 25q-36 0-61-25t-25-62q0-36 25-61t61-25zm144-96q39 0 73 14t59 39 39.5 58 14.5 71q0 36-12 69t-30.5 61.5-40 52T389 437t-32.5 26.5T342 474q-7 6-16 6-7 0-15-5-1 0-16.5-12.5T256 430q-23 20-38.5 32T201 475q-7 5-16 5t-16-6q-2-1-28.5-21.5t-58-56-57-82T0 214q0-38 14.5-70.5t39-57.5T112 47t73-14 71 13q33-14 70-14zM182 250q16 0 26-10t10-26q0-15-10-25t-26-10q-15 0-25 10t-10 25q0 16 10 26t25 10zm3 172q14-11 37-31.5t45-47.5 37.5-60 15.5-68q0-28-10.5-52t-29-41.5-43-27.5T185 84t-52.5 10T90 121.5 61.5 163 51 215q0 35 15.5 68t37.5 60 44.5 47.5T185 422zm141 0q14-11 37-31.5t45-48 37.5-60T461 214q0-27-10.5-51T422 121t-42.5-28T326 83l-11 1q26 25 41 59t15 73q0 52-24.5 97T291 393z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/addresses";
export { pathData, ltr, accData };