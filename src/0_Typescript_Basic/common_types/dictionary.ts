//Dictionary
console.log("----------Dictionary------------")
let dict1: { [key: number]: string }
dict1 = { 123: 'abc', 456: 'def' }
let dict2: { [key: string]: boolean }
dict2 = { abc: true, def: false, ghi: true }

console.log(a[123])
console.log(dict2['def'])

// The key of a dictionary can be of any type and name
let dict3: { [key: string]: string }
let dict4: { [id: number]: string }
dict3 = { a: 'car', b: 'train', c: 'plane', d: 'boat' }
dict4 = { 1: 'car', 2: 'train', 3: 'plane', 4: 'boat' }
// and can be retrieved as such
console.log(dict3['a'])
console.log(dict4[2])

// Since Dictionaries are really just objects. You can also retrieve
// a dictionary's value using object notation if the keys are strings
console.log(dict3.c)
// console.log(b.2) // this doesn't work when the key is a number

// you can add items to a dictionary
dict3['e'] = 'go-cart'
console.log(dict3)

// you can delete
delete dict4[2]
console.log(dict4)

// The values of a dictionary can be of any type, even an array.
let dict5: { [id: number]: number[] }
dict5 = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] }
console.log(dict5)

