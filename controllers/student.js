var mongoose = require('mongoose');
var Student = mongoose.model('Student');

//GET - Return all registers
exports.findAll = function(req, res) {
 Student.find(function(err, students) {
 if(err) res.send(500, err.message);
 console.log('GET /students')
 res.status(200).jsonp(students);
 });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Student.findById(req.params.id, function(err, student) {
 if(err) return res.send(500, err.message);
 console.log('GET /students/' + req.params.id);
 res.status(200).jsonp(student);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var student = new Student({
 name: req.body.name,
 photo: req.body.photo,
 rol: req.body.rol,
 token: req.body.token
 });
 student.save(function(err, student) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(student);
 });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
 Student.findById(req.params.id, function(err, student) {
 student.name = req.body.name;
 student.photo = req.body.photo;
 student.rol = req.body.rol;
 student.token = req.body.token;
 student.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(student);
 });
 });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
 Student.findById(req.params.id, function(err, student) {
 student.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Successfully deleted' });
 });
 });
};