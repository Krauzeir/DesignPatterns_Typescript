abstract class Abs_Animal2 {
    abstract name: string
    age = -1

    constructor() {}

    abstract feed(food: string, amount: number): void
}

class Abs_Cat2 extends Abs_Animal2 {
    name: string
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Cat ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Abs_Dog2 extends Abs_Animal2 {
    name: string
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }

    feed(food: string, amount: number): void {
        console.log(
            'Feeding ' +
                this.name +
                ' the Dog ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

const CAT11 = new Abs_Cat2('Pepito', 8)
const DOG6 = new Abs_Dog2('Fenrir', 12)
CAT11.feed('Fish', 0.1)
DOG6.feed('Beef', 0.25)