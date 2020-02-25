var db = require('../db');
var cookieParser = require('cookie-parser'); 

module.exports.requireAuth = function(req, res ,next){
	console.log(req.cookies)
	if(!req.cookies.userid){
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({id: req.cookies.userid}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}
	next();
}