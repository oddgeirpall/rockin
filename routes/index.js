var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('asdf')
  res.render('index', { title: 'Plokk-In' });
});

module.exports = router;
