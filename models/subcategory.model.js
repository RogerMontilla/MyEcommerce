const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    subname: {
      type: String,
      trim: true,
      required: false
    },
    description:{
        type:String,
        trim:true,
        required: false
    },
    parent:{
        type:Schema.ObjectId,
        ref: 'category',
        required: false,
    }
  });

module.exports = mongoose.model('subcategory', subSchema)