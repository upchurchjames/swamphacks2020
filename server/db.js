const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://dbAdmin:DA8Q4hZCuVI5tRhD@cluster0-e16wv.mongodb.net/recipes?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));

module.exports = db;