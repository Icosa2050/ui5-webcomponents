import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `@container (max-width: 600px){.ui5-form-item,.ui5-form-group{--ui5-v2-8-0-rc-2-form-item-layout: var(--ui5-v2-8-0-rc-2-form-item-layout-S)}:host([label-span-s="12"]) .ui5-form-item,:host([label-span-s="12"]) .ui5-form-group{--ui5-v2-8-0-rc-2-form-item-label-justify: var(--ui5-v2-8-0-rc-2-form-item-label-justify-span12);--ui5-v2-8-0-rc-2-form-item-label-padding: var(--ui5-v2-8-0-rc-2-form-item-label-padding-span12)}}@container (width > 600px) and (width <= 1024px){.ui5-form-item,.ui5-form-group{--ui5-v2-8-0-rc-2-form-item-layout: var(--ui5-v2-8-0-rc-2-form-item-layout-M)}:host([label-span-m="12"]) .ui5-form-item,:host([label-span-m="12"]) .ui5-form-group{--ui5-v2-8-0-rc-2-form-item-label-justify: var(--ui5-v2-8-0-rc-2-form-item-label-justify-span12);--ui5-v2-8-0-rc-2-form-item-label-padding: var(--ui5-v2-8-0-rc-2-form-item-label-padding-span12)}}@container (width > 1024px) and (width <= 1440px){.ui5-form-item,.ui5-form-group{--ui5-v2-8-0-rc-2-form-item-layout: var(--ui5-v2-8-0-rc-2-form-item-layout-L)}:host([label-span-l="12"]) .ui5-form-item,:host([label-span-l="12"]) .ui5-form-group{--ui5-v2-8-0-rc-2-form-item-label-justify: var(--ui5-v2-8-0-rc-2-form-item-label-justify-span12);--ui5-v2-8-0-rc-2-form-item-label-padding: var(--ui5-v2-8-0-rc-2-form-item-label-padding-span12)}}@container (min-width: 1441px){.ui5-form-item,.ui5-form-group{--ui5-v2-8-0-rc-2-form-item-layout: var(--ui5-v2-8-0-rc-2-form-item-layout-XL)}:host([label-span-xl="12"]) .ui5-form-item,:host([label-span-xl="12"]) .ui5-form-group{--ui5-v2-8-0-rc-2-form-item-label-justify: var(--ui5-v2-8-0-rc-2-form-item-label-justify-span12);--ui5-v2-8-0-rc-2-form-item-label-padding: var(--ui5-v2-8-0-rc-2-form-item-label-padding-span12)}}
`;
//# sourceMappingURL=FormItemSpan.css.js.map