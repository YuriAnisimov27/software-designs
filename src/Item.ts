import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
	public numberOfItems: number;
	public value: number;
	public name: string;
	public weight: number;

	constructor(name: string, value: number, weight: number) {
		this.name = name;
		this.value = value;
		this.weight = weight;
		id += 1;
		counter += 1;
	}

	static numberOfItems(): number {
		return counter;
	}

	public use(): void {}

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
