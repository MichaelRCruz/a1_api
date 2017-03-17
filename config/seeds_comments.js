var mongoose = require('./database');
var Comment = require('../models/comment');

var comment = [
  
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
