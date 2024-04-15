import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/drill-down.js";
import { pathData as pathDatav5 } from "./v5/drill-down.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "drill-down";
export { pathData, ltr, accData };