module.exports = function (app, mongoose) {
  var Hacker = mongoose.model('Hacker', require('./models/hacker.js'));
  var fs = require('fs');

  app.post('/api/newuser', function (req, res) {
    Hacker.create(req.body, function (err) {
      if (err) {
        res.send(err);
        return;
      }
      res.send({"response": "200"});
    });
  });

  app.get('/api/hackercount', function (req, res) {
    Hacker.count(function (err, count) {
      if (!err) {
        res.json(count);
      }
    });
  });
};
