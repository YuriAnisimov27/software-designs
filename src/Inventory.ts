import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export interface IInventory {
	items: Item[];
	addItem(item: Item): void;
	sort(): void;
	sort(comparator: ItemComparator): void;
	toString(): string;
}

export class Inventory implements IInventory {
	items: Item[];

	constructor() {
		this.items = [];
	}

	addItem(item: Item): void {
		this.items.push(item);
	}

	sort(comparator?: ItemComparator): void {
		if (comparator) {
			this.items.sort((a, b) => comparator.compare(a, b));
		} else {
			this.items.sort((a, b) => a.compareTo(b));
		}
	}

	toString(): string {
		let result = '';
		for (let i = 0; i < this.items.length; i++) {
			result += `${this.items[i].toString()}\n`;
		}
		return result;
	}
}
