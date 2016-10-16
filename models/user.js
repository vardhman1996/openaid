const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  id : {type: Number, required: true},
  name: {type: String, required: false},
  username: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);