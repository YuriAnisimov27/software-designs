export interface IPoint {
	x: number;
	y: number;
}

export class Point {
	public x: number;
	public y: number;

	constructor();
	constructor(point: IPoint);
	constructor(x: number, y: number);
	constructor(...args: any[]) {
		if (!args.length) {
			this.x = this.y = 0;
		} else if (args.length === 1) {
			this.x = args[0].x;
			this.y = args[0].y;
		} else {
			this.x = args[0];
			this.y = args[1];
		}
	}
 
	toString(): string {
		return `(${this.x}, ${this.y})`;
	}

	distance(): number;
	distance(point: IPoint): number;
	distance(x: number, y: number): number;
	distance(...args: any[]): number {
		if (!args.length) {
			return roundValue(Math.sqrt(this.x ** 2 + this.y ** 2));
		}
		if (args.length === 1) {
			return roundValue(
				Math.sqrt(
					Math.pow(this.x - args[0].x, 2) + Math.pow(this.y - args[0].y, 2)
				)
			);
		} else {
			return roundValue(
				Math.sqrt(Math.pow(this.x - args[0], 2) + Math.pow(this.y - args[1], 2))
			);
		}
	}
}

function roundValue(value: number): number {
	return +(value * 10).toFixed() / 10;
}
