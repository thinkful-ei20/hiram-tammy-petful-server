'use strict';

const Queue = require('./queue-class');

let dogs = new Queue();
const data = require('./dogs');

data.forEach(dog => dogs.enqueue(dog));


//console.log('this is the first dog',dogs.peak());

module.exports = dogs;