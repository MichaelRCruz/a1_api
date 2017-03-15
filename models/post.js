var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  topic: String,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
