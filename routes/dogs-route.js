'use strict';
const express = require ('express');
const router = express.Router();
const dogs = require('../data_models/dogs-queue');



router.get('/dog', (req, res)=>{
  let first = dogs.peak();
  //console.log(firstCat);
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
