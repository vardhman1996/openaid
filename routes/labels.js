'use strict';
const express = require('express');
const router = express.Router();
const Labels = require('../models/label');
const request = require('request');

router.get('/:owner/:repo', (req, res) => {
    var github_api_uri = 'https://api.github.com/repos/'+req.params.owner+'/'+req.params.repo+'/labels';
    Labels.find({}, (err, labels) => {
        for (let i = 0; i < labels.length; i++) {
            var url = github_api_uri+'?name='+labels[i].name+'&color='+labels[i].color;
            console.log(url);
            request.post({url: url, headers: { 'User-Agent' : "OpenAid" }}, (err, resp, body) => {
                console.log(body); 
            });
        } 
    });
});

module.exports = router;