interface IAnimal {
    name: string
    age: number
}

class Cat_Incorrect implements IAnimal {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

// Since the Cat class implements IAnimal, it also needs to declare the age property as was indicated in the IAnimal interface.