var express = require('express');
var router = express.Router();
var { validateStaff } = require('../middlewares/validateUser')
var {getAll, getFeatured, getById, getByList, create, update, deleteProduct, uploadImg} = require('../controllers/products.ctrl')

/* GET products */
router.get('/', getAll);

/* POST products */
router.post('/create', validateStaff,create);

/*Productos Destacados*/
router.get('/destacados', validateStaff, getFeatured);

/*Productos ID*/
router.get('/by-list', getByList);

router.get('/:id', validateStaff, getById);


/*Actualizar un Producto */
router.put('/:id', validateStaff, update);

router.delete('/delete-product/:id/:img', validateStaff, deleteProduct);

router.post('/upload-img', uploadImg);



module.exports = router;