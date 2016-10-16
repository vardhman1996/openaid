var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var repositories = [{
        id: 70939672,
        name: "chessbots",
        login: "vardhman1996",
        html_url: "https://github.com/vardhman1996/chessbots",
        description: " Wrote several chess bots using AI algorithms"
    },
    {
        id: 38805895,
        name: "code_autocorrector",
        login: "vardhman1996",
        html_url: "https://github.com/vardhman1996/code_autocorrector",
        description: "Code validation for WizRocket"
    },
    {
        id: 32976956,
        name: "d3",
        login: "vardhman1996",
        html_url: "https://github.com/vardhman1996/d3",
        description: "A JavaScript visualization library for HTML and SVG."
    },
    {
        id: 46309024,
        name: "getting-a-gig",
        login: "vardhman1996",
        html_url: "https://github.com/vardhman1996/getting-a-gig",
        description: "A guide for getting a gig in college as a tech major."
    },
    {
        id: 36142873,
        name: "habitat",
        login: "vardhman1996",
        html_url: "https://github.com/vardhman1996/habitat",
        description: null
    }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OpenAid' });

});

router.get('/master', function(req, res, next) {
    res.render('master', { title: 'Publish Projects' });
});

router.get('/developer', function(req, res, next) {
    res.render('developer', { title: 'Contribute' });
});

router.get('/repos', function(req, res, next) {
    res.render('repos', {title: 'Login',  repos: repositories});
});

router.get('/collectedissues', function(req, res, next) {
    var issues = [
        {
            _id: "5803845d0ae3494b27c18f53",
            body: "*Kicks off the mountain*",
            reponame: "Demo_repo",
            username: "Divye02",
            html_url: "https://github.com/Divye02/Demo_repo/issues/1",
            title: "This is Sparta",
            __v: 0,
            labels: [ ]
        }
    ];

    res.render('collectedissues', {title: 'Issues',  issues: issues});
});

router.get('/search', function(req, res, next) {
    var tags ={ labels: [
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-Damn",
            name: "Damn",
            color: "1d76db"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "treeasdf",
            color: "c2e0c6"
        }
    ]};

    res.render('search', {title: 'Issues',  tags: tags});
});

// List of functions posted
router.post('/repos', function(req, res, next) {
    console.log(req.body);
    res.render('repos', {title: 'Submitted'});
});

module.exports = router;
