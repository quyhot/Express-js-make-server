var express = require('express');
var router = express.Router();

var validate = require('../validate/user.validate');
var controller = require('../controller/user.controller.js');

router.get('/', controller.getUsers);

router.get('/search', controller.search);

router.get('/create', controller.linkToCreate);

router.get('/:id', controller.usersView);

router.post('/create', validate.createUser, controller.createUser);

module.exports = router;