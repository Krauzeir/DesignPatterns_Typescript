class Public_Cat {
    public name: string

    constructor(name: string) {
        this.name = name
    }
}

const CAT20 = new Public_Cat('Cosmo')
console.log(CAT20.name)