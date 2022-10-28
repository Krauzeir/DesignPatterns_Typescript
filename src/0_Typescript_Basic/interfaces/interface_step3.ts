interface IAnimal {
    name: string
    age: number

    feed(food: string, amount: number): void
}

class Cat_Correct implements IAnimal {
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
                ' the Cat ' +
                amount +
                ' kg of ' +
                food
        )
    }
}

class Dog implements IAnimal {
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
                ' the Dog ' +
                amount +
                ' kg of ' +
                food
        )
    
    }
}

const CAT = new Cat_Correct('Diana', 8)
const DOG = new Dog('Sultao', 12)
CAT.feed('Fish', 0.1)
DOG.feed('Beef', 0.25)
