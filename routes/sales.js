var express = require('express');
var { validateStaff } = require('../middlewares/validateUser')
var router = express.Router();

var { getAll, create, getByUser} = require("../controllers/sales.ctrl")

/* GET home page. */
router.get('/getall', validateStaff ,getAll);
router.post('/createsale', validateStaff ,create);
router.get('/by-user/:id', validateStaff, getByUser)

module.exports = router;