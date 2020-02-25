var express = require('express');
var router = express.Router();

var authController = require('../controller/auth.controller.js');

router.get('/login', authController.loginPage);

router.post('/login', authController.loginPost);

module.exports = router;