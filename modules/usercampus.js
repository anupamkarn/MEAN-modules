var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampusSchema = new Schema({
	name: String

}, {
	collection: 'campus'
})

var model = mongoose.model('model', CampusSchema);

/*function getcampuslist () {
	res.render('campuslist', {
		
	})

}*/
/*
module.exports.getcampuslist = getcampuslist;*/
module.exports = mongoose.model('model', CampusSchema);