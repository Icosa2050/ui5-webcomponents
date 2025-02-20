import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@ui5/webcomponents-base/jsx-runtime";
import ToggleSpinButton from "./ToggleSpinButton.js";
import SegmentedButton from "./SegmentedButton.js";
import SegmentedButtonItem from "./SegmentedButtonItem.js";
import TimePickerClock from "./TimePickerClock.js";
export default function TimeSelectionClocksTemplate() {
    return (_jsxs("div", { id: `${this._id}`, class: "ui5-time-picker-tsc-container", tabindex: -1, onKeyDown: this._onkeydown, onKeyUp: this._onkeyup, onFocusIn: this._clocksFocusIn, children: [_jsxs("div", { class: "ui5-time-picker-tsc-buttons", children: [this._entities.map(entity => _jsxs(_Fragment, { children: [entity.hasSeparator && _jsx("span", { class: "ui5-time-selection-separator", children: ":" }), _jsx(ToggleSpinButton, { id: `${this._id}_button_${entity.entity}`, "data-ui5-clock": entity.entity, valueMin: entity.attributes && entity.attributes.min, valueMax: entity.attributes && entity.attributes.max, valueNow: entity.value, valueText: entity.textValue, accessibleName: entity.label, pressed: entity.active, onFocusIn: this._buttonFocusIn, children: entity.stringValue })] })), this._periods.length > 0 &&
                        _jsxs(_Fragment, { children: [_jsx("span", { class: "ui5-time-selection-separator" }), _jsx(SegmentedButton, { id: `${this._id}_AmPm`, onClick: this._periodChange, onFocusIn: this._amPmFocusIn, onFocusOut: this._amPmFocusOut, children: this._periods.map(period => _jsx(SegmentedButtonItem, { selected: period.selected, children: period.label })) })] })] }), _jsx("div", { class: "ui5-time-picker-tsc-clocks", role: "img", "aria-label": this.clockDialAriaLabel, children: this._entities.map(entity => _jsx(TimePickerClock, { id: `${this._id}_clock_${entity.entity}`, "data-ui5-clock": entity.entity, active: entity.active, label: entity.label, itemMin: entity.itemMin, itemMax: entity.itemMax, selectedValue: entity.value, displayStep: entity.displayStep, valueStep: entity.attributes && entity.attributes.step, lastItemReplacement: entity.lastItemReplacement, hideFractions: entity.hideFractions, prependZero: entity.prependZero, _skipAnimation: entity.skipAnimation, onChange: this._clockChange })) })] }));
}
//# sourceMappingURL=TimeSelectionClocksTemplate.js.map