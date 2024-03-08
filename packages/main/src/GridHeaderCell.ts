import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";

import GridHeaderCellTemplate from "./generated/templates/GridHeaderCellTemplate.lit.js";
import GridHeaderCellCss from "./generated/themes/GridHeaderCell.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-grid-header-cell</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/GridHeaderCell.js";</code>
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "ui5-grid-header-cell",
	renderer: litRender,
	styles: GridHeaderCellCss,
	template: GridHeaderCellTemplate,
	dependencies: [],
})
class GridHeaderCell extends UI5Element {
	/**
	 * Defines the header of the component.
	 *
	 * @public
	 */
	@slot({ type: HTMLElement, "default": true })
	header!: Array<HTMLElement>;

	@property({ type: String, defaultValue: "auto" })
	width!: string;

	@property({ type: String, defaultValue: "8rem" })
	minWidth!: string;

	@property({ validator: Integer, defaultValue: 0 })
	importance!: number;

	@property({ type: Boolean, defaultValue: false, noAttribute: true })
	_popin!: boolean;

	onEnterDOM(): void {
		this.setAttribute("role", "columnheader");
		this.setAttribute("tabindex", "0");
		this.style.minWidth = this.minWidth;
	}

	getFocusDomRef(): HTMLElement | undefined {
		return this;
	}

	get clone() {
		return this.header[0] ? this.header[0].cloneNode(true) : this.innerHTML;
	}
}

GridHeaderCell.define();

export default GridHeaderCell;
