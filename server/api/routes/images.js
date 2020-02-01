const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const images_data_access = require('../../data_access/images.js');

const router = express.Router();

router.use(bodyParser.json());

router.post('/', upload.any(), (req, res) => {
    req.files.forEach(file => {
        images_data_access.insert_image(file);
    });

    res.send({ status: 'Uploaded files!' });
});

router.get('/', async (req, res) => {
    var results = await images_data_access.get_images();
    console.log(results);
    res.json(results);
});

module.exports = router;
