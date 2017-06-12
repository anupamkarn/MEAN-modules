var express = require('express');
var app =  express();
var path = require('path');
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var index = require('./modules/login');
var campuslist = require('./modules/campuslist');
/*
app.get('/', function(req,res)
{
	res.sendFile(path.join(__dirname + '/index.html'));
});*/

app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) //CORs request handle, coss origin resourse sharing
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested=With, content-type, \ Authorisation');

	next();
});

app.use(morgan('dev'));
app.set('view engine', 'ejs');

console.log(__dirname);
app.post('/login', index.checks);
/*app.use('/campuslist',campuslist.validtoken);*/

app.get('/', function(req, res, next){
	res.render(__dirname + '/view/login.ejs')
});


/*app.get('/login', function(req,res,next){
	res.render(__dirname + '/view/campuslist.ejs')
});*/
	
app.listen(port);
console.log('let see this port works or not');

