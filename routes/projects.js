let express = require('express');
let router = express.Router();

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});



module.exports = router;