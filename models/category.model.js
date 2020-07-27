const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: {
    type: String,
    trim: true,
    required: true,
    unique: false,
  }, 
  description: {
    type:String,
    trim: true,
    required:false
  }
});

module.exports = mongoose.model('category', categorySchema);
