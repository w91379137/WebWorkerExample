var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/sub', function(req, res, next) {
  res.render('sub.html');
});

router.get('/worker_index', function(req, res, next) {
  res.render('worker_index.html');
});

module.exports = router;
