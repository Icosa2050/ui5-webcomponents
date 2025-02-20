import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "content-modifier";
const pathData = "M224 415H32q-13 0-22.5-9.5T0 383V95q0-13 9-22.5T32 63h384q14 0 23 9t9 23v64h-32v-48L224 287 32 111v256l109-112 19 18L48 383h176v32zM64 95l160 160L384 95H64zm444 140q4 4 4 9 0 4-4 8L305 455l-7 1.5-18.5 5-26 8.5-29.5 10q4-11 8.5-24t9.5-25l10-28 204-203q4-3 9-3 3 0 8 3zm-26 9l-17-17-32 31 18 18zm-49 49l-17-17-143 141 18 17z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/content-modifier";
export { pathData, ltr, accData };