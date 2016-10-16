var express = require('express');
var router = express.Router();

var client_id = '3c3a5087f013115ba635';
var client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';

var request = require('request');

const https = require('https');
var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var access_token = req.query.access_token;
  request({
    url : 'http://api.github.com/user?access_token=' + access_token, 
    headers: {"User-Agent" : "OpenAid"}
  },function (error, response, body) {
        console.log("HERE");
        if (!error) {
            body = JSON.parse(body);
            var user = new User();
            // console.log(body.login + " " + body.username + " " + body.id);
            // User.findOne({
            //   id: body.id
            // }, function(resm) {
            //   console.log("Query Result: " + resm);
            // });
            user.username = body.login;
            user.name = body.name;
            user.id = body.id;
            user.save(function (err) {
              if(err) {
                console.log(err);
              }
              else {
                res.send({done: true});
              }
            });
        } else {
            res.send("ERROR");
        }
    });
});

module.exports = router;
