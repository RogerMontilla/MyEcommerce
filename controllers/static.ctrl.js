var staticModel = require('../models/static.model');
var staticCtrl = {};

staticCtrl.create = async (req, res, next) => {
  let data = await staticModel.create({
    about: req.body.about,
    history: req.body.history,
  });
  res.status(201).json({ status: 'Page was created successfully', data: data });
};

staticCtrl.update = async (req, res, next) => {
  let data = await staticModel.update({ _id: req.params.id }, req.body, { multi: false });
  res.status(201).json({ status: 'Page was updated successfully', data: data });
};

staticCtrl.getPages = async (req, res, next) => {
  let data = await staticModel.find({});
  res.status(201).json({ data: data });
};

module.exports = staticCtrl;
