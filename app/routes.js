module.exports = function (app, mongoose) {
    var Hacker = mongoose.model('Hacker', require('./models/hacker.js'));
    var fs = require('fs');

    app.post('/api/newuser', function (req, res) {

        console.log(req.files);

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
