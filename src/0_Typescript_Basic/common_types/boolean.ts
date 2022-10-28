// Boolean
console.log("----------Boolean------------")

let boolean: boolean
boolean = true
boolean = false

let x = "abc"
boolean = x === "def"
console.log(boolean)
x = "abc"
boolean = x === "abc"
console.log(boolean)
boolean = "abc".endsWith('c')
console.log(boolean)