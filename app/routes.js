module.exports = function (app, mongoose) {
  var Hacker = mongoose.model('Hacker', require('./models/hacker.js'));
  var fs = require('fs');
  var util = require('util');

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
    Hacker.findOne({_id: req.params.id}, function (err, hacker) {
      //if (err) throw err;
      console.log(util.inspect(err));

      hacker.coming = true;
      console.log(util.inspect(hacker));
      hacker.save(function (err) {
        if (err) throw err;
      });
      res.redirect('http://revolutionuc.com/attending.html');
    });
  });

  app.get('/not/:id', function (req, res) {
    Hacker.findOne({_id: req.params.id}, function (err, hacker) {
      if (err) throw err;

      hacker.coming = false;
      hacker.save(function (err) {
        if (err) throw err;
      });
      res.redirect('http://revolutionuc.com/not.html')
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
