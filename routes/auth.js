var express = require('express');
var router = express.Router();

var client_id = '3c3a5087f013115ba635';  // anirban's: c47fcedb8ecbf237865b
var client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';  // anirban's: 60ad0084cf857573180baecf161108337a2b35ab
var redirect_uri_user = 'http://52.33.59.36:4000/users';
var redirect_uri_accessTokenTemp = 'http://52.33.59.36:4000/auth/temp_token';

var github_auth = 'https://github.com/login/oauth/authorize?'
var request = require('request');
var github_auth_accessToken = "https://github.com/login/oauth/access_token?";
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect(github_auth+'client_id='+client_id+'&redirect_uri='+redirect_uri_accessTokenTemp);
});

router.get('/temp_token', function(req, res) {
    request.post(
    github_auth_accessToken+'client_id='+client_id+'&client_secret='+client_secret+'&code='+req.query.code,
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var access_token = body.substring(13, body.length);
            console.log(access_token);
            res.redirect(redirect_uri_user+'?'+body);
        }
    });
})

router.get('/token', function(req, res) {

})

module.exports = router;