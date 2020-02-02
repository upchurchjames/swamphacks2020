const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = require('./app.js');

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  allowedHeaders: '*',
  methods: 'PUT, POST, DELETE, GET',
}));

const server = http.createServer(app);

server.listen(34521, () => {
    console.log("Server started on port 34521...");
});