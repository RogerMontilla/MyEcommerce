var productsModel = require('../models/products.model');
var categoryModel = require('../models/category.model');
var subcategoryModel = require('../models/subcategory.model') 
var productsCtrl = {};

productsCtrl.getAll = async function (req, res, next) {
  let productos = await productsModel.paginate(
    {},
    { populate: [{path:'category', select:'name'}, {path:'subcategory', select:'subname'}] , limit: 5, sort: { name: -1 }, page: req.query.page ? req.query.page : 1 }
  );
  console.log(productos);
  res.status(200).json(productos);
};

productsCtrl.getFeatured = async function (req, res, next) {
  let productos = await productsModel.find({ featured: 1 });
  console.log(productos);
  res.status(200).json(productos);
};
productsCtrl.getById = async function (req, res, next) {
  console.log(req.params.id);
  let productos = await productsModel.findById(req.params.id);
  console.log(productos);
  res.status(200).json(productos);
};
productsCtrl.create = async function (req, res, next) {
  let producto = new productsModel({
    name: req.body.name,
    sku: req.body.sku,
    description: req.body.description,
    price: req.body.price,
    offert: req.body.offert,
    quantity: req.body.quantity,
    subcategory: req.body.subcategory,
    featured: req.body.featured,
    img: req.body.img,
  });
  let data = await producto.save();
  res.status(201).json({ stauts: 'ok', data: data });
};
productsCtrl.update = async function (req, res, next) {
  let data = await productsModel.update({ _id: req.params.id }, req.body, { multi: false });
  res.status(201).json({ status: 'ok', data: data });
};

productsCtrl.deleteProduct = async function (req, res, next) {
  let data = await productsModel.findByIdAndDelete({ _id: req.params.id });
  res.status(201).json({ status: 'ok', data: data });
};

module.exports = productsCtrl;
