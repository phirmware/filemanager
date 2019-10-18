const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const filesRoute = require('./routes/files');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/files', filesRoute);

module.exports = app;
