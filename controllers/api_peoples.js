var People = require('../models/people');

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  // edit: edit
}

function index(req, res, next) {
  console.log('sup, dawg')
  People.find({}, function(err, peoples) {
    if (err) res.send(err);
    res.json(peoples);
  });
};

function create(req, res, next) {
  var newPeople = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    employer: req.body.employer,
    github: req.body.github,
    linkedin: req.body.linkedin,
    facebook: req.body.facebook,
    projects: req.body.projects
  }
  console.log(newPeople);
  People.create(newPeople, function(err, people) {
    if (err) res.send(err);
    res.json(people);
  })
};

function destroy(req, res, next) {
  var id = { "_id": req.body.id }
  console.log(req.user._id);
  People.findOne(id, function(err, people) {
    console.log(people);
    if (err) throw err
    else if (req.user._id.toString() == people.createdBy) {
      people.remove(function(err) {
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
