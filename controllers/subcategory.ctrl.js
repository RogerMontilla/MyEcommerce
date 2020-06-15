const subcategoryModel = require('../models/subcategory.model');
const subcategoryCtrl = {};

subcategoryCtrl.createSub = async function (req, res, next) {
  let subcategory = new subcategoryModel({
    subname: req.body.subname,
    description: req.body.description,
    parent: req.body.parent
  });
  let data = await subcategory.save();
  res.status(201).json({ status: 'OK', data: data });
};

subcategoryCtrl.getAllSub = async function (req, res, next) {
  let categories = await subcategoryModel.find({});
  res.status(200).json(categories);
};

subcategoryCtrl.updateSUb = async function(req, res, next){
  let categories = await subcategoryModel.findByIdAndUpdate({_id:req.params.id}, req.body, {multi:false})
  res.status(200).json(categories)
}

subcategoryCtrl.deleteSubCategory = async function(req, res, next){
  let categories = await subcategoryModel.findByIdAndDelete({_id:req.params.id})
  res.status(200).json(categories)
}

module.exports = subcategoryCtrl;