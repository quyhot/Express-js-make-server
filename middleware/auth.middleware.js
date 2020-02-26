var db = require('../db');
var cookieParser = require('cookie-parser'); 

module.exports.requireAuth = function(req, res ,next){
	if(!req.signedCookies.userid){
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({id: req.signedCookies.userid}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}
	res.locals.user = user;
	next();
}