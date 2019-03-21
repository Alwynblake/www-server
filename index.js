'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
// const PORT = 8080;

app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
  console.log('Web Server up on port', process.env.PORT);
});
