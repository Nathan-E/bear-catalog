const { Bear, validateBear } = require('../models/bear');
const express = require('express');
const router = express.Router();

//gets the bear resource
router.get('/', async (req, res) => {
  //finds the bear collection and sort it by name
  const bears = Bear.find().sort('name');
  res.send(bears);
})

