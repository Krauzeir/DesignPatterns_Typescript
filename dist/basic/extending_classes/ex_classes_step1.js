"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
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
class Ex_Cat extends Animal {
}
class Ex_Dog extends Animal {
}
const CAT6 = new Ex_Cat('Sylveon', 8);
const DOG2 = new Ex_Dog('Toby', 12);
CAT6.feed('Fish', 0.1);
DOG2.feed('Beef', 0.25);
