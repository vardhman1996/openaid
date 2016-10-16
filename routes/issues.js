'use strict';
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
    var issues = [];
    Repos.find({}, (error, repos) => {
        var total_repos = repos.length;
        var current_repos = 0;
        repos.forEach( (repo) => {
            var url = `https://api.github.com/repos/${repo.username}/${repo.name}/issues?client_id=${client_id}&client_secret=${client_secret}`;
            request({ url : url, headers: {"User-Agent" : "OpenAid"}}, (error, response, body) => {
                body = JSON.parse(body);
                var total_issues = body.length;
                var current_issues = 0;
                if (current_issues == total_issues) {
                    current_repos++;
                }
                if (current_repos == total_repos) {
                    res.send(issues);
                }
                body.forEach((issue) => {
                    issues.push(issue)
                    var issue_db = new Issues();
                    issue_db.title = issue.title;
                    issue_db.html_url = issue.html_url;
                    issue_db.username = issue.user.login;
                    issue_db.reponame = repo.name;
                    issue_db.body = issue.body;

                    let labels = [];

                    for(let i = 0; i < issue.labels.length; i++) {
                        if((issue.labels[i].name).startsWith('OA-')) {
                            let tempLabel = issue.labels[i];
                            let len = tempLabel.name.length;
                            tempLabel['name'] = tempLabel['name'].substring(3, len);
                            labels.push(tempLabel);
                        }
                    }
                    issue_db.labels = labels;

                    issue_db.save( (err) => {
                        if (err) {
                            console.log(err);
                        }
                        current_issues++;
                        if (current_issues == total_issues) {
                            current_repos++;
                        }
                        if (current_repos == total_repos) {
                            res.send(issues);
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

router.get('/search', (req, res, next) => {
    let searchParams = ["graphs", "tree"];

    Issues.find({
                    "labels.name" : { $in : searchParams }
                }).then((data) => {
                    res.send({data: data});
                }).catch((err) => {
                    res.send(err);
                });
});

module.exports = router;
