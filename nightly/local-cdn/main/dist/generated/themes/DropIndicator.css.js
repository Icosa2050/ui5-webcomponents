import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host{position:absolute;pointer-events:none;z-index:99}:host([orientation="Vertical"]) .ui5-di-needle{width:.125rem;height:100%;inset-block:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Vertical"]){margin-left:-.0625rem}:host([orientation="Horizontal"]) .ui5-di-needle{height:.125rem;width:100%;inset-inline:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Horizontal"]){margin-top:-.0625rem}:host([orientation="Horizontal"][placement="Before"][first]){margin-top:.3125rem}:host([orientation="Horizontal"][placement="After"][last]){margin-top:-.3125rem}:host([orientation="Vertical"]) .ui5-di-needle:before{left:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host([orientation="Horizontal"]) .ui5-di-needle:before{top:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host .ui5-di-rect{border:.125rem solid var(--sapContent_DragAndDropActiveColor);position:absolute;inset:0}:host .ui5-di-rect:before{content:" ";position:absolute;inset:0;background:var(--sapContent_DragAndDropActiveColor);opacity:.05}
`;
//# sourceMappingURL=DropIndicator.css.js.map