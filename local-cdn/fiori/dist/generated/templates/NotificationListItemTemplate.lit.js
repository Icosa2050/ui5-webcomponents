/* eslint no-unused-vars: 0 */
import { html, repeat, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<li class="ui5-nli-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" role="listitem" tabindex="${ifDefined(this.forcedTabIndex)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}"><div class="ui5-nli-actions">${this.showOverflow ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}${this.showClose ? block4.call(this, context, tags, suffix) : undefined}</div><div class="ui5-nli-content"><div class="ui5-nli-title-text-wrapper">${this.hasPriority ? block5.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-title-text" class="ui5-nli-title-text" part="title-text">${ifDefined(this.titleText)}</div></div>${this.hasDesc ? block6.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-footer" class="ui5-nli-footer">${repeat(this.footerItems, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}<${scopeTag("ui5-link", tags, suffix)} class="ui5-nli-footer-showMore" ?hidden="${this.hideShowMore}" @ui5-click="${ifDefined(this._onShowMoreClick)}" aria-hidden="true" href="#"  showMore-btn>${ifDefined(this.showMoreText)}</${scopeTag("ui5-link", tags, suffix)}></div><span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${this.busy ? block9.call(this, context, tags, suffix) : undefined}</li>` : html `<li class="ui5-nli-root ui5-nli-focusable" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" role="listitem" tabindex="${ifDefined(this.forcedTabIndex)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}"><div class="ui5-nli-actions">${this.showOverflow ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}${this.showClose ? block4.call(this, context, tags, suffix) : undefined}</div><div class="ui5-nli-content"><div class="ui5-nli-title-text-wrapper">${this.hasPriority ? block5.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-title-text" class="ui5-nli-title-text" part="title-text">${ifDefined(this.titleText)}</div></div>${this.hasDesc ? block6.call(this, context, tags, suffix) : undefined}<div id="${ifDefined(this._id)}-footer" class="ui5-nli-footer">${repeat(this.footerItems, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}<ui5-link class="ui5-nli-footer-showMore" ?hidden="${this.hideShowMore}" @ui5-click="${ifDefined(this._onShowMoreClick)}" aria-hidden="true" href="#"  showMore-btn>${ifDefined(this.showMoreText)}</ui5-link></div><span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${this.busy ? block9.call(this, context, tags, suffix) : undefined}</li>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${ifDefined(this.overflowBtnAccessibleName)}" aria-label="${ifDefined(this.overflowBtnAccessibleName)}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="overflow" design="Transparent" @click="${this._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${ifDefined(this.overflowBtnAccessibleName)}" aria-label="${ifDefined(this.overflowBtnAccessibleName)}"></ui5-button>`; }
function block2(context, tags, suffix) { return html `${repeat(this.standardActions, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}`; }
function block3(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(item.icon)}" class="ui5-nli-action" @click="${item.press}" ?disabled="${item.disabled}" design="${ifDefined(item.design)}" data-ui5-external-action-item-id="${ifDefined(item.refItemid)}">${ifDefined(item.text)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="${ifDefined(item.icon)}" class="ui5-nli-action" @click="${item.press}" ?disabled="${item.disabled}" design="${ifDefined(item.design)}" data-ui5-external-action-item-id="${ifDefined(item.refItemid)}">${ifDefined(item.text)}</ui5-button>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${ifDefined(this.closeBtnAccessibleName)}" aria-label="${ifDefined(this.closeBtnAccessibleName)}" close-btn></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="decline" design="Transparent" @click="${this._onBtnCloseClick}" tooltip="${ifDefined(this.closeBtnAccessibleName)}" aria-label="${ifDefined(this.closeBtnAccessibleName)}" close-btn></ui5-button>`; }
function block5(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-prio-icon ui5-prio-icon--${ifDefined(this.priorityIcon)}" name="${ifDefined(this.priorityIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-prio-icon ui5-prio-icon--${ifDefined(this.priorityIcon)}" name="${ifDefined(this.priorityIcon)}"></ui5-icon>`; }
function block6(context, tags, suffix) { return html `<div id="${ifDefined(this._id)}-description" class="ui5-nli-description"><slot></slot></div>`; }
function block7(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item.slotName)}"></slot>${item.showDivider ? block8.call(this, context, tags, suffix, item, index) : undefined}`; }
function block8(context, tags, suffix, item, index) { return html `<div class="ui5-nli-footer-divider" aria-hidden="true">·</div>`; }
function block9(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(this.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html `<ui5-busy-indicator delay="${ifDefined(this.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></ui5-busy-indicator>`; }
export default block0;
//# sourceMappingURL=NotificationListItemTemplate.lit.js.map