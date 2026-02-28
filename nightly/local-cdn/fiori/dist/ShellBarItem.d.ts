import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { AccessibilityAttributes, UI5CustomEvent } from "@ui5/webcomponents-base";
import Button from "@ui5/webcomponents/dist/Button.js";
type ShellBarItemClickEventDetail = {
    targetRef: HTMLElement;
};
type ShellBarItemAccessibilityAttributes = Pick<AccessibilityAttributes, "expanded" | "hasPopup" | "controls">;
/**
 * @class
 * The `ui5-shellbar-item` represents a custom item for `ui5-shellbar`.
 *
 * ### ES6 Module Import
 * `import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @experimental
 */
declare class ShellBarItem extends UI5Element {
    eventDetails: {
        click: ShellBarItemClickEventDetail;
    };
    /**
     * Defines the item's icon.
     * @default undefined
     * @public
     */
    icon?: string;
    /**
     * Defines the item text.
     * @default undefined
     * @public
     */
    text?: string;
    /**
     * Defines the count displayed in badge.
     * @default undefined
     * @public
     */
    count?: string;
    /**
     * Defines accessibility attributes.
     * @default {}
     * @public
     */
    accessibilityAttributes: ShellBarItemAccessibilityAttributes;
    /**
     * Indicates if item is in overflow popover.
     * @default false
     * @private
     */
    inOverflow: boolean;
    get stableDomRef(): string;
    hasListItems(): boolean;
    get listItems(): HTMLElement[];
    fireClickEvent(e: UI5CustomEvent<Button, "click">): boolean;
}
export default ShellBarItem;
export type { ShellBarItemClickEventDetail, ShellBarItemAccessibilityAttributes };
