var express = require('express');
var router = express.Router();
var { signin, allUsers, update, deleteUser, login, getUserById } = require('../controllers/users.ctrl');

router.get('/', allUsers);
router.get('/by-id/:id', getUserById);
router.post('/signin', signin);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteUser);
router.post('/login', login);

module.exports = router;
