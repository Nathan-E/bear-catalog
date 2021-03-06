const mongoose = require('mongoose');
const Joi = require('joi');

mongoose.connect('mongodb://localhost/bears', {useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


//Schema for the bear
const bearSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  }
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

module.exports = { Bear, validateBear };
