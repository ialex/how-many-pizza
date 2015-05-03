'use strict';

var assert = require('assert');
var howManyPizza = require('./index');

assert.strictEqual(howManyPizza(null), 0);
assert.strictEqual(howManyPizza(undefined), 0);
assert.strictEqual(howManyPizza(50), 19);
assert.strictEqual(howManyPizza(1.5), 1);
assert.strictEqual(howManyPizza(5.5), 2);

assert.strictEqual(howManyPizza(null, null), 0);
assert.strictEqual(howManyPizza(undefined, undefined), 0);
assert.strictEqual(howManyPizza(50, 3), 19);
assert.strictEqual(howManyPizza(1.5, 3), 1);
assert.strictEqual(howManyPizza(5.5, 3), 2);

assert.strictEqual(howManyPizza(null, null, null), 0);
assert.strictEqual(howManyPizza(undefined, undefined, undefined), 0);
assert.strictEqual(howManyPizza(50, 3, 8), 19);
assert.strictEqual(howManyPizza(1.5, 3, 8), 1);
assert.strictEqual(howManyPizza(5.5, 3, 8), 2);

assert.strictEqual(howManyPizza(50, 4, 12), 17);

console.log("Tests completed!");
