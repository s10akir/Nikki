let mongoose = require('mongoose');


let mongoDB = mongoose.connect('mongodb://localhost:27017/nikki_db', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

const contents_Schema = new mongoose.Schema({
    title: String,
    content:String
});

var contents = mongoose.model('Contents', contents_Schema);

module.exports = contents;