module.exports = function (app, mongoose) {
	var Hacker = mongoose.model('Hacker', require('./models/hacker.js'));
	
	app.post('/api/newuser', function (req, res) {
		Hacker.create(req.body, function (err) {
			console.error(err);
			
			Hacker.find(function (err, hackers) {
				if (err) {
					res.send(err);
				}
				res.json(hackers);
			});
		});
	});

};
