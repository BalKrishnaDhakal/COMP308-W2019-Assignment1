/*
    Student Name: Bal Krishna Dhakal
    Student ID: 300916314
    Description: COMP308-W2019-Assignment1
    Date Created: February 16, 2019
    Link to GitHub: https://github.com/BalKrishnaDhakal/COMP308-W2019-Assignment1
*/


let express = require('express');
let router = express.Router();

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});



module.exports = router;