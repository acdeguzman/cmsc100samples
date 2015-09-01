//controllers/student.js
var db = require(__dirname + './../lib/mysql.js');

exports.find = function(req, res){
	db.query("SELECT * FROM student", function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});	
};

exports.findOne = function(req, res, next){
	db.query("SELECT  * FROM student WHERE studentno='"
	+ req.params.studentno + "'", function(err, rows){
		if (err) return next(err);
		if(rows.length ==0){
			res.send(404, {message: 'Degree program not found.'});
		}
		else{
			res.send(rows[0]);
		}
	});
};

exports.insert = function(req, res, next){
	db.query("INSERT INTO student (name, birthday, studentno) VALUES (?, ?, ?)", [req.body.name, req.body.birthday, req.body.studentno], function(err, rows) {
		if(err) return next(err);
			res.send(rows);
	});
};

exports.remove = function(req, res, next){
	db.query("DELETE FROM student WHERE studentno=?", [req.params.studentno],
	function(err,rows){
		if(err)return next (err);
		res.send(rows);
	});
};

exports.update = function(req, res, next){
	db.query("UPDATE student SET name=?, birthday=? WHERE studentno=?", [req.body.name, req.body.birthday, req.body.studentno],
	function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});
};