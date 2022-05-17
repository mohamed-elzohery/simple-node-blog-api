const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var hateoasLinker = require('express-hateoas-links');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(hateoasLinker);
module.exports = app;
