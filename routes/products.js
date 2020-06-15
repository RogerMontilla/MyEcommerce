var express = require('express');
var router = express.Router();
var { validateStaff } = require('../middlewares/validateUser')
var {getAll, getFeatured, getById, create, update, deleteProduct} = require('../controllers/products.ctrl')

/* GET products */
router.get('/', validateStaff, getAll);

/* POST products */
router.post('/create', create);

/*Productos Destacados*/
router.get('/destacados', getFeatured);

/*Productos ID*/
router.get('/:id', getById);

/*Actualizar un Producto */
router.put('/:id', update);

router.delete('/delete-product/:id', deleteProduct)



module.exports = router;