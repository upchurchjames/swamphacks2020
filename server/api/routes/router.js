const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send({ hello: "world" });
});

module.exports = router;