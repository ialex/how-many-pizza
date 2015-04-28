'use strict';

var assert = require('assert');
var howManyPizza = require('./index');

assert.strictEqual(howManyPizza(null), 0);
assert.strictEqual(howManyPizza(undefined), 0);
assert.strictEqual(howManyPizza(50), 19);
assert.strictEqual(howManyPizza(1.5), 1);
assert.strictEqual(howManyPizza(5.5), 2);

console.log("Tests completed!")
