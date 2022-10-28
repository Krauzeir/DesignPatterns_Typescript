"use strict";
class Abs_Animal {
    constructor(age) {
        this.age = age;
    }
    feed(food, amount) {
        console.log('Feeding ' +
            this.name +
            ' the ' +
            this.constructor.name +
            ' ' +
            amount +
            ' kg of ' +
            food);
    }
}
class Abs_Cat extends Abs_Animal {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
}
class Abs_Dog extends Abs_Animal {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
}
const CAT10 = new Abs_Cat('Pepito', 8);
const DOG4 = new Abs_Dog('Fenrir', 12);
CAT10.feed('Fish', 0.1);
DOG4.feed('Beef', 0.25);
