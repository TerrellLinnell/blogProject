var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Location = new Schema ({
  city: String,
  state: String,
  zip: String
});

module.exports = mongoose.model('Location', Location );
