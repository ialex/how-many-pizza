'use strict';

var howManyPizza = function howManyPizza(people, slicesPerPerson, pizzaSlices) {
  var slicesPerPerson = slicesPerPerson || 3;
  var pizzaSlices = pizzaSlices || 8;
  if ( toString.call(people) === '[object Number]' ){
    return Math.ceil( people * (slicesPerPerson/pizzaSlices) );
  }
  return 0;
};

module.exports = howManyPizza;
