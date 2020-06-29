var express = require('express');
var router = express.Router();
var { createSub, getAllSub, updateSUb, deleteSubCategory, getSubCategoryById } = require('../controllers/subcategory.ctrl');

router.post('/create-subcategory', createSub);

router.get('/list', getAllSub);

router.delete('/delete/:id', deleteSubCategory);

router.put('/update/:id', updateSUb);

router.get('/getone/:id', getSubCategoryById);

module.exports = router;
