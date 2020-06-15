var express = require('express');
var router = express.Router();
var {createSub, getAllSub, updateSUb, deleteSubCategory } = require('../controllers/subcategory.ctrl')

router.post('/create-subcategory', createSub)

module.exports = router
