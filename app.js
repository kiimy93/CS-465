require('dotenv').config();
require('./app_api/models/db');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
require('./app_api/config/passport');
const cors = require('cors');

const apiRouter = require('./app_api/routes/index');
var travelerRouter = require('./app_server/routes/index');

var app = express(); 

app.use(cors({
  origin: [
    'http://localhost:4200',
    'http://localhost:4201',
    'http://localhost:55464'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', travelerRouter);
app.use('/api', apiRouter);

// Catch unauthorized JWT errors and return 401
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      message: err.name + ': ' + err.message
    });
  }
  next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;