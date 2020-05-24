var express = require('express');
var router = express.Router();
var { allStaff, updateStaff, createStaff, deleteStaff, loginStaff } = require('../controllers/staff.ctrl');

router.get('/', allStaff);
router.post('/create', createStaff);
router.put('/update/:id', updateStaff);
router.delete('/delete/:id', deleteStaff);
router.post('/login', loginStaff);

module.exports = router;