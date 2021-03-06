// Get dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Get our API routes
// const api = require('./server/routes/api');
var book = require('./routes/book');

var app = express();

// MongoDB
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/mean-angular6', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://admin:admin1@ds147659.mlab.com:47659/mean-angular6', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('mongoose: connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// Point static path to dist/public
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api/book', book);

// Catch all other routes and return the index file
app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname,'dist/index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;