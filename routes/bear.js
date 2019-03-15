const { Bear, validateBear } = require('../models/bear');
const express = require('express');
const router = express.Router();

//gets the bear resource
router.get('/', async(req, res) => {
  //finds the bear collection and sort it by name
  const bears = Bear.find().sort('name');
  res.send(bears);
})

//gets the a particuler bear that matched with the id
router.get('/:id', async(req, res) => {
  //checks for the field with that matches with the id given
  const bear = await Bear.findById(req.params.id);
  if(!bear) return res.status(400).send('The bear with the id does not exist');

  res.send(bear);
})

//add a new bear field in the bear collection
router.post('/', async(req, res) => {
  const { error } = validateBear(req.body);
  if(error) return res.status(400)

})