var express = require('express');
var router = express.Router();
var {createSub, getAllSub, updateSUb, deleteSubCategory } = require('../controllers/subcategory.ctrl')

router.post('/create-subcategory', createSub)

router.get('/list', getAllSub);

router.delete('/delete/:id', deleteSubCategory)

module.exports = router
