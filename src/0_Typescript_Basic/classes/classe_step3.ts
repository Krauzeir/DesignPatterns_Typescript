class Cat_Good {
    name: string
    stepsWalked: number = 0

    constructor(name: string) {
        this.name = name
    }

    walk(steps: number): void {
        console.log(
            this.name + ' the cat has walked ' + steps + ' steps.'
        )
        this.stepsWalked += steps
    }

    totalStepCount(): number {
        return this.stepsWalked
    }
}

const CAT3 = new Cat_Good('Cosmo')
CAT3.walk(20)
CAT3.walk(20)
console.log(
    CAT3.name +
        ' the cat, has walked a total of ' +
        CAT3.totalStepCount() +
        ' steps.'
)

const CAT4 = new Cat_Good('Loki')
CAT4.walk(50)
console.log(
    CAT4.name + ' the cat, has walked  ' + CAT4.totalStepCount() + ' steps.'
)