const express = require('express');
const morgan = require('morgan');
const bears = require('./routes/bear');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Bear Router Middleware
router.use('./api/bears', bears);

const port = process.env.PORT || 3000;
