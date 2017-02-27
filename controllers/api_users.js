var User = require('../models/user');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  // edit: edit
}

function index(req, res, next) {
  console.log('sup, dawg')
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
  console.log(newUser);
  User.create(newUser, function(err, user) {
    if (err) res.send(err);
    res.json(user);
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
//
// function edit(req, res, next) {
//   var id = { "_id": req.body.id }
//   People.findOne(id, function(err, people) {
//     if (err) throw err
//     else if (req.user._id.toString() == people.createdBy) {
//       People.findOneAndUpdate({_id: req.body.id}, req.body, function(err) {
//         if (err) console.log('update failed -> ', err);
//         res.send(204);
//       })
//     } else {
//       res.send(401);
//     }
//   })
// };
