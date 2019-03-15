const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');

//Schema for the bear
const bearSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
  },
  color: String,
  species: String
})

//Bear collection model
const Bear = mongoose.model('bears', bearSchema);

//validates the input
function validateBear(bear){
  const schema = {
    name: Joi.string(),
    age: Joi.number(),
    color: Joi.string(),
    species: Joi.string()
  }
  return Joi.validate(bear, schema);
}