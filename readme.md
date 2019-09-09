# constantie
## JavaScript library for creation of immutable objects and arrays

### API
```js
Constantie(object || array)
```

### Installation
```bash
yarn add constantie
```

### Usage
```js
const Constantie = require("constantie");

const obj = Constantie({a: 1, b: 2, c: 3});
const arr = Constantie([1, 2, 3]);

obj.d = 4; // Error! You can't change properties of this object

arr.push(4); // Error! You can't change elements of this array
```
