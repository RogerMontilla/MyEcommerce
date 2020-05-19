var express = require('express');
var router = express.Router();
var { signin, allUsers, update, deleteUser } = require('../controllers/users.ctrl');

router.get('/', allUsers);
router.post('/signin', signin);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteUser);

module.exports = router;
