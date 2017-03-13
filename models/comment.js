var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  content: String,
  belongs_to: String,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created: { type: Date, default: Date.now }
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
