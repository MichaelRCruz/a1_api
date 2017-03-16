var Post = require('../models/post');
var User = require('../models/user');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show: show,
  listByTopic: listByTopic
};

function show(req, res, next) {
  if (req.user._id) {
    Post.findOne({ "_id": req.params.id })
    .populate('created_by')
    .exec(function(err, post) {
      if (err) console.log(err);
      res.json(post);
    })
  } else {
    res.send(403);
  }
};

function index(req, res, next) {
  if (req.user) {
    // Post.find({"topic": req.body.topic})
    Post.find({})
    .populate('created_by')
    .exec(function(err, posts) {
      if (err) console.log(err)
      res.json(posts)
    })
  } else {
    res.send(403);
  }
};

function listByTopic(req, res, next) {
  console.log('req.params.topic ~~~~~~~~~~~~~~~~~~~~~~~~>', req.params.topic)
  if (req.user) {
    // Post.find({"topic": req.body.topic})
    Post.find({ "topic": req.params.topic })
    .populate('created_by')
    .exec(function(err, posts) {
      if (err) console.log(err)
      res.json(posts)
      console.log('listByTopic ~~~~~~~~~~~~~~~~~~~~~~~~>', posts)
    })
  } else {
    res.send(403);
  }
};

function create(req, res, next) {
  let newPost = {
    title: req.body.title,
    content: req.body.content,
    created_by: req.user._id,
    topic: req.body.topic
  }
  Post.create(newPost, function(err, post) {
    if (err) console.log(err);
    Post.findOne({ "_id": post._id })
    .populate('created_by')
    .exec(function(err, post) {
      if (err) console.log(err);
      res.json(post);
    });
  })
};

function destroy(req, res, next) {
  var id = { "_id": req.body._id }
  if (req.body._id) {
    Post.findOne(id, function(err, post) {
      if (err) {
        throw err
      } else {
        post.remove(function(err) {
          if (err) {
            console.log('delete failed ->', err);
            res.send(204);
          } else {
            res.send(200);
          }
        })
      }
    })
  } else {
    // missing required post id
    res.send(400);
  }
};

// function edit(req, res, next) {
//   var id = { "_id": req.body.id }
//   Listing.findOne(id, function(err, listing) {
//     if (err) throw err
//     else if (req.user._id.toString() == listing.createdBy) {
//       Listing.findOneAndUpdate({_id: req.body.id}, req.body, function(err) {
//         if (err) console.log('update failed -> ', err);
//         res.send(204);
//       })
//     } else {
//       res.send(401);
//     }
//   })
// };
