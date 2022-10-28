"use strict";
class ClassWithProperty {
    constructor() {
        this.abc = 123;
    }
}
class ClassWithStaticProperty {
}
ClassWithStaticProperty.abc = 123;
class ClassWithMethod {
    method() {
        return 123;
    }
}
class ClassWithStaticMethod {
    static method() {
        return 123;
    }
}
const CLASS_A = new ClassWithProperty();
console.log(CLASS_A.abc);
const CLASS_B = new ClassWithStaticProperty();
console.log(ClassWithStaticProperty.abc);
const CLASS_C = new ClassWithMethod();
console.log(CLASS_C.method());
const CLASS_D = new ClassWithStaticMethod();
console.log(ClassWithStaticMethod.method());
