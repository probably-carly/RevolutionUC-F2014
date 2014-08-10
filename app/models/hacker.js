var mongoose = require('mongoose');
var HackerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: { 
		type: String, 
		required: true,
		unique: true
	},
	university: {
		type: String,
		required: true
	},
	college: {
		type: String,
		required: true
	},
	major: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	bio: {
		type: String,
		required: true
	},
	resume: String
});


