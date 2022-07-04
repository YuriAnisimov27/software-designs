interface IPoint {
	x: number;
	y: number;
}

class Point {
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
			return Math.sqrt(this.x ** 2 + this.y ** 2);
		}
		if (args.length === 1) {
			return Math.sqrt(
				Math.pow(this.x - args[0].x, 2) + Math.pow(this.y - args[0].y, 2)
			);
		} else {
			return Math.sqrt(
				Math.pow(this.x - args[0], 2) + Math.pow(this.y - args[1], 2)
			);
		}
	}
}

abstract class Shape {
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
			this.filled ? 'filled' : 'Not filled'
		}. Points: ${this.points.join(', ')}`;
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

	// missed in the task description
	getType(): string {
		if (this.points.length === 3) {
			return 'Triangle';
		} else if (this.points.length === 4) {
			return 'Quadrangle';
		} else {
			return 'Polygon';
		}
	}
}

class Triangle extends Shape {
	constructor(points: [Point, Point, Point]);
	constructor(points: [Point, Point, Point], color: string, filled: boolean);
	constructor(...args: any[]) {
		if (args.length === 1) {
			super(args[0]);
		} else if (args.length === 3) {
			super(args[0], args[1], args[2]);
		}
	}

	override toString(): string {
		return `Triangle[v1=${this.points[0]}, v2=${this.points[1]}, v3=${this.points[2]}]`;
	}

	override getType(): string {
		const [v1, v2, v3] = this.points;
		const [a, b, c] = [v1.distance(v2), v2.distance(v3), v3.distance(v1)];

		if (a === b && b === c) {
			return 'Equilateral triangle';
		}
		if (a === b || b === c || c === a) {
			return 'Isosceles triangle';
		}
		return 'Scalene triangle';
	}
}
