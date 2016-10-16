var express = require('express');
var router = express.Router();
var sleep = require('sleep');

var Issues = require('../models/issues');
var Repos = require('../models/repository.js');
const request = require('request');

const client_id = '3c3a5087f013115ba635';
const client_secret = '12bd42f1c77097c542d872c4c4f7be860af399b2';

/* GET home page. */
router.post('/', function(req, res, next) {
    Repos.find({}, (error, repos) => {
        repos.forEach( (repo) => {
            var url = `https://api.github.com/repos/${repo.username}/${repo.name}/issues?client_id=${client_id}&client_secret=${client_secret}`;
            request({ url : url, headers: {"User-Agent" : "OpenAid"}}, (error, response, body) => {
                body = JSON.parse(body);
                body.forEach((issue) => {
                    var issue_db = new Issues();
                    issue_db.title = issue.title;
                    issue_db.html_url = issue.html_url;
                    issue_db.username = issue.user.login;
                    issue_db.reponame = repo.name;
                    issue_db.labels = issue.labels;
                    issue_db.save( (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                });
            });
        });
    });
});

router.get('/', function(req, res, next) {
    Issues.find({}, (error, issues) => {
        res.send(issues);
    });
    
});

module.exports = router;
