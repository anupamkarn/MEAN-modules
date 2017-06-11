var express = require('express');
var app = module.exports = express();
var path = require('path');
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var http = require('http');
var index = require('./modules/login');
var campuslist = module.exports = require('./modules/campuslist');
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


app.use('/login', index);
app.use('/campuslist',campuslist);


app.listen(port);
console.log('let see this port works or not');