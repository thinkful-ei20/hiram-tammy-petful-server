'use strict';

const Queue = require('./queue-class');
const data = require('./dogs');

let dogs = new Queue();

const initaite = (data) => {
  data.forEach(dog => dogs.enqueue(dog));
  //console.log(dogs);
};

initaite (data);