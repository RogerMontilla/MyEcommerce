var usersModel = require('../models/users.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
var usersCtrl = {};

usersCtrl.allUsers = async (req, res, next) => {
  let data = await usersModel.find({});
  res.status(201).json({ data: data });
};

usersCtrl.update = async (req, res, next) => {
  let data = await usersModel.update({ _id: req.params.id }, req.body, { multi: false });
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

usersCtrl.login = async (req, res, next) => {
  let user = await usersModel.findOne({ user: req.body.user});
  if (user){
    if (bcrypt.compareSync(req.body.password, user.password)){
      const token = jwt.sign({userDecoded:user}, req.app.get('secretKey'), {expiresIn:'1h'})
      res.status(201).json({token:token, user_id: user._id})
    }else{
      res.json({message:'Invalid Password', data: null})
    }
  }else{
    res.json({message:'User not found', data: null})
  }
}

module.exports = usersCtrl;
