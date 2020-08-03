const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const productSchema = new Schema({

    product_id: {type:Schema.ObjectId, ref:"products"},
    name:{
        type:String,
        trim: true,
        required: false
    },
    price:{
        type:Number,
        required: false
    },
    quantity:{
        type:Number,
        required: false,
    }
})

const salesSchema = new Schema({
    products:[productSchema],
    date:{
        type:Date,
        required: true,
        default: Date.now
    },
    total:{
        type: Number,
        required: true
    },
    user:{type:Schema.ObjectId, ref:'users'}
})

module.exports = mongoose.model('sales', salesSchema)