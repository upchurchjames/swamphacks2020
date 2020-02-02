const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
const tfnode = require('@tensorflow/tfjs-node');
const upload = multer( { dest: 'ai_uploads/' });

const model = require('../../util/ai_model.js');

const router = express.Router();

router.use(bodyParser.json());

const readImage = path => {
    const imageBuffer = fs.readFileSync(path);
    const tfimage = tfnode.node.decodeImage(imageBuffer);
    return tfimage;
}

const imageClassification = async path => {
    const image = readImage(path);
    const mobilenetModel = await mobilenet.load();
    const predictions = await mobilenetModel.classify(image);
    console.log('Classification Results:', predictions);
}

router.post('/', upload.any(), async (req, res) => {
    console.log('hey bitch, im working');
    req.files.forEach(async (file) => {
       imageClassification(file.path); 
    });
        
    res.send({hello: 'world'});

    // fs.readFile(req.body.filePath, async (err, data) => {
    //     if (err) throw err;

    //     var ai_model = await model.model();
    //     res.send(await ai_model.classify(data));
    // });
});

router.get('/', async (req, res) => {

    res.json({hello:'world'});
});

module.exports = router;
