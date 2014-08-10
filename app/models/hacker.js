module.exports = function (mongoose) {
	Schema = mongoose.Schema;
	var schema = new Schema({
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
		Hackers : mongoose.model('Hacker', schema)
	};

	return models;
};
