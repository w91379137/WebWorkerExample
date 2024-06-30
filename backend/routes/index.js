var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('service_index.html');
});

router.get('/index', function(req, res, next) {
  res.render('index.html');
});

router.get('/worker_index', function(req, res, next) {
  res.render('worker_index.html');
});

router.get('/service_index', function(req, res, next) {
  res.render('service_index.html');
});

router.get('/sub', function(req, res, next) {
  res.render('sub.html');
});

module.exports = router;
