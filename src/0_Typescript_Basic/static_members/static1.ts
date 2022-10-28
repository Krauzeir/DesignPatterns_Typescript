class ClassWithProperty {
    abc = 123
}

class ClassWithStaticProperty {
    static abc = 123
}

class ClassWithMethod {
    method() {
        return 123
    }
}

class ClassWithStaticMethod {
    static method() {
        return 123
    }
}

const CLASS_A = new ClassWithProperty()
console.log(CLASS_A.abc)

const CLASS_B = new ClassWithStaticProperty()
// console.log(CLASS_B.abc); // undefined. 'abc' does not
// exist on CLASS_B instance.
// You must reference it via the class name instead
console.log(ClassWithStaticProperty.abc)

const CLASS_C = new ClassWithMethod()
console.log(CLASS_C.method())

const CLASS_D = new ClassWithStaticMethod()
// console.log(CLASS_D.method()); //error. CLASS_D.method is
// not a function.
// You must reference it via the class name instead
console.log(ClassWithStaticMethod.method())