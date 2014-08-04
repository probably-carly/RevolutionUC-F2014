module.exports = function (mongoose) {
	var Hacker = mongoose.model('Hacker', {
		name: String,
		email: String,
		university: String,
		college: String,
		major: String,
		gender: String,
		bio: String,
		resume: String
	});

	var models = {
		Hackers : mongoose.model('Hacker', Hacker)
	};

	return models;
}
