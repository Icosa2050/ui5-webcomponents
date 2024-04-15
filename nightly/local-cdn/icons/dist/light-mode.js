import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/light-mode.js";
import { pathData as pathDatav5 } from "./v5/light-mode.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "light-mode";
export { pathData, ltr, accData };