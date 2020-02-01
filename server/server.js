const express = require('express');
const bodyParser = require('body-parser');

const router = require('./api/routes/router.js');
const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(34521, () => {
    console.log("Server started on port 34521...");
});