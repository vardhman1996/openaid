var express = require('express');
var router = express.Router();
var client_id = '3c3a5087f013115ba635';
var client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';
var redirect_uri_user = 'http://52.33.59.36:5000/users';
var redirect_uri_accessToken = 'http://52.33.59.36:5000/code';
var github_auth = 'https://github.com/login/oauth/authorize?'

var github_auth_accessToken = "https://github.com/login/oauth/access_token?";
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect(github_auth+'client_id='+client_id+'&redirect_uri='+redirect_uri_accessToken);
});

module.exports = router;
