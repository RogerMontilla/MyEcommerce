var salesModel = require('../models/sales.model');
var productsModel = require('../models/products.model');
var salesCtrl = {};

salesCtrl.getAll = async (req, res, next) => {
  let allsales = await salesModel.find({});
  res.status(200).json(allsales);
};

salesCtrl.create = async (req, res, next) => {
  let productsSearch = await productsModel
    .find({})
    .select(['_id', 'name', 'price'])
    .where('_id')
    .in(req.body.productsList);

    console.log(productsSearch);

  let total = 0;

  let record = productsSearch.map((productsSearch) => {
    total += productsSearch.price;
    return {
      product_id: productsSearch._id,
      name: productsSearch.name,
      price: productsSearch.price,
    };
  });

  let sales = new salesModel({
    total: total,
    products: record,
    user: req.body.userToken.userDecoded._id,
  });
  let data = await sales.save();
  res.status(201).json({ status: 'ok', data: data });
};

module.exports = salesCtrl;

