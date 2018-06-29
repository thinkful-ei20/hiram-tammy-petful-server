'use strict';
const express = require ('express');
const router = express.Router();
const cats = require('../data_models/cats-queue');

//console.log(cats);
//console.log('this is first cat',cats.peak());


router.get('/cat', (req, res)=>{
  let topCat = cats.peak();
  //console.log(topCat);
  let result = {
    imageURL: topCat.value.imageURL,
    imageDescription: topCat.value.imageDescription,
    name: topCat.value.name,
    sex: topCat.value.sex,
    age: topCat.value.age,
    breed: topCat.value.breed,
    story: topCat.value.story
  };
  //console.log(result);
  return res.json(result).status(200);
});

module.exports = router;
