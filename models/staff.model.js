var mongoose = require('../bin/mongodb');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var staffSchema = new Schema({
  name: { type: String, trim: true, required: true },
  user: { type: String, unique: false, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true },
  date: { type: Date, required: true, default: Date.now },
});

staffSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
module.exports = mongoose.model('staff', staffSchema);
