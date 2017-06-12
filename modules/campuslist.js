var jwt = require('jsonwebtoken');
var supersecret = 'alliswell';
var count = 0;
function validtoken (req, res, next){

	var token = req.body.token || req.param(token) || req.headers['x-access-token'];

	if(token){

		jwt.verify(token, supersecret, function(err, decoded){
			if(err){
				return res.status(403).send({
					success: false,
					message:'Failed to authenticate token',
				});
			}
			else{
				req.decded = decoded;
				var count = 1;
				next();
			}
		});
	}
	else{
		res.status(403).send({
			success:false,
			messsage:'token not provided',
		});
	}
  
};



module.exports.validtoken = validtoken;
module.exports = {
	count: count
}