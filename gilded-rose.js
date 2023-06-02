export class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
	updateQuality() {}
}

export class RegularItem extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}
	updateQuality() {
		if (this.sellIn < 0 && this.quality >= 2) {
			this.quality -= 2;
		} else if (this.quality > 0) {
			this.quality--;
		}

		this.sellIn--;
	}
}

export class CheeseItem extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}
	updateQuality() {
		this.sellIn--;
		if (this.quality < 50) {
			this.quality++;
		}
	}
}

export class SulfurasItem extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}
	updateQuality() {}
}

// × increases quality of concert items by 2 when sellIn is <= 10 days && > 5 days
// × increases quality of concert items by 3 when sellIn is <= 5 days && > 0 days
// × increases quality of concert to reduce to 0 after concert
export class ConcertItem extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}
	updateQuality() {
		if (this.sellIn <= 10 && this.sellIn > 5) {
			this.quality += 2;
		} else if (this.sellIn <= 5 && this.sellIn > 0) {
			this.quality += 3;
		} else if (this.sellIn <= 0) {
			this.quality = 0;
		}

		if (this.quality > 50) this.quality = 50;

		this.sellIn--;
	}
}
export class ConjuredItem extends Item {
	constructor(name, sellIn, quality) {
		super(name, sellIn, quality);
	}
	updateQuality() {
		if (this.sellIn < 0 && this.quality >= 4) {
			this.quality -= 4;
		} else if (this.quality > 2) {
			this.quality -= 2;
		}

		this.sellIn--;
	}
}

export let items = [];

items.push(new RegularItem("+5 Dexterity Vest", 10, 20));
items.push(new CheeseItem("Aged Brie", 2, 0));
items.push(new RegularItem("Elixir of the Mongoose", 5, 7));
items.push(new SulfurasItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));
