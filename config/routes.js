var express = require('express');
var router = express.Router();

// require controllers
var api_peoplesController = require('../controllers/api_peoples');

router.route('/api/peoples')
  .get(api_peoples.index)
  .post(api_peoples.create)
  .delete(api_peoples.destroy)
  // .put(api_peoplesController.edit)
/* GET root path. */
// router.route('/')
//   .get(welcomeController.welcome)



module.exports = router;
