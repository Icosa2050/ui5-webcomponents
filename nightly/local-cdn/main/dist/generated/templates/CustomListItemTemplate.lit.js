/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-roledescription="${ifDefined(this.accessibleRoleDescription)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block1.call(this, context, tags, suffix) : undefined}${this._hasHighlightColor ? block7.call(this, context, tags, suffix) : undefined}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content"><slot></slot></div>${this.typeDetail ? block8.call(this, context, tags, suffix) : undefined}${this.typeNavigation ? block9.call(this, context, tags, suffix) : undefined}${this.navigated ? block10.call(this, context, tags, suffix) : undefined}${this.placeSelectionElementAfter ? block11.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li> `; }
function block1(context, tags, suffix) { return html `${this.modeSingleSelect ? block2.call(this, context, tags, suffix) : undefined}${this.modeMultiple ? block3.call(this, context, tags, suffix) : undefined}${this.renderDeleteButton ? block4.call(this, context, tags, suffix) : undefined}`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : html `<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : html `<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`; }
function block4(context, tags, suffix) { return html `<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}</div>`; }
function block5(context, tags, suffix) { return html `<slot name="deleteButton"></slot>`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`; }
function block7(context, tags, suffix) { return html `<div class="ui5-li-highlight"></div>`; }
function block8(context, tags, suffix) { return suffix ? html `<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`; }
function block9(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon name ="slim-arrow-right"></ui5-icon>`; }
function block10(context, tags, suffix) { return html `<div class="ui5-li-navigated"></div>`; }
function block11(context, tags, suffix) { return html `${this.modeSingleSelect ? block12.call(this, context, tags, suffix) : undefined}${this.modeMultiple ? block13.call(this, context, tags, suffix) : undefined}${this.renderDeleteButton ? block14.call(this, context, tags, suffix) : undefined}`; }
function block12(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : html `<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`; }
function block13(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : html `<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`; }
function block14(context, tags, suffix) { return html `<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block15.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}</div>`; }
function block15(context, tags, suffix) { return html `<slot name="deleteButton"></slot>`; }
function block16(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`; }
export default block0;
//# sourceMappingURL=CustomListItemTemplate.lit.js.map