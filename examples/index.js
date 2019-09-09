const Constantie = require("../");

const obj = Constantie({ a: 1, b: 2, c: 3 });

console.log(obj);

// obj.d = 4;

// delete obj.a;

// Object.defineProperty(obj, "key", {
//   value: 37,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// // //

const arr = Constantie([1, 2, 3]);
console.log(arr);
// arr.push(4);
