import { Weapon } from './Weapon';

export class Bow extends Weapon {
	public MODIFIER_CHANGE_RATE: number = 0.5;
	public baseDamage: number;
	public damageModifier: number;
	public baseDurability: number;
	public durabilityModifier: number;
	public name: string = 'Bow';
	public value: number;
	public weight: number;

	constructor(
		baseDamage: number,
		baseDurability: number,
		value: number,
		weight: number
	) {
		super('Bow', baseDamage, baseDurability, value, weight);
	}

	public polish(): void {
		this.damageModifier += this.MODIFIER_CHANGE_RATE;
		this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
	}
}
