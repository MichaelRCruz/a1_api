var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var User = require('../models/user');
var dotenv = require('dotenv');

dotenv.load();

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: process.env.BACKEND_URL + 'oauth2callback'
}, function(accessToken, refreshToken, profile, cb){
    User.findOne({ 'github_id': profile.id.toString() }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);


      } else {
        // we have a new user via oAuth!
        var newUser = new User({
          name: profile.displayName,
          github_user_name: profile.username,
          github_profile_url: profile.profileUrl,
          github_avatar_url: profile._json.avatar_url,
          github_id: profile.id.toString()
        });
        newUser.save(function(err) {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      }
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function(err, user) {
    done(err, user)
  });
});

module.exports = passport
