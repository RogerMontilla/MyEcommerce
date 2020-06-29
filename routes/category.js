var express = require('express');
var router = express.Router();
var {create, getAll, update, deleteCategory, getCategoryById} = require('../controllers/category.ctrl');

router.post('/create', create);

router.get('/list', getAll);

router.put('/update/:id', update);

router.delete('/delete/:id', deleteCategory);

router.get('/getone/:id', getCategoryById);

module.exports = router