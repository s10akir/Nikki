var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Test = new Schema({
    message : {type: String,require:true}
});

module.exports = mongoose.model('test',Test);
