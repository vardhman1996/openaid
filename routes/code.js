var express = require('express');
var router = express.Router();
var client_id = '3c3a5087f013115ba635';
var client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';
var redirect_uri_user = 'http://52.33.59.36:5000/users';
var redirect_uri_accessToken = 'http://52.33.59.36:5000/code';
var github_auth = 'https://github.com/login/oauth/authorize?'

var github_auth_accessToken = "https://github.com/login/oauth/access_token?";

var request = require('request');
/* GET home page. */

router.get('/', function(req, res, next) {


    request.post(
    github_auth_accessToken+'client_id='+client_id+'&client_secret='+client_secret+'&code='+req.query.code,
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    });
});

module.exports = router;
