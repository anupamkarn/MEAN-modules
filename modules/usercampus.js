var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CampusSchema = new Schema({
	_id: String,
	name: String
}, {
	collection: 'campus'
})

var model = mongoose.model('model', CampusSchema);

function getcampuslist () {
	res.render('campuslist', {
		
	})

}

module.exports.getcampuslist = getcampuslist;