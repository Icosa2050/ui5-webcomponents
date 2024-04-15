import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav1, ltr, accData } from "./v1/display-ads.js";
import { pathData as pathDatav2 } from "./v2/display-ads.js";

const pathData = isLegacyThemeFamily() ? pathDatav1 : pathDatav2;

export default "business-suite/display-ads";
export { pathData, ltr, accData };