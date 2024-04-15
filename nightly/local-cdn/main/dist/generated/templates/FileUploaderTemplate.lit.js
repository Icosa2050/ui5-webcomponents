/* eslint no-unused-vars: 0 */
import { html, repeat, classMap, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}"><div class="ui5-file-uploader-mask">${!this.hideInput ? block1.call(this, context, tags, suffix) : undefined}<slot></slot></div>${this._keepInputInShadowDOM ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div><${scopeTag("ui5-popover", tags, suffix)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon ? block4.call(this, context, tags, suffix) : undefined}${this.shouldDisplayDefaultValueStateMessage ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}</div></${scopeTag("ui5-popover", tags, suffix)}> ` : html `<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}"><div class="ui5-file-uploader-mask">${!this.hideInput ? block1.call(this, context, tags, suffix) : undefined}<slot></slot></div>${this._keepInputInShadowDOM ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div><ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon ? block4.call(this, context, tags, suffix) : undefined}${this.shouldDisplayDefaultValueStateMessage ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}</div></ui5-popover> `; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-input", tags, suffix)} value="${ifDefined(this.value)}" value-state="${ifDefined(this.valueState)}" placeholder="${ifDefined(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></${scopeTag("ui5-input", tags, suffix)}>` : html `<ui5-input value="${ifDefined(this.value)}" value-state="${ifDefined(this.valueState)}" placeholder="${ifDefined(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`; }
function block2(context, tags, suffix) { return html `<input type="file" title="${ifDefined(this.titleText)}" accept="${ifDefined(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1">`; }
function block3(context, tags, suffix) { return html `<slot name="formSupport"></slot>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>`; }
function block5(context, tags, suffix) { return html `${ifDefined(this.valueStateText)}`; }
function block6(context, tags, suffix) { return html `${repeat(this.valueStateMessageText, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}`; }
function block7(context, tags, suffix, item, index) { return html `${ifDefined(item)}`; }
export default block0;
//# sourceMappingURL=FileUploaderTemplate.lit.js.map