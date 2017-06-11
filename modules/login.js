var express = require('express');
var bodyParser = require('body-parser');
var supersecret = 'alliswell';
var jwt = require('jsonwebtoken');
var app = express();


app.use(bodyParser());

var user = {
	adminusername : "kunal@opensea.co.in",
	adminpassword : "iamtheboss"
};

var adminRouter = express.Router();

adminRouter.get('/',function(req, res){
	res.render('login');
});

adminRouter.post('/', function(req, res){
	username = req.body.username;
	password = req.body.password;


			var validpassword = user.comparePassword(req.body.password)
				if(!validpassword || user.adminusername!== req.body.username){
					res.json({
						success:false,
						message:'Wrong credentials'
					});
				}

				else {

					var token = jwt.sign({
						username: user.adminusername
					}, supersecret, {expiresIn: 60*60*24
					});

					res.json({
						success: true,
						message:'Enjoy your token'
					});

					res.render('campuslist')
				}


});