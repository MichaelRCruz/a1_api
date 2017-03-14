var mongoose = require('./database');
var Comment = require('../models/comment');

var comment = [
  {
    _id: "58c737aa952da26fe6faddbd",
    content: "Hello, world. This comment belongs to another user.",
    created_by: "58bb7993e2d8180e120478de",
    belongs_to: "58c59c16cccb7e13570c9b68",
    __v: 0,
    created: "2017-03-14T00:22:02.811Z"
  }
];

Comment.remove({}, function(err) {
  if (err) console.log(err);
  Comment.create(comment, function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + comments.length  + " comments.");
      mongoose.disconnect();
      process.exit(0);
    }
  });
});
