import { Point } from './Point';

export abstract class Shape {
	protected color: string;
	protected filled: boolean;
	public points: Point[] = [];

	constructor(points: Point[]);
	constructor(points: Point[], color: string, filled: boolean);
	constructor(...args: any[]) {
		if (args.length === 1) {
			this.points = args[0];
			if (this.points.length < 3) {
				throw new Error('Points must be at least 3');
			}
			this.color = 'green';
			this.filled = true;
		} else if (args.length === 3) {
			this.points = args[0];
			if (this.points.length < 3) {
				throw new Error('Points must be at least 3');
			}
			this.color = args[1];
			this.filled = args[2];
		}
	}

	toString(): string {
		return `A Shape with color of ${this.color} and ${
			this.filled ? 'filled' : 'not filled'
		}. Points: ${this.points.join(', ')}.`;
	}

	getPerimeter(): number {
		return this.points.reduce(
			(acc, point, index) =>
				index
					? acc + point.distance(this.points[index - 1])
					: point.distance(this.points[this.points.length - 1]),
			0
		);
	}

	abstract getType(): string;
}
