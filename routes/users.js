var express = require('express');
var router = express.Router();

var client_id = '3c3a5087f013115ba635';
var client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';

var request = require('request');

const https = require('https');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var access_token = "02e2fa6d145c3c36a3ea56932cf8398592885be9";
    var options = {
    hostname: 'https://api.github.com',
    path: '/user?access_token=' + access_token,
    method: 'GET'
  };
  var req = https.request(options, function(res) {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
      console.log(d);
    });
  });

});


//   var access_token = "02e2fa6d145c3c36a3ea56932cf8398592885be9";
//   request.get('http://api.github.com/user?access_token=' + access_token + '&client_id='+client_id+'&client_secret='+client_secret, function (error, response, body) {
//         console.log("HERE");
//         if (!error) {
//             console.log(response.statusCode);
//         } else {
//             res.send("ERROR");
//         }
//     });
// });

module.exports = router;
