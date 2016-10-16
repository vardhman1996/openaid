const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);