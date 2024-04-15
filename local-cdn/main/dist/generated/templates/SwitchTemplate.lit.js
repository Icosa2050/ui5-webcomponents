/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-switch-root ${classMap(this.classes.main)}" role="switch" aria-label="${ifDefined(this.ariaLabelText)}" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-required="${ifDefined(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${ifDefined(this.effectiveTabIndex)}" title="${ifDefined(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}<span class="ui5-switch-handle" part="handle"><${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${scopeTag("ui5-icon", tags, suffix)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>` : html `<div class="ui5-switch-root ${classMap(this.classes.main)}" role="switch" aria-label="${ifDefined(this.ariaLabelText)}" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-required="${ifDefined(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${ifDefined(this.effectiveTabIndex)}" title="${ifDefined(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><slot name="formSupport"></slot></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<span class="ui5-switch-text ui5-switch-text--on"><${scopeTag("ui5-icon", tags, suffix)} name="accept" class="ui5-switch-icon-on"></${scopeTag("ui5-icon", tags, suffix)}></span><span class="ui5-switch-text ui5-switch-text--off"><${scopeTag("ui5-icon", tags, suffix)} name="decline" class="ui5-switch-icon-off"></${scopeTag("ui5-icon", tags, suffix)}></span>` : html `<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`; }
function block2(context, tags, suffix) { return html `${this.hasNoLabel ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}`; }
function block3(context, tags, suffix) { return suffix ? html `<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${scopeTag("ui5-icon", tags, suffix)}></span><span class="ui5-switch-text ui5-switch-text--off ui5-switch-no-label-icon" part="text-off"><${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${scopeTag("ui5-icon", tags, suffix)}></span>` : html `<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off ui5-switch-no-label-icon" part="text-off"><ui5-icon name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`; }
function block4(context, tags, suffix) { return html `<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${ifDefined(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${ifDefined(this._textOff)}</span>`; }
export default block0;
//# sourceMappingURL=SwitchTemplate.lit.js.map