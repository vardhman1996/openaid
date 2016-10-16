'use strict'
const express = require('express');
const router = express.Router();
const Repository = require('../models/repository');
const request = require('request');

const client_id = '3c3a5087f013115ba635';
const client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';

/* GET users listing. */
router.get('/all/:userid/:username', (req, res, next) => {
  let username = req.params.username || 'vardhman1996';
  let userid = req.params.userid || 12345;
  let url = `https://api.github.com/users/${username}/repos?client_id=${client_id}&client_secret=${client_secret}`
  request({url: url, headers: { 'User-Agent' : username }}, (err, response, body) => {
    if (err || response.code != 200) {
      console.log(err);
    }

    let data = JSON.parse(body);
    let repos = [{ userid : userid }];
    for (let i = 1; i < data.length; i++) {
      repos.push({id : data[i].id,
                  user_name : data[i].user_name,
                  name : data[i].name,
                  login : data[i].owner.login,
                  html_url : data[i].html_url,
                  description : data[i].description});
    }
    res.send(repos);
  });
});

router.post('/save', (req, res, next) => {
  let data = req.body.repository;

  for (let i = 1; i < data.length; i++) {
    let repository = new Repository();
    repository.name = data[i].name;
    repository.html_url = data[i].html_url;
    repository.description = data[i].description;
    repository.userid = data[0].userid;
    repository.username = data[i].login;
    repository.repoid = data[i].id;
    Repository.findOne({
        name: repository.id,
        description : repository.description,
        userid : repository.userid,
        username : repository.username,
        repoid : repository.repoid
      }).then(function(data){
        if(data == null) {
          repository.save((err) => {
            if (err) {
              console.log(err);
            }
          });
        }
    });
  }
  res.send({done: true});
});

module.exports = router;