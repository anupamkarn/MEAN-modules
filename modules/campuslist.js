var jwt = require('jsonwebtoken');
var supersecret = 'alliswell';
var index = require('./login');
function validtoken (req, res, next){

	var token = req.body.token || req.param(token) || req.headers['x-access-token'];

	// res.render(__dirname + '/../view/campuslist.ejs');

	if(token){
			console.log(token);	
		jwt.verify(token, supersecret, function(err, decoded){
			if(err){
				return res.status(403).send({
					success: false,
					message:'Failed to authenticate token',
				});
			}
			else{
				req.decded = decoded;
				res.json({
					campuses : [
						//Dummy list of campuses
						'Mantri residency',
						'Mantri Paradise'
					]


				})
				/*res.render(__dirname + '/../view/campuslist.ejs');*/
				next();
			}
		});
	}
	/*else{
		res.status(403).send({
			success:false,
			messsage:'token not provided',
		});
	}*/
  
};



module.exports.validtoken = validtoken;