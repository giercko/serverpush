var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentsSchema = new Schema({
	//_id: {type: Number},
	name: {type: String},
	photo: {type: String},
	rol: {type: String},
	token: {type:String}
});

var dinnigSchema = new Schema({
	_student: {type: Number, ref: 'Student'},
	total_lunch: {type: Number},
	used_lunch: {type: Number},
	available_lunch: {type: Number},
	total_dinner: {type: Number},
	used_dinner: {type: Number},
	available_dinner: {type: Number},
	lunch: [{type: Schema.Types.ObjectId, ref: 'Details'}],
	dinner: [{type: Schema.Types.ObjectId, ref: 'Details'}]
	
});

var detailsSchema = new Schema({
	
	_student: {type: Number, ref: 'Student'},
	date: {type: String},
	hour: {type: String}
	
});

var Details =  mongoose.model('Details', detailsSchema);
var Dinning = mongoose.model('Dinning', dinnigSchema);
var Student = mongoose.model('Student', studentsSchema);

module.exports = mongoose.model('Student', studentsSchema);
module.exports = mongoose.model('Dinning', dinnigSchema);
module.exports = mongoose.model('Details', detailsSchema);
/*
var diego = new Student({name: "Diego Martinez", photo: "image.exe", rol: "201230007-x", token: "aqui iria un token si existiese uno"});

diego.save(function(err){
	if(err) return handleError(err);
	
	var dinning_diego = new Dinning({ total_lunch: 0, used_lunch: 0, available_lunch: 0, total_dinner: 0, used_dinner: 0, available_dinner:0});
		
	dinning_diego.save(function(err){
		if(err) return handleError(err);
	});
	
});

Dinning.findOne({_id: '5847c2ac88b5e92370201b5a'}).populate('student', 'name photo rol token').exec(function(err, dinning){
	//console.log('total_lunch: ', dinning.total_lunch);
	console.log('Student: ', dinning.student.name);
}

)

//diego.dinning.push(dinning_diego);
//diego.save(callback);*/


