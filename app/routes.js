module.exports = function (app, mongoose) {
    var Hacker = mongoose.model('Hacker', require('./models/hacker.js'));
    var fs = require('fs');

    app.post('/api/newuser', function (req, res) {

        console.log(req.files);

        var params = {
            Bucket: 'RevolutionUC_F2014',
            Key: 'curt.pdf',
            Body: fs.readFileSync('./curt.pdf')
        };

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

//    app.get('/api/upload', function (req, res) {
//
//
//
//
//    });
};
