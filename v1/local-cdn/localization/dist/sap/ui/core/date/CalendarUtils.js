/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
// Provides type sap.ui.core.date.CalendarUtils.
import CalendarWeekNumbering from "./CalendarWeekNumbering.js";
import Configuration from "../Configuration.js";
import LocaleData from "../LocaleData.js";
/**
 * Provides calendar-related utilities.
 *
 * @namespace
 * @alias module:sap/ui/core/date/CalendarUtils
 * @public
 * @since 1.108.0
 */
var CalendarUtils = {
  /**
   * Resolves calendar week configuration.
   *
   * Returns an object with the following fields:
   * <ul>
   *   <li><code>firstDayOfWeek</code>: specifies the first day of the week starting with
   *   <code>0</code> (which is Sunday)</li>
   *   <li><code>minimalDaysInFirstWeek</code>: minimal days at the beginning of the year
   *   which define the first calendar week</li>
   * </ul>
   *
   * @param {sap.ui.core.date.CalendarWeekNumbering} [sCalendarWeekNumbering]
   *   The calendar week numbering; if omitted, the calendar week numbering of the Configuration
   *   is used; see {@link sap.ui.core.Configuration#getCalendarWeekNumbering}. If this value is
   *   <code>Default</code> the returned calendar week configuration is derived from the given
   *   <code>oLocale</code>.
   * @param {sap.ui.core.Locale} [oLocale]
   *   The locale to use; if not provided, this falls back to the format locale from the
   *   Configuration; see {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale}.
   *   Is only used when <code>sCalendarWeekNumbering</code> is set to <code>Default</code>.
   * @returns {{firstDayOfWeek: int, minimalDaysInFirstWeek: int}|undefined}
   *   The calendar week configuration, or <code>undefined<code> for an invalid value of
   *   <code>sap.ui.core.date.CalendarWeekNumbering</code>.
   * @public
   * @since 1.108.0
   */
  getWeekConfigurationValues: function (sCalendarWeekNumbering, oLocale) {
    var oLocaleData, oWeekConfigurationValues;
    if (!sCalendarWeekNumbering) {
      return CalendarUtils.getWeekConfigurationValues(Configuration.getCalendarWeekNumbering(), oLocale);
    }
    oWeekConfigurationValues = CalendarWeekNumbering.getWeekConfigurationValues(sCalendarWeekNumbering);
    if (oWeekConfigurationValues) {
      return oWeekConfigurationValues;
    }
    if (sCalendarWeekNumbering === CalendarWeekNumbering.Default) {
      oLocale = oLocale || Configuration.getFormatSettings().getFormatLocale();
      oLocaleData = LocaleData.getInstance(oLocale);
      return {
        firstDayOfWeek: oLocaleData.getFirstDayOfWeek(),
        minimalDaysInFirstWeek: oLocaleData.getMinimalDaysInFirstWeek()
      };
    }
    return undefined;
  }
};
export default CalendarUtils;