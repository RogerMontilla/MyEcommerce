const mongoose = require('../bin/mongodb');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    index: true,
    trim: true,
  },
  sku: {
    type: String,
    unique: false,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    min: 0,
    required: [true, 'Campo Precio es Obligatorio'],
  },
  offert: {
    type: Number,
    min: 0,
    required: false,
  },
  quantity: Number,
  subcategory: {
    type: Schema.ObjectId,
    ref: 'subcategory',
    required: false,
  },
  featured: {
    type: Boolean,
    required: true,
    default: false
  },
  img: {
    type: String,
    required: false,
  },
});

productSchema.set('toJSON', { getters: true, virtuals: true });
productSchema.plugin(mongoose.mongoosePaginate);
module.exports = mongoose.model('products', productSchema);
