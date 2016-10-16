'use strict'
const express = require('express');
const router = express.Router();
const Repository = require('../models/repository');
const request = require('request');

/* GET users listing. */
router.get('/all/:userid/:username', (req, res, next) => {
  let username = req.params.username || 'vardhman1996';
  let userid = req.params.userid || 12345;
  let url = `https://api.github.com/users/${username}/repos`
  request({url: url, headers: { 'User-Agent' : username }}, (err, response, body) => {
    if (err || response.code != 200) {
      console.log(err);
    }

    let data = JSON.parse(body);
    let repos = [{ userid : userid }];
    for (let i = 1; i < data.length; i++) {
      repos.push({id : data[i].id,
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

    repository.save((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  res.send({done: true});
});

module.exports = router;