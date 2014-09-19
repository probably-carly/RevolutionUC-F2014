module.exports = function (app, mongoose, AWS) {
    var Hacker = mongoose.model('Hacker', require('./models/hacker.js'));
    var fs = require('fs');
    var s3 = new AWS.S3();

    app.post('/api/newuser', function (req, res) {

        console.log(req.files);

        var params = {
            Bucket: 'RevolutionUC_F2014',
            Key: 'curt.pdf',
            Body: fs.readFileSync('./curt.pdf')
        };

        s3.putObject(params, function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);

        });

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
