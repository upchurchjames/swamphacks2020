const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const images = require('./images');
const ai = require('./ai');

router.use(bodyParser.json());

router.use('/images', images);
router.use('/ai', ai);

router.get('/', (req, res) => {
    res.send({ hello: "world" });
});

module.exports = router;