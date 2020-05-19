var mongoose = require('../bin/mongodb');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
    name:{type:String, trim:true, required:true},
    lastname:{type:String, trim:true, required:true},
    user:{type:String, unique:true, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true, trim:true},
    date:{type:Date, required:true, default:Date.now}
});

userSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model('users', userSchema);