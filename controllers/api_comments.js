var Comment = require('../models/comment');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show: show
  // edit: edit
}

function show(req, res, next) {
  if (req.user._id) {
    Post.findOne({ "_id": req.params.id }, function(err, post) {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  } else {
    res.send(403);
  }
};

function index(req, res, next) {
  if (req.user) {
    Post.find({ created_by: req.user._id }, function(err, posts) {
      if (err) res.send(err);
      res.json(posts);
    });
  } else {
    res.send(403);
  }
};

function create(req, res, next) {
  var newPost = {
    title: req.body.title,
    content: req.body.content,
    created_by: req.user._id
  }
  Post.create(newPost, function(err, post) {
    if (err) res.send(err);
    res.json(post);
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
}

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
