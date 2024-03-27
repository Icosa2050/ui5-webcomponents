import { assert } from "chai";

describe("MultiInput general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/MultiInput.html`);
		await browser.emulateDevice('iPhone X');
	});

	it ("n-more picker dialog is properly rendered", async () => {
		const mi = await browser.$("#multiInput-warning");
		const tokenizer = await browser.$("#multiInput-warning").shadow$("ui5-tokenizer");
		const nMoreLabel = await tokenizer.shadow$(".ui5-tokenizer-more-text");

		await nMoreLabel.click();

		const nMoreDialog = await mi.shadow$("ui5-responsive-popover");

		assert.ok(await nMoreDialog.getProperty("opened"), "More Popover should be open");
		assert.ok(await nMoreDialog.$(".ui5-valuestatemessage--warning").isDisplayed(), "More Popover value state is shown");
		assert.ok(await nMoreDialog.$(".ui5-responsive-popover-header .ui5-responsive-popover-close-btn").isDisplayed(), "More Popover close button is shown");
		assert.ok(await nMoreDialog.$(".ui5-responsive-popover-footer ui5-button").isDisplayed(), "More Popover OK button is shown");
	});
});

describe("Deleting tokens", () => {
	before(async () => {
		await browser.url(`test/pages/MultiInput.html`);
		await browser.emulateDevice('iPhone X');
	});

	it ("Should fire the ui5-token-delete event when the 'X' is pressed in the n-more picker", async () => {
		const mi = await browser.$("#mi-event");
		const tokenizer = await browser.$("#mi-event").shadow$("ui5-tokenizer");
		const nMoreLabel = await tokenizer.shadow$(".ui5-tokenizer-more-text");

		await nMoreLabel.click();

		const nMoreDialog =  await mi.shadow$("ui5-responsive-popover");
		const listItemDeleteButton = await nMoreDialog.$$("ui5-li")[0].shadow$('.ui5-li-deletebtn ui5-button');

		await listItemDeleteButton.click();
		await nMoreDialog.$(".ui5-responsive-popover-footer ui5-button").click();

		assert.strictEqual(await browser.$("#event-type").getValue(), "ui5-token-delete", "The event was fired");
		assert.strictEqual(await browser.$("#event-count").getValue(), "1", "The event was fired once");
		assert.strictEqual(await browser.$("#event-target-text").getValue(), "ea", "The event was fired once");
	});
});


