var express = require('express');
var router = express.Router();
var {getAll, getFeatured, getById, create, update} = require('../controllers/products.ctrl')

/* GET products */
router.get('/', getAll);

/* POST products */
router.post('/create', create);

/*Productos Destacados*/
router.get('/destacados', getFeatured);

/*Productos ID*/
router.get('/:id', getById);

/*Actualizar un Producto */
router.put('/:id', update);



module.exports = router;