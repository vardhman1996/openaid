'use strict';
const express = require('express');
const router = express.Router();
const Labels = require('../models/label');
const request = require('request');
const User = require('../models/user');

router.get('/:owner/:repo', (req, res) => {
    var github_api_uri = 'https://api.github.com/repos/'+req.params.owner+'/'+req.params.repo+'/labels';
    console.log(req.params.owner);
    User.findOne({username : req.params.owner}).then((data) => {
        var access_token = data.access_token;
        Labels.find({}, (err, labels) => {
        for (let i = 0; i < labels.length; i++) {
            var url = `${github_api_uri}?access_token=${access_token}`;
            request.post({url: url, headers: { 'User-Agent' : "OpenAid" }, body: JSON.stringify(labels[i])}, (err, resp, body) => {
                if (err) {
                    res.send(err);
                }
            });
        } 
        res.send({labelsCreated: true});
        });
    });
});

module.exports = router;