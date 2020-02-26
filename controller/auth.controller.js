var db = require('../db');
var md5 = require('md5');

module.exports.loginPage = function(req, res){
	res.render('login/login')
}

module.exports.loginPost = function(req, res){
	var username = req.body.username;	
	var password = req.body.password;
	var user = db.get('users').find({username: username}).value();
	if(!user){
		res.render('login/login', {
			error: 'Username does not exist!',
		})
		return
	};
	if(md5(password) !== user.password){
		res.render('login/login', {
			error: 'Wrong password!'
		})
		return
	};

	res.cookie('userid', user.id, {
		signed: true
	});
	res.redirect('/users');
}