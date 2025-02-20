import { jsx as _jsx, jsxs as _jsxs } from "@ui5/webcomponents-base/jsx-runtime";
import BusyIndicator from "@ui5/webcomponents/dist/BusyIndicator.js";
import Icon from "@ui5/webcomponents/dist/Icon.js";
import NotificationListGroupList from "./NotificationListGroupList.js";
export default function NotificationListItemTemplate() {
    return (_jsxs("li", { class: "ui5-nli-group-root ui5-nli-focusable", onFocusIn: this._onfocusin, onKeyDown: this._onkeydown, tabindex: this.forcedTabIndex ? parseInt(this.forcedTabIndex) : undefined, "aria-labelledby": this.ariaLabelledBy, "aria-description": this.accInvisibleText, "aria-level": 1, children: [this.loading && (_jsx("span", { id: `${this._id}-loading`, class: "ui5-hidden-text", children: this.loadingText })), _jsx(BusyIndicator, { delay: this.loadingDelay, active: this.loading, inert: this.loading, class: "ui5-nli-loading", children: _jsxs("div", { class: "ui5-nli-group-content-wrapper", children: [_jsxs("div", { class: {
                                "ui5-nli-group-header": true,
                                "ui5-nli-group-header-expanded": this._expanded,
                            }, onClick: this._onHeaderToggleClick, onKeyDown: this._onkeydown, role: "button", "aria-expanded": this._expanded, "aria-controls": `${this._id}-notificationsList`, title: this.toggleIconAccessibleName, children: [_jsx(Icon, { name: this.groupCollapsedIcon, class: "ui5-nli-group-toggle-icon", mode: "Decorative" }), _jsx("div", { id: `${this._id}-title-text`, class: "ui5-nli-group-title-text", part: "title-text", role: "heading", "aria-level": 2, children: this.titleText }), _jsx("div", { class: "ui5-nli-group-divider" })] }), _jsx(NotificationListGroupList, { id: `${this._id}-notificationsList`, class: "ui5-nli-group-items", accessibleNameRef: `${this._id}-title-text`, growing: this.growing, onLoadMore: this._onLoadMore, children: _jsx("slot", {}) })] }) })] }));
}
//# sourceMappingURL=NotificationListGroupItemTemplate.js.map