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

