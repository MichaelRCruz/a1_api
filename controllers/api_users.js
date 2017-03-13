var User = require('../models/user');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show: show,
  profileShow: profileShow
  // edit: edit
}

function profileShow(req, res, next) {
  console.log('ASDFASDASDF')
  if (req.user) {
    console.log('ASDFASDASDF', req.user._id)
    User.findOne({ "_id": req.user._id }, function(err, user) {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
  } else {
    res.send(403);
  }
};

function show(req, res, next) {
  if (req.user._id) {
    User.findOne({ "_id": req.params.id }, function(err, user) {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
  } else {
    res.send(403);
  }
};

function index(req, res, next) {
  User.find({}, function(err, users) {
    if (err) res.send(err);
    res.json(users);
  });
};

function create(req, res, next) {
  var newUser = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    employer: req.body.employer,
    github: req.body.github,
    linkedin: req.body.linkedin,
    facebook: req.body.facebook,
    projects: req.body.projects
  }
  User.create(newUser, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  })
};

function destroy(req, res, next) {
  var id = { "_id": req.body.id }
  User.findOne(id, function(err, user) {
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
