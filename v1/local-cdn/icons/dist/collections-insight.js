import { isLegacyThemeFamily } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/collections-insight.js";
import { pathData as pathDatav5 } from "./v5/collections-insight.js";

const pathData = isLegacyThemeFamily() ? pathDatav4 : pathDatav5;

export default "collections-insight";
export { pathData, ltr, accData };