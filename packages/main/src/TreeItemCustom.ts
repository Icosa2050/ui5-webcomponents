import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import {
	isTabNext,
	isTabPrevious,
	isF2,
	isDown,
} from "@ui5/webcomponents-base/dist/Keys.js";
import TreeItemBase from "./TreeItemBase.js";

// Template
import TreeItemCustomTemplate from "./TreeItemCustomTemplate.js";

// Styles
import treeItemCustomCss from "./generated/themes/TreeItem.css.js";

/**
 * @class
 * The `ui5-tree-item-custom` represents a node in a tree structure, shown as a `ui5-list`.
 *
 * This is the item to use inside a `ui5-tree`.
 * You can represent an arbitrary tree structure by recursively nesting tree items.
 *
 * You can use this item to put any custom content inside the tree item.
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents/dist/TreeItemCustom.js";`
 * @csspart title - Used to style the title of the tree list item
 * @csspart additionalText - Used to style the additionalText of the tree list item
 * @csspart icon - Used to style the icon of the tree list item
 * @constructor
 * @extends TreeItemBase
 * @public
 * @since 1.9.2
 */
@customElement({
	renderer: jsxRenderer,
	tag: "ui5-tree-item-custom",
	template: TreeItemCustomTemplate,
	styles: [TreeItemBase.styles, treeItemCustomCss],
})
class TreeItemCustom extends TreeItemBase {
	/**
	 * Defines whether the tree list item should display the selection element.
	 * @public
	 * @default false
	 */
	@property({ type: Boolean })
	hideSelectionElement = false;

	/**
	 * Defines the content of the `ui5-tree-item`.
	 * @public
	 */
	@slot()
	content!: Array<HTMLElement>;

	async _onkeydown(e: KeyboardEvent) {
		if (isDown(e) && this.content?.some(el => el.contains(e.target as Node))) {
			e.stopPropagation();
			return;
		}
		const isTab = isTabNext(e) || isTabPrevious(e);
		const isFocused = this.matches(":focus");

		if (!isTab && !isFocused && !isF2(e)) {
			return;
		}

		await super._onkeydown(e);
	}

	_onkeyup(e: KeyboardEvent) {
		const isTab = isTabNext(e) || isTabPrevious(e);
		const isFocused = this.matches(":focus");

		if (!isTab && !isFocused && !isF2(e)) {
			return;
		}

		super._onkeyup(e);
	}

	/**
	 * @override
	 */
	get placeSelectionElementBefore() {
		return !this.hideSelectionElement && super.placeSelectionElementBefore;
	}

	/**
	 * @override
	 */
	get placeSelectionElementAfter() {
		return !this.hideSelectionElement && super.placeSelectionElementAfter;
	}
}

TreeItemCustom.define();

export default TreeItemCustom;
