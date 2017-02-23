var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var Post = new Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  text: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', Post);
