var express = require('express');
var router = express.Router();

// require controllers
var api_users = require('../controllers/api_users');
var api_posts = require('../controllers/api_posts');
// var api_peoples = require('../controllers/api_peoples');

// router.route('/api/peoples')
//   .get(api_peoples.index)
//   .post(api_peoples.create)
//   .delete(api_peoples.destroy)
  // .put(api_peoplesController.edit)
/* GET root path. */
// router.route('/')
//   .get(welcomeController.welcome)

router.route('/users')
  .get(api_users.index)
  .post(api_users.create)
  .delete(api_users.destroy)
router.route('/posts')
  .get(api_posts.index)
  .post(api_posts.create)
  .delete(api_posts.destroy)


module.exports = router;
