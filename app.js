var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');

var apiIndex = require('./config/routes');
var index = require('./routes/index');

var app = express();

var passport = require('./config/passport');
require('dotenv').config()
require('./config/database');

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  session: 'sup_yo',
  secret: 'asdf',
  resave: false,
  saveUninitialized: true
}));
app.use(cors({origin: process.env.FRONTEND_URL}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/auth/github', passport.authenticate(
  'github',
  { scope: ['profile', 'email'] }
));

app.get('/oauth2callback', passport.authenticate(
  'github',
  {
    successRedirect: process.env.FRONTEND_URL + '/dashboard',
    failureRedirect: '/'
  }
));

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect(process.env.FRONTEND_URL + '/');
});

app.use('/', index);
app.use('/api', apiIndex);

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

  console.log('ERROR:', err)

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
