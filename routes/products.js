var express = require('express');
var router = express.Router();
var { validateStaff } = require('../middlewares/validateUser');
var {
  getAll,
  getByPrice,
  getFeatured,
  getById,
  create,
  update,
  deleteProduct,
  uploadImg,
  getByName,
} = require('../controllers/products.ctrl');

/* GET products */
router.get('/', getAll);

router.get('/by-name', getByName)

router.get('/filter-price/', getByPrice)

/* POST products */
router.post('/create', validateStaff, create);

/*Productos Destacados*/
router.get('/destacados', validateStaff, getFeatured);

/*Productos ID*/

router.get('/by-id/:id', validateStaff, getById);

/*Actualizar un Producto */
router.put('/:id', validateStaff, update);

router.delete('/delete-product/:id/:img', validateStaff, deleteProduct);

router.post('/upload-img', uploadImg);

module.exports = router;
