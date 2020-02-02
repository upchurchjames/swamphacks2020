const fs = require('fs');
const image_model = require('../api/models/image.js');
const db = require('../db.js');

var get_images = () => {
    db.collection('recipes').find().toArray((err, result) => {
        const imgArray = result.map(element => element._id);
        console.log(imgArray);

        if (err) return console.log(err);
        return imgArray;
    })

    return image_model.find().exec();
}

var get_image_by_id = (id) => {
    db.collection('recipes').findOne({'_id': ObjectId(id)}, (err, result) => {
        if (err) return console.log(err);
        return result;
    })
}

var insert_image = (file) => {
    console.log("yo itz me");
    var img = fs.readFileSync(file.path);
    var encode_Image = img.toString('base64');

    var finalImg = {
        contentType: file.mimetype,
        image: new Buffer(encode_Image, 'base64')
    };

    db.collection('recipes').insertOne(finalImg, (err, result) => {
        console.log(result);

        if (err) return console.log(err);

        console.log('saved to database');
    })

    var image_instance = new image_model( 
        { 
            filepath: file.filename,
            objects: [1]
        });

    image_instance.save(function (err) {
        if (err) throw(err);
    });
};

module.exports = { get_images, insert_image, get_image_by_id };