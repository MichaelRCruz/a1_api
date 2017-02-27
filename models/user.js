var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  employer: String,
  github: String,
  linkedin: String,
  facebook: String,
  projects: Object
});

var User = mongoose.model('User', userSchema);

module.exports = User;
