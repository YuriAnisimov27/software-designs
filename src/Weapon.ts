export abstract class Weapon {
	public MODIFIER_CHANGE_RATE: number = 0.5;
	public baseDamage: number;
	public damageModifier: number;
	public baseDurability: number;
	public durabilityModifier: number;
	public name: string;
	public value: number;
	public weight: number;

	constructor(
		name: string,
		baseDamage: number,
		baseDurability: number,
		value: number,
		weight: number
	) {
		this.baseDamage = baseDamage;
		this.baseDurability = baseDurability;

		this.name = name;
		this.value = value;
		this.weight = weight;
	}

	public polish(): void {}

	public use(): string {}

	public toString(): string {}
}
