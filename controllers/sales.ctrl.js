var salesModel = require('../models/sales.model');
var productsModel = require('../models/products.model');
var salesCtrl = {};

salesCtrl.getAll = async (req, res, next) => {
  let allsales = await salesModel.find({});
  res.status(200).json(allsales);
};

salesCtrl.getAllWithUser = async (req, res, next) => {
  let allsales = await salesModel.find({}).populate('user');
  res.status(200).json(allsales);
};

salesCtrl.getByUser = async (req, res, next) => {
  let user = req.params.id
  let salesByUsers = await salesModel.find({}).where('user').in(user)
  res.status(201).json({ status: 'ok', sales: salesByUsers });
}

salesCtrl.create = async (req, res, next) => {
  console.log('productList =>', req.body.productsList);
  console.log('User ID =>', req.body.user_id);
  let list = req.body.productsList.map((item) => {
    return item.id;
  });
  let productsSearch = await productsModel.find({}).select(['_id', 'name', 'price', 'offert']).where('_id').in(list);

  console.log(productsSearch);

  //Obtener el total segun la cantidad de productos
  let total = 0;
  productsSearch.forEach((element) => {
    req.body.productsList.forEach((item) => {
      if (item.id == element._id) {
        if (element.offert) {
          total += item.purchase * element.offert;
        } else {
          total += item.purchase * element.price;
        }
      }
    });
  });

  let record = productsSearch.map((productsSearch) => {
    let quantity = 0;
    req.body.productsList.forEach((item) => {
      if (item.id == productsSearch._id) {
        quantity = item.purchase;
      }
    });

    return {
      product_id: productsSearch._id,
      name: productsSearch.name,
      price: productsSearch.price,
      quantity: quantity, //quantity viene de la lista del front
    };
  });

  let sales = new salesModel({
    total: total,
    products: record,
    user: req.body.user_id,
  });
  let data = await sales.save();
  res.status(201).json({ status: 'ok', data: data });
};

module.exports = salesCtrl;
