commit 1acae010eb81f4d50368587b66c8840bdf886d04
Author: Tsanislav Gatev <tsanislav.gatev@sap.com>
Date:   Fri Apr 12 16:53:16 2024 +0300

    feat(ui5-date-*): adapt date and time controls to timezone feature (#8610)
    
    Adapting the date and time controls to the timezone feature, allowing the controls to present date in different timezones.
    
    Adaptation is done by using the UI5Date object provided by ui5.
    
    Can be tested either via html tag:
    
    <script data-ui5-config type="application/json">
            {
                    "language": "EN",
                    "timezone" : "Pacific/Apia"
            }
    </script>
    or by adding a query parameter to the url: ?sap-ui-timezone=XXXX
    
    The timezone identifiers format is the one used in IANA timezone database.
    
    Related to: #8461
