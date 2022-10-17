function hello(bar: string){
    return 'Hello, ' + bar
}

let person = 'Bruno'

console.log(hello(person))

person = 'Hugo'

console.log(hello(person))

let foo: string
let bar: boolean
let baz: number
let qux: string[]
let quuz: [number, string]
let corge: { [key: number]: string }
let grault: Set<number>

foo = 'ABC'
bar = true
baz = 123
qux = ['a', 'b', 'c']
quuz = [1, 'abc']
corge = { 123: 'abc', 456: 'def' }
grault = new Set([1, 2, 3])


// String
console.log("----------String------------")

let string: string
string = 'ABC'
string = '123'
string = 'ABC = 123'
string = 'quick brown fox, etc'
string = "It wasn't me"
string = `abc ${string} def`
console.log(string)

string = "12" + "2"
console.log(string)

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

// Number
console.log("----------Number------------")
let number: number
number = 123 //decimal
number = 123.456 //float
number = 0xffff //hex
number = 0b10101 //binary
number = 0o671 //octal
console.log(number)


//Array
console.log("----------Array------------")
let a: string[]
a = ['a', 'b', 'd', 'd']
let b: number[]
b = [1, 2, 3, 4]
let c: boolean[]
c = [true, false, true]
let d: unknown[]
d = [1, 'a', true, ['even', 'another', 'internal', 'array']]

// Array items can be retrieved using a zero based index.
console.log(a[1])
console.log(b[0])
console.log(c[1])
console.log(d[2])

a = ['a', 'b', 'c', 'd']

// log the whole array
console.log(a)

// log how may items in the array
console.log(a.length)

// returns and removes the last item from the array
console.log(a.pop())

// returns and removes the first item from the array
console.log(a.shift())

// log the whole array again
console.log(a)

// add an item to the end
a.push('z')
console.log(a)

// add an item to the beginning
a.unshift('x')
console.log(a)

// remove 1 item starting at the 3rd item (0 based index)
a.splice(2, 1)
console.log(a)

// replace an item (0 based index)
a[1] = 'y'
console.log(a)


//Dictionary
console.log("----------Dictionary------------")


