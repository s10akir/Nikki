let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;
let router = require('./routes/api/v1/');
app.use('/api/v1/', router);

app.listen(port);
console.log('listen on port' + port);
