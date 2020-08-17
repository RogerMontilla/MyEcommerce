var express = require('express');
var router = express.Router();
var { validateStaff } = require('../middlewares/validateUser');
var { create, update, getPages } = require('../controllers/static.ctrl')


router.get('/', getPages);
router.post('/create', validateStaff, create);
router.put('/update/:id', validateStaff, update);

module.exports = router;