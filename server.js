var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var User = require('../dashboard/modules/user.js');
var supersecret = 'alliswell';
var jwt = require('jsonwebtoken');
/*
app.get('/', function(req,res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});*/

app.use(function(req, res, next) //CORs request handle, coss origin resourse sharing
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested=With, content-type, \ Authorisation');

	next();
});

app.use(morgan('dev'));

var adminRouter = express.Router();

adminRouter.post('/authenticate', function(req,res){
	User.select('username password').exec(function(err, user){
		if(err) throw err;

		if(!user){
			res.json({
				success: false,
				message:'User not found'
			});
		}

		else if(user){

			var validpassword = user.comparePassword(req.body.password)
				if(!validpassword){
					res.json({
						success:false,
						message:'Wrong Password'
					});
				}

				else {

					var token = jwt.sign({
						username: user.username
					}, supersecret, {expiresIn: 60*60*24
					});

					res.json({
						success: false,
						message:'Enjoy your token'
					});
				}
			
		}

	});
});

app.use('/login',adminRouter);

app.listen(port);
console.log('let see this port works or not');