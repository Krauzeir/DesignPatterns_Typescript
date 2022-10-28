"use strict";
class Ex_Animal {
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
class Ex_Cat2 extends Ex_Animal {
    constructor(name, age, isHungry) {
        super(name, age);
        this.isHungry = isHungry;
    }
    feed(food, amount) {
        if (this.isHungry) {
            super.feed(food, amount);
        }
        else {
            console.log(this.name +
                ' the ' +
                this.constructor.name +
                ' is not hungry');
        }
    }
}
class Ex_Dog2 extends Ex_Animal {
}
const CAT7 = new Ex_Cat2('Diana', 8, false);
const DOG8 = new Ex_Dog2('Tobi', 12);
CAT7.feed('Fish', 0.1);
DOG8.feed('Beef', 0.25);
