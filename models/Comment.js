var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Comment = new Schema ({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  text: String,
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', Comment);
