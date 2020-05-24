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
    unique: true,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    min: 0,
    required: [true, 'Campo Precio es Obligatorio']
  },
  quantity: Number,
  //'categorias' es una coleccion en la base de datos, no necesito requerirla ya que mongoose la busca directamente en la base de datos
  categoria: { 
      type: String, 
      required: true },
});


productSchema.set('toJSON',{getters:true,virtuals:true})
productSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('products', productSchema)