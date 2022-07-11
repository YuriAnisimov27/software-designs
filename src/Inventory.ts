import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export interface Inventory {
	items: Item[];
	addItem(item: Item): void;
	sort(): void;
	sort(comparator: ItemComparator): void;
	toString(): string;
}
