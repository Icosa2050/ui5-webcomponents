import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host(:not([hidden])){height:var(--_ui5-v2-8-0-rc-1_color-palette-item-height);width:var(--_ui5-v2-8-0-rc-1_color-palette-item-height);border:.0625rem solid var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-outer-border-radius);display:inline-block;margin:var(--_ui5-v2-8-0-rc-1_color-palette-item-margin);box-sizing:border-box}:host(:not([_disabled]):hover),:host([selected]){height:var(--_ui5-v2-8-0-rc-1_color-palette-item-hover-height);width:var(--_ui5-v2-8-0-rc-1_color-palette-item-hover-height);margin:var(--_ui5-v2-8-0-rc-1_color-palette-item-hover-margin);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-hover-outer-border-radius)}:host(:not([hidden])[on-phone]){width:calc(100% - .5rem);padding-block-start:calc(100% - .625rem);border:.0625rem solid var(--sapContent_ForegroundBorderColor);border-radius:.25rem;display:inline-block;margin:.625rem;height:0;max-width:4.5rem;max-height:4.5rem}:host([selected][on-phone]){padding-block-start:calc(100% - .125rem);width:100%;margin:0}.ui5-cp-item{position:relative;box-sizing:border-box;border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-inner-border-radius);width:100%;height:100%}:host(:not([_disabled]):not([on-phone]):hover) .ui5-cp-item{border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-hover-inner-border-radius)}:host(:not([_disabled])[on-phone]) .ui5-cp-item{border-radius:.1875rem}.ui5-cp-item:hover:not(:focus),:host([selected]:not([on-phone])) .ui5-cp-item{border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-hover-inner-border-radius);box-sizing:border-box}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus,:host([selected]:not([_disabled]):not([on-phone]):hover:focus) .ui5-cp-item{border:var(--_ui5-v2-8-0-rc-1_color-palette-item-selected-focused-border)}:host([selected]) .ui5-cp-item:focus,:host(:not([_disabled])) .ui5-cp-item:focus{outline:none}:host(:not([_disabled]):not([on-phone]):focus) .ui5-cp-item{pointer-events:none}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-inset);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-inset);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-color);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone]):hover:focus) .ui5-cp-item:focus:not(:hover):before{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-hover-inset);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([_disabled]):not([on-phone]):focus:not(:hover)) .ui5-cp-item:focus:not(:hover):after{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-hover-inset);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-color);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-border-radius);pointer-events:none}:host([selected]:not([_disabled]):not([on-phone]):not(:focus):not(:hover)) .ui5-cp-item:after,:host([selected]:not([_disabled]):not([on-phone]):not(:focus):hover) .ui5-cp-item:after,:host(:not([selected]):not([on-phone]):hover) .ui5-cp-item:after{content:"";box-sizing:border-box;position:absolute;inset:calc(var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-hover-inset) - .0625rem);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-not-focus-color);border-radius:calc(var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-border-radius) + .0625rem);pointer-events:none}:host(:not([_disabled]):not([on-phone]):not([selected]):not(:hover)) .ui5-cp-item:focus:not(:hover):after{border:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-not-selected-border)}:host([selected]:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:not(:hover):before,:host([selected]:not([_disabled]):not([on-phone])) .ui5-cp-item:focus:hover:before{content:"";box-sizing:border-box;position:absolute;inset:var(--_ui5-v2-8-0-rc-1_color-palette-item-selected-focused-border-before);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-border-radius);pointer-events:none}:host(:not([disabled])) .ui5-cp-item:focus-visible:before,:host(:not([disabled])) .ui5-cp-item:focus-visible:after{content:"";box-sizing:border-box;position:absolute;pointer-events:none}:host(:not([disabled])) .ui5-cp-item:focus-visible:before{inset:calc(100% - var(--_ui5-v2-8-0-rc-1_color_palette_item_height) + var(--_ui5-v2-8-0-rc-1-color-palette-item-mobile-focus-inset)) var(--_ui5-v2-8-0-rc-1_color-palette-item-mobile-focus-sides-inset);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-before-focus-color);border-radius:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-focus-border-radius)}:host(:not([disabled])) .ui5-cp-item:focus-visible:after{inset:calc(100% - var(--_ui5-v2-8-0-rc-1_color_palette_item_height) + var(--_ui5-v2-8-0-rc-1-color-palette-item-mobile-focus-inset)) var(--_ui5-v2-8-0-rc-1_color-palette-item-mobile-focus-sides-inset);border:var(--_ui5-v2-8-0-rc-1_color-palette-item-after-mobile-focus-border)}
`;
//# sourceMappingURL=ColorPaletteItem.css.js.map