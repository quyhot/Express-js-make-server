var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var routerUsers = require('./routes/users.route.js');
var routerLogin = require('./routes/auth.route.js');

var authMiddleware = require('./middleware/auth.middleware.js');

var app = express();
var port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/',authMiddleware.requireAuth,  function(request, response){
	response.render('express', {
		name: 'Abc'
	});
})

app.use('/users', authMiddleware.requireAuth, routerUsers);
app.use('/auth', routerLogin);

app.listen(port, () => console.log('server ' + port));