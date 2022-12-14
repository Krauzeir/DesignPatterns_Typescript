"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
Circle.PI = 3.14;
console.log('Circle.PI = ' + Circle.PI);
const CIRCLE1 = new Circle(1);
const CIRCLE2 = new Circle(2);
const CIRCLE3 = new Circle(3);
console.log('CIRCLE1 Area = ' + Circle.PI * CIRCLE1.radius ** 2);
console.log('CIRCLE2 Area = ' + Circle.PI * CIRCLE2.radius ** 2);
console.log('CIRCLE3 Area = ' + Circle.PI * CIRCLE3.radius ** 2);
