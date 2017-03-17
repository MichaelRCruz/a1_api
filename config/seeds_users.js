var mongoose = require('./database');
var User = require('../models/user');

var users = [
  {
  "_id": "58ca1304c816b58c0c20aaee",
  "name": "Daniel Lamando",
  "github_user_name": "danopia",
  "github_profile_url": "https://github.com/danopia",
  "github_avatar_url": "https://avatars1.githubusercontent.com/u/40628?v=3",
  "github_id": "40628",
  "__v": 0,
  "created": "2017-03-16T04:22:28.578Z"
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.disconnect();
      process.exit(0);
    }
  });
});
