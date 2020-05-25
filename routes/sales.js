var express = require('express');
var router = express.Router();

var { getAll, create} = require("../controllers/sales.ctrl")

/* GET home page. */
router.get('/getall', getAll);
router.post('/createsale', create);

module.exports = router;