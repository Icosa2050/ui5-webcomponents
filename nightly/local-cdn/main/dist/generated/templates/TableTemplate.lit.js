/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScopeUtils.js";
function block0(context, tags, suffix) { return suffix ? html `<div id="before" role="none" tabindex="0" ui5-table-dummy-focus-area></div><div id="table" role="grid" style="${styleMap(this.styles.table)}" aria-label="${ifDefined(this._ariaLabel)}" aria-rowcount="${ifDefined(this._ariaRowCount)}" aria-multiselectable="${ifDefined(this._ariaMultiSelectable)}"><slot name="headerRow"></slot><div id="rows"><div id="spacer" style="${styleMap(this.styles.spacer)}"><slot></slot></div></div>${!this.rows.length ? block1.call(this, context, tags, suffix) : undefined}${this._shouldRenderGrowing ? block4.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Horizontal" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}><div aria-hidden="true" id="table-end-row"><div id="table-end-cell"><div id="table-end" aria-hidden="true" tabindex="-1"></div></div></div></div>${this.loading ? block5.call(this, context, tags, suffix) : undefined}<div id="after" role="none" tabindex="0" ui5-table-dummy-focus-area></div>` : html `<div id="before" role="none" tabindex="0" ui5-table-dummy-focus-area></div><div id="table" role="grid" style="${styleMap(this.styles.table)}" aria-label="${ifDefined(this._ariaLabel)}" aria-rowcount="${ifDefined(this._ariaRowCount)}" aria-multiselectable="${ifDefined(this._ariaMultiSelectable)}"><slot name="headerRow"></slot><div id="rows"><div id="spacer" style="${styleMap(this.styles.spacer)}"><slot></slot></div></div>${!this.rows.length ? block1.call(this, context, tags, suffix) : undefined}${this._shouldRenderGrowing ? block4.call(this, context, tags, suffix) : undefined}<ui5-drop-indicator orientation="Horizontal" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator><div aria-hidden="true" id="table-end-row"><div id="table-end-cell"><div id="table-end" aria-hidden="true" tabindex="-1"></div></div></div></div>${this.loading ? block5.call(this, context, tags, suffix) : undefined}<div id="after" role="none" tabindex="0" ui5-table-dummy-focus-area></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-table-row", tags, suffix)} id="nodata-row"><${scopeTag("ui5-table-cell", tags, suffix)} id="nodata-cell" excluded-from-navigation horizontal-align="Center">${this.nodata.length ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</${scopeTag("ui5-table-cell", tags, suffix)}></${scopeTag("ui5-table-row", tags, suffix)}>` : html `<ui5-table-row id="nodata-row"><ui5-table-cell id="nodata-cell" excluded-from-navigation horizontal-align="Center">${this.nodata.length ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</ui5-table-cell></ui5-table-row>`; }
function block2(context, tags, suffix) { return html `<slot name="nodata"></slot>`; }
function block3(context, tags, suffix) { return html `${ifDefined(this._effectiveNoDataText)}`; }
function block4(context, tags, suffix) { return suffix ? html `<div id="footer" role="rowgroup"><${scopeTag("ui5-table-row", tags, suffix)} id="growing-row" ui5-growing-row><${scopeTag("ui5-table-cell", tags, suffix)} id="growing-cell"><!-- The growing button is a div filling the cell --><!-- It has a growing text at the top and a growingSubText at the bottom --><slot name="${ifDefined(this._growing._individualSlot)}"></slot></${scopeTag("ui5-table-cell", tags, suffix)}></${scopeTag("ui5-table-row", tags, suffix)}></div>` : html `<div id="footer" role="rowgroup"><ui5-table-row id="growing-row" ui5-growing-row><ui5-table-cell id="growing-cell"><!-- The growing button is a div filling the cell --><!-- It has a growing text at the top and a growingSubText at the bottom --><slot name="${ifDefined(this._growing._individualSlot)}"></slot></ui5-table-cell></ui5-table-row></div>`; }
function block5(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-busy-indicator", tags, suffix)} id="loading" delay="${ifDefined(this.loadingDelay)}" active data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html `<ui5-busy-indicator id="loading" delay="${ifDefined(this.loadingDelay)}" active data-sap-focus-ref></ui5-busy-indicator>`; }
function template() { return block0.call(this, this, this.constructor.tagsToScope, getCustomElementsScopingSuffix()); }
export default template;
//# sourceMappingURL=TableTemplate.lit.js.map