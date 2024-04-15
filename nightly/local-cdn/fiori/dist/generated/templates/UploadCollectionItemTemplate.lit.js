/* eslint no-unused-vars: 0 */
import { html, classMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-roledescription="${ifDefined(this.accessibleRoleDescription)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block1.call(this, context, tags, suffix) : undefined}${this._hasHighlightColor ? block7.call(this, context, tags, suffix) : undefined}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content"><div class="ui5-uci-thumbnail-and-content-container"><div class="ui5-uci-thumbnail"><slot name="thumbnail"></slot></div><div class="ui5-uci-content-and-progress"><div class="ui5-uci-content">${this._editing ? block8.call(this, context, tags, suffix) : block9.call(this, context, tags, suffix)}<div class="ui5-uci-description"><slot></slot></div></div>${this._showProgressIndicator ? block12.call(this, context, tags, suffix) : undefined}</div></div><div class="ui5-uci-buttons">${this._editing ? block13.call(this, context, tags, suffix) : block14.call(this, context, tags, suffix)}</div></div>${this.typeDetail ? block19.call(this, context, tags, suffix) : undefined}${this.typeNavigation ? block20.call(this, context, tags, suffix) : undefined}${this.navigated ? block21.call(this, context, tags, suffix) : undefined}${this.placeSelectionElementAfter ? block22.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li>`; }
function block1(context, tags, suffix) { return html `${this.modeSingleSelect ? block2.call(this, context, tags, suffix) : undefined}${this.modeMultiple ? block3.call(this, context, tags, suffix) : undefined}${this.renderDeleteButton ? block4.call(this, context, tags, suffix) : undefined}`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : html `<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : html `<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`; }
function block4(context, tags, suffix) { return html `<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}</div>`; }
function block5(context, tags, suffix) { return html `<slot name="deleteButton"></slot>`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`; }
function block7(context, tags, suffix) { return html `<div class="ui5-li-highlight"></div>`; }
function block8(context, tags, suffix) { return suffix ? html `<div class="ui5-uci-edit-container"><${scopeTag("ui5-input", tags, suffix)} id="ui5-uci-edit-input" data-sap-focus-ref @focusin="${this._onInputFocusin}" @keydown="${this._onInputKeyDown}"></${scopeTag("ui5-input", tags, suffix)}><span class="ui5-uci-file-extension">${ifDefined(this._fileExtension)}</span></div>` : html `<div class="ui5-uci-edit-container"><ui5-input id="ui5-uci-edit-input" data-sap-focus-ref @focusin="${this._onInputFocusin}" @keydown="${this._onInputKeyDown}"></ui5-input><span class="ui5-uci-file-extension">${ifDefined(this._fileExtension)}</span></div>`; }
function block9(context, tags, suffix) { return html `${this.fileNameClickable ? block10.call(this, context, tags, suffix) : block11.call(this, context, tags, suffix)}`; }
function block10(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-link", tags, suffix)} class="ui5-uci-file-name" @ui5-click="${ifDefined(this._onFileNameClick)}">${ifDefined(this.fileName)}</${scopeTag("ui5-link", tags, suffix)}>` : html `<ui5-link class="ui5-uci-file-name" @ui5-click="${ifDefined(this._onFileNameClick)}">${ifDefined(this.fileName)}</ui5-link>`; }
function block11(context, tags, suffix) { return html `<span class="ui5-uci-file-name ui5-uci-file-name-text">${ifDefined(this.fileName)}</span>`; }
function block12(context, tags, suffix) { return suffix ? html `<div class="ui5-uci-progress-box"><${scopeTag("ui5-progress-indicator", tags, suffix)} class="ui5-uci-progress-indicator" hide-value value="${ifDefined(this.progress)}" value-state="${ifDefined(this.valueStateName)}"></${scopeTag("ui5-progress-indicator", tags, suffix)}><div class="ui5-uci-progress-labels"><${scopeTag("ui5-label", tags, suffix)} show-colon>${ifDefined(this._progressText)}</${scopeTag("ui5-label", tags, suffix)}><${scopeTag("ui5-label", tags, suffix)}>${ifDefined(this.progress)}%</${scopeTag("ui5-label", tags, suffix)}></div></div>` : html `<div class="ui5-uci-progress-box"><ui5-progress-indicator class="ui5-uci-progress-indicator" hide-value value="${ifDefined(this.progress)}" value-state="${ifDefined(this.valueStateName)}"></ui5-progress-indicator><div class="ui5-uci-progress-labels"><ui5-label show-colon>${ifDefined(this._progressText)}</ui5-label><ui5-label>${ifDefined(this.progress)}%</ui5-label></div></div>`; }
function block13(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} design="Transparent" class="ui5-uci-edit-rename-btn" @click="${this._onRename}" @keyup="${this._onRenameKeyup}">${ifDefined(this._renameBtnText)}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} design="Transparent" id="ui5-uci-edit-cancel" @click="${this._onRenameCancel}" @keyup="${this._onRenameCancelKeyup}">${ifDefined(this._cancelRenameBtnText)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button design="Transparent" class="ui5-uci-edit-rename-btn" @click="${this._onRename}" @keyup="${this._onRenameKeyup}">${ifDefined(this._renameBtnText)}</ui5-button><ui5-button design="Transparent" id="ui5-uci-edit-cancel" @click="${this._onRenameCancel}" @keyup="${this._onRenameCancelKeyup}">${ifDefined(this._cancelRenameBtnText)}</ui5-button>`; }
function block14(context, tags, suffix) { return html `${this._showRetry ? block15.call(this, context, tags, suffix) : undefined}${this._showTerminate ? block16.call(this, context, tags, suffix) : undefined}${this.showEditButton ? block17.call(this, context, tags, suffix) : undefined}${!this.hideDeleteButton ? block18.call(this, context, tags, suffix) : undefined}`; }
function block15(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="refresh" design="Transparent" tooltip="${ifDefined(this._retryButtonTooltip)}" @click="${this._onRetry}" @keyup="${this._onRetryKeyup}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="refresh" design="Transparent" tooltip="${ifDefined(this._retryButtonTooltip)}" @click="${this._onRetry}" @keyup="${this._onRetryKeyup}"></ui5-button>`; }
function block16(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="stop" design="Transparent" tooltip="${ifDefined(this._terminateButtonTooltip)}" @click="${this._onTerminate}" @keyup="${this._onTerminateKeyup}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="stop" design="Transparent" tooltip="${ifDefined(this._terminateButtonTooltip)}" @click="${this._onTerminate}" @keyup="${this._onTerminateKeyup}"></ui5-button>`; }
function block17(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} id="${ifDefined(this._id)}-editing-button" design="Transparent" tooltip="${ifDefined(this._editButtonTooltip)}" icon="edit" @click="${this.onDetailClick}" @keyup="${this._onDetailKeyup}" class="ui5-li-detailbtn ui5-uci-edit"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button id="${ifDefined(this._id)}-editing-button" design="Transparent" tooltip="${ifDefined(this._editButtonTooltip)}" icon="edit" @click="${this.onDetailClick}" @keyup="${this._onDetailKeyup}" class="ui5-li-detailbtn ui5-uci-edit"></ui5-button>`; }
function block18(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} class="ui5-upload-collection-deletebtn" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this._onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button class="ui5-upload-collection-deletebtn" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this._onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`; }
function block19(context, tags, suffix) { return suffix ? html `<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : html `<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`; }
function block20(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon name ="slim-arrow-right"></ui5-icon>`; }
function block21(context, tags, suffix) { return html `<div class="ui5-li-navigated"></div>`; }
function block22(context, tags, suffix) { return html `${this.modeSingleSelect ? block23.call(this, context, tags, suffix) : undefined}${this.modeMultiple ? block24.call(this, context, tags, suffix) : undefined}${this.renderDeleteButton ? block25.call(this, context, tags, suffix) : undefined}`; }
function block23(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : html `<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`; }
function block24(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : html `<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`; }
function block25(context, tags, suffix) { return html `<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block26.call(this, context, tags, suffix) : block27.call(this, context, tags, suffix)}</div>`; }
function block26(context, tags, suffix) { return html `<slot name="deleteButton"></slot>`; }
function block27(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`; }
export default block0;
//# sourceMappingURL=UploadCollectionItemTemplate.lit.js.map