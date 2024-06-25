var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { join } = require('path')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var logRouter = require('./routes/log');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", join(__dirname, "public"));
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/log', logRouter);

module.exports = app;
