var mongoose = require('./database');
var Post = require('../models/post');

var posts = [
  {
  "_id": "58ca1586c816b58c0c20aaf0",
  "title": "Man Bun Trust Fund iPhone",
  "content": "3 wolf moon kogi affogato, trust fund seitan raclette stumptown vaporware try-hard venmo distillery beard locavore hexagon banjo. Try-hard kitsch jianbing, roof party hammock af church-key tumeric raclette. Gentrify tilde occupy narwhal squid. Vaporware kickstarter vape tumblr street art +1. Small batch knausgaard pork belly biodiesel, chia street art deep v wolf seitan mixtape. Distillery plaid health goth, glossier bushwick banh mi man braid tilde pour-over flannel sustainable banjo. Chicharrones salvia activated charcoal, chia scenester sartorial seitan blue bottle copper mug humblebrag venmo viral.",
  "created_by": {
  "_id": "58ca1304c816b58c0c20aaee",
  "name": "Daniel Lamando",
  "github_user_name": "danopia",
  "github_profile_url": "https://github.com/danopia",
  "github_avatar_url": "https://avatars1.githubusercontent.com/u/40628?v=3",
  "github_id": "40628",
  "__v": 0,
  "created": "2017-03-16T04:22:28.578Z"
  },
  "topic": "general",
  "__v": 0,
  "created": "2017-03-16T04:33:10.233Z"
  }
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
