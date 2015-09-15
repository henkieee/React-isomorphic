var express = require('express'),
	app = new express();

app.get('/', function(req, res) {
	res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen('4000');