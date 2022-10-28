"use strict";
class Abs_Animal2 {
    constructor() {
        this.age = -1;
    }
}
class Abs_Cat2 extends Abs_Animal2 {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the Cat ' +
            amount +
            ' kg of ' +
            food);
    }
}
class Abs_Dog2 extends Abs_Animal2 {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the Dog ' +
            amount +
            ' kg of ' +
            food);
    }
}
const CAT11 = new Abs_Cat2('Pepito', 8);
const DOG6 = new Abs_Dog2('Fenrir', 12);
CAT11.feed('Fish', 0.1);
DOG6.feed('Beef', 0.25);
