var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
    console.log('asdf')
  res.render('about', { title: 'Rock-In' });
});

module.exports = router;
