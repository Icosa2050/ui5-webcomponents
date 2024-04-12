/* eslint-disable func-names */
import { registerFeature } from "../FeaturesRegistry.js";
import { setTheme } from "../config/Theme.js";
import { CLDRData } from "../asset-registries/LocaleData.js";
import type { LegacyDateCalendarCustomizing } from "../features/LegacyDateFormats.js";

// The lifecycle is open -> _opened -> close -> _closed, we're interested in the first (open) and last (_closed)
type OpenUI5Popup = {
	prototype: {
		open: (...args: any[]) => void,
		_closed: (...args: any[]) => void,
		getOpenState: () => "CLOSED" | "CLOSING" | "OPEN" | "OPENING",
		oContent: {
			getDomRef: () => HTMLElement,
		},
	}
};

type OpenUI5Core = {
	attachInit: (callback: () => void) => void,
	ready: () => Promise<void>,
	attachThemeChanged: (callback: () => void) => void,
	getConfiguration: () => OpenUI5CoreConfiguration,
};

type OpenUI5CoreConfiguration = {
	getAnimationMode: () => string,
	getLanguage: () => string,
	getTheme: () => string,
	getThemeRoot: () => string,
	getRTL: () => string,
	getTimezone: () => string,
	getCalendarType: () => string,
	getLocale: () => string,
	getFormatSettings: () => {
		getLegacyDateCalendarCustomizing: () => LegacyDateCalendarCustomizing;
	}
};

type ControlBehavior = {
	getAnimationMode: () => string,
}

type Localization = {
	getLanguage: () => string,
	getLanguageTag: () => string,
	getRTL: () => string,
	getTimezone: () => string,
}

type LocaleData = {
	getInstance: (locale: string) => Locale,
}

type Theming = {
	getThemeRoot: () => string,
	getTheme: () => string,
	attachApplied: (callback: () => void) => void,
}

type Formatting = {
	getCalendarType: () => string,
	getLegacyDateCalendarCustomizing: () => LegacyDateCalendarCustomizing,
	getCustomIslamicCalendarData?: () => LegacyDateCalendarCustomizing,
}

type CalendarUtils = {
	getWeekConfigurationValues: () => {
		firstDayOfWeek: number | undefined,
	},
}

type Locale = {
	getFirstDayOfWeek: () => number,
	_get: () => CLDRData,
};

class OpenUI5Support {
	static isAtLeastVersion116() {
		const version = window.sap.ui!.version as string;
		const parts = version.split(".");
		if (!parts || parts.length < 2) {
			return false;
		}
		return parseInt(parts[0]) > 1 || parseInt(parts[1]) >= 116;
	}

	static isOpenUI5Detected() {
		return typeof window.sap?.ui?.require === "function";
	}

	static init() {
		if (!OpenUI5Support.isOpenUI5Detected()) {
			return Promise.resolve();
		}

		return new Promise<void>(resolve => {
			window.sap.ui.require(["sap/ui/core/Core"], async (Core: OpenUI5Core) => {
				const callback = () => {
					let deps: Array<string> = ["sap/ui/core/Popup", "sap/ui/core/LocaleData"];
					if (OpenUI5Support.isAtLeastVersion116()) { // for versions since 1.116.0 and onward, use the modular core
						deps = [
							...deps,
							"sap/base/i18n/Formatting",
							"sap/base/i18n/Localization",
							"sap/ui/core/ControlBehavior",
							"sap/ui/core/Theming",
							"sap/ui/core/date/CalendarUtils",
						];
					}
					window.sap.ui.require(deps, (Popup: OpenUI5Popup) => {
						OpenUI5Support.patchPopup(Popup);
						resolve();
					});
				};
				if (OpenUI5Support.isAtLeastVersion116()) {
					await Core.ready();
					callback();
				} else {
					Core.attachInit(callback);
				}
			});
		});
	}

	static patchPopup(Popup: OpenUI5Popup) {
		// 1. Patch open (show the popover before all animations have started)
		const origOpen = Popup.prototype.open;
		Popup.prototype.open = function (...args: any[]) {
			origOpen.apply(this, args);
			const topLayerAlreadyInUse = !!document.body.querySelector(":popover-open"); // check if there is already something in the top layer
			const openingInitiated = ["OPENING", "OPEN"].includes(this.getOpenState());
			if (openingInitiated && topLayerAlreadyInUse) {
				const el = this.oContent.getDomRef();
				el.setAttribute("popover", "manual");
				el.showPopover();
			}
		};

		// 2. Patch _closed (hide the popover after all animations have ended)
		const _origClosed = Popup.prototype._closed;
		Popup.prototype._closed = function (...args: any[]) {
			_origClosed.apply(this, args);
			const el = this.oContent?.getDomRef();
			if (!el) {
				return; // the popup was deleted from DOM, no need to unset the popover attribute and close it
			}
			if (el.hasAttribute("popover")) {
				el.hidePopover();
				el.removeAttribute("popover");
			}
		};

		// 3. Create the required CSS for the expected coordinate system
		const stylesheet = new CSSStyleSheet();
		stylesheet.replaceSync(`.sapMPopup-CTX:popover-open { inset: unset; }`);
		document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
	}

	static getConfigurationSettingsObject() {
		if (!OpenUI5Support.isOpenUI5Detected()) {
			return {};
		}

		if (OpenUI5Support.isAtLeastVersion116()) {
			const ControlBehavior = window.sap.ui.require("sap/ui/core/ControlBehavior") as ControlBehavior;
			const Localization = window.sap.ui.require("sap/base/i18n/Localization") as Localization;
			const Theming = window.sap.ui.require("sap/ui/core/Theming") as Theming;
			const Formatting = window.sap.ui.require("sap/base/i18n/Formatting") as Formatting;
			const CalendarUtils = window.sap.ui.require("sap/ui/core/date/CalendarUtils") as CalendarUtils;

			return {
				animationMode: ControlBehavior.getAnimationMode(),
				language: Localization.getLanguage(),
				theme: Theming.getTheme(),
				themeRoot: Theming.getThemeRoot(),
				rtl: Localization.getRTL(),
				timezone: Localization.getTimezone(),
				calendarType: Formatting.getCalendarType(),
				formatSettings: {
					firstDayOfWeek: CalendarUtils.getWeekConfigurationValues().firstDayOfWeek,
					legacyDateCalendarCustomizing: Formatting.getCustomIslamicCalendarData?.()
												?? Formatting.getLegacyDateCalendarCustomizing?.(),
				},
			};
		}

		const Core = window.sap.ui.require("sap/ui/core/Core") as OpenUI5Core;
		const config = Core.getConfiguration();
		const LocaleData = window.sap.ui.require("sap/ui/core/LocaleData") as LocaleData;

		return {
			animationMode: config.getAnimationMode(),
			language: config.getLanguage(),
			theme: config.getTheme(),
			themeRoot: config.getThemeRoot(),
			rtl: config.getRTL(),
			timezone: config.getTimezone(),
			calendarType: config.getCalendarType(),
			formatSettings: {
				firstDayOfWeek: LocaleData ? LocaleData.getInstance(config.getLocale()).getFirstDayOfWeek() : undefined,
				legacyDateCalendarCustomizing: config.getFormatSettings().getLegacyDateCalendarCustomizing(),
			},
		};
	}

	static getLocaleDataObject() {
		if (!OpenUI5Support.isOpenUI5Detected()) {
			return;
		}

		const LocaleData = window.sap.ui.require("sap/ui/core/LocaleData") as LocaleData;

		if (OpenUI5Support.isAtLeastVersion116()) {
			const Localization = window.sap.ui.require("sap/base/i18n/Localization") as Localization;
			return LocaleData.getInstance(Localization.getLanguageTag())._get();
		}

		const Core = window.sap.ui.require("sap/ui/core/Core") as OpenUI5Core;
		const config = Core.getConfiguration();
		return LocaleData.getInstance(config.getLocale())._get();
	}

	static _listenForThemeChange() {
		if (OpenUI5Support.isAtLeastVersion116()) {
			const Theming: Theming = window.sap.ui.require("sap/ui/core/Theming");
			Theming.attachApplied(() => {
				setTheme(Theming.getTheme());
			});
		} else {
			const Core = window.sap.ui.require("sap/ui/core/Core") as OpenUI5Core;
			const config = Core.getConfiguration();
			Core.attachThemeChanged(() => {
				setTheme(config.getTheme());
			});
		}
	}

	static attachListeners() {
		if (!OpenUI5Support.isOpenUI5Detected()) {
			return;
		}

		OpenUI5Support._listenForThemeChange();
	}

	static cssVariablesLoaded() {
		if (!OpenUI5Support.isOpenUI5Detected()) {
			return;
		}

		const link = [...document.head.children].find(el => el.id === "sap-ui-theme-sap.ui.core") as HTMLLinkElement; // more reliable than querySelector early
		if (!link) {
			return false;
		}

		return !!link.href.match(/\/css(-|_)variables\.css/);
	}
}

registerFeature("OpenUI5Support", OpenUI5Support);

export default OpenUI5Support;
