import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_FULL_SCREEN } from "../generated/i18n/i18n-defaults.js";

const name = "full-screen";
const pathData = "M486 0q11 0 18.5 7.5T512 26v108q0 11-7.5 18.5T486 160t-18-7.5-7-18.5V87l-97 97q-8 8-18 8-11 0-18.5-7.5T320 166q0-10 8-18l97-97h-47q-11 0-18.5-7T352 26t7.5-18.5T378 0h108zM230 32q11 0 18.5 7.5T256 58t-7.5 18-18.5 7H90q-7 0-7 7v140q0 11-7 18.5T58 256t-18.5-7.5T32 230V90q0-24 17-41t41-17h140zm224 224q11 0 18.5 7.5T480 282v140q0 24-17 41t-41 17H282q-11 0-18.5-7.5T256 454t7.5-18 18.5-7h140q7 0 7-7V282q0-11 7-18.5t18-7.5zm-306 71q7-7 18-7t18.5 7.5T192 346t-7 18l-98 97h47q11 0 18.5 7t7.5 18-7.5 18.5T134 512H26q-11 0-18.5-7.5T0 486V378q0-11 7.5-18.5T26 352t18 7.5 7 18.5v47z";
const ltr = false;
const accData = ICON_FULL_SCREEN;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/full-screen";
export { pathData, ltr, accData };