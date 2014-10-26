var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
AWS = require('aws-sdk'),
morgan = require('morgan');

AWS.config.loadFromPath('./config/aws.json');

var db = require('./config/db');

mongoose.connect(db.url);

var port = 80;

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app, mongoose);



app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
