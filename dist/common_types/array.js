"use strict";
console.log("----------Array------------");
let a;
a = ['a', 'b', 'd', 'd'];
let b;
b = [1, 2, 3, 4];
let c;
c = [true, false, true];
let d;
d = [1, 'a', true, ['even', 'another', 'internal', 'array']];
console.log(a[1]);
console.log(b[0]);
console.log(c[1]);
console.log(d[2]);
a = ['a', 'b', 'c', 'd'];
console.log(a);
console.log(a.length);
console.log(a.pop());
console.log(a.shift());
console.log(a);
a.push('z');
console.log(a);
a.unshift('x');
console.log(a);
a.splice(2, 1);
console.log(a);
a[1] = 'y';
console.log(a);