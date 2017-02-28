var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  employer: String,
  github: String,
  linkedin: String,
  facebook: String,
  githubId: String,
  created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
