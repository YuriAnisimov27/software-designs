import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
	public numberOfItems: number;
	public id: number;
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
		// your code goes here
	}

	public toString(): string {
		// return `${this.name}`;
	}

	public getId(): number {
		return this.id;
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
