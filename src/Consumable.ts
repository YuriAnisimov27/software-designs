export abstract class Consumable {
	public consumed: boolean;
	public spoiled: boolean;
	public name: string;
	public value: number;

	constructor(name: string, value: number, weight: number, spoiled: boolean) {
		this.spoiled = spoiled;
		this.consumed = false;
		this.name = name;
		this.value = value;
	}

	public eat(): string {
		return this.spoiled ? `You eat the ${this.name}.` : `You feel sick.`;
	}

	public use(): string | number {
		if (this.isConsumed() && this.name === 'bread') {
			return `There is nothing left of the bread to consume.`;
		}

		if (!this.isConsumed() && !this.isSpoiled()) {
			return this.value;
		} else {
			return `You have already eaten the ${this.name}.`;
		}
	}

	public isConsumed(): boolean {
		return this.consumed;
	}

	public setConsumed(consumed: boolean): void {
		this.consumed = consumed;
	}

	public isSpoiled(): boolean {
		return this.spoiled;
	}

	public toString(): string {
		return `${this.name} - Value: ${this.value}.`;
	}
}
