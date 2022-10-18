class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
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

class Ex_Cat extends Animal {}

class Ex_Dog extends Animal {}

const CAT6 = new Ex_Cat('Sylveon', 8)
const DOG2 = new Ex_Dog('Toby', 12)
CAT6.feed('Fish', 0.1)
DOG2.feed('Beef', 0.25)