"use strict";
console.log("----------Set------------");
let set1;
set1 = new Set([1, 2, 3, 4]);
let set2;
set2 = new Set(['a', 'b', 'c', 'd', 'a']);
let set3;
set3 = new Set([1, 'b', true]);
console.log(set1);
console.log(set2);
console.log(set3);
const set4 = new Set();
set4.add('cat');
set4.add('dog');
set4.add('bird');
console.log(set4);
set4.delete('dog');
console.log(set4);
console.log(Array.from(set4)[1]);
set4.add('bird');
set4.add('bird');
console.log(set4);
console.log(set4.size);
console.log(set4.has('cat'));
