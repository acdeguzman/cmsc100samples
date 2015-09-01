var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function(router){
	router.route('/student')
		.get(student.find)
		.post(student.insert)
		.put(student.update);

	router.route('/student/:studentno')
		.get(student.findOne)
		.delete(student.remove);
		
	router.route('/degree')
		.get(degree.find)
		.post(degree.insert)
		.put(degree.update);

	router.route('/degree/:id')
		.get(degree.findOne)
		.delete(degree.remove);
}
