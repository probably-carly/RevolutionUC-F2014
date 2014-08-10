var express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
methodOverride = require('method-override')
morgan = require('morgan');

var db = require('./config/db');

mongoose.connect(db.url);

var port = process.env.PORT || 3010;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.models = require('./app/models/hacker.js')(mongoose);

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
