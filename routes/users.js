'use strict';
const express = require('express');
const router = express.Router();

const client_id = '3c3a5087f013115ba635';
const client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';

const request = require('request');

const https = require('https');
const User = require('../models/user');


/* GET users listing. */

router.get('/:access_token', (req, res) => {
  let access_token = req.params.access_token;
  let url = `http://api.github.com/user?access_token=${access_token}`;
  
  request({ url : url, headers: {"User-Agent" : "OpenAid"}}, (error, response, body) => {
    if (!error) {
      body = JSON.parse(body);
      let user = new User();
      User.findOne({
        id: body.id
      }).then(function(data){
        if(data == null) {
          let user = new User();
          user.username = body.login;
          user.access_token = access_token;
          user.name = body.name;
          user.id = body.id;
          user.save((err) => {
            if(err) {
              console.log(err);
            }
          });
        }
        res.redirect(`/repository/all/${body.id}/${body.login}`);
      });
    } else {
      res.send("ERROR");
    }
  });
});

module.exports = router;
