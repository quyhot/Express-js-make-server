var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response){
	response.send('Coder in Coders.Tokyo')
})

app.listen(port, () => console.log('server ' + port));