import { Comparable } from './Comparable';
import { Weapon } from './Weapon';

let id = 0;
let counter = 0;

export abstract class Item extends Weapon implements Comparable<Item> {
	public numberOfItems: number;
	public value: number;
	public name: string;
	public weight: number;

	constructor(
		name: string,
		baseDamage: number,
		baseDurability: number,
		value: number,
		weight: number
	) {
		super(name, baseDamage, baseDurability, value, weight);
		this.name = name;
		this.value = value;
		this.weight = weight;
		id += 1;
		counter += 1;
	}

	static numberOfItems(): number {
		return counter;
	}

	public use(): string {
		return `You use ${this.name}, dealing ${this.baseDamage} points of damage.`;
	}

	public compareTo(other: Item): number {
		if (this.value > other.value) {
			return 1;
		} else if (this.value < other.value) {
			return -1;
		} else {
			if (this.name.toLowerCase() > other.name.toLowerCase()) {
				return 1;
			} else {
				return -1;
			}
		}
	}

	public toString(): string {
		if (this.name === 'ring') {
			return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
		} else {
			return `${this.name} - Value: ${this.value}, Weight: ${this.weight},`;
		}
	}

	public getId(): number {
		return id;
	}

	public getValue(): number {
		return this.value;
	}

	public getName(): string {
		return this.name;
	}

	public getWeight(): number {
		return this.weight;
	}

	public setValue(value: number): void {
		this.value = value;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public setWeight(weight: number): void {
		this.weight = weight;
	}

	public reset(): void {
		counter = 0;
	}
}
