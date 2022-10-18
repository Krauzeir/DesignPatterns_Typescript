// Set
console.log("----------Set------------")

let set1: Set<number>
set1 = new Set([1, 2, 3, 4])
let set2: Set<string>
set2 = new Set(['a', 'b', 'c', 'd', 'a']) // the second `a` is not added
let set3: Set<unknown>
set3 = new Set([1, 'b', true])

console.log(set1)
console.log(set2)
console.log(set3)

const set4: Set<string> = new Set()
// adding items
set4.add('cat')
set4.add('dog')
set4.add('bird')
console.log(set4)

// remove an item
set4.delete('dog')
console.log(set4)

// Retrieve an individual item.
console.log(Array.from(set4)[1])

// The great thin about a set compared to an array, is that all
// items are guaranteed to be unique. No duplicates allowed.
set4.add('bird')
set4.add('bird')
console.log(set4)

// Get the length of the Set
console.log(set4.size)

// Check if a Set has a value
console.log(set4.has('cat'))