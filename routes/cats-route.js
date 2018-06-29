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
    imageURL: first.value.imageURL,
    imageDescription: first.value.imageDescription,
    name: first.value.name,
    sex: first.value.sex,
    age: first.value.age,
    breed: first.value.breed,
    story: first.value.story
  };
  //console.log(result);
  return res.json(result).status(200);
});

module.exports = router;
