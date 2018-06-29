'use strict';
const express = require ('express');
const router = express.Router();
const cats = require('../data_models/cats-queue');

//console.log(cats);
//console.log('this is first cat',cats.peak());


router.get('/cat', (req, res)=>{
  let first = cats.peak();
  //console.log(first);
  let result = {
    imageURL: first.imageURL,
    imageDescription: first.imageDescription,
    name: first.name,
    sex: first.sex,
    age: first.age,
    breed: first.breed,
    story: first.story
  };
  //console.log(result);
  return res.json(result).status(200);
});

router.delete('/cat', (req, res) => {
  cats.dequeue();
  res.status(204).end();
});

module.exports = router;
