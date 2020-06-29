const categoryModel = require('../models/category.model');
const categoryCtrl = {};

categoryCtrl.create = async function (req, res, next) {
  let category = new categoryModel({
    name: req.body.category,
    description: req.body.description,
  });
  let data = await category.save();
  res.status(201).json({ status: 'OK', data: data });
};

categoryCtrl.getAll = async function (req, res, next) {
  let categories = await categoryModel.find({});
  res.status(200).json(categories);
};

categoryCtrl.update = async function(req, res, next){
  let categories = await categoryModel.findByIdAndUpdate({_id:req.params.id}, req.body, {multi:false})
  res.status(200).json(categories)
}

categoryCtrl.deleteCategory = async function(req, res, next){
  let categories = await categoryModel.findByIdAndDelete({_id:req.params.id})
  res.status(200).json(categories)
}

categoryCtrl.getCategoryById = async function(req, res, next){
  let categories = await categoryModel.findById({_id:req.params.id})
  res.status(200).json(categories)
}

module.exports = categoryCtrl;
