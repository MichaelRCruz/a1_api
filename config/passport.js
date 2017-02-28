var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var user = require('../models/user')
passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: 'http://localhost:3000/auth/callback'
  }, function(accessToken, refreshToken, profile, cb){
    User.findOne({ 'githubId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
      } else {
        // we have a new user via oAuth!
        var newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googledId: profile.id
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

passport.deserializeUser(function (user, done) {
  User.findById(id, function(err, user) {
    done(err, user)
  });
});
