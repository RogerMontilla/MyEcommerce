var express = require('express');
var { validateStaff } = require('../middlewares/validateUser')
var router = express.Router();

var { getAll, create, getByUser, getAllWithUser} = require("../controllers/sales.ctrl")

/* GET home page. */
router.get('/getall', validateStaff ,getAll);
router.get('/getall-with-user', validateStaff, getAllWithUser)
router.post('/createsale', validateStaff ,create);
router.get('/by-user/:id', validateStaff, getByUser)

module.exports = router;