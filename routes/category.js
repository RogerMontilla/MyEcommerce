var express = require('express');
var router = express.Router();
var {create, getAll, update, deleteCategory} = require('../controllers/category.ctrl');

router.post('/create', create);

router.get('/list', getAll);

router.put('/update/:id', update);

router.delete('/delete/:id', deleteCategory)

module.exports = router