class Ex_Animal2 {
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

class Ex_Cat3 extends Ex_Animal2 {
    isHungry: boolean
    name = 'Torpedo'
    constructor(name: string, age: number, isHungry: boolean) {
        super(name, age)
        this.isHungry = isHungry
        // If you want the original name passed to this function
        // this.name = name
    }

    feed(food: string, amount: number): void {
        if (this.isHungry) {
            super.feed(food, amount)
        } else {
            console.log(
                this.name +
                    ' the ' +
                    this.constructor.name +
                    ' is not hungry'
            )
        }
    }
}

class Ex_Dog3 extends Ex_Animal2 {}

const CAT8 = new Ex_Cat3('Nidalee', 8, false)
const DOG3 = new Ex_Dog3('Luna', 12)
CAT8.feed('Fish', 0.1)
DOG3.feed('Beef', 0.25)