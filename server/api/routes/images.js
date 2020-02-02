const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const images_data_access = require('../../data_access/images.js');

const router = express.Router();

router.use(bodyParser.json());

router.post('/', upload.any(), (req, res) => {
    req.files.forEach(file => {
        console.log(file);
        images_data_access.insert_image(file);
    });

    res.redirect('/')
});

router.get('/', async (req, res) => {
    var results = await images_data_access.get_images();
    console.log(results);
    res.json(results);
});

router.get('/:id', (req, res) => {
    var img = images_data_access.get_image_by_id(req.params.id);
    res.contentType('image/jpeg');
    res.send(img.image.buffer);
})

module.exports = router;
