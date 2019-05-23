var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

var Test = require('../models/test');

router.get('',function (request,response) {
    console.log("catch the get request for test");
    response.json('message : Conect Success!');
});
