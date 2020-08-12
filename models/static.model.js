var mongoose = require('../bin/mongodb');
var Schema = mongoose.Schema;

var staticSchema = new Schema({
  about: { type: String, required: true, unique: false },
  history: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('static', staticSchema);
