import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/general-leave-request.js";
import { pathData as pathDatav5 } from "./v5/general-leave-request.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "general-leave-request";
export { pathData, ltr, accData };