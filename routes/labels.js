'use strict';
const express = require('express');
const router = express.Router();
const Labels = require('../models/label');
const request = require('request');
const User = require('../models/user');
const Repos = require('../models/repository');

const client_id = '3c3a5087f013115ba635';
const client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';

router.get('/:username', (req, res) => {
    let count = 0;
    Labels.find({}, (err, labels) => {
    User.findOne({username : req.params.username}).then((d) => {
        Repos.find({username : req.params.username}, (error, data) =>{
            for (var k = 0; k < data.length; k++){
                var name = data[k].name;
                var github_api_uri = 'https://api.github.com/repos/'+req.params.username+'/'+name +'/labels';
                var access_token = d.access_token;
                for (let i = 0; i < labels.length; i++) {
                    var url = `${github_api_uri}?access_token=${access_token}&client_id=${client_id}&client_secret=${client_secret}`;
                    request.post({url: url, headers: { 'User-Agent' : "OpenAid" }, body: JSON.stringify(labels[i])}, (err, resp, body) => {
                        if (err) {
                            res.send(err);
                        }
                        count++;
                        if (count >= data.length * labels.length) {
                            res.render("published");
                         }
                    }); 
                };
            }
            });
        });
          //  }
        // res.send({labelsCreated: true});

    });
});

module.exports = router;