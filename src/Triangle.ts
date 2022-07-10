import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
	public points: [Point, Point, Point];

	constructor(point1: Point, point2: Point, point3: Point);
	constructor(
		point1: Point,
		point2: Point,
		point3: Point,
		color: string,
		filled: boolean
	);
	constructor(...args: any[]) {
		if (args.length === 3) {
			super([args[0], args[1], args[2]]);
			this.points = [args[0], args[1], args[2]];
		} else if (args.length === 5) {
			super([args[0], args[1], args[2]], args[3], args[4]);
			this.points = [args[0], args[1], args[2]];
		}
	}

	toString(): string {
		return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
	}

	getType(): string {
		const [v1, v2, v3] = this.points;
		const [a, b, c] = [v1.distance(v2), v2.distance(v3), v3.distance(v1)];

		if (a === b && b === c) {
			return 'equilateral triangle';
		}
		if (a === b || b === c || c === a) {
			return 'isosceles triangle';
		}
		return 'scalene triangle';
	}
}
