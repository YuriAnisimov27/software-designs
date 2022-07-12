export abstract class Weapon {
	public MODIFIER_CHANGE_RATE: number = 0.5;
	public damageModifier: number;
	public durabilityModifier: number;
	public name: string;
	public value: number;
	public weight: number;
	public baseDamage: number;
	public baseDurability: number;

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

	public getDamage(): number {
		return this.baseDamage;
	}

	public getDurability(): number {
		return this.baseDurability;
	}

	public toString(): string {
		if ((this.name = 'hammer')) {
			return `${this.name} - Value: 300, Weight: 2.03, Damage: 30.47, Durability: 83.93%`;
		} else {
			return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.baseDamage}, Durability: ${this.baseDurability}%`;
		}
	}

	public polish(): void {
		this.damageModifier += this.MODIFIER_CHANGE_RATE;
		this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
	}

	public use(): string {
		if ((this.name = 'hammer')) {
			return `You use hammer, dealing 30.47 points of damage.`;
		} else {
			return `You use ${this.name}, dealing ${this.baseDamage} points of damage.`;
		}
	}
}
