export abstract class Consumable {
	public consumed: boolean;
	public spoiled: boolean;

	constructor(name: string, value: number, weight: number, spoiled: boolean) {
		this.spoiled = spoiled;
	}

	public eat(): string {}

	public use(): string {}

	public isConsumed(): boolean {
		return this.consumed;
	}

	public setConsumed(consumed: boolean): void {
		this.consumed = consumed;
	}

	public isSpoiled(): boolean {
		return this.spoiled;
	}

	public toString(): string {}
}
