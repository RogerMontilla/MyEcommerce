var productsModel = require('../models/products.model');
var productsCtrl = {};

productsCtrl.getAll = async function (req, res, next) {
  let productos = await productsModel.paginate({},{ limit: 2, sort: { name: -1 }, page: req.query.page ? req.query.page : 1 });
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
    description: req.body.description,
    sku: req.body.sku,
    price: req.body.price,
    quantity: req.body.quantity,
    categoria: req.body.categoria,
  });
  let data = await producto.save();
  res.status(201).json({ stauts: 'ok', data: data });
};
productsCtrl.update = async function (req, res, next) {
  let data = await productsModel.update({ _id: req.params.id }, req.body, { multi: false });
  res.status(201).json({ status: 'ok', data: data });
};

module.exports = productsCtrl;
