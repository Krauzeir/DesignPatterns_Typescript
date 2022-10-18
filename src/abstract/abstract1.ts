abstract class Abs_Animal {
    abstract name: string
    age: number

    constructor(age: number) {
        //this.name = name // this must now be assigned in the derived class instead
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the ' +
                this.constructor.name +
                ' ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Abs_Cat extends Abs_Animal {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

class Abs_Dog extends Abs_Animal {
    name: string
    constructor(name: string, age: number) {
        super(age)
        this.name = name
    }
}

const CAT10 = new Abs_Cat('Pepito', 8)
const DOG4 = new Abs_Dog('Fenrir', 12)
CAT10.feed('Fish', 0.1)
DOG4.feed('Beef', 0.25)