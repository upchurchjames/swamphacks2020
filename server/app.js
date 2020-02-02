const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./api/routes/router.js');
const app = express();

app.use(cors({
    origin: '*',
    allowedHeaders: '*'
}));

app.use(bodyParser.json());
app.use('/', router);

module.exports = {app};