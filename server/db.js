const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.build(console, 'MongoDB Connection Error:'));