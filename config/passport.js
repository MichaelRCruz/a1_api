var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var User = require('../models/user')

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: 'http://localhost:3000/oauth2callback'
  }, function(accessToken, refreshToken, profile, cb){
    console.log( profile );
    User.findOne({ 'githubId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
      } else {
        // we have a new user via oAuth!
        var newUser = new User({
          name: profile.name,
          avatarUrl: profile.avatar_url,
          htmlUrl: profile.htmlUrl,
          githubId: profile.id.toString()
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
