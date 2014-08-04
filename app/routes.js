module.exports = function (app) {
	app.get('/api/hackers', function (req, res) {
		Hacker.find(function (err, hackers) {
			if(err) {
				res.send(err);
			}
			res.json(hackers);
		})
	});

	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});
};
