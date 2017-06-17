/*var jwt = require('jsonwebtoken');
var supersecret = 'alliswell';
var index = require('./login');
var usercampus = require('./usercampus');
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
				req.decded = decoded;/*
				var promise = usercampus.find().exec()
				promise.then((result) => {
				res.json({
				/*	result : result
				campuse: [ 'abc', 
							'xyz'

							]
						//Dummy list of campuse

				});
/*			});
				/*res.render(__dirname + '/../view/campuslist.ejs');
				next();
			}
		});
	}
	/*else{
		res.status(403).send({
			success:false,
			messsage:'token not provided',
		});
	}
  
};

module.exports.validtoken = validtoken;*/

var jwt = require('jsonwebtoken');
var supersecret = 'alliswell';
var index = require('./login');
var campus = require('./usercampus').campus;
var visitor = require('./usercampus').visitor;


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
				console.log('rendering');
				var visitorSMR = 1;
				var visitorMantri = 1;
				
				var promise = campus.find().exec();
				promise.then(function(campuses){
					console.log(campuses);
					visitor.count().then(function(result) {
						console.log(result);
					})
					 res.json({
						 result: campuses
					 })
					
					
					/*console.log(result);*/
				})
				
				// res.json({
					// visitorSMR: visitorSMR,
					// visitorMantri: visitorMantri,
					// users : count
				// });
			
				};
		
	});

}

}






				/*res.render(__dirname + '/../view/login.ejs');*/
				/*res.json({
					campuses : [
						//Dummy list of campuses htdkf dthdnffno h
						'Mantri residency',
						'Mantri Paradise'
					]

                 
				})*/
				/*res.render(__dirname + '/../view/campuslist.ejs');*/
			/*	next();*/
			
	/*else{
		res.status(403).send({
			success:false,
			messsage:'token not provided',
		});
	}*/
  


module.exports.validtoken = validtoken;
