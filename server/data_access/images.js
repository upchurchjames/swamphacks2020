const mongoose = require('mongoose');
const image_model = require('../api/models/image.js');

const db = require('../db.js');

var get_images = () => {
    return image_model.find().exec();
}

var insert_image = () => {
    var image_instance = new image_model( 
        { 
            filepath: 'banana.jpeg',
            objects: [1]
        });

    image_instance.save(function (err) {
        if (err) throw(err);
    });
};

module.exports = { get_images, insert_image };