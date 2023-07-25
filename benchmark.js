'use strict'

const bench = require('fastbench')
const fastMap = require('./fast-map.js')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function double (num) {
  return num * 2
}

function cloneMap (done) {
  fastMap(arr, double)
  setImmediate(done)
}

function builtIn (done) {
  arr.map(double)
  setImmediate(done)
}

const run = bench([builtIn, cloneMap], 100_000)

function doBench () {
  run(run)
}

setTimeout(doBench, 100)
