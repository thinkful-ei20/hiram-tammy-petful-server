'use strict';

const Queue = require('./queue-class');

let cats = new Queue();
const data = require('./cats');

const initaite = (data) => {
  data.forEach(cat => cats.enqueue(cat));
  //console.log(cats);
};

initaite(data);