var express = require('express');
const {register } = require('../controller/usercontroller');
const { login } = require('../controller/usercontroller');
const { logout } = require('../controller/usercontroller');
var router = express.Router();

router.post('/register',register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router;
