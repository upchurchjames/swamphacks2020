const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const upload = multer( { dest: 'ai_uploads/' });

const router = express.Router();

router.use(bodyParser.json());

const readImage = path => {
    const imageBuffer = fs.readFileSync(path);
    const tfimage = tfnode.node.decodeImage(imageBuffer);
    return tfimage;
}

const imageClassification = async path => {
    var spawn1 = require("child_process").spawn;
    var process1 = spawn1('ls');
    process1.stdout.on('data', function (data) {
        console.log(data.toString());
    })

    var spawn = require("child_process").spawn;
    var process = spawn('python', ["ai/inference.py", path, "ai/food_model.h5"]);
    console.log(process);
    process.stdout.on('data', function (data) {
        console.log(data.toString());
    })
    process.stderr.on('data', function (data) {
        console.log(data.toString());
    })
}

router.post('/', upload.any(), async (req, res) => {
    console.log('hey bitch, im working');
    req.files.forEach(async (file) => {
        console.log(file);
        imageClassification(file.path); 
    });
        
    res.send({hello: 'world'});
});

router.get('/', async (req, res) => {

    res.json({hello:'world'});
});

module.exports = router;
