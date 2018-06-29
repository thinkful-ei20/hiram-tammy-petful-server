'use strict';
const express = require ('express');
const router = express.Router();
const dogs = require('../data_models/dogs-queue');



router.get('/dog', (req, res)=>{
  let first = dogs.peak();
  //console.log(firstCat);
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

router.delete('/dog', (req, res) => {
  dogs.dequeue();
  res.status(204).end();
});
module.exports = router;
