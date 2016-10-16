var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');



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

router.get('/team', function(req, res, next) {
    res.render('team', {title: 'Login',  repos: repositories});
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
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "tree",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "graph",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "heaps",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "machine-learning",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "computer-vision",
            color: "c2e0c6"
        },
        {
            url: "https://api.github.com/repos/Divye02/Demo_repo/labels/OA-tree",
            name: "NLP",
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

// List of functions posted
router.get('/published', function(req, res, next) {
    console.log(req.body);
    res.render('published', {title: 'Congrats!'});
});

module.exports = router;
