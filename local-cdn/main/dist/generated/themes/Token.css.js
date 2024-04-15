import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Token.css.ts", content: `:host{display:inline-block;background:var(--_ui5-v1-24-0_token_background);border:var(--sapButton_BorderWidth) solid var(--sapButton_TokenBorderColor);border-radius:var(--_ui5-v1-24-0_token_border_radius);color:var(--_ui5-v1-24-0_token_text_color);height:var(--_ui5-v1-24-0_token_height);box-sizing:border-box}:host(:not([single-token])){margin-inline-end:var(--_ui5-v1-24-0_token_right_margin)}:host([overflows]){display:none}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background);border-color:var(--_ui5-v1-24-0_token_hover_border_color)}:host([selected]:not([readonly])){color:var(--sapButton_Selected_TextColor)}:host([selected]:not([readonly])){background:var(--sapButton_Selected_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_Selected_BorderColor)}:host([selected]:not([readonly])) .ui5-token--wrapper{border-bottom:var(--_ui5-v1-24-0_token_selected_internal_border_bottom);border-bottom-left-radius:var(--_ui5-v1-24-0_token_selected_internal_border_bottom_radius);border-bottom-right-radius:var(--_ui5-v1-24-0_token_selected_internal_border_bottom_radius)}:host([selected]:not([readonly]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--_ui5-v1-24-0_token_selected_hover_border_color)}:host([readonly]){background:var(--_ui5-v1-24-0_token_readonly_background);border-color:var(--sapField_ReadOnly_BorderColor);color:var(--_ui5-v1-24-0_token_readonly_color)}:host([readonly]) .ui5-token--wrapper{padding:var(--_ui5-v1-24-0_token_readonly_padding)}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5-v1-24-0_token_selected_focus_outline)}:host([selected]:not([readonly])) .ui5-token--text,:host([selected]:not([readonly])) .ui5-token--icon{top:var(--_ui5-v1-24-0_token_text_icon_top);position:relative}:host([focused][selected]:not([readonly]):not(:hover)){background:var(--sapButton_Selected_Background);color:var(--sapButton_Selected_TextColor);border:var(--_ui5-v1-24-0_token_focused_selected_border)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:default;padding-inline-start:var(--_ui5-v1-24-0_token_left_padding);box-sizing:border-box;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);user-select:none}.ui5-token--wrapper{position:relative}:host([selected]) .ui5-token--wrapper{font-family:var(--_ui5-v1-24-0_token_selected_text_font_family)}.ui5-token--wrapper:focus{outline-offset:var(--_ui5-v1-24-0_token_outline_offset);outline:var(--_ui5-v1-24-0_token_focus_outline)}.ui5-token--wrapper:focus:after{content:var(--ui5-v1-24-0_token_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-0_token_focus_outline_border_radius);top:var(--_ui5-v1-24-0_token_focus_offset);bottom:var(--_ui5-v1-24-0_token_focus_offset);left:var(--_ui5-v1-24-0_token_focus_offset);right:var(--_ui5-v1-24-0_token_focus_offset)}:host([focused][selected]:not([readonly])) .ui5-token--wrapper:focus:after{bottom:var(--_ui5-v1-24-0_token_selected_focused_offset_bottom)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5-v1-24-0_token_icon_size);height:var(--_ui5-v1-24-0_token_icon_size);padding:var(--_ui5-v1-24-0_token_icon_padding);color:var(--sapContent_IconColor)}:host([single-token]){max-width:100%}:host([single-token]) .ui5-token--wrapper{max-width:100%}:host([single-token]) .ui5-token--text{overflow:hidden;text-overflow:ellipsis;max-width:100%}
` };
export default styleData;
//# sourceMappingURL=Token.css.js.map