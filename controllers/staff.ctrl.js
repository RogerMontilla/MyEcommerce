var staffModel = require('../models/staff.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
var staffCtrl = {};

staffCtrl.allStaff = async (req, res, next) => {
  let data = await staffModel.find({});
  res.status(201).json({ data: data });
};

staffCtrl.updateStaff = async (req, res, next) => {
  let data = await staffModel.update({ _id: req.params.id }, req.body, { multi: false });
  res.status(201).json({ status: 'User was updated successfully', data: data });
};

staffCtrl.createStaff = async (req, res, next) => {
  let data = await staffModel.create({
    name: req.body.name,
    user: req.body.user,
    password: req.body.password,
    email: req.body.email,
    position: req.body.position
  });
  res.status(201).json({ status: 'Staff was created successfully', data: data });
};

staffCtrl.deleteStaff = async (req, res, next) => {
    let data = await staffModel.findOneAndDelete({_id:req.params.id})
    res.status(201).json({ status: 'Staff was deleted successfully', data: data });
}

staffCtrl.loginStaff = async (req, res, next) => {
  let user = await staffModel.findOne({ user: req.body.user});
  if (user){
    if (bcrypt.compareSync(req.body.password, user.password)){
      const token = jwt.sign({usuario:user}, req.app.get('secretKey'), {expiresIn:'4h'})
      res.status(201).json({token:token})
    }else{
      res.json({message:'Invalid Password', data: null})
    }
  }else{
    res.json({message:'User not found', data: null})
  }
}

module.exports = staffCtrl;