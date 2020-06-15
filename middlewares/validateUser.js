const jwt = require('jsonwebtoken');
const validateUser = {}

//Validate users

validateUser.validateStaff = (req, res, next) =>{
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), (err, decoded) => {
      if (err) {
        res.json({ message: err.message });
      } else {
        req.body.userToken = decoded;
        next();
      }
    });
  }

  module.exports = validateUser;