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
  specie: String
})

//Bear collection model
const Bear = mongoose.model('bears', bearSchema);

function validateBear(bear){
  const schema = 

}