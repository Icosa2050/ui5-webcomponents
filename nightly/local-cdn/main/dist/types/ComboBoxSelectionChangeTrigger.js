/**
 * Describes the source of a `selection-change` event fired by the `ui5-combobox`.
 * @public
 * @since 2.24.0
 */
var ComboBoxSelectionChangeTrigger;
(function (ComboBoxSelectionChangeTrigger) {
    /**
     * Selection caused by typeahead (auto-complete while typing).
     * @public
     */
    ComboBoxSelectionChangeTrigger["Typeahead"] = "Typeahead";
    /**
     * Selection caused by clicking or tapping an item in the dropdown.
     * @public
     */
    ComboBoxSelectionChangeTrigger["Click"] = "Click";
    /**
     * Selection caused by keyboard navigation (Arrow keys, Home, End, Page Up/Down).
     *
     * Note: pressing Enter does not fire `selection-change` - it fires the `change` event instead.
     * @public
     */
    ComboBoxSelectionChangeTrigger["Keyboard"] = "Keyboard";
})(ComboBoxSelectionChangeTrigger || (ComboBoxSelectionChangeTrigger = {}));
export default ComboBoxSelectionChangeTrigger;
//# sourceMappingURL=ComboBoxSelectionChangeTrigger.js.map