commit 89ccfb8b227a92ebb7c831b13f8e26e0b47177d7
Author: GDamyanov <georgi.damianov93@gmail.com>
Date:   Fri Feb 27 15:49:46 2026 +0200

    feat(ui5-date-picker, ui5-daterange-picket, ui5-datetime-picker): introduce show-clear-icon property
    
    Introduces a new show-clear-icon property to the DatePicker, DateRangePicker and DateTimePicker components that displays a clear icon inside the input field. When clicked, the icon clears the input value.
    
    Changes:
    
    Added boolean property (default: false, since: 2.20.0)
    Clear icon automatically shows when there's a value and hides when empty, readonly, or disabled
    Clicking the clear icon clears the value, focuses the input, and fires change events
