const express = require('express');
const bears = require('./routes/bear');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Bear Router Middleware
app.use('/api/bears', bears);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
