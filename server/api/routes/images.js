const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.use(bodyParser.json());

router.post('/', upload.any(), (req, res) => {
    res.send({ status: 'Uploading' });
});

router.get('/', (req, res) => {
    res.send({ hello: 'images' });
});

module.exports = router;
