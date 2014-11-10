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

  app.get('/attending/:id', function (req, res) {
    Hacker.findOne({id: req.params.id}, function (err, hacker) {
      if (err) throw err;

      hacker.coming = true;
      hacker.save(function (err) {
        if (err) throw err;
      });
    });
  });

  app.get('/not/:id', function (req, res) {
    Hacker.findOne({id: req.params.id}, function (err, hacker) {
      if (err) throw err;

      hacker.coming = false;
      hacker.save(function (err) {
        if (err) throw err;
      });
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
