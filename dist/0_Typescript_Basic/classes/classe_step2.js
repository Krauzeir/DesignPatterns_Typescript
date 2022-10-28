"use strict";
class Cat_Medium {
    constructor(name) {
        this.name = name;
    }
    walk(steps) {
        console.log(this.name + ' the cat has walked ' + steps + ' steps.');
    }
}
const CAT2 = new Cat_Medium('Cosmo');
CAT2.walk(20);
