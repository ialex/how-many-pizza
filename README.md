# How Many Pizza? [![Build Status](https://travis-ci.org/ialex/how-many-pizza.svg?branch=master)](https://travis-ci.org/ialex/how-many-pizza)

This module helps you to calculate how many Pizza you need based on number of people
you want to feed.

## For Science behind read
[http://gawker.com/how-many-pizzas-should-you-order-the-pizza-equation-wi-1697815579](http://gawker.com/how-many-pizzas-should-you-order-the-pizza-equation-wi-1697815579)

## Install

```
npm install how-many-pizza
```

## USAGE
**`howManyPizza(people, [slicesXperson], [#slicesXpizza])`**

```
// Load library
var howManyPizza = require('how-many-pizza');

// Calculate pizzas for 50 people
console.log(howManyPizza(50)); // => 19

// Calculate pizzas for 50 people
// 4 slices per person and pizzas of 12 slices
console.log(howManyPizza(50, 4, 12)); // => 17
```

## Test

```
npm test
```

License MIT
