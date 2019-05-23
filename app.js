
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var test = require('./');
var http = require('http');
var mongoose = require('mongoose');
//DB系
app.use('/test',test);

var port = process.env.PORT || 3000;
var router = require('./api/');
app.use('/', router);

app.listen(port);
console.log('listen on port' + port);

