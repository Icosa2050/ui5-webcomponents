import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/folder-full.js";
import { pathData as pathDatav5 } from "./v5/folder-full.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "folder-full";
export { pathData, ltr, accData };