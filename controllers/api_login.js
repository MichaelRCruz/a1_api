var Post = require('../models/post');


module.exports = {
  index: index
}

function index(req, res, next) {
  console.log('sup_yo');
  console.log(req.user);
  if (req.user) {
    Post.find({ created_by: req.user._id }, function(err, posts) {
      if (err) res.send(err);
      res.json(posts);
    });
  } else {
    res.send(403);
  }
};
