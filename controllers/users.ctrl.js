var usersModel = require('../models/users.model');
var usersCtrl = {};

usersCtrl.allUsers = async (req, res, next) => {
  let data = await usersModel.find({});
  res.status(201).json({ data: data });
};

usersCtrl.update = async (req, res, next) => {
  let data = await usersModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      lastname: req.body.lastname,
      user: req.body.user,
      password: req.body.password,
      email: req.body.email,
    }
  );
  res.status(201).json({ status: 'User was updated successfully', data: data });
};

usersCtrl.signin = async (req, res, next) => {
  let data = await usersModel.create({
    name: req.body.name,
    lastname: req.body.lastname,
    user: req.body.user,
    password: req.body.password,
    email: req.body.email,
  });
  res.status(201).json({ status: 'User was created successfully', data: data });
};

usersCtrl.deleteUser = async (req, res, next) => {
    let data = await usersModel.findOneAndDelete({_id:req.params.id})
    res.status(201).json({ status: 'User was deleted successfully', data: data });
}

module.exports = usersCtrl;
