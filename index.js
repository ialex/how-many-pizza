'use strict';

function isNan(value) {
  //  Turns out nodejs does not have isNan() out of the box
  return (typeof value !== 'number' || value !== value);
};

function valOrDefault(value, defaultVal) {
  return isNan(value) ? defaultVal : Math.ceil(value);
};

module.exports = function howManyPizza(people, slicesPerPerson, slicesPerPizza) {
  var peopleToPizzaRatio = valOrDefault(slicesPerPerson, 3)/valOrDefault(slicesPerPizza, 8);
  if (!people || people === 0 || isNan(people)) {
    return 0;
  } else {
    return Math.ceil(Math.ceil(people) * peopleToPizzaRatio);
  }
};
