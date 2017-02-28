var express = require('express');
var router = express.Router();
var passport = require('passprt')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('auth/github', passport.authenticate(
  'github',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'github',
  {
    sucessRedirect: '/',
    failureRedirect: '/'
  }
));

module.exports = router;
