var express = require('express');
var router = express.Router();
var { validateStaff } = require('../middlewares/validateUser');
var { allStaff, updateStaff, createStaff, deleteStaff, loginStaff } = require('../controllers/staff.ctrl');

router.get('/', validateStaff,allStaff);
router.post('/create', validateStaff, createStaff);
router.put('/update/:id', validateStaff,updateStaff);
router.delete('/delete/:id', validateStaff,deleteStaff);
router.post('/login', loginStaff);

module.exports = router;
