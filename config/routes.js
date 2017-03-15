var express = require('express');
var router = express.Router();

// require controllers
var api_users = require('../controllers/api_users');
var api_posts = require('../controllers/api_posts');
var api_session = require('../controllers/api_session');
var api_comments = require('../controllers/api_comments');

// define routes
router.route('/posts')
  .get(api_posts.index)
  .post(api_posts.create)
  .delete(api_posts.destroy)
router.route('/posts/:id')
  .get(api_posts.show)

router.route('/comments/:id')
  .get(api_comments.show)
router.route('/comments')
  .get(api_comments.index)
  .post(api_comments.create)
  .delete(api_comments.destroy)

router.route('/session')
  .get(api_session.session)

router.route('/users')
  .get(api_users.index)
  .post(api_users.create)
  .delete(api_users.destroy)
router.route('/users/profileShow')
  .get(api_users.profileShow)
router.route('/users/:id')
  .get(api_users.show)

module.exports = router;
