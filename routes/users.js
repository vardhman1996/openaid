var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, user) {
    res.send({user: user});
  });
});

router.post('/create', function(req, res) {
  var user = new User();
  user.name = req.body.name;
  user.save(function(err) {
    if(err) {
      console.log(err);
    }
    res.send({user: user});
  });
});

module.exports = router;
