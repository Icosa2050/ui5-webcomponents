/**
 * Returns a custom element class decorator.
 *
 * @param { string | object } tagNameOrComponentSettings
 * @returns { ClassDecorator }
 */
const customElement = (tagNameOrComponentSettings = {}) => {
    return (target) => {
        if (!Object.prototype.hasOwnProperty.call(target, "metadata")) {
            target.metadata = {};
        }
        if (typeof tagNameOrComponentSettings === "string") {
            target.metadata.tag = tagNameOrComponentSettings;
            return;
        }
        const { tag, languageAware, themeAware, fastNavigation, } = tagNameOrComponentSettings;
        target.metadata.tag = tag;
        if (languageAware) {
            target.metadata.languageAware = languageAware;
        }
        if (themeAware) {
            target.metadata.themeAware = themeAware;
        }
        if (fastNavigation) {
            target.metadata.fastNavigation = fastNavigation;
        }
        ["render", "renderer", "template", "staticAreaTemplate", "styles", "staticAreaStyles", "dependencies"].forEach((customElementEntity) => {
            const _customElementEntity = customElementEntity === "render" ? "renderer" : customElementEntity;
            const customElementEntityValue = tagNameOrComponentSettings[_customElementEntity];
            customElementEntityValue && Object.defineProperty(target, customElementEntity, {
                get: () => customElementEntityValue,
            });
        });
    };
};
export default customElement;
//# sourceMappingURL=customElement.js.map