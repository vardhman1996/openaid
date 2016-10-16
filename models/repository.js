const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const RepositorySchema = new Schema({
  name: {type: String, required: true},
  description : {type: String, required: false},
  html_url: {type: String, required: true},
  userid: {type: Number, required: true},
  repoid: {type: Number, required: true}
});

module.exports = mongoose.model('Repository', RepositorySchema);
