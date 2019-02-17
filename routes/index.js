/*
    Student Name: Bal Krishna Dhakal
    Student ID: 300916314
    Description: COMP308-W2019-Assignment1
    Date Created: February 16, 2019
    Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment1
*/


let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;