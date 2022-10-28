"use strict";
class Ex_Animal2 {
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
class Ex_Cat3 extends Ex_Animal2 {
    constructor(name, age, isHungry) {
        super(name, age);
        this.name = 'Torpedo';
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
class Ex_Dog3 extends Ex_Animal2 {
}
const CAT8 = new Ex_Cat3('Nidalee', 8, false);
const DOG3 = new Ex_Dog3('Luna', 12);
CAT8.feed('Fish', 0.1);
DOG3.feed('Beef', 0.25);
