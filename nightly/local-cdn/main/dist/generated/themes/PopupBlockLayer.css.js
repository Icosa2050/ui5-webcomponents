import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/PopupBlockLayer.css.ts", content: `.ui5-block-layer{position:fixed;background-color:var(--_ui5-v2-0-0-rc-1_popup_block_layer_background);inset:-500px;width:auto;height:auto;outline:none;pointer-events:all}:host .ui5-block-layer{width:auto;height:auto}
` };
export default styleData;
//# sourceMappingURL=PopupBlockLayer.css.js.map