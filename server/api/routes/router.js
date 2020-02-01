const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const images = require('./images');

router.use(bodyParser.json());

router.use('/images', images);

router.get('/', (req, res) => {
    res.send({ hello: "world" });
});

module.exports = router;