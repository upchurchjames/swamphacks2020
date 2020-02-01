const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ hello: "world" });
});



app.listen(34521, () => {
    console.log("Server started on port 34521...");
})