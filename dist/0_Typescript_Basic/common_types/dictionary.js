"use strict";
console.log("----------Dictionary------------");
let dict1;
dict1 = { 123: 'abc', 456: 'def' };
let dict2;
dict2 = { abc: true, def: false, ghi: true };
console.log(a[123]);
console.log(dict2['def']);
let dict3;
let dict4;
dict3 = { a: 'car', b: 'train', c: 'plane', d: 'boat' };
dict4 = { 1: 'car', 2: 'train', 3: 'plane', 4: 'boat' };
console.log(dict3['a']);
console.log(dict4[2]);
console.log(dict3.c);
dict3['e'] = 'go-cart';
console.log(dict3);
delete dict4[2];
console.log(dict4);
let dict5;
dict5 = { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9], 4: [10, 11, 12] };
console.log(dict5);
