'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
  console.log('Web Server up on port', PORT);
});
