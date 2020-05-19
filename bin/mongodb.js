var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb://' + process.env.BD_HOST + '/' + process.env.BD_NAME, { useNewUrlParser: true }, (error) => {
  if (error) {
    throw error;
  } else {
    console.log('######> Conectado a MongoDB <######');
  }
});

mongoose.mongoosePaginate =  mongoosePaginate.paginate.options = {
  lean: true,
  limit: 5,
};

module.exports = mongoose;
