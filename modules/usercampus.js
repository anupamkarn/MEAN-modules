var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampusSchema = new Schema({
	name: String

}, {
	collection: 'campus'
});

var VisitorSchema = new Schema({
	campusId: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: 'Campus'
	}

}, {
	collection: 'visitorrecords'
});

var Users = new Schema({
	campusId: {
		type:mongoose.Schema.Types.ObjectId,
		require:true,
		ref:'Campus'
	}

}, {
	collection: 'users'
});

var Employee = new Schema({
	campusid: String

}, {
	collection: 'employees'
});
/*var model = mongoose.model('model', CampusSchema);
*/
/*function getcampuslist () {
	res.render('campuslist', {
		
	})

}*/
/*
module.exports.getcampuslist = getcampuslist;*/
module.exports = {
	campus: mongoose.model('campus', CampusSchema),
	visitor: mongoose.model('visitor', VisitorSchema),
	user: mongoose.model('user', Users)	
};
/*module.exports = mongoose.model('visitor', VisitorSchema);*/