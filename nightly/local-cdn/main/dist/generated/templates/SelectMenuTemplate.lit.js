/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} class="ui5-select-menu" placement="Bottom" horizontal-align="Start" @ui5-after-open="${ifDefined(this._onAfterOpen)}" @ui5-after-close="${ifDefined(this._onAfterClose)}" @ui5-before-open="${ifDefined(this._onBeforeOpen)}" hide-arrow _disable-initial-focus style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block6.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-list", tags, suffix)} selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOptionClick)}"><slot></slot></${scopeTag("ui5-list", tags, suffix)}></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover class="ui5-select-menu" placement="Bottom" horizontal-align="Start" @ui5-after-open="${ifDefined(this._onAfterOpen)}" @ui5-after-close="${ifDefined(this._onAfterClose)}" @ui5-before-open="${ifDefined(this._onBeforeOpen)}" hide-arrow _disable-initial-focus style=${styleMap(this.styles.responsivePopover)}>${this._isPhone ? block1.call(this, context, tags, suffix) : undefined}${!this._isPhone ? block6.call(this, context, tags, suffix) : undefined}<ui5-list selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOptionClick)}"><slot></slot></ui5-list></ui5-responsive-popover>`; }
function block1(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._onCloseBtnClick}"></${scopeTag("ui5-button", tags, suffix)}></div>${this.hasValueState ? block2.call(this, context, tags, suffix) : undefined}</div>` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._onCloseBtnClick}"></ui5-button></div>${this.hasValueState ? block2.call(this, context, tags, suffix) : undefined}</div>`; }
function block2(context, tags, suffix) { return html `<div class="${classMap(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.hasValueStateSlot ? block3.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}</div>`; }
function block3(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}`; }
function block4(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block5(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block6(context, tags, suffix) { return html `${this.hasValueState ? block7.call(this, context, tags, suffix) : undefined}`; }
function block7(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.valueStatePopover)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.hasValueStateSlot ? block8.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>` : html `<div class="${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.valueStatePopover)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.hasValueStateSlot ? block8.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</div>`; }
function block8(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block9.call(this, context, tags, suffix, item, index))}`; }
function block9(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
function block10(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
export default block0;
//# sourceMappingURL=SelectMenuTemplate.lit.js.map