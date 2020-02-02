const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./api/routes/router.js');
const app = express();

app.use(cors({
  origin: '*',
  allowedHeaders: '*',
  methods: 'PUT, POST, DELETE, GET',
}));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(bodyParser.json());
app.use('/', router);

module.exports = {app};