class Private_Cat {
    #name: string

    constructor(name: string) {
        this.#name = name
    }
}

const CAT21 = new Private_Cat('Cosmo')
console.log(CAT21.#name)

// Property 'name' is private and only accessible within class 'Cat'

