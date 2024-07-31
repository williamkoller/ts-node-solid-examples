interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  private shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  calculateTotalArea(): number {
    let totalArea = 0;
    for (const shape of this.shapes) {
      totalArea += shape.calculateArea();
    }
    return totalArea;
  }
}

const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

const areaCalculator = new AreaCalculator([rectangle, circle]);
const totalArea = areaCalculator.calculateTotalArea();
console.log("Total area:", totalArea);