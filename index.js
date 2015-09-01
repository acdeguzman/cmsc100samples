

//index.js
//library
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});


app.use(require('body-parser')());


app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));

// student
app.route('/student')
	.get(function (req, res) {
		res.send("Get a student");
	})
	.post(function (req, res) {
		res.send("Add a student");
	})
	.put(function (req, res) {
		res.send("Update a student");
	});

// degree
app.route('/degree')
	.get(function (req, res) {
		res.send("Get a degree");
	})
	.post(function (req, res) {
		res.send("Add a degree");
	})
	.put(function (req, res) {
		res.send("Update a degree");
	});

var server = app.listen(5000, function () {
	var host = server.address().address;
	var port = server.address().port;

	//callback 
	console.log("Server listening on: http://%s:%s", host, port);
});


