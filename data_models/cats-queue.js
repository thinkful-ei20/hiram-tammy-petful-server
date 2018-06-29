'use strict';

const Queue = require('./queue-class');

let cats = new Queue();
const data = require('./cats');

data.forEach(cat => cats.enqueue(cat));



//console.log('this is the first cat',cats.peak());

module.exports = cats;