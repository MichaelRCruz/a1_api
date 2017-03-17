var Comment = require('../models/comment');
var User = require('../models/user');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show: show
};

function show(req, res, next) {
  if (req.user) {
    Comment.find({ "belongs_to": req.params.id })
    .populate('created_by')
    .exec(function(err, comments) {
      if (err) console.log(err);
      res.json(comments);
    });
  } else {
    res.send(403);
  }
};

function index(req, res, next) {
  if (req.user) {
    Comment.find({}, function(err, comments) {
      if (err) res.send(err);
      res.json(comments);
    });
  } else {
    res.send(403);
  }
};

function create(req, res, next) {
  if (req.body.belongs_to != "") {
    var newComment = {
      content: req.body.content,
      belongs_to: req.body.belongs_to,
      created_by: req.user._id,
      replied_to: null
    }
    Comment.create(newComment, function(err, comment) {
      if (err) res.send(err);
      Comment.findOne({ "_id": comment._id })
      .populate('created_by')
      .exec(function(err, comment) {
        if (err) console.log(err);
        res.json(comment);
      });
      console.log('regular comment JKJKJKJKJKJKJK', comment)
    })
  } else {
    console.log('req.body XOXOXOXOXOXOXOXOXOXOXOXOXO', req.body);
      var newComment = {
        content: req.body.content,
        belongs_to: "",
        created_by: req.user._id,
        replied_to: req.body.replied_to
      }
      console.log('newComment XOXOXOXOXOXOXOXOXOXOXOXOXO', newComment);
      Comment.create(newComment, function(err, comment) {
        if (err) res.send(err);
        Comment.findOne({ "_id": comment._id })
        .populate('replied_to')
        .exec(function(err, comment) {
          if (err) console.log(err);
          res.json(comment);
        });
        console.log('cross your fingers OPOPOPOPOPOPOPOPOPOPOP', comment)
      })
    };
};

function destroy(req, res, next) {
  var id = { "_id": req.body._id }
  if (req.body._id) {
    Comment.findOne(id, function(err, comment) {
      if (err) {
        throw err
      } else {
        comment.remove(function(err) {
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

function edit(req, res, next) {
  var id = { "_id": req.body.id }
  Listing.findOne(id, function(err, listing) {
    if (err) throw err
    else if (req.user._id.toString() == listing.createdBy) {
      Listing.findOneAndUpdate({_id: req.body.id}, req.body, function(err) {
        if (err) console.log('update failed -> ', err);
        res.send(204);
      })
    } else {
      res.send(401);
    }
  })
};
