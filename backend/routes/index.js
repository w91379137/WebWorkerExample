var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/sub', function(req, res, next) {
  res.render('sub.html');
});

module.exports = router;
