var Post = require('../models/post');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  // edit: edit
}

function index(req, res, next) {
  Post.find({}, function(err, posts) {
    if (err) res.send(err);
    res.json(posts);
  });
};

function create(req, res, next) {
  var newPost = {
    title: req.body.title,
    content: req.body.content
  }
  console.log(newPost);
  Post.create(newPost, function(err, post) {
    if (err) res.send(err);
    res.json(post);
  })
};

function destroy(req, res, next) {
  var id = { "_id": req.body.id }
  console.log(req.user._id);
  User.findOne(id, function(err, user) {
    console.log(user);
    if (err) throw err
    else if (req.user._id.toString() == user.createdBy) {
      user.remove(function(err) {
        if (err) console.log('delete failed -> ', err);
        res.send(204);
      })
    } else {
      res.send(401);
    }
  })
};
