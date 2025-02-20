import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "overdue";
const pathData = "M.5 512V32h97V0h30v32h33V0h31v32h130V0h31v32h33V0h31v32h95v480H.5zm32-352v320h448V160h-448zm288 58v64h128v76h-128v64l-123-102zm-256 137v-90h98v90h-98zm77-22v-49h-57v49h57zm307-104h-64v-37h64v37zm-272 0v-37h64v37h-64zm-112 0v-37h64v37h-64zm0 219v-37h64v37h-64zm320-36h64v36h-64v-36zm-144 36h-64v-36h64v36zm80-352h32V64h-32v32zm-160 0h32V64h-32v32zm-64 0h32V64h-32v32zm320-32h-32v32h32V64z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/overdue";
export { pathData, ltr, accData };