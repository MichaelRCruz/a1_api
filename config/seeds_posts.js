var mongoose = require('./database');
var Post = require('../models/post');

var posts = [
  { // 0
       title: "Hello, world.",
       content: "check it out"
  },
  { // 0
      title: "Hello, universe.",
      content: "check it out again"
  },
];

Post.remove({}, function(err) {
  if (err) console.log(err);
  Post.create(posts, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + posts.length  + " posts.");
      mongoose.disconnect();
      process.exit(0);
    }
  });
});
