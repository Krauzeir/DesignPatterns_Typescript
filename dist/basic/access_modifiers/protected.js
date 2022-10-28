"use strict";
class Protect_Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    customMethod() {
        console.log(1);
    }
}
class Protect_Cat extends Protect_Animal {
    constructor(name, age) {
        super(name, age);
        console.log(this.name);
    }
}
const CAT22 = new Protect_Cat('Cosmo', 8);
console.log(CAT22.name);
console.log(CAT22.customMethod());
