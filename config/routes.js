var express = require('express');
var router = express.Router();

// require controllers
var api_users = require('../controllers/api_users');
var api_posts = require('../controllers/api_posts');
var api_login = require('../controllers/api_login');

// define routes
router.route('/users')
  .get(api_users.index)
  .post(api_users.create)
  .delete(api_users.destroy)
router.route('/posts')
  .get(api_posts.index)
  .post(api_posts.create)
  .delete(api_posts.destroy)
router.route('/login')
  .get(api_login.index)

module.exports = router;
