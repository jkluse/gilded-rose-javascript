import { expect, describe, it } from "vitest";
import { RegularItem, CheeseItem, SulfurasItem, ConcertItem, ConjuredItem, items } from "./gilded-rose.js";

describe("updateQuality", () => {
	it("reduces quality and sellIn of basic items by 1", () => {
		// arrange
		const testItem = new RegularItem("basic", 5, 3);
		items.push(testItem);

		// run
		testItem.updateQuality();

		// make assertions
		expect(testItem.quality).toBe(2);
		expect(testItem.sellIn).toBe(4);
	});

	it("The quality degrades by 2 after sellIn days is less than 0", () => {
		//arrange
		const testItem = new RegularItem("basic", -1, 3);
		items.push(testItem);

		// run
		testItem.updateQuality();

		// assert
		expect(testItem.quality).toBe(1);
		expect(testItem.sellIn).toBe(-2);
	});

	it("The quality of an item is never negative", () => {
		const testItem = new RegularItem("basic", 5, 0);
		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(0);
	});

	it("increases quality for Aged Brie the older it gets", () => {
		const testItem = new CheeseItem("Aged Brie", 10, 12);
		console.log(testItem);
		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(13);
	});

	it("never increases quality of item more than 50", () => {
		const testItem = new CheeseItem("Aged Brie", 10, 50);
		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(50);
	});

	it("never decreases quality of Sulfras, Hand of Ragnaros", () => {
		const testItem = new SulfurasItem("Sulfuras, Hand of Ragnaros", 0, 20);
		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(20);
	});

	it("never has a sellIn day for Sulfuras other than 0 for Hand of Ragnaros", () => {
		const testItem = new SulfurasItem("Sulfuras, Hand of Ragnaros", 0, 20);
		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.sellIn).toBe(0);
	});

	it("increases quality of concert items by 2 when sellIn is <= 10 days && > 5 days", () => {
		const testItem = new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 10, 20);
		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(22);
	});

	it("increases quality of concert items by 3 when sellIn is <= 5 days && > 0 days", () => {
		const testItem = new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 5, 20);
		const testItem2 = new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 1, 20);

		items.push(testItem);
		items.push(testItem2);

		testItem.updateQuality();
		testItem2.updateQuality();

		expect(testItem.quality).toBe(23);
		expect(testItem2.quality).toBe(23);
	});

	it("increases quality of concert to reduce to 0 after concert", () => {
		const testItem = new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 0, 20);

		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(0);
	});

	it("reduces quality of 'conjured' items twice as fast as normal items", () => {
		const testItem = new ConjuredItem("Conjured axe", 10, 20);

		items.push(testItem);

		testItem.updateQuality();

		expect(testItem.quality).toBe(18);
	});
});
