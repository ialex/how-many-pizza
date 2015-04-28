'use strict';

var howManyPizza = function howManyPizza(people) {
  if ( toString.call(people) === '[object Number]' ){
    return Math.round( people * (3/8) );
  }
  return 0;
};

module.exports = howManyPizza;