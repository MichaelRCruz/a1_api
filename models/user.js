var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  github_user_name: String,
  github_profile_url: String,
  github_avatar_url: String,
  github_id: String,
  phone: String,
  email: String,
  employer: String,
  linkedin: String,
  facebook: String,
  created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
