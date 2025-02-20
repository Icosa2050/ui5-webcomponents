import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "time-off";
const pathData = "M160 320q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm112 0q16 0 16 16 0 6-5 11l-12 13 12 13q5 5 5 11 0 16-16 16-6 0-11-5l-13-12-13 12q-5 5-11 5-16 0-16-16 0-6 5-11l12-13-12-13q-5-5-5-11 0-16 16-16 6 0 11 5l13 12 13-12q5-5 11-5zM390 64q38 0 64 26t26 64v268q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h154V26q0-11 7-18.5T358 0t18.5 7.5T384 26v38h6zm-22 256q16 0 16 16 0 6-5 11l-12 13 12 13q5 5 5 11 0 16-16 16-6 0-11-5l-13-12-13 12q-5 5-11 5-16 0-16-16 0-6 5-11l12-13-12-13q-5-5-5-11 0-16 16-16 6 0 11 5l13 12 13-12q5-5 11-5zm22 141q17 0 28-11t11-28V256H83v166q0 17 11 28t28 11h268zM122 115q-17 0-28 11t-11 28v51h346v-51q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T358 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-6z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/time-off";
export { pathData, ltr, accData };