class Cat_Medium {
    name: string

    constructor(name: string) {
        this.name = name
    }

    walk(steps: number): void {
        console.log(
            this.name + ' the cat has walked ' + steps + ' steps.'
        )
    }
}

const CAT2 = new Cat_Medium('Cosmo')
CAT2.walk(20)