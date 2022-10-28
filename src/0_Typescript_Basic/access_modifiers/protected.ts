class Protect_Animal {
    protected name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    customMethod(): void{
        console.log(1)
    }
}

class Protect_Cat extends Protect_Animal {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.name)
    }
}

const CAT22 = new Protect_Cat('Cosmo', 8)
console.log(CAT22.name)

// Property 'name' is protected and only accessible within class 'Animal' and its subclasses.

console.log(CAT22.customMethod())
