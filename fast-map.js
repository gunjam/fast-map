'use strict'

module.exports = function fastMap (array, callback, thisArg = this) {
  const clone = structuredClone(array)
  const cb = callback.bind(thisArg)

  for (let i = 0, len = clone.length; i < len; i++) {
    clone[i] = cb(clone[i], i, clone)
  }

  return clone
}
