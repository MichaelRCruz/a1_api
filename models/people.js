var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  employer: String,
  github: String,
  linkedin: String,
  facebook: String,
  projects: Object
});

var People = mongoose.model('People', peopleSchema);

module.exports = People;
