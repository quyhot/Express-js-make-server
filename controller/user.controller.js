var shortid = require('shortid');
var db = require('../db');

module.exports.getUsers = function(req, res){
	res.render('users/users',{users: db.get("users").value()})
};

module.exports.search = function(req, res){
	var q = req.query.q;
	var matchedUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	})
	res.render('users/users', {users: matchedUsers});
};

module.exports.linkToCreate = function(req, res){
	res.render('users/create');
};

module.exports.usersView = function(req, res){
	var id = req.params.id;
	var user = db.get("users").find({ id: id }).value();
	res.render('users/view', {
		user: user
	})
};

module.exports.createUser = function(req, res){
	req.body.id = shortid.generate();
	var errors = [];
	if(!req.body.name){
		errors.push('Name is required');
	}
	if(!req.body.phone){
		errors.push('Phone is required');
	}
	if(errors.length){
		res.render('users/create', {
			errors: errors,
			values: req.body
		})
		return;
	}
	db.get('users').push(req.body).write();
	res.redirect('/users');
};