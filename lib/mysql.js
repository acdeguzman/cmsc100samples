//lib/mysql.js

var mysql = require('mysql');

module.exports = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: '',
	database: 'cmsc100ef2l' 

});
