'use strict';

module.exports = function howManyPizza(people, slicesPerPerson = 3, slicesPerPizza = 8) {
  var peopleToPizzaRatio = slicesPerPerson/slicesPerPizza;

  if (!people || isNaN(people)) { return 0 }

  return Math.ceil(Math.ceil(people) * peopleToPizzaRatio);
};
