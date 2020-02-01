const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    id: mongoose.ObjectId,
    filepath: String,
    user: mongoose.ObjectId,
    objects: [Number]
});

module.exports = mongoose.model( 'Image', ImageSchema );