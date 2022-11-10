require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var httpRequestContext = require('http-request-context');

require('module-alias/register');
require('./modules/orm/sequelize');

var loginRouter = require('./routes/loginRouter');
var usersRouter = require('./routes/usersRouter');
var clientsRouter = require('./routes/clientRouter');
var productsRouter = require('./routes/productsRouter');


var app = express();

//Plugin.
app.use(httpRequestContext.middleware());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/client', clientsRouter);
app.use('/product', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.error(error)
  res.send(new Error('Error to try process your request on this application'));

});

module.exports = app;
