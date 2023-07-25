const assert = require('node:assert')
const { test } = require('node:test')
const fastMap = require('./fast-map')

test('passes correct arguments to callback', () => {
  const arr = [1]
  fastMap(arr, (item, index, array) => {
    assert.strictEqual(item, arr[index])
    assert.strictEqual(index, 0)
    assert.deepStrictEqual(array, arr)
  })
})

test('maps result of callback to new array', () => {
  const arr = [1, 2, 3, 4]
  const newArray = fastMap(arr, (item) => item * 2)
  assert.deepStrictEqual(newArray, [2, 4, 6, 8])
})

test('use this argument as callback this', () => {
  const arr = [1, 2, 3, 4]
  const callback = function (item) {
    return item * this.number
  }
  const newArray = fastMap(arr, callback, { number: 3 })
  assert.deepStrictEqual(newArray, [3, 6, 9, 12])
})

test('does not mutate input array', () => {
  const arr = [1, 2, 3, 4]
  const newArray = fastMap(arr, (item, index, array) => {
    array[index] = array[index] * 2
    return array[index]
  })
  assert.deepStrictEqual(arr, [1, 2, 3, 4])
})
