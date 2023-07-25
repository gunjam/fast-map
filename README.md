# fast-map

Functionally the same as [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) but 5-6x faster by using `structuredClone` to copy the array.

```javascript
const fastMap = require('fast-map')

const array = [1, 2, 3, 4]
const newArray = fastMap(array, (num) => num * 2)

// [2, 4, 6, 8]
console.log(newArray)
```
