const mobilenet = require('@tensorflow-models/mobilenet');

const model = async() => await mobilenet.load();
const classify = async(img) => await model.classify(img);

module.exports = { model, classify };