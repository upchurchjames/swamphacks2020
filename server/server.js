const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./api/routes/router.js');
// const app = require('./app');

const app = express();

app.use(cors({
    origin: '*',
    allowedHeaders: '*'
}));

app.use('/', router);
app.use(bodyParser);

const server = http.createServer(app);

server.listen(34521, () => {
    console.log("Server started on port 34521...");
});