import { Consumable } from './Consumable';

export class Pizza {
	public numberOfSlices: number;
	public slicesEaten: number;

	constructor(numberOfSlices: number, spoiled: boolean) {
		this.numberOfSlices = numberOfSlices;
		this.slicesEaten = 0;
	}

	public eat(): string {
		if (this.slicesEaten < this.numberOfSlices) {
			this.slicesEaten += 1;

			if (this.slicesEaten >= this.numberOfSlices) {
				this.setConsumed(true);
				return `You have eaten all of the pizza.`;
			}

			return `You eat a slice of pizza.`;
		} else {
			return `You have already eaten all of the pizza.`;
		}
	}

	setConsumed(consumed: boolean, consumable: Consumable) {
		consumable.setConsumed(consumed);
	}
}
