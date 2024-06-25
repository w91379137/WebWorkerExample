var express = require('express');
var router = express.Router();

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});

var log = (message) => {
    const date = (new Date()).toISOString();
    log_file.write(util.format(date + " " + message) + '\n');
}

const handler = function(req, res, next) {
    // console.log('log request', req.method, req.url);
    let param = {}
    if (req.method === 'GET') {
        param = req.query;
    }
    if (req.method === 'POST') {
        param = req.body;
    }
    log(JSON.stringify(param));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(param));
}

router.get('/', handler);
router.post('/', handler);

module.exports = router;