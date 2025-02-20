import { assert } from "chai";

describe("DateRangePicker general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
	});

	it("Custom Validation Error", async () => {
		const daterangepicker = await browser.$("#daterange-picker3");

		await daterangepicker.click();
		await daterangepicker.keys("123123123");
		await daterangepicker.keys("Enter");

		assert.strictEqual(await daterangepicker.shadow$("ui5-input").getProperty("valueState"), "Negative", "The value state is negative");
	});

	it("Custom Validation None", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const daterangepicker = await browser.$("#daterange-picker3");

		await daterangepicker.click();
		await daterangepicker.keys("09/09/2020 - 10/10/2020");
		await daterangepicker.keys("Enter");

		assert.strictEqual(await daterangepicker.shadow$("ui5-input").getProperty("valueState"), "None", "The value state is on none");
	});

	it("Selected dates are updated after value update in the input field", async () => {
		const dayPicker = await browser.$("#daterange-picker3").shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`);
		const firstDateTimestamp = 1599609600;

		assert.strictEqual(await dayPicker.getProperty("timestamp"), firstDateTimestamp, "The first date is selected");
	});

	it("Is delimiter set", async () => {
		const daterangepicker = await browser.$("#daterange-picker2");

		assert.strictEqual(await daterangepicker.getProperty("delimiter"), "@", "The delimiter is set to @");

		await daterangepicker.click();
		await daterangepicker.keys("Feb 25, 2022 @ Feb 28, 2022");
		await daterangepicker.keys("Enter");
		await daterangepicker.setAttribute("delimiter", "###");

		assert.strictEqual(await daterangepicker.getAttribute("value"), "Feb 25, 2022 ### Feb 28, 2022", "Value is updated with the new delimiter");

		await daterangepicker.doubleClick();
		await daterangepicker.keys("Backspace");
		await daterangepicker.keys("Enter");
	});

	it("startDateValue and endDateValue getter", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const daterangepicker = await browser.$("#daterange-picker4");

		await daterangepicker.click();
		await browser.keys("27/09/2019 - 10/10/2019");
		await browser.keys("Enter");

		await daterangepicker.waitForClickable({ timeout: 1000 });
		const res = await browser.executeAsync(done => {
			const myDRP = document.getElementById("daterange-picker4");
			const startDateValue = myDRP.startDateValue.getTime();
			const endDateValue = myDRP.endDateValue.getTime();

			done({startDateValue, endDateValue});
		});

		assert.deepEqual(new Date(res.startDateValue), new Date(2019, 8, 27), "The first date is in JS Date format");
		assert.deepEqual(new Date(res.endDateValue), new Date(2019, 9, 10), "The last date is JS Date format");
	});

	it("Initially setting the same date as first & last is possible", async () => {
		const res = await browser.executeAsync(done => {
			const myDRP = document.getElementById("daterange-picker5");
			const startDateValue = myDRP.startDateValue.getTime();
			const endDateValue = myDRP.endDateValue.getTime();

			done({startDateValue, endDateValue});
		});

		assert.deepEqual(new Date(res.startDateValue), new Date(res.endDateValue), "Initially properties are set correctly");
	});

	it("Setting the same date as first & last is possible", async () => {
		const daterangepicker = await browser.$("#daterange-picker5");

		await daterangepicker.setProperty("value", "Aug 5, 2020 - Aug 5, 2020");

		const res = await browser.executeAsync(done => {
			const myDRP = document.getElementById("daterange-picker5");
			const startDateValue = myDRP.startDateValue.getTime();
			const endDateValue = myDRP.endDateValue.getTime();

			done({startDateValue, endDateValue});
		});

		assert.deepEqual(new Date(res.startDateValue), new Date(res.endDateValue), "Properties are set correctly");
	})

	it("Change event fired once", async () => {
		const dayPicker = await browser.$(`#daterange-picker1`).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`);
		const dayOne = await dayPicker.shadow$(`.ui5-dp-root`).$(".ui5-dp-content").$$("div > .ui5-dp-item" )[5];
		const dayTwo = await dayPicker.shadow$(`.ui5-dp-root`).$(".ui5-dp-content").$$("div > .ui5-dp-item" )[15];
		const daterangepicker = await browser.$("#daterange-picker1");

		await daterangepicker.click();
		await browser.keys("F4");

		await dayOne.click();
		await dayTwo.click();

		assert.strictEqual(await browser.$("#labelChange").getHTML(false), "1", "The change event was fired once");
	});

	it("Page up/down increments/decrements day value", async () => {
		const dateRangePicker = await browser.$("#daterange-picker5");
		await dateRangePicker.setAttribute("value", "Jul 16, 2020 @ Jul 29, 2020");
		await dateRangePicker.click();
		await browser.keys("End");

		await browser.keys('PageDown');
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 28, 2020");

		await browser.keys('PageUp');
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2020");

		await browser.keys("Home");
		await browser.keys('PageDown');
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 15, 2020 @ Jul 29, 2020");

		await browser.keys('PageUp');
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2020");
	});

	it("Page up/down increments/decrements month value", async () => {
		const dateRangePicker = await browser.$("#daterange-picker5");
		await dateRangePicker.setAttribute("value", "Jul 16, 2020 @ Jul 29, 2020");
		await dateRangePicker.click();
		await browser.keys("End");

		await browser.keys(['Shift', 'PageUp']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Aug 29, 2020");

		await browser.keys(['Shift', 'PageDown']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2020");

		await browser.keys("Home");
		await browser.keys(['Shift', 'PageDown']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jun 16, 2020 @ Jul 29, 2020");

		await browser.keys(['Shift', 'PageUp']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2020");
	});

	it("Page up/down increments/decrements year value", async () => {
		const dateRangePicker = await browser.$("#daterange-picker5");
		await dateRangePicker.setAttribute("value", "Jul 16, 2020 @ Jul 29, 2020");
		await dateRangePicker.click();
		await browser.keys("End");

		await browser.keys(['Control', 'Shift', 'PageUp']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2021");

		await browser.keys(['Control', 'Shift', 'PageDown']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2020");

		await browser.keys("Home");
		await browser.keys(['Control', 'Shift', 'PageDown']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2019 @ Jul 29, 2020");

		await browser.keys(['Control', 'Shift', 'PageUp']);
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 29, 2020");
	});

	it("Enter keyboard key confirms the date range in the input field", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const dateRangePicker = await browser.$("#daterange-picker5");
		await dateRangePicker.click();

		await browser.keys("Jul 17, 2020 @ Jul 16, 2020");

		await browser.keys("Enter");
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 17, 2020");
	});

	it("Focus out of the input field confirms the date range", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const dateRangePicker = await browser.$("#daterange-picker5");
		await dateRangePicker.click();
		await browser.keys("Jul 17, 2020 @ Jul 16, 2020");

		await browser.keys("Tab");
		assert.strictEqual(await dateRangePicker.getAttribute("value"), "Jul 16, 2020 @ Jul 17, 2020");
	});

	it("Delimiter is part of the format pattern", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const daterangepicker = await browser.$("#daterange-picker6");

		await daterangepicker.click();
		await daterangepicker.keys("2020-09-09 - 2020-10-10");
		await daterangepicker.keys("Enter");

		assert.strictEqual(await daterangepicker.shadow$("ui5-input").getProperty("valueState"), "None", "The value state is on none");
	});

	it("Month is not changed in multiselect mode", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const daterangepicker = await browser.$("#daterange-picker1");
		const calendarHeader = await browser.$(`#daterange-picker1`).shadow$(`ui5-calendar`).shadow$(`.ui5-calheader`);
		const dayPicker = await browser.$(`#daterange-picker1`).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`);
		const dayOne = await dayPicker.shadow$(`.ui5-dp-root`).$(".ui5-dp-content").$$("div > .ui5-dp-item" )[15];
		const nextButton = await calendarHeader.shadow$(`[data-ui5-cal-header-btn-next]`);
		const monthButton = await calendarHeader.shadow$(`[data-ui5-cal-header-btn-month]`);
		const monthName = monthButton.innerHTML;

		await daterangepicker.click();
		await browser.keys("F4");

		await nextButton.click();
		await nextButton.click();
		await dayOne.click();

		assert.strictEqual(monthButton.innerHTML, monthName, "The month is not changed after selecting the first date in the future");
	});

	it("startDateValue and endDateValue getters when single value", async () => {
		await browser.url(`test/pages/DateRangePicker.html`);
		const daterangepicker = await browser.$("#daterange-picker4");

		await daterangepicker.click();
		await browser.keys("27/09/2019");
		await browser.keys("Enter");

		await daterangepicker.waitForClickable({ timeout: 1000 });
		const res = await browser.executeAsync(done => {
			const myDRP = document.getElementById("daterange-picker4");
			const startDateValue = myDRP.startDateValue.getTime();
			const endDateValue = myDRP.endDateValue.getTime();
			const drpValue = myDRP.value;

			done({startDateValue, endDateValue, drpValue});
		});

		assert.deepEqual(new Date(res.startDateValue), new Date(2019, 8, 27), "First date is correct");
		assert.equal(res.endDateValue, null, "Second date is correct");
		assert.equal(res.drpValue, await (await browser.$("#labelDate")).getHTML(false), "Event value is correct");
	});

	it("Picker popover should have accessible name", async () => {
		const daterangepicker = await browser.$("#daterange-picker3");
		await daterangepicker.click();
		await browser.keys("F4");

		const popover = await daterangepicker.shadow$("ui5-responsive-popover");

		assert.strictEqual(await popover.getAttribute("accessible-name"), "Choose Date Range", "Picker popover has an accessible name");

		await browser.keys("Escape");
	});

	it("Selected days: accessibility semantics", async () => {
		const daterangepicker = await browser.$("#daterange-picker3");

		await daterangepicker.click();
		await daterangepicker.keys("09/06/2024 - 15/06/2024");
		await daterangepicker.keys("Enter");
		await browser.keys("F4");

		const dayPicker = await browser.$(`#daterange-picker3`).shadow$(`ui5-calendar`).shadow$(`ui5-daypicker`);
		const days = await dayPicker.shadow$(`.ui5-dp-root`).$(".ui5-dp-content").$$("div > .ui5-dp-item");
		const startSelectionDay = await days[14];
		const dayInBetween = await days[15];
		const endSelectionDay = await days[20];

		assert.strictEqual(await startSelectionDay.getAttribute("aria-selected", "true"), "true", "The start day has selected semantics");
		assert.strictEqual(await dayInBetween.getAttribute("aria-selected", "true"), "true", "The day in between has selected semantics");
		assert.strictEqual(await endSelectionDay.getAttribute("aria-selected", "true"), "true", "The end day has selected semantics");

		await browser.keys("Escape");
	});

	it("Min and max dates are set without format-pattern by using ISO (YYYY-MM-dd) format", async () => {
		await browser.url(`test/pages/DateRangePicker.html?sap-ui-language=bg`);

		const daterangepicker = await browser.$("#daterange-picker8");
		const dateRangePickerInput = await daterangepicker.shadow$("ui5-input");

		await daterangepicker.click();
		await daterangepicker.keys("10.02.2023 г. - 25.07.2023 г.");
		await daterangepicker.keys("Enter");

		assert.strictEqual(await dateRangePickerInput.getProperty("valueState"), "Negative", "Min and max dates are set correctly");
	});

	it("Should open month picker if format-pattern is 'MM.yyyy'", async () => {
		const daterangepicker = await browser.$("#daterange-picker9");

		const calendar = await daterangepicker.shadow$(`ui5-calendar`);
		await daterangepicker.setProperty("open", true);

		let currentPicker = await calendar.getProperty("_currentPicker");
		assert.equal(currentPicker, "month", "calendar is opened on months");

		await daterangepicker.setProperty("open", false);
	});

	it("Select month range in MonthPicker", async () => {
		const daterangepicker = await browser.$("#daterange-picker9");

		await daterangepicker.click();
		await daterangepicker.keys("09.2024 - 11.2024");
		await daterangepicker.keys("Enter");
		await browser.keys("F4");

		const monthPicker = await browser.$(`#daterange-picker9`).shadow$(`ui5-calendar`).shadow$(`ui5-monthpicker`);
		const months = await monthPicker.shadow$(`.ui5-mp-root`).$$("div > .ui5-mp-item");
		const startSelectionMonth = await months[8];
		const monthInBetween = await months[9];
		const endSelectionMonth = await months[10];

		assert.ok((await startSelectionMonth.getAttribute("class")).includes("ui5-mp-item--selected"), "The start month has the correct selection class");
		assert.ok((await monthInBetween.getAttribute("class")).includes("ui5-mp-item--selected-between"), "The in-between month has the correct selection class");
		assert.ok((await endSelectionMonth.getAttribute("class")).includes("ui5-mp-item--selected"), "The end month has the correct selection class");

		await daterangepicker.setProperty("open", false);
	});

	it("Should open year picker if format-pattern is 'yyyy'", async () => {
		const daterangepicker = await browser.$("#daterange-picker10");

		const calendar = await daterangepicker.shadow$(`ui5-calendar`);
		await daterangepicker.setProperty("open", true);

		let currentPicker = await calendar.getProperty("_currentPicker");
		assert.equal(currentPicker, "year", "calendar is opened on years");

		await daterangepicker.setProperty("open", false);
	});

	it("Select year range in YearPicker", async () => {
		const daterangepicker = await browser.$("#daterange-picker10");

		await daterangepicker.click();
		await daterangepicker.keys("0001 - 0006");
		await daterangepicker.keys("Enter");
		await browser.keys("F4");

		const yearPicker = await browser.$(`#daterange-picker10`).shadow$(`ui5-calendar`).shadow$(`ui5-yearpicker`);
		const years = await yearPicker.shadow$(`.ui5-yp-root`).$$("div > .ui5-yp-item");
		const startSelectionYear = years[0];
		const yearInBetween = years[4];
		const endSelectionYear = years[5];

		assert.ok((await startSelectionYear.getAttribute("class")).includes("ui5-yp-item--selected"), "The start year has the correct selection class");
		assert.ok((await yearInBetween.getAttribute("class")).includes("ui5-yp-item--selected-between"), "The in-between year has the correct selection class");
		assert.ok((await endSelectionYear.getAttribute("class")).includes("ui5-yp-item--selected"), "The end year has the correct selection class");

		await daterangepicker.setProperty("open", false);
	});
});
