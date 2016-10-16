var express = require('express');
var router = express.Router();
var Repository = require('../models/repository');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Repository.find({}, function(err, docs) {
      res.send({documents: docs});
    });
});

router.post('/create', function(req, res) {
  var repository = new Repository();
  var user = new User(req.body.user);

  console.log(user);

  repository._id = user._id;
  repository.name = "Vardhman Mehta";
  repository.link = "http://mehtav.xyz",
  repository.labels.push("asdf");

  repository.save(function(err) {
    if (err) {
      console.log(err);
    }
    res.send({done: repository});
  });
});

module.exports = router;