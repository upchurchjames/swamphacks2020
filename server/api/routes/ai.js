const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const model = require('../../util/ai_model.js');

const router = express.Router();

router.use(bodyParser.json());

router.post('/', async (req, res) => {
    fs.readFile(req.body.filePath, async (err, data) => {
        if (err) throw err;

        var ai_model = await model.model();
        res.send(await ai_model.classify(data));
    });
});

router.get('/', async (req, res) => {

    res.json({hello:'world'});
});

module.exports = router;
