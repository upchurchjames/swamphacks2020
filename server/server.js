const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./api/routes/router.js');
const app = express();

app.use(bodyParser.json());
app.use('/', router);

const server = http.createServer(app);

server.listen(34521, () => {
    console.log("Server started on port 34521...");
});