var express = require('express');
var bodyParser = require('body-parser');
var routerUsers = require('./routes/users.route.js')

var app = express();
var port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(request, response){
	response.render('express', {
		name: 'Abc'
	});
})

app.use('/users', routerUsers);

app.listen(port, () => console.log('server ' + port));