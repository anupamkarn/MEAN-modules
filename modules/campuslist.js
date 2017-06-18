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
var user = require('./usercampus').user;
var _ = require('lodash');

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
					var promises1 = [];
					var promises2 = [];
					// console.log(campuses);
					_.forEach(campuses, (campus) => {
						promises.push(visitor.count({campusId: campus._id}));
					});

					_.forEach(campuses, (campus) => {
						promises2.push(user.count({'ownership.campusId': campus._id}));	
					})
					Promise.all([promises1 , promises2]).then((results1, results2) => {
						console.log(results);
						res.json({
							result: campuses,
							countvisitors: results1,
							countuser: results2
						})
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