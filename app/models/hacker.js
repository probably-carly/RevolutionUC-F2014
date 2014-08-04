module.exports = function (mongoose) {
	var Hacker = mongoose.model('Hacker', {
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

	var models = {
		Hackers : mongoose.model('Hacker', Hacker)
	};

	return models;
}
