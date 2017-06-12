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

	adminRouter.get('/', function(req, res){
		res.render('./view/login.html');

	});

 /*comparePassword = function(password){
	var user = this;

	return bcrypt.compareSync(password, user.adminpassword);
*/	

 function authenticate(req, res) {

	username = req.body.username;
	password = req.body.password;

	console.log(username);
	console.log(password);


			/*var validpassword = user.comparePassword(req.body.password)*/
				if( user.adminpassword !== password || user.adminusername !== username){
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

					res.render(__dirname + '/view/campuslist.ejs');
					console.log(token);


				}


};

module.exports.checks = authenticate;
