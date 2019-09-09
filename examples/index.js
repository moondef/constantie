const { createObject } = require("../");

const obj = createObject({ a: 1, b: 2, c: 3 });

console.log(obj);

// obj.d = 4;

// delete obj.a;

// Object.defineProperty(obj, "key", {
//   value: 37,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });
