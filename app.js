var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv').config();
var { validateStaff } = require('./middlewares/validateUser');

var index = require('./routes/index');
var users = require('./routes/users');
var staff = require('./routes/staff');
var products = require('./routes/products');
var sales = require('./routes/sales');
var category = require('./routes/category');
var subcategory = require('./routes/subcategory');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Secret key JWT
app.set('secretKey', process.env.SECRET_KEY);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** HEADER INICIO */
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  next();
});
app.options('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With,x-access-token'
  );
  res.send(200);
});
/** HEADER FIN */

app.use('/', index);
app.use('/users', users);
app.use('/staff', staff); //Se valida dentro de staff para dejar al login sin autenticacion
app.use('/products', products);
app.use('/sales', sales);
app.use('/category', validateStaff,category);
app.use('/subcategory', subcategory);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
